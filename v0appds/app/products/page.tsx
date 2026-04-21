'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navbar, Button, Footer } from '@/components/design-system';
import { ChevronRight, Cake, Filter, X } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  category: string;
  image_url?: string;
  availability: boolean;
}

const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'bread', label: 'Bread' },
  { id: 'pastries', label: 'Pastries' },
  { id: 'cakes', label: 'Cakes' },
  { id: 'muffins', label: 'Muffins' },
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const navLinks = [
    { label: 'Products', href: '/products' },
    { label: 'Custom Orders', href: '/custom-orders' },
    { label: 'Location', href: '/location' },
  ];

  useEffect(() => {
    async function fetchProducts() {
      try {
        const category = selectedCategory === 'all' ? 'all' : selectedCategory;
        const response = await fetch(`/api/products?category=${category}`);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar 
        logo="Sweet Dreams Bakery" 
        links={navLinks}
        ctaLabel="Cart"
        ctaHref="/cart"
      />

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
              Our Bakery
            </h1>
            <p className="text-lg text-muted-foreground text-balance">
              Fresh-baked goods, made daily with premium ingredients
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters */}
            <div className="lg:w-48">
              {/* Mobile filter toggle */}
              <div className="lg:hidden mb-6">
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                >
                  <Filter className="w-5 h-5" />
                  <span className="font-semibold">Filters</span>
                  {showMobileFilters && <X className="w-5 h-5" />}
                </button>
              </div>

              {/* Category filters */}
              <div
                className={`space-y-2 ${
                  showMobileFilters ? 'block' : 'hidden lg:block'
                }`}
              >
                <h3 className="font-bold text-foreground mb-4">Categories</h3>
                {CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setShowMobileFilters(false);
                    }}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white font-semibold'
                        : 'text-foreground hover:bg-secondary/50'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-grow">
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-card rounded-lg h-80 animate-pulse" />
                  ))}
                </div>
              ) : filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map((product) => (
                    <Link key={product.id} href={`/products/${product.id}`}>
                      <div className="group cursor-pointer h-full flex flex-col">
                        <div className="bg-gradient-to-b from-secondary to-secondary/50 rounded-lg h-64 mb-4 flex items-center justify-center overflow-hidden flex-shrink-0">
                          {product.image_url ? (
                            <img
                              src={product.image_url}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="text-center text-muted-foreground">
                              <Cake className="w-16 h-16 mx-auto mb-2 opacity-50" />
                              <p className="text-sm">Image Coming Soon</p>
                            </div>
                          )}
                        </div>
                        <div className="space-y-2 flex-grow flex flex-col justify-between">
                          <div>
                            <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded mb-2">
                              {product.category}
                            </span>
                            <h3 className="font-bold text-lg text-foreground">
                              {product.name}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {product.description}
                            </p>
                          </div>
                          <div className="flex justify-between items-center pt-2">
                            <span className="text-2xl font-bold text-primary">
                              ${product.price.toFixed(2)}
                            </span>
                            <ChevronRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Cake className="w-16 h-16 mx-auto mb-4 opacity-30" />
                  <p className="text-lg text-muted-foreground mb-6">
                    No products found in this category
                  </p>
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="text-accent hover:text-accent/80 font-semibold"
                  >
                    View all products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

       <Footer
  bakeryName="Sweet Dreams Bakery"
  tagline="Handcrafted with love, baked fresh daily"
  columns={[
    {
      title: 'Shop',
      links: [
        { label: 'Products', href: '/products' },
        { label: 'Custom Orders', href: '/custom-orders' },
      ],
    },
    {
      title: 'Visit Us',
      links: [
        { label: 'Location', href: '/location' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ]}
/>
    </div>
  );
}
