import { getDatabase, initializeDatabase } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

initializeDatabase();

function generateOrderNumber() {
  const prefix = 'ORD';
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `${prefix}-${timestamp}-${random}`;
}

export async function GET(request: NextRequest) {
  try {
    const db = getDatabase();
    const status = request.nextUrl.searchParams.get('status');
    
    let query = 'SELECT * FROM orders';
    const params: any[] = [];
    
    if (status) {
      query += ' WHERE status = ?';
      params.push(status);
    }
    
    query += ' ORDER BY created_at DESC';
    
    const orders = db.prepare(query).all(...params);
    
    // Get items for each order
    const ordersWithItems = orders.map((order: any) => {
      const items = db.prepare('SELECT * FROM order_items WHERE order_id = ?').all(order.id);
      return { ...order, items };
    });
    
    return NextResponse.json(ordersWithItems);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
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
      items,
      pickup_date,
      pickup_time,
      special_instructions,
    } = data;
    
    if (!customer_name || !customer_email || !items || items.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Calculate total
    const total = items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);
    const order_number = generateOrderNumber();
    
    const orderStmt = db.prepare(`
      INSERT INTO orders (order_number, customer_name, customer_email, customer_phone, total_amount, pickup_date, pickup_time, special_instructions)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    
    const result = orderStmt.run(
      order_number,
      customer_name,
      customer_email,
      customer_phone || null,
      total,
      pickup_date || null,
      pickup_time || null,
      special_instructions || null
    );
    
    const orderId = result.lastInsertRowid;
    
    // Insert order items
    const itemStmt = db.prepare(`
      INSERT INTO order_items (order_id, product_id, quantity, price)
      VALUES (?, ?, ?, ?)
    `);
    
    items.forEach((item: any) => {
      itemStmt.run(orderId, item.product_id, item.quantity, item.price);
    });
    
    return NextResponse.json(
      { id: orderId, order_number, ...data },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
