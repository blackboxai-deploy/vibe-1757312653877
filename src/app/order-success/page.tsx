'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function OrderSuccessPage() {
  const orderNumber = `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-gray-950 dark:via-purple-950/30 dark:to-pink-950/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <Card className="text-center p-12 max-w-md mx-auto border-gray-200/50 dark:border-gray-800/50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
            <CardContent>
              {/* Success Icon */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Order Confirmed!
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                Thank you for your purchase!
              </p>
              
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">
                Order #{orderNumber}
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">What's Next?</h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 text-left">
                    <li>• You'll receive an email confirmation shortly</li>
                    <li>• Your order will be processed within 1-2 business days</li>
                    <li>• Shipping updates will be sent to your email</li>
                    <li>• Expected delivery: 3-5 business days</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <Button asChild size="lg" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  <Link href="/products">
                    Continue Shopping
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </Button>
                
                <Button variant="outline" asChild size="lg" className="w-full">
                  <Link href="/">
                    Back to Home
                  </Link>
                </Button>
              </div>

              {/* Contact Support */}
              <div className="mt-8 pt-6 border-t border-gray-200/50 dark:border-gray-800/50">
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Need help? <a href="#" className="text-purple-600 hover:text-purple-700 underline">Contact Support</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}