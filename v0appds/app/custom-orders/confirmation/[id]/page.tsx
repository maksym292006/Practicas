'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Navbar, Button, Footer } from '@/components/design-system';
import { CheckCircle, Heart, Home } from 'lucide-react';

export default function CustomOrderConfirmationPage() {
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
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Custom Order Request Received!
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Thank you for choosing Sweet Dreams Bakery for your special creation.
            </p>
            <p className="text-lg text-primary font-semibold">
              Order ID: <span className="font-mono">CUST-{orderId}</span>
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-card rounded-lg border border-border p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">What Happens Next?</h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Review Your Request</h3>
                  <p className="text-muted-foreground">
                    Our bakers will review your custom order request within 24 hours
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
                  <h3 className="font-bold text-foreground mb-1">Confirmation & Consultation</h3>
                  <p className="text-muted-foreground">
                    We'll contact you to confirm details, pricing, and any adjustments
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
                  <h3 className="font-bold text-foreground mb-1">Craft & Deliver</h3>
                  <p className="text-muted-foreground">
                    Our expert bakers will craft your custom creation with care
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-secondary/20 rounded-lg border border-border p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent" />
                Contact Information
              </h3>
              <p className="text-foreground mb-4">
                We'll be in touch soon via email or phone to discuss your custom creation:
              </p>
              <p className="text-muted-foreground">
                Email:{' '}
                <a href="mailto:custom@sweetdreamsbakery.com" className="text-accent hover:text-accent/80">
                  custom@sweetdreamsbakery.com
                </a>
                <br />
                Phone:{' '}
                <a href="tel:+15035550123" className="text-accent hover:text-accent/80">
                  (503) 555-0123
                </a>
              </p>
            </div>

            <div className="bg-accent/10 rounded-lg border border-border p-6">
              <h3 className="font-bold text-foreground mb-4">Pricing</h3>
              <p className="text-foreground mb-2">
                Our bakers will provide a quote based on:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Complexity of design</li>
                <li>• Specialty ingredients</li>
                <li>• Dietary requirements</li>
                <li>• Delivery date</li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-card rounded-lg border border-border p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  When should I expect to hear from you?
                </h3>
                <p className="text-muted-foreground">
                  We typically respond to custom order requests within 24 hours during business hours.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Can you accommodate rush orders?
                </h3>
                <p className="text-muted-foreground">
                  We may be able to accommodate rush orders depending on availability and complexity. Contact us for details.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  What about allergies and dietary restrictions?
                </h3>
                <p className="text-muted-foreground">
                  We take allergies and dietary needs seriously. Please provide complete information, and we'll accommodate where possible.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Do you require a deposit?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we typically require a 50% deposit to confirm your custom order, with the balance due at pickup.
                </p>
              </div>
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
