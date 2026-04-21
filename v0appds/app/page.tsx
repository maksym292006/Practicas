'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navbar, Hero, Button, ServiceCard, Footer } from '@/components/design-system';
import { ChevronRight, Cake, Croissant, Leaf } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  category: string;
  image_url?: string;
  availability: boolean;
}

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        const response = await fetch('/api/products?category=all');
        const products = await response.json();
        // Get first 3 products as featured
        setFeaturedProducts(products.slice(0, 3));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFeaturedProducts();
  }, []);

  const services = [
    {
      icon: <Cake className="w-16 h-16" />,
      title: 'Custom Cakes',
      description: 'Create bespoke cakes for any occasion with our expert bakers',
    },
    {
      icon: <Croissant className="w-16 h-16" />,
      title: 'Fresh Pastries',
      description: 'Handcrafted pastries baked fresh daily using premium ingredients',
    },
    {
      icon: <Leaf className="w-16 h-16" />,
      title: 'Dietary Options',
      description: 'Gluten-free, vegan, and allergen-friendly selections available',
    },
  ];

  const navLinks = [
    { label: 'Products', href: '/products' },
    { label: 'Custom Orders', href: '/custom-orders' },
    { label: 'Location', href: '/location' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar
        logo="Sweet Dreams Bakery"
        links={navLinks}
        ctaLabel="Cart"
        ctaHref="/cart"
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          title="Welcome to Sweet Dreams Bakery"
          subtitle="Handcrafted baked goods made with love and the finest ingredients"
        >
          <Link href="/products">
            <Button variant="primary" size="lg">
              Shop Now
            </Button>
          </Link>
        </Hero>

        {/* Featured Products Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
                Today's Favorites
              </h2>
              <p className="text-lg text-muted-foreground text-balance">
                Discover our most popular items, freshly baked today
              </p>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-card rounded-lg h-80 animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {featuredProducts.map((product) => (
                  <Link key={product.id} href={`/products/${product.id}`}>
                    <div className="group cursor-pointer">
                      <div className="bg-gradient-to-b from-secondary to-secondary/50 rounded-lg h-64 mb-4 flex items-center justify-center overflow-hidden">
                        {product.image_url ? (
                          <img
                            src={product.image_url}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="text-center text-muted-foreground">
                            <Cake className="w-16 h-16 mx-auto mb-2 opacity-50" />
                            <p>Image Coming Soon</p>
                          </div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg text-foreground">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {product.description}
                        </p>
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
            )}

            <div className="text-center">
              <Link href="/products">
                <Button variant="primary" size="lg">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground text-balance">
                From daily treats to custom creations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/90">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 text-balance">
              Ready to Order?
            </h2>
            <p className="text-xl text-white/90 mb-8 text-balance">
              Browse our full selection of fresh-baked goods or request a custom order
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button variant="secondary" size="lg">
                  Shop Products
                </Button>
              </Link>
              <Link href="/custom-orders">
                <Button variant="secondary" size="lg">
                  Custom Orders
                </Button>
              </Link>
            </div>
          </div>
        </section>
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
