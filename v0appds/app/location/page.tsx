'use client';

import { Navbar, Button, Footer } from '@/components/design-system';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function LocationPage() {
  const navLinks = [
    { label: 'Products', href: '/products' },
    { label: 'Custom Orders', href: '/custom-orders' },
    { label: 'Location', href: '/location' },
  ];

  const hours = [
    { day: 'Monday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
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
        {/* Header */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Visit Us Today
            </h1>
            <p className="text-xl text-white/90">
              Fresh-baked goods waiting for you at our location
            </p>
          </div>
        </section>

        {/* Location Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Location Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Sweet Dreams Bakery
                </h2>

                {/* Address */}
                <div className="flex gap-4 mb-8">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      123 Main Street
                      <br />
                      Portland, OR 97201
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 mb-8">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <a
                      href="tel:+15035550123"
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      (503) 555-0123
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 mb-8">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <a
                      href="mailto:info@sweetdreamsbakery.com"
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      info@sweetdreamsbakery.com
                    </a>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  <Link href="/products">
                    <Button variant="primary" size="lg" className="w-full">
                      Shop Online
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card rounded-lg border border-border p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">Hours of Operation</h3>
              </div>

              <div className="space-y-3">
                {hours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-border last:border-b-0">
                    <span className="font-medium text-foreground">{item.day}</span>
                    <span
                      className={`text-sm font-semibold ${
                        item.hours === 'Closed'
                          ? 'text-destructive'
                          : 'text-accent'
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-secondary/50 rounded-lg text-sm text-muted-foreground">
                <p>
                  We're committed to providing the freshest baked goods. Please note that some items may sell out,
                  especially on weekends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Find Us On The Map
            </h2>

            <div className="bg-card rounded-lg border border-border overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.3688223456617!2d-122.67841!3d45.5152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a725be9e0001%3A0x0!2s123%20Main%20Street%2C%20Portland%2C%20OR%2097201!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sweet Dreams Bakery Location"
              />
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Have a question about our products or want to place a special order? We'd love to hear from you!
            </p>

            <div className="bg-card rounded-lg border border-border p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us what's on your mind..."
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <Button variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
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
