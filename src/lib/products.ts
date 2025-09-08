import { Product, ProductCategory } from '@/types';

// Sample product data with modern, stylish items
export const products: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'Wireless Pro Headphones',
    description: 'Premium noise-canceling wireless headphones with spatial audio and 30-hour battery life. Experience studio-quality sound with adaptive transparency.',
    price: 349.99,
    originalPrice: 399.99,
    category: 'Electronics',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5de092ff-32fd-4fdf-866d-eb1fcbca4d58.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0ef7f061-85f1-4e1a-8572-db17afd38465.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0df5f12a-f9e7-4523-b7e1-24c9a64ff199.png'
    ],
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    featured: true,
    tags: ['wireless', 'noise-canceling', 'premium', 'bluetooth'],
    specifications: {
      'Battery Life': '30 hours',
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.0'
    }
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life. Track your health metrics with precision and style.',
    price: 299.99,
    category: 'Electronics',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27c7cc7e-67db-4690-ad2a-67c31169aa10.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/64a4ceda-bf34-4bf6-a76d-23a3d8ebbb35.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3792560b-71c6-4874-a2dc-c6d6b2dec1e5.png'
    ],
    rating: 4.6,
    reviews: 892,
    inStock: true,
    featured: true,
    tags: ['fitness', 'smartwatch', 'health', 'gps'],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery': '7 days',
      'Water Resistance': '5ATM',
      'Sensors': 'Heart Rate, GPS, Accelerometer',
      'Compatibility': 'iOS & Android'
    }
  },
  {
    id: '3',
    name: 'Ultra-Portable Laptop',
    description: 'Lightweight 13-inch laptop with M2 chip, 16GB RAM, and all-day battery. Perfect for professionals and creatives on the go.',
    price: 1299.99,
    category: 'Electronics',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3a3a992c-72aa-4d8e-bdb8-30d28ec6dda7.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fd1388e6-256b-48da-af02-a28385d15695.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d59b07b7-ca25-4c53-872a-45d30dd2e9fa.png'
    ],
    rating: 4.9,
    reviews: 2156,
    inStock: true,
    featured: false,
    tags: ['laptop', 'portable', 'professional', 'm2-chip'],
    specifications: {
      'Processor': 'M2 8-core CPU',
      'Memory': '16GB Unified Memory',
      'Storage': '512GB SSD',
      'Display': '13.3" Retina',
      'Weight': '2.7 lbs'
    }
  },

  // Fashion
  {
    id: '4',
    name: 'Designer Leather Jacket',
    description: 'Handcrafted genuine leather jacket with modern cut and premium finishing. A timeless piece that elevates any outfit.',
    price: 459.99,
    originalPrice: 599.99,
    category: 'Fashion',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4d68c73a-0e0d-4059-af07-5320d6f2959d.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/72175046-cedf-4b7e-81f3-6f484185741e.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/39b9d189-e23d-46e1-8ca3-9b37638124f1.png'
    ],
    rating: 4.7,
    reviews: 543,
    inStock: true,
    featured: true,
    tags: ['leather', 'designer', 'jacket', 'premium'],
    specifications: {
      'Material': '100% Genuine Leather',
      'Lining': 'Silk blend',
      'Fit': 'Slim fit',
      'Care': 'Professional clean only',
      'Origin': 'Italian craftsmanship'
    }
  },
  {
    id: '5',
    name: 'Premium Sneakers',
    description: 'Limited edition sustainable sneakers made from recycled materials. Comfort meets style with innovative cushioning technology.',
    price: 189.99,
    category: 'Fashion',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/55bad2ea-8cf0-4963-b027-4e1873495271.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/63e09f79-58f3-47d4-8b08-cf191da37488.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e69a76c2-1a64-46cc-b2b4-d8bca60dc3d5.png'
    ],
    rating: 4.5,
    reviews: 721,
    inStock: true,
    featured: false,
    tags: ['sneakers', 'sustainable', 'premium', 'limited-edition'],
    specifications: {
      'Upper Material': 'Recycled knit',
      'Sole': 'Bio-based foam',
      'Support': 'Arch support included',
      'Sizes': 'US 6-13',
      'Colors': 'White, Black, Grey'
    }
  },

  // Home & Garden
  {
    id: '6',
    name: 'Smart Air Purifier',
    description: 'Wi-Fi enabled air purifier with HEPA filtration and smart sensors. Monitor and control air quality from anywhere.',
    price: 249.99,
    category: 'Home & Garden',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8f91354d-9e09-47e6-951b-773fea980303.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f1aa8f29-31cf-4cf5-bba2-0f66c8f9e6a3.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bb303589-0907-400e-ae22-a248c7132fd5.png'
    ],
    rating: 4.6,
    reviews: 438,
    inStock: true,
    featured: false,
    tags: ['smart-home', 'air-purifier', 'hepa', 'wifi'],
    specifications: {
      'Coverage': 'Up to 500 sq ft',
      'Filtration': '3-stage HEPA',
      'Noise Level': '< 50dB',
      'Smart Features': 'App control, voice assistant',
      'Filter Life': '6-8 months'
    }
  },
  {
    id: '7',
    name: 'Ergonomic Office Chair',
    description: 'Premium ergonomic chair with lumbar support and breathable mesh. Designed for all-day comfort and productivity.',
    price: 399.99,
    originalPrice: 499.99,
    category: 'Home & Garden',
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f7e9c109-9896-41f2-995e-b0acf1abb072.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cc3b63ab-5611-4c85-9fa0-f57e6b1f8f53.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fb401116-e0d3-426e-a057-b274022c7cf4.png'
    ],
    rating: 4.7,
    reviews: 1089,
    inStock: true,
    featured: true,
    tags: ['ergonomic', 'office', 'chair', 'comfort'],
    specifications: {
      'Backrest': 'Breathable mesh',
      'Seat Material': 'Memory foam',
      'Adjustments': 'Height, tilt, armrests',
      'Weight Capacity': '300 lbs',
      'Warranty': '5 years'
    }
  },

  // Sports
  {
    id: '8',
    name: 'Professional Yoga Mat',
    description: 'Premium non-slip yoga mat made from natural rubber. Perfect grip and cushioning for all yoga practices.',
    price: 89.99,
    category: 'Sports',
    images: [
      'https://placehold.co/800x800?text=Purple+yoga+mat+rolled+out+natural+rubber+premium+quality',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/86446168-f1f9-4c51-bf96-13fec616eda1.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0bd71b74-11ff-45df-9657-9a08c5b39c28.png'
    ],
    rating: 4.8,
    reviews: 356,
    inStock: true,
    featured: false,
    tags: ['yoga', 'fitness', 'natural-rubber', 'non-slip'],
    specifications: {
      'Material': '100% Natural Rubber',
      'Thickness': '6mm',
      'Size': '72" x 24"',
      'Weight': '4.5 lbs',
      'Eco-Friendly': 'Biodegradable'
    }
  }
];

