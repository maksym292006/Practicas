import { getDatabase, initializeDatabase } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

initializeDatabase();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const db = getDatabase();
    const { id } = await params;
    
    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(id);
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }
    
    const ingredients = db.prepare('SELECT * FROM ingredients WHERE product_id = ?').all(id);
    
    return NextResponse.json({ ...product, ingredients });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const db = getDatabase();
    const { id } = await params;
    const data = await request.json();
    
    const { name, description, price, category, image_url, availability } = data;
    
    const stmt = db.prepare(`
      UPDATE products 
      SET name = ?, description = ?, price = ?, category = ?, image_url = ?, availability = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `);
    
    stmt.run(name, description, price, category, image_url, availability, id);
    
    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(id);
    
    return NextResponse.json(product);
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const db = getDatabase();
    const { id } = await params;
    
    db.prepare('DELETE FROM products WHERE id = ?').run(id);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    );
  }
}
