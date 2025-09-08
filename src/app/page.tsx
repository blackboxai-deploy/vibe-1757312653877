'use client';

import { Hero } from '@/components/hero';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getFeaturedProducts, getProductCategories } from '@/lib/products';
import Link from 'next/link';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const categories = getProductCategories();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover our hand-picked selection of premium products that define modern style and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              <Link href="/products">
                View All Products
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-blue-50/50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our diverse range of carefully curated categories to find exactly what you're looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category} href={`/products?category=${encodeURIComponent(category)}`}>
                <Card className="group overflow-hidden border-gray-200/50 dark:border-gray-800/50 hover:border-purple-300/50 dark:hover:border-purple-700/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm cursor-pointer">
                  <CardContent className="p-0">
                    <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                      <img
                        src={`https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/eeeb3439-eb6b-499d-b669-3e98ff4a7a17.png}+products+category+showcase+modern+style`}
                        alt={`${category} products category showcase`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      {/* Fallback content */}
                      <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800">
                        <div className="text-center p-4">
                          <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{category}</p>
                        </div>
                      </div>
                      
                      {/* Category overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-semibold text-lg">{category}</h3>
                        <p className="text-sm opacity-90">Explore collection</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {category}
                    </CardTitle>
                    <CardDescription>
                      Discover premium {category.toLowerCase()} products
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-gray-200/50 dark:border-gray-800/50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Free Shipping</h3>
                <p className="text-gray-600 dark:text-gray-400">Free delivery on orders over $50. Fast and reliable shipping worldwide.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200/50 dark:border-gray-800/50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Secure Payment</h3>
                <p className="text-gray-600 dark:text-gray-400">Your payment information is encrypted and secure. Multiple payment options available.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-gray-200/50 dark:border-gray-800/50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-600 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">24/7 Support</h3>
                <p className="text-gray-600 dark:text-gray-400">Round-the-clock customer support to help you with any questions or concerns.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}