import { getDatabase, initializeDatabase } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

// Initialize DB on first request
initializeDatabase();

export async function GET(request: NextRequest) {
  try {
    const db = getDatabase();
    const category = request.nextUrl.searchParams.get('category');
    
    let query = 'SELECT * FROM products WHERE availability = 1';
    const params: any[] = [];
    
    if (category && category !== 'all') {
      query += ' AND category = ?';
      params.push(category);
    }
    
    query += ' ORDER BY created_at DESC';
    
    const stmt = db.prepare(query);
    const products = stmt.all(...params);
    
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const db = getDatabase();
    const data = await request.json();
    
    const { name, description, price, category, image_url } = data;
    
    if (!name || !price || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const stmt = db.prepare(`
      INSERT INTO products (name, description, price, category, image_url)
      VALUES (?, ?, ?, ?, ?)
    `);
    
    const result = stmt.run(name, description || null, price, category, image_url || null);
    
    return NextResponse.json(
      { id: result.lastInsertRowid, ...data },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
