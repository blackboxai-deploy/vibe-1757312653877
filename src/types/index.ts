// Core product interface
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  featured: boolean;
  tags: string[];
  specifications?: Record<string, string>;
}

// Shopping cart interfaces
export interface CartItem {
  product: Product;
  quantity: number;
  selectedImage?: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

// Filter interfaces
export interface ProductFilters {
  category: string;
  priceRange: [number, number];
  rating: number;
  inStock: boolean;
  searchQuery: string;
}

// User interface
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// Checkout interfaces
export interface CheckoutData {
  shipping: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  payment: {
    method: 'card' | 'paypal' | 'apple-pay';
    cardNumber?: string;
    expiryDate?: string;
    cvv?: string;
    cardName?: string;
  };
}

// Theme interface
export type Theme = 'light' | 'dark' | 'system';

// Navigation interface
export interface NavItem {
  name: string;
  href: string;
  badge?: number;
}

// Component props interfaces
export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist?: (productId: string) => void;
  isInWishlist?: boolean;
}

export interface FilterSidebarProps {
  filters: ProductFilters;
  onFiltersChange: (filters: ProductFilters) => void;
  categories: string[];
  priceRange: [number, number];
}

export interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

// Utility types
export type ProductCategory = 
  | 'Electronics' 
  | 'Fashion' 
  | 'Home & Garden' 
  | 'Sports' 
  | 'Books' 
  | 'Beauty' 
  | 'Automotive';

export type SortOption = 
  | 'price-low-high' 
  | 'price-high-low' 
  | 'rating' 
  | 'newest' 
  | 'popular';