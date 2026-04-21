'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Navbar, Button, Footer } from '@/components/design-system';
import { useCart } from '@/lib/cart-context';
import { ArrowLeft, Cake, AlertCircle, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

interface Ingredient {
  id: number;
  name: string;
  allergen_category?: string;
}

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  category: string;
  image_url?: string;
  availability: boolean;
  created_at: string;
  ingredients: Ingredient[];
}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id;
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const navLinks = [
    { label: 'Products', href: '/products' },
    { label: 'Custom Orders', href: '/custom-orders' },
    { label: 'Location', href: '/location' },
  ];

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok) throw new Error('Product not found');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setIsLoading(false);
      }
    }

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleAddToCart = () => {
    if (!product) return;
    
    setIsAddingToCart(true);
    addToCart(product, quantity);
    toast.success(`Added ${quantity} ${product.name}(s) to cart`);
    
    // Redirect to cart after a short delay
    setTimeout(() => {
      router.push('/cart');
    }, 500);
  };

  if (isLoading) {
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
            <div className="bg-card rounded-lg h-96 animate-pulse" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar 
          logo="Sweet Dreams Bakery" 
          links={navLinks}
          ctaLabel="Cart"
          ctaHref="/cart"
        />
        <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Cake className="w-16 h-16 mx-auto mb-4 opacity-30" />
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Product not found
            </h1>
            <Link href="/products">
              <Button variant="primary">Back to Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
          {/* Back link */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="bg-gradient-to-b from-secondary to-secondary/50 rounded-lg h-96 flex items-center justify-center overflow-hidden">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center text-muted-foreground">
                  <Cake className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Image Coming Soon</p>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded mb-4">
                    {product.category}
                  </span>
                </div>

                <h1 className="text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>

                <p className="text-lg text-muted-foreground mb-8">
                  {product.description}
                </p>

                <div className="mb-8">
                  <p className="text-sm text-muted-foreground mb-2">Price</p>
                  <p className="text-5xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                {product.ingredients && product.ingredients.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-bold text-foreground mb-4">Ingredients</h3>
                    <div className="space-y-2">
                      {product.ingredients.map((ingredient) => (
                        <div
                          key={ingredient.id}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <span className="text-accent">•</span>
                          <div>
                            <p>{ingredient.name}</p>
                            {ingredient.allergen_category && (
                              <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                                <AlertCircle className="w-3 h-3" />
                                Contains {ingredient.allergen_category}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {!product.availability && (
                  <div className="bg-destructive/10 border border-destructive rounded-lg p-4 mb-8 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive" />
                    <p className="text-sm text-destructive">Currently unavailable</p>
                  </div>
                )}
              </div>

              {/* Add to Cart Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label htmlFor="quantity" className="text-sm font-semibold text-foreground">
                    Quantity:
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      −
                    </button>
                    <input
                      id="quantity"
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-12 text-center border border-border rounded-lg py-2"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={!product.availability || isAddingToCart}
                  className="w-full"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {isAddingToCart ? 'Adding to Cart...' : 'Add to Cart'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  {product.availability ? 'In stock and ready to order' : 'Currently unavailable'}
                </p>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          <div className="border-t border-border pt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              More from our bakery
            </h2>
            <Link href="/products">
              <Button variant="secondary">Browse All Products</Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
