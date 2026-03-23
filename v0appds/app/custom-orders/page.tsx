'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar, Button, Footer } from '@/components/design-system';
import { ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

const ALLERGENS = [
  'Nuts',
  'Dairy',
  'Gluten',
  'Eggs',
  'Soy',
  'Sesame',
  'Shellfish',
  'Tree Nuts',
];

export default function CustomOrdersPage() {
  const router = useRouter();
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
    description: '',
    design_details: '',
    estimated_price: '',
    delivery_date: '',
    delivery_time: '',
    dietary_requirements: '',
    allergen_notes: '',
  });

  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAllergenChange = (allergen: string) => {
    setSelectedAllergens((prev) =>
      prev.includes(allergen)
        ? prev.filter((a) => a !== allergen)
        : [...prev, allergen]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!formData.customer_name || !formData.customer_email || !formData.description) {
        toast.error('Please fill in all required fields');
        setIsLoading(false);
        return;
      }

      const allergenNotes = selectedAllergens.length > 0
        ? `Allergen warnings: ${selectedAllergens.join(', ')}`
        : '';

      const orderData = {
        ...formData,
        allergen_notes: allergenNotes,
      };

      const response = await fetch('/api/custom-orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit custom order');
      }

      const order = await response.json();
      toast.success('Custom order submitted successfully!');
      router.push(`/custom-orders/confirmation/${order.id}`);
    } catch (error) {
      console.error('Error submitting custom order:', error);
      toast.error('Failed to submit custom order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

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
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back Home</span>
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Custom Order Request
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us about your dream baked creation. We'll work with you to bring it to life.
            </p>
          </div>

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

            {/* Order Details */}
            <div className="bg-card rounded-lg border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Order Details
              </h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-foreground mb-2">
                    Order Description <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe what you'd like us to create... (e.g., a three-tier wedding cake, specialty pastries, themed cupcakes, etc.)"
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="design_details" className="block text-sm font-semibold text-foreground mb-2">
                    Design Details
                  </label>
                  <textarea
                    id="design_details"
                    name="design_details"
                    value={formData.design_details}
                    onChange={handleChange}
                    placeholder="Any specific design elements, colors, flavors, or decoration ideas..."
                    rows={3}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            {/* Dietary & Allergen Information */}
            <div className="bg-card rounded-lg border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Dietary & Allergen Information
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-4">
                    Dietary Requirements
                  </label>
                  <div className="space-y-2">
                    {['Vegan', 'Gluten-Free', 'Dairy-Free', 'Nut-Free'].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          value={option}
                          checked={formData.dietary_requirements.includes(option)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData((prev) => ({
                                ...prev,
                                dietary_requirements:
                                  prev.dietary_requirements + (prev.dietary_requirements ? ', ' : '') + option,
                              }));
                            } else {
                              setFormData((prev) => ({
                                ...prev,
                                dietary_requirements: prev.dietary_requirements
                                  .split(', ')
                                  .filter((item) => item !== option)
                                  .join(', '),
                              }));
                            }
                          }}
                          className="w-4 h-4 rounded border-border focus:ring-2 focus:ring-primary cursor-pointer"
                        />
                        <span className="text-foreground">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-4">
                    Known Allergens to Include/Avoid
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {ALLERGENS.map((allergen) => (
                      <button
                        key={allergen}
                        type="button"
                        onClick={() => handleAllergenChange(allergen)}
                        className={`px-4 py-2 rounded-lg border transition-colors ${
                          selectedAllergens.includes(allergen)
                            ? 'bg-destructive text-white border-destructive'
                            : 'bg-secondary/50 text-foreground border-border hover:border-primary'
                        }`}
                      >
                        {allergen}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Information */}
            <div className="bg-card rounded-lg border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Delivery Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="delivery_date" className="block text-sm font-semibold text-foreground mb-2">
                    Preferred Delivery Date
                  </label>
                  <input
                    id="delivery_date"
                    name="delivery_date"
                    type="date"
                    value={formData.delivery_date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="delivery_time" className="block text-sm font-semibold text-foreground mb-2">
                    Preferred Delivery Time
                  </label>
                  <input
                    id="delivery_time"
                    name="delivery_time"
                    type="time"
                    value={formData.delivery_time}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="estimated_price" className="block text-sm font-semibold text-foreground mb-2">
                    Budget/Estimated Price
                  </label>
                  <input
                    id="estimated_price"
                    name="estimated_price"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.estimated_price}
                    onChange={handleChange}
                    placeholder="e.g., 150.00"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div className="bg-card rounded-lg border border-border p-8">
              <label htmlFor="allergen_notes" className="block text-sm font-semibold text-foreground mb-2">
                Additional Notes
              </label>
              <textarea
                id="allergen_notes"
                name="allergen_notes"
                value={formData.allergen_notes}
                onChange={handleChange}
                placeholder="Any other important details or requests..."
                rows={3}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Submit Button */}
            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
              {isLoading ? 'Submitting...' : 'Submit Custom Order'}
            </Button>
          </form>
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
