'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Navbar, Button, Footer } from '@/components/design-system';
import { CheckCircle, Package, Home } from 'lucide-react';

export default function OrderConfirmationPage() {
  const params = useParams();
  const orderId = params.id;

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

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-24 h-24 text-accent" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Order Confirmed!</h1>
            <p className="text-xl text-muted-foreground mb-2">
              Thank you for your order. We're preparing your delicious treats.
            </p>
            <p className="text-lg text-primary font-semibold">
              Order ID: <span className="font-mono">ORD-{orderId}</span>
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-card rounded-lg border border-border p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">What's Next?</h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Order Confirmation</h3>
                  <p className="text-muted-foreground">
                    Check your email for order confirmation and details
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Baking Your Order</h3>
                  <p className="text-muted-foreground">
                    Our bakers will carefully prepare your items using the finest ingredients
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Ready for Pickup</h3>
                  <p className="text-muted-foreground">
                    Your order will be ready at your preferred pickup time
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Information Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-secondary/20 rounded-lg border border-border p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-accent" />
                Pickup Location
              </h3>
              <p className="text-foreground">
                Sweet Dreams Bakery
                <br />
                123 Main Street
                <br />
                Portland, OR 97201
                <br />
                <br />
                <span className="text-muted-foreground text-sm">(503) 555-0123</span>
              </p>
            </div>

            <div className="bg-accent/10 rounded-lg border border-border p-6">
              <h3 className="font-bold text-foreground mb-4">Hours</h3>
              <p className="text-foreground">
                Monday - Friday: 8:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button variant="secondary" size="lg">
                Continue Shopping
              </Button>
            </Link>
            <Link href="/">
              <Button variant="primary" size="lg">
                <Home className="w-5 h-5 mr-2" />
                Return Home
              </Button>
            </Link>
          </div>

          {/* Help Section */}
          <div className="mt-16 p-8 bg-secondary/10 rounded-lg border border-border text-center">
            <h3 className="font-bold text-foreground mb-2">Questions?</h3>
            <p className="text-muted-foreground mb-4">
              Contact us at{' '}
              <a href="mailto:info@sweetdreamsbakery.com" className="text-accent hover:text-accent/80">
                info@sweetdreamsbakery.com
              </a>{' '}
              or call{' '}
              <a href="tel:+15035550123" className="text-accent hover:text-accent/80">
                (503) 555-0123
              </a>
            </p>
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
