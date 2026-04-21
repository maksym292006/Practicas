'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar, Button, Footer } from '@/components/design-system';
import { useCart } from '@/lib/cart-context';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const navLinks = [
    { label: 'Products', href: '/products' },
    { label: 'Custom Orders', href: '/custom-orders' },
    { label: 'Location', href: '/location' },
  ];
  const [formData, setFormData] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    pickup_date: '',
    pickup_time: '',
    special_instructions: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate required fields
      if (!formData.customer_name || !formData.customer_email || !formData.pickup_date) {
        toast.error('Please fill in all required fields');
        setIsLoading(false);
        return;
      }

      if (cart.items.length === 0) {
        toast.error('Your cart is empty');
        setIsLoading(false);
        return;
      }

      // Create order
      const orderData = {
        ...formData,
        items: cart.items.map((item) => ({
          product_id: item.product_id,
          quantity: item.quantity,
          price: item.price,
        })),
      };

      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const order = await response.json();

      // Clear cart and redirect
      clearCart();
      toast.success('Order placed successfully!');
      router.push(`/order-confirmation/${order.id}`);
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('Failed to place order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (cart.items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar 
          logo="Sweet Dreams Bakery" 
          links={navLinks}
          ctaLabel="Cart"
          ctaHref="/cart"
        />
        <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h1 className="text-3xl font-bold text-foreground mb-4">Your cart is empty</h1>
            <Link href="/products">
              <Button variant="primary">Continue Shopping</Button>
            </Link>
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

  const tax = cart.total * 0.1;
  const total = cart.total + tax;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar 
        logo="Sweet Dreams Bakery" 
        links={navLinks}
        ctaLabel="Cart"
        ctaHref="/cart"
      />

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/cart"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Cart</span>
            </Link>
            <h1 className="text-4xl font-bold text-foreground">Checkout</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="bg-card rounded-lg border border-border p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="customer_name" className="block text-sm font-semibold text-foreground mb-2">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="customer_name"
                        name="customer_name"
                        type="text"
                        required
                        value={formData.customer_name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="customer_email" className="block text-sm font-semibold text-foreground mb-2">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="customer_email"
                        name="customer_email"
                        type="email"
                        required
                        value={formData.customer_email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="customer_phone" className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        id="customer_phone"
                        name="customer_phone"
                        type="tel"
                        value={formData.customer_phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Pickup Information */}
                <div className="bg-card rounded-lg border border-border p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Pickup Details
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="pickup_date" className="block text-sm font-semibold text-foreground mb-2">
                        Preferred Pickup Date <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="pickup_date"
                        name="pickup_date"
                        type="date"
                        required
                        value={formData.pickup_date}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="pickup_time" className="block text-sm font-semibold text-foreground mb-2">
                        Preferred Pickup Time
                      </label>
                      <input
                        id="pickup_time"
                        name="pickup_time"
                        type="time"
                        value={formData.pickup_time}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Special Instructions */}
                <div className="bg-card rounded-lg border border-border p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Special Instructions
                  </h2>

                  <textarea
                    name="special_instructions"
                    value={formData.special_instructions}
                    onChange={handleChange}
                    placeholder="Any special requests or dietary requirements..."
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
                  {isLoading ? 'Processing Order...' : 'Place Order'}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg border border-border p-6 sticky top-4">
                <h2 className="text-2xl font-bold text-foreground mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6 pb-6 border-b border-border max-h-64 overflow-y-auto">
                  {cart.items.map((item) => (
                    <div key={item.product_id} className="flex justify-between text-sm">
                      <span className="text-foreground">
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-semibold text-foreground">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-foreground">
                    <span>Subtotal</span>
                    <span>${cart.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-foreground">
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between border-t border-border pt-4">
                  <span className="font-bold text-lg text-foreground">Total</span>
                  <span className="font-bold text-2xl text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
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