// Utility functions
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const filterProducts = (
  category: string = 'all',
  priceRange: [number, number] = [0, 2000],
  minRating: number = 0,
  inStockOnly: boolean = false
): Product[] => {
  return products.filter(product => {
    const categoryMatch = category === 'all' || product.category === category;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const ratingMatch = product.rating >= minRating;
    const stockMatch = !inStockOnly || product.inStock;
    
    return categoryMatch && priceMatch && ratingMatch && stockMatch;
  });
};

export const sortProducts = (products: Product[], sortBy: string): Product[] => {
  const sortedProducts = [...products];
  
  switch (sortBy) {
    case 'price-low-high':
      return sortedProducts.sort((a, b) => a.price - b.price);
    case 'price-high-low':
      return sortedProducts.sort((a, b) => b.price - a.price);
    case 'rating':
      return sortedProducts.sort((a, b) => b.rating - a.rating);
    case 'reviews':
      return sortedProducts.sort((a, b) => b.reviews - a.reviews);
    case 'name':
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sortedProducts;
  }
};

export const getProductCategories = (): ProductCategory[] => {
  return Array.from(new Set(products.map(product => product.category as ProductCategory)));
};

export const getPriceRange = (): [number, number] => {
  const prices = products.map(product => product.price);
  return [Math.min(...prices), Math.max(...prices)];
};

// Format price utility
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

// Calculate discount percentage
export const getDiscountPercentage = (price: number, originalPrice: number): number => {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
};