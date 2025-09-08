'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart, useWishlist } from '@/lib/store';
import { formatPrice, getDiscountPercentage } from '@/lib/products';
// Toast notifications - using a simple alert for now
const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
  // In a real app, you'd use a proper toast library
  console.log(`${type.toUpperCase()}: ${message}`);
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    
    setTimeout(() => {
      addToCart(product);
      setIsLoading(false);
      showToast(`${product.name} added to cart!`, 'success');
    }, 300);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      showToast('Removed from wishlist', 'info');
    } else {
      addToWishlist(product.id);
      showToast('Added to wishlist', 'success');
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const discountPercentage = product.originalPrice 
    ? getDiscountPercentage(product.price, product.originalPrice)
    : 0;

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group overflow-hidden border-gray-200/50 dark:border-gray-800/50 hover:border-purple-300/50 dark:hover:border-purple-700/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
        <CardContent className="p-0">
          {/* Image container */}
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
            {!imageError ? (
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={handleImageError}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50">
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{product.name}</p>
                </div>
              </div>
            )}
            
            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {product.featured && (
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">
                  Featured
                </Badge>
              )}
              {discountPercentage > 0 && (
                <Badge variant="destructive" className="text-xs">
                  -{discountPercentage}%
                </Badge>
              )}
              {!product.inStock && (
                <Badge variant="secondary" className="text-xs">
                  Out of Stock
                </Badge>
              )}
            </div>

            {/* Wishlist button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleWishlistToggle}
              className="absolute top-2 right-2 h-8 w-8 p-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <svg 
                className={`h-4 w-4 ${isInWishlist(product.id) ? 'text-red-500 fill-current' : 'text-gray-600 dark:text-gray-400'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Button>

            {/* Quick add overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock || isLoading}
                className="bg-white text-gray-900 hover:bg-gray-100 transform scale-90 group-hover:scale-100 transition-transform duration-300"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2" />
                ) : (
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9.5M7 19h9.5" />
                  </svg>
                )}
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 space-y-3">
          {/* Product info */}
          <div className="w-full space-y-2">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {product.name}
            </h3>
            
            <div className="flex items-center space-x-2">
              {/* Rating */}
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
                <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">
                  ({product.reviews})
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Category */}
            <Badge variant="outline" className="text-xs w-fit">
              {product.category}
            </Badge>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}