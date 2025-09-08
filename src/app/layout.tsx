import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { StoreProvider } from '@/lib/store';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StyleShop - Modern Shopping Experience',
  description: 'Discover premium products with our modern, stylish shopping app. From electronics to fashion, find everything you need with an exceptional user experience.',
  keywords: ['shopping', 'ecommerce', 'fashion', 'electronics', 'modern', 'stylish'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-gray-950 dark:via-purple-950/30 dark:to-pink-950/30 min-h-screen`}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="shopping-app-theme"
        >
          <StoreProvider>
            <div className="relative flex min-h-screen flex-col">
              {/* Background gradient overlay */}
              <div className="fixed inset-0 bg-gradient-to-br from-purple-100/20 via-transparent to-pink-100/20 dark:from-purple-900/10 dark:to-pink-900/10 pointer-events-none" />
              
              {/* Navigation */}
              <Navbar />
              
              {/* Main content */}
              <main className="relative flex-1">
                {children}
              </main>
              
              {/* Footer */}
              <footer className="relative border-t border-purple-200/20 dark:border-purple-800/20 bg-white/70 dark:bg-gray-950/70 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        StyleShop
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Your premium destination for modern shopping experiences.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Shop</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li><a href="/products" className="hover:text-purple-600 transition-colors">All Products</a></li>
                        <li><a href="/products?category=Electronics" className="hover:text-purple-600 transition-colors">Electronics</a></li>
                        <li><a href="/products?category=Fashion" className="hover:text-purple-600 transition-colors">Fashion</a></li>
                        <li><a href="/products?category=Home%20%26%20Garden" className="hover:text-purple-600 transition-colors">Home & Garden</a></li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Support</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li><a href="#" className="hover:text-purple-600 transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-purple-600 transition-colors">Shipping Info</a></li>
                        <li><a href="#" className="hover:text-purple-600 transition-colors">Returns</a></li>
                        <li><a href="#" className="hover:text-purple-600 transition-colors">Contact Us</a></li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">Connect</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li><a href="#" className="hover:text-purple-600 transition-colors">Newsletter</a></li>
                        <li><a href="#" className="hover:text-purple-600 transition-colors">Social Media</a></li>
                        <li><a href="#" className="hover:text-purple-600 transition-colors">Community</a></li>
                        <li><a href="#" className="hover:text-purple-600 transition-colors">Blog</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-purple-200/20 dark:border-purple-800/20 text-center text-sm text-gray-600 dark:text-gray-400">
                    <p>&copy; 2024 StyleShop. All rights reserved. Made with 💜 for modern shopping.</p>
                  </div>
                </div>
              </footer>
            </div>
            
            {/* Toast notifications - temporarily disabled */}
            {/* <Toaster richColors closeButton /> */}
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}