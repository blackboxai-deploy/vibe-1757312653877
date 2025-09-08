'use client';

import Link from 'next/link';
import { useCart } from '@/lib/store';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const { cart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-purple-200/20 dark:border-purple-800/20 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600">
              <span className="text-sm font-bold text-white">S</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              StyleShop
            </span>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 bg-white/50 dark:bg-gray-900/50 border-purple-200/50 dark:border-purple-800/50 focus:border-purple-400 focus:ring-purple-400/20"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </form>

          {/* Navigation Links & Actions */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/products" className="hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 transition-all duration-300">
                  Products
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/products?category=Electronics" className="hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 transition-all duration-300">
                  Electronics
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/products?category=Fashion" className="hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 transition-all duration-300">
                  Fashion
                </Link>
              </Button>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Cart Button */}
            <Button variant="outline" size="sm" asChild className="relative border-purple-200 dark:border-purple-800 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30 transition-all duration-300">
              <Link href="/cart">
                <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9.5M7 19h9.5" />
                </svg>
                Cart
                {cart.itemCount > 0 && (
                  <Badge 
                    variant="secondary" 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs"
                  >
                    {cart.itemCount}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="pb-4 md:hidden">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 bg-white/50 dark:bg-gray-900/50 border-purple-200/50 dark:border-purple-800/50 focus:border-purple-400 focus:ring-purple-400/20"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}