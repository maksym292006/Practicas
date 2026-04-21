import { getDatabase, initializeDatabase } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

initializeDatabase();

function generateOrderNumber() {
  const prefix = 'CUST';
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `${prefix}-${timestamp}-${random}`;
}

export async function GET(request: NextRequest) {
  try {
    const db = getDatabase();
    const status = request.nextUrl.searchParams.get('status');
    
    let query = 'SELECT * FROM custom_orders';
    const params: any[] = [];
    
    if (status) {
      query += ' WHERE status = ?';
      params.push(status);
    }
    
    query += ' ORDER BY created_at DESC';
    
    const orders = db.prepare(query).all(...params);
    
    return NextResponse.json(orders);
  } catch (error) {
    console.error('Error fetching custom orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch custom orders' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const db = getDatabase();
    const data = await request.json();
    
    const {
      customer_name,
      customer_email,
      customer_phone,
      description,
      design_details,
      estimated_price,
      delivery_date,
      delivery_time,
      dietary_requirements,
      allergen_notes,
    } = data;
    
    if (!customer_name || !customer_email || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const order_number = generateOrderNumber();
    
    const stmt = db.prepare(`
      INSERT INTO custom_orders (
        order_number,
        customer_name,
        customer_email,
        customer_phone,
        description,
        design_details,
        estimated_price,
        delivery_date,
        delivery_time,
        dietary_requirements,
        allergen_notes
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    
    const result = stmt.run(
      order_number,
      customer_name,
      customer_email,
      customer_phone || null,
      description,
      design_details || null,
      estimated_price ? parseFloat(estimated_price) : null,
      delivery_date || null,
      delivery_time || null,
      dietary_requirements || null,
      allergen_notes || null
    );
    
    return NextResponse.json(
      { id: result.lastInsertRowid, order_number, ...data },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating custom order:', error);
    return NextResponse.json(
      { error: 'Failed to create custom order' },
      { status: 500 }
    );
  }
}
