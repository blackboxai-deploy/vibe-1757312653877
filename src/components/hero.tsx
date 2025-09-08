'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-blue-600/10 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-gray-900 dark:text-gray-100">
                  Discover
                </span>
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Premium Style
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl">
                Elevate your lifestyle with our curated collection of premium products. 
                From cutting-edge electronics to designer fashion, find everything you need 
                for a modern, stylish life.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Link href="/products">
                  Shop Collection
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-purple-300 dark:border-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30 transition-all duration-300"
              >
                <Link href="/products?featured=true">
                  Featured Items
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">1000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Premium Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">50k+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="relative">
            <div className="aspect-square relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 backdrop-blur-sm">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c2d9bdd3-fb97-42af-bd90-1030569a5978.png"
                alt="Modern lifestyle products and premium shopping experience"
                className="w-full h-full object-cover rounded-3xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              {/* Fallback content */}
              <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-3xl">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Premium Shopping</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Discover amazing products</p>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border border-purple-200/20 dark:border-purple-800/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Premium Quality</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Certified Products</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border border-purple-200/20 dark:border-purple-800/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Fast Shipping</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Free Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for blob animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}