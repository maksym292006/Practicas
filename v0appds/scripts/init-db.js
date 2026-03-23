const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

const dbPath = path.join(process.cwd(), 'data', 'bakery.db');

// Ensure data directory exists
const dataDir = path.dirname(dbPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL,
    category TEXT NOT NULL,
    image_url TEXT,
    availability BOOLEAN DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS ingredients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    allergen_category TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_number TEXT UNIQUE NOT NULL,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT,
    total_amount REAL NOT NULL,
    status TEXT DEFAULT 'pending',
    pickup_date DATE,
    pickup_time TIME,
    special_instructions TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    price REAL NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id)
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS custom_orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_number TEXT UNIQUE NOT NULL,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT,
    description TEXT NOT NULL,
    design_details TEXT,
    estimated_price REAL,
    status TEXT DEFAULT 'pending',
    delivery_date DATE,
    delivery_time TIME,
    dietary_requirements TEXT,
    allergen_notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS schedule (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    day_of_week INTEGER NOT NULL,
    opening_time TIME NOT NULL,
    closing_time TIME NOT NULL,
    is_closed BOOLEAN DEFAULT 0,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS location (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    zip_code TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    latitude REAL,
    longitude REAL,
    is_primary BOOLEAN DEFAULT 1,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS inventory (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    quantity_on_hand INTEGER DEFAULT 0,
    reorder_level INTEGER DEFAULT 5,
    last_updated DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
  );
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS promotions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    discount_percentage REAL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    is_active BOOLEAN DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Seed sample data
const stmt = db.prepare(`INSERT INTO products (name, description, price, category, availability) VALUES (?, ?, ?, ?, ?)`);
const sampleProducts = [
  ['Chocolate Croissant', 'Flaky croissant with rich chocolate filling', 4.50, 'pastries', 1],
  ['Sourdough Bread', 'Traditional sourdough with tangy flavor', 6.99, 'bread', 1],
  ['Blueberry Muffin', 'Moist muffin loaded with fresh blueberries', 3.99, 'muffins', 1],
  ['Carrot Cake', 'Homemade carrot cake with cream cheese frosting', 24.99, 'cakes', 1],
  ['Almond Biscotti', 'Crunchy Italian biscotti with almonds', 2.99, 'pastries', 1],
];

sampleProducts.forEach(product => {
  stmt.run(...product);
});

// Insert default schedule (Monday-Friday 8am-6pm, Saturday 9am-4pm, Sunday closed)
const scheduleStmt = db.prepare(`INSERT INTO schedule (day_of_week, opening_time, closing_time, is_closed) VALUES (?, ?, ?, ?)`);
const schedule = [
  [0, '08:00', '18:00', 0], // Monday
  [1, '08:00', '18:00', 0], // Tuesday
  [2, '08:00', '18:00', 0], // Wednesday
  [3, '08:00', '18:00', 0], // Thursday
  [4, '08:00', '18:00', 0], // Friday
  [5, '09:00', '16:00', 0], // Saturday
  [6, '00:00', '00:00', 1],         // Sunday closed
];

schedule.forEach(day => {
  scheduleStmt.run(...day);
});

// Insert default location
db.prepare(`
  INSERT INTO location (name, address, city, state, zip_code, phone, email, latitude, longitude)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`).run([
  'Sweet Dreams Bakery',
  '123 Main Street',
  'Portland',
  'OR',
  '97201',
  '(503) 555-0123',
  'info@sweetdreamsbakery.com',
  45.5152,
  -122.6784
]);

db.close();
console.log('Database initialized successfully at', dbPath);
