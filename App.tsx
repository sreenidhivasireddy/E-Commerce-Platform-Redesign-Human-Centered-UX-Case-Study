import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Carousel } from './components/Carousel';
import { ProductCard } from './components/ProductCard';
import { PerksSection } from './components/PerksSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { AuthModal } from './components/auth/AuthModal';
import { WomenPage } from './components/women/WomenPage';
import { MenPage } from './components/men/MenPage';
import { WishlistPage } from './components/WishlistPage';
import { CartPage } from './components/CartPage';
import { ProfilePage, UserData, OrderData } from './components/ProfilePage';
import { ProductDetailPage } from './components/product/ProductDetailPage';
import { MenProductDetailPage } from './components/product/MenProductDetailPage';
import { GenericShoppingPage } from './components/shared/GenericShoppingPage';
import { SalePage } from './components/sale/SalePage';
import { WomenSalePage } from './components/sale/WomenSalePage';
import { MenSalePage } from './components/sale/MenSalePage';
import { KidsSalePage } from './components/sale/KidsSalePage';
import { 
  menProductsData, 
  kidsProductsData, 
  curveProductsData, 
  babyProductsData, 
  shoesProductsData, 
  jewelryProductsData,
  newInProductsData 
} from './data/productsData';
import { HotDealsRewardsPage } from './components/rewards/HotDealsRewardsPage';
import { CheckoutPage } from './components/checkout/CheckoutPage';
import { CartItem } from './components/women/MiniCart';
import { toast } from 'sonner@2.0.3';
import { Toaster } from './components/ui/sonner';
import { ShopTheLookPage } from './components/shopTheLook/ShopTheLookPage';
import { SheinPeplumShopTheLookPage } from './components/product/SheinPeplumShopTheLookPage';
import { womenLooks, menLooks, ShopTheLookData, LookProduct } from './data/shopTheLookData';
import { SearchResultsPage } from './components/SearchResultsPage';
import { NotFoundPage } from './components/NotFoundPage';
import { OrderConfirmationPage } from './components/OrderConfirmationPage';
import { Sitemap } from './components/Sitemap';
import { PolicyPage } from './components/policies/PolicyPage';
import { LoginPage } from './components/auth/LoginPage';
import { SignupPage } from './components/auth/SignupPage';
import { GuestLoginPage } from './components/auth/GuestLoginPage';
import { SideMenu } from './components/SideMenu';
import { TopsPage } from './components/category/TopsPage';
import { DressesPage } from './components/category/DressesPage';
import { BottomsPage } from './components/category/BottomsPage';
import { ActivewearPage } from './components/category/ActivewearPage';
import { ShoesPage as WomenShoesPage } from './components/category/ShoesPage';
import { AccessoriesPage } from './components/category/AccessoriesPage';
import { SweatersPage } from './components/category/SweatersPage';
import { SkirtsPage } from './components/category/SkirtsPage';
import { SwimwearPage } from './components/category/SwimwearPage';
import { LingeriePage } from './components/category/LingeriePage';
import { MenCategoryPage } from './components/men/MenCategoryPage';
import { allProductDetails } from './data/allProductDetails';


// Import product images from Figma
import imgResult91 from "figma:asset/9f55f6945fdc7a704ec21723678ae2d6ba044571.png";
import imgResult51 from "figma:asset/4431dd7b5f287e7c03f15eb33638ea84526fe2dd.png";
import imgResult1 from "figma:asset/9122943bc7801a4fb97a59ccdbd08e8f29d62a10.png";
import imgResult11 from "figma:asset/543ebd64f9b2e11c5d6e38d2c9ccb8fe2774a72e.png";
import imgResult21 from "figma:asset/0afb163b7045c86a67b982b4eaeecdd9e5d2fe07.png";
import imgResult41 from "figma:asset/4765b0f98c946e1fc9b5a4d00c393e1c6944e2ce.png";
import imgResult61 from "figma:asset/d3fac8d2946b7baf972a9b294d070fd3da9b624d.png";
import imgResult81 from "figma:asset/36365ea332890dd108fcac3c550b7c36a24d3b4b.png";
import imgResult101 from "figma:asset/d82fa457874794fe93321ae24cd7fc2bb6fa1bf1.png";
import imgResult111 from "figma:asset/b09a305eb2d1cc96b18c49b8ccd3b4912b81e70a.png";
import imgResult71 from "figma:asset/b878b39cb00c8799419b666060522043c1d55397.png";
import imgResult121 from "figma:asset/a8521f397986ef1de4202f6a4cca724a0b0f5f68.png";
import imgResult141 from "figma:asset/df3456d7d1003eb42229428cab42546af255c7ca.png";

// Product data
const allProducts = [
  { id: '1', name: 'Casual Straight Leg Jeans', price: '$24.99', image: imgResult1 },
  { id: '2', name: 'Ribbed Knit Sweater', price: '$19.99', image: imgResult11 },
  { id: '3', name: 'High Waisted Wide Leg Pants', price: '$29.99', image: imgResult21 },
  { id: '4', name: 'Halter Neck Dress', price: '$32.99', image: imgResult41 },
  { id: '5', name: 'Oversized Hoodie', price: '$27.99', image: imgResult51 },
  { id: '6', name: 'Vintage Wash Denim', price: '$34.99', image: imgResult61 },
  { id: '7', name: 'Pleated Mini Skirt', price: '$22.99', image: imgResult71 },
  { id: '8', name: 'Leather Loafers', price: '$45.99', image: imgResult81 },
  { id: '9', name: 'Structured Shoulder Bag', price: '$39.99', image: imgResult91 },
  { id: '10', name: 'Graphic Print T-Shirt', price: '$16.99', image: imgResult101 },
  { id: '11', name: 'Quilted Crossbody Bag', price: '$28.99', image: imgResult111 },
  { id: '12', name: 'Cat Eye Sunglasses', price: '$18.99', image: imgResult121 },
];

// Import men's product images
import imgMen1 from "figma:asset/998f0e0cde5d983a9314088ad9e6b283da63cac6.png";
import imgMen2 from "figma:asset/3888c5af107a8737fefbe93daeab217ec65f5d0a.png";
import imgMen3 from "figma:asset/d67790fd0b5eece81c767f2be472e341f63495d6.png";
import imgMen4 from "figma:asset/0e214be37aa82f9927eead9e361685909f90b5ae.png";
import imgMen5 from "figma:asset/047fde7a1686aa00e5271b0a15314b67453ef2e5.png";
import imgMen6 from "figma:asset/4199ea7fed84cbea235228bc9e168bf865bde184.png";

// Import women's product images
import imgWomen1 from "figma:asset/bad4d80d5b99788d486a8f89844d164bdc02f600.png";
import imgWomen2 from "figma:asset/1b15a421409b28f23dccc4327402d958eeaae203.png";
import imgWomen3 from "figma:asset/411d6eaaa2b662f10d95b0979650009a4e93f26b.png";
import imgWomen4 from "figma:asset/3e7b4eacfe472a4fa2becc8f1dae3086e08c8e79.png";
import imgWomen5 from "figma:asset/38fbaede8dd3da448bd0725d6a31213deec1e495.png";
import imgWomen6 from "figma:asset/50ef0c483ebdce2e82adc3587da6df0e1f7a4733.png";
import imgWomen7 from "figma:asset/251a20e807dd24bad05e4b3083e3809a4e0dd064.png";
import imgWomen8 from "figma:asset/4ad2470281961b3a5acbdd9922eedd4442d0c220.png";
import imgWomen9 from "figma:asset/bca286ac40b79a8286ee8de7b67a1758b5a0dc2e.png";
import imgWomen10 from "figma:asset/0ac631388857f42c1074577f9f01e04be28ea096.png";

// Import the new blue top image
import imgBlueTop from "figma:asset/1ae11a7f033e5bf715d161761d7dca34971e696c.png";

type PageView = 'home' | 'women' | 'men' | 'kids' | 'curve' | 'baby' | 'shoes' | 'jewelry' | 'newin' | 'hotdeals' | 'sale' | 'women-sale' | 'men-sale' | 'kids-sale' | 'wishlist' | 'cart' | 'checkout' | 'profile' | 'product-detail' | 'shop-the-look' | 'shein-peplum-look' | 'search' | '404' | 'order-confirmation' | 'login' | 'signup' | 'guest' | 'sitemap' | 'about' | 'contact' | 'track-order' | 'shipping' | 'returns' | 'size-guide' | 'privacy' | 'terms' | 'tops' | 'dresses' | 'bottoms' | 'activewear' | 'women-shoes' | 'accessories' | 'sweaters' | 'skirts' | 'swimwear' | 'lingerie' | 'men-tshirts' | 'men-shirts' | 'men-hoodies' | 'men-jeans' | 'men-shorts' | 'men-activewear' | 'men-suits' | 'men-underwear';

// Product interface for PDP
export interface ProductData {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  image: string;
  images?: string[];
  colors?: { name: string; hex: string }[];
  sizes?: string[];
  description?: string;
  brand?: string;
  rating?: number;
  reviewCount?: number;
  originalPrice?: number;
  discount?: number;
}

// Product data arrays
const menProducts = [
  { id: 'm1', name: "Chillumni Men Flap Pocket Denim Jacket", price: '$39.99', image: imgMen1, category: 'Men' },
  { id: 'm2', name: "Pgreaug Faux Leather Jacket", price: '$30.99', image: imgMen2, category: 'Men' },
  { id: 'm3', name: "FAUX LEATHER BOMBER JACKET", price: '$55.78', image: imgMen3, category: 'Men' },
  { id: 'm4', name: "Uublik Mens Vintage Biker Racing Moto Jackets Black", price: '$42.02', image: imgMen4, category: 'Men' },
  { id: 'm5', name: "Black Premium Wool Rich Soft Touch", price: '$63.45', image: imgMen5, category: 'Men' },
  { id: 'm6', name: "Jacket with Contrast Collar", price: '$69.99', image: imgMen6, category: 'Men' },
];

const womenProducts = [
  { id: 'w1', name: "SOLY HUX Women's Square Neck Tank Tops", price: '$48.99', image: imgWomen1 },
  { id: 'w2', name: "Forever21 Women's Off-Shoulder ribbed top", price: '$20.99', image: imgWomen2 },
  { id: 'w3', name: "Littlebox Women's front knot top", price: '$25.99', image: imgWomen3 },
  { id: 'w4', name: "SOLY HUX Women's peplum top", price: '$29.99', image: imgWomen4 },
  { id: 'w5', name: "Sweethra Women's One side Off-Shoulder Top", price: '$13.99', image: imgWomen5 },
  { id: 'w6', name: "SHEIN Spaghetti strap Peplum top", price: '$30.99', image: imgWomen6 },
  { id: 'w7', name: "SOLY HUX Women's Square Neck Crop Top", price: '$22.99', image: imgWomen7 },
  { id: 'w8', name: "Sweethra Women's Ruched Off-Shoulder Top", price: '$18.99', image: imgWomen8 },
  { id: 'w9', name: "SHEIN Women's Eyelet Peplum Top", price: '$24.99', image: imgWomen9 },
  { id: 'w10', name: "Forever21 Women's Smocked Tank Top", price: '$19.99', image: imgWomen10 },
];

// Kids products with full details for filtering/sorting
const kidsProducts = [
  { id: 'k1', name: "Kids Denim Jacket with Patches", price: '$32.99', priceValue: 32.99, image: 'https://images.unsplash.com/photo-1758782213532-bbb5fd89885e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZmFzaGlvbiUyMGNsb3RoaW5nfGVufDF8fHx8MTc2MjUyODgyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'KidStyle', dateAdded: 1, popularity: 88 },
  { id: 'k2', name: "Children's Cotton Dress", price: '$28.99', priceValue: 28.99, image: 'https://images.unsplash.com/photo-1684244160171-97f5dac39204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG91dGZpdCUyMGRyZXNzfGVufDF8fHx8MTc2MjUzNTk4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'SHEIN Kids', dateAdded: 2, popularity: 92 },
  { id: 'k3', name: "Kids Casual Jeans & Shirt Set", price: '$35.99', priceValue: 35.99, image: 'https://images.unsplash.com/photo-1754639488181-7eae9f6c06e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwamVhbnMlMjBzaGlydHxlbnwxfHx8fDE3NjI1MzU5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'JuniorFit', dateAdded: 3, popularity: 85 },
  { id: 'k4', name: "Children's Cozy Hoodie", price: '$24.99', priceValue: 24.99, image: 'https://images.unsplash.com/photo-1588932250351-36235af5c0f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN3ZWF0ZXIlMjBob29kaWV8ZW58MXx8fHwxNzYyNTM1OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'KidStyle', dateAdded: 4, popularity: 90 },
  { id: 'k5', name: "Kids Winter Jacket", price: '$42.99', priceValue: 42.99, image: 'https://images.unsplash.com/photo-1558140275-6b7b7bf2cfa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwamFja2V0JTIwY29hdHxlbnwxfHx8fDE3NjI1MzU5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'SHEIN Kids', dateAdded: 5, popularity: 87 },
  { id: 'k6', name: "Children's Casual Wear Set", price: '$29.99', priceValue: 29.99, image: 'https://images.unsplash.com/photo-1759423672073-fde8902768ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNhc3VhbCUyMHdlYXJ8ZW58MXx8fHwxNzYyNTM1OTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'JuniorFit', dateAdded: 6, popularity: 83 },
];

// Curve products
const curveProducts = [
  { id: 'c1', name: "Plus Size Floral Maxi Dress", price: '$52.99', priceValue: 52.99, image: 'https://images.unsplash.com/photo-1657550853413-a646ba6a1877?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVzJTIwc2l6ZSUyMGZhc2hpb258ZW58MXx8fHwxNzYyNTM1OTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'CurveStyle', dateAdded: 1, popularity: 95 },
  { id: 'c2', name: "Elegant Curve Fit Evening Dress", price: '$58.99', priceValue: 58.99, image: 'https://images.unsplash.com/photo-1551981878-4c70c3e64135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJ2eSUyMHdvbWFuJTIwZHJlc3N8ZW58MXx8fHwxNzYyNTM1OTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'SHEIN Curve', dateAdded: 2, popularity: 92 },
  { id: 'c3', name: "Plus Size Casual Top", price: '$36.99', priceValue: 36.99, image: 'https://images.unsplash.com/photo-1657549091422-3b748b8f72b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVzJTIwc2l6ZSUyMGNsb3RoaW5nfGVufDF8fHx8MTc2MjUzNTk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'CurveStyle', dateAdded: 3, popularity: 88 },
  { id: 'c4', name: "Curve Model Trendy Outfit", price: '$48.99', priceValue: 48.99, image: 'https://images.unsplash.com/photo-1646932520067-81bdc09af07a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJ2ZSUyMG1vZGVsJTIwb3V0Zml0fGVufDF8fHx8MTc2MjUzNTk5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'SHEIN Curve', dateAdded: 4, popularity: 90 },
  { id: 'c5', name: "Plus Size Stylish Blazer", price: '$62.99', priceValue: 62.99, image: 'https://images.unsplash.com/photo-1567967785681-9a8d6918bb75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVzJTIwc2l6ZSUyMHN0eWxlfGVufDF8fHx8MTc2MjUzNTk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'CurveStyle', dateAdded: 5, popularity: 87 },
  { id: 'c6', name: "Curvy Fashion Statement Dress", price: '$54.99', priceValue: 54.99, image: 'https://images.unsplash.com/photo-1753162661048-4d197a3f6a3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJ2eSUyMGZhc2hpb24lMjB3ZWFyfGVufDF8fHx8MTc2MjUzNTk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'SHEIN Curve', dateAdded: 6, popularity: 93 },
];

// Baby products
const babyProducts = [
  { id: 'b1', name: "Baby Cotton Outfit Set", price: '$18.99', priceValue: 18.99, image: 'https://images.unsplash.com/photo-1563722205706-e8513b7554bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwY2xvdGhlcyUyMG91dGZpdHxlbnwxfHx8fDE3NjI1MzU5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'BabyLove', dateAdded: 1, popularity: 90 },
  { id: 'b2', name: "Infant Fashion Onesie", price: '$14.99', priceValue: 14.99, image: 'https://images.unsplash.com/photo-1761439099134-e64b1e803135?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZhbnQlMjBjbG90aGluZyUyMGZhc2hpb258ZW58MXx8fHwxNzYyNTM1OTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'SHEIN Baby', dateAdded: 2, popularity: 92 },
  { id: 'b3', name: "Baby Romper Set", price: '$16.99', priceValue: 16.99, image: 'https://images.unsplash.com/photo-1602887627273-85fff2433015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwcm9tcGVyJTIwb25lc2llfGVufDF8fHx8MTc2MjUzNTk5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'BabyLove', dateAdded: 3, popularity: 88 },
  { id: 'b4', name: "Newborn Soft Wear", price: '$19.99', priceValue: 19.99, image: 'https://images.unsplash.com/photo-1692477122828-8871a6f2693c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdib3JuJTIwYmFieSUyMHdlYXJ8ZW58MXx8fHwxNzYyNTM1OTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'SHEIN Baby', dateAdded: 4, popularity: 85 },
  { id: 'b5', name: "Baby Pajama Set", price: '$22.99', priceValue: 22.99, image: 'https://images.unsplash.com/photo-1640982166894-181add64ee86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwZHJlc3MlMjBwYWphbWFzfGVufDF8fHx8MTc2MjUzNjAwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'BabyLove', dateAdded: 5, popularity: 87 },
  { id: 'b6', name: "Infant Cute Outfit", price: '$20.99', priceValue: 20.99, image: 'https://images.unsplash.com/photo-1761891919631-81c54c678cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZhbnQlMjBjdXRlJTIwb3V0Zml0fGVufDF8fHx8MTc2MjUzNjAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'SHEIN Baby', dateAdded: 6, popularity: 91 },
];

// Shoes products
const shoesProducts = [
  { id: 's1', name: "Classic Sneakers", price: '$45.99', priceValue: 45.99, image: 'https://images.unsplash.com/photo-1650320079970-b4ee8f0dae33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjI1MzYwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'StreetStyle', dateAdded: 1, popularity: 93 },
  { id: 's2', name: "Leather Heeled Boots", price: '$68.99', priceValue: 68.99, image: 'https://images.unsplash.com/photo-1621996659490-3275b4d0d951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYm9vdHMlMjBoZWVsc3xlbnwxfHx8fDE3NjI1MzYwMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'SHEIN Shoes', dateAdded: 2, popularity: 90 },
  { id: 's3', name: "Casual Summer Sandals", price: '$32.99', priceValue: 32.99, image: 'https://images.unsplash.com/photo-1762113905421-889e823e0c0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBmb290d2VhciUyMHNhbmRhbHN8ZW58MXx8fHwxNzYyNTM2MDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'StreetStyle', dateAdded: 3, popularity: 85 },
  { id: 's4', name: "Athletic Running Shoes", price: '$52.99', priceValue: 52.99, image: 'https://images.unsplash.com/photo-1739132268718-53d64165d29a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwYXRobGV0aWMlMjBzaG9lc3xlbnwxfHx8fDE3NjI1MzYwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'SportFit', dateAdded: 4, popularity: 92 },
  { id: 's5', name: "Elegant High Heel Pumps", price: '$58.99', priceValue: 58.99, image: 'https://images.unsplash.com/photo-1727561141797-84a5311dd76e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwaGVlbCUyMHB1bXBzfGVufDF8fHx8MTc2MjUzNjAwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'SHEIN Shoes', dateAdded: 5, popularity: 88 },
  { id: 's6', name: "Classic Leather Loafers", price: '$49.99', priceValue: 49.99, image: 'https://images.unsplash.com/photo-1576792741377-eb0f4f6d1a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2FmZXJzJTIwZHJlc3MlMjBzaG9lc3xlbnwxfHx8fDE3NjI0NzkyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'StreetStyle', dateAdded: 6, popularity: 87 },
];

// Jewelry & Accessories products
const jewelryProducts = [
  { id: 'j1', name: "Gold Layered Necklace Set", price: '$38.99', priceValue: 38.99, image: 'https://images.unsplash.com/photo-1625792508300-0e1f913a3a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbmVja2xhY2UlMjBlYXJyaW5nc3xlbnwxfHx8fDE3NjI1MzYwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'LuxeStyle', dateAdded: 1, popularity: 90 },
  { id: 'j2', name: "Elegant Bracelet & Ring Set", price: '$42.99', priceValue: 42.99, image: 'https://images.unsplash.com/photo-1611107683227-e9060eccd846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYnJhY2VsZXQlMjByaW5nfGVufDF8fHx8MTc2MjUzNjAxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'SHEIN Jewelry', dateAdded: 2, popularity: 92 },
  { id: 'j3', name: "Designer Handbag", price: '$65.99', priceValue: 65.99, image: 'https://images.unsplash.com/photo-1613896640137-bb5b31496315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBiYWd8ZW58MXx8fHwxNzYyNDE4ODgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'LuxeStyle', dateAdded: 3, popularity: 88 },
  { id: 'j4', name: "Stylish Watch & Sunglasses", price: '$48.99', priceValue: 48.99, image: 'https://images.unsplash.com/photo-1724318496827-2813ff4772b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5nbGFzc2VzJTIwd2F0Y2glMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NjI1MzYwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'SHEIN Jewelry', dateAdded: 4, popularity: 85 },
  { id: 'j5', name: "Luxury Clutch Purse", price: '$55.99', priceValue: 55.99, image: 'https://images.unsplash.com/photo-1761646238287-3a278ecc0c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kYmFnJTIwcHVyc2UlMjBjbHV0Y2h8ZW58MXx8fHwxNzYyNTM2MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'LuxeStyle', dateAdded: 5, popularity: 87 },
  { id: 'j6', name: "Fashion Scarf & Belt Set", price: '$32.99', priceValue: 32.99, image: 'https://images.unsplash.com/photo-1558917271-f77b345c4f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FyZiUyMGJlbHQlMjBoYXR8ZW58MXx8fHwxNzYyNTM2MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'SHEIN Jewelry', dateAdded: 6, popularity: 83 },
];

// New In - Mix of recent items from all categories
const newInProducts = [
  { id: 'n1', name: "SHEIN Spaghetti strap Peplum top", price: '$30.99', priceValue: 30.99, image: imgWomen6, brand: 'SHEIN', dateAdded: 1, popularity: 95 },
  { id: 'n2', name: "Jacket with Contrast Collar", price: '$69.99', priceValue: 69.99, image: imgMen6, brand: 'SHEIN', dateAdded: 2, popularity: 92 },
  { id: 'n3', name: "Children's Cotton Dress", price: '$28.99', priceValue: 28.99, image: 'https://images.unsplash.com/photo-1684244160171-97f5dac39204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG91dGZpdCUyMGRyZXNzfGVufDF8fHx8MTc2MjUzNTk4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'SHEIN Kids', dateAdded: 3, popularity: 93 },
  { id: 'n4', name: "Curvy Fashion Statement Dress", price: '$54.99', priceValue: 54.99, image: 'https://images.unsplash.com/photo-1753162661048-4d197a3f6a3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJ2eSUyMGZhc2hpb24lMjB3ZWFyfGVufDF8fHx8MTc2MjUzNTk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'SHEIN Curve', dateAdded: 4, popularity: 94 },
  { id: 'n5', name: "Infant Cute Outfit", price: '$20.99', priceValue: 20.99, image: 'https://images.unsplash.com/photo-1761891919631-81c54c678cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZhbnQlMjBjdXRlJTIwb3V0Zml0fGVufDF8fHx8MTc2MjUzNjAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'SHEIN Baby', dateAdded: 5, popularity: 91 },
  { id: 'n6', name: "Athletic Running Shoes", price: '$52.99', priceValue: 52.99, image: 'https://images.unsplash.com/photo-1739132268718-53d64165d29a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwYXRobGV0aWMlMjBzaG9lc3xlbnwxfHx8fDE3NjI1MzYwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', brand: 'SportFit', dateAdded: 6, popularity: 92 },
];

// Simple product arrays for search/wishlist
const kidsProductsSimple = kidsProducts.map(p => ({ id: p.id, name: p.name, price: p.price, image: p.image }));
const curveProductsSimple = curveProducts.map(p => ({ id: p.id, name: p.name, price: p.price, image: p.image }));
const babyProductsSimple = babyProducts.map(p => ({ id: p.id, name: p.name, price: p.price, image: p.image }));
const shoesProductsSimple = shoesProducts.map(p => ({ id: p.id, name: p.name, price: p.price, image: p.image }));
const jewelryProductsSimple = jewelryProducts.map(p => ({ id: p.id, name: p.name, price: p.price, image: p.image }));
const newInProductsSimple = newInProducts.map(p => ({ id: p.id, name: p.name, price: p.price, image: p.image }));

const combinedProducts = [
  ...allProducts, 
  ...menProducts, 
  ...womenProducts, 
  ...kidsProductsSimple, 
  ...curveProductsSimple, 
  ...babyProductsSimple, 
  ...shoesProductsSimple, 
  ...jewelryProductsSimple, 
  ...newInProductsSimple
];

export default function App() {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authOpenedFromProfile, setAuthOpenedFromProfile] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(null);
  const [selectedLook, setSelectedLook] = useState<ShopTheLookData | null>(null);
  const [orderNumber, setOrderNumber] = useState('');
  const [previousPage, setPreviousPage] = useState<PageView>('home');
  const [navigationHistory, setNavigationHistory] = useState<PageView[]>([]);
  
  // User and Orders state
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem('isLoggedIn');
    return saved === 'true';
  });
  const [userData, setUserData] = useState<{ name: string; email: string; phone: string; address: string } | undefined>(() => {
    const saved = localStorage.getItem('userData');
    return saved ? JSON.parse(saved) : undefined;
  });
  const [userOrders, setUserOrders] = useState<Array<{
    order_id: string;
    product_name: string;
    price: string;
    quantity: number;
    date: string;
    status: string;
    image: string;
  }>>(() => {
    const saved = localStorage.getItem('userOrders');
    return saved ? JSON.parse(saved) : [];
  });

  // Save user state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isLoggedIn', String(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    if (userData) {
      localStorage.setItem('userData', JSON.stringify(userData));
    } else {
      localStorage.removeItem('userData');
    }
  }, [userData]);

  useEffect(() => {
    localStorage.setItem('userOrders', JSON.stringify(userOrders));
  }, [userOrders]);

  const handleWishlistToggle = (productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        toast.success('Removed from wishlist');
        return prev.filter((id) => id !== productId);
      } else {
        toast.success('Added to wishlist!');
        return [...prev, productId];
      }
    });
  };

  const handleAddToCart = (product: any) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      
      // Ensure price is always a string with proper fallback
      let priceString: string;
      if (typeof product.price === 'string') {
        priceString = product.price;
      } else if (typeof product.price === 'number') {
        priceString = `$${product.price.toFixed(2)}`;
      } else if (typeof product.priceValue === 'number') {
        priceString = `$${product.priceValue.toFixed(2)}`;
      } else {
        // Fallback if price is completely missing - silently handle it
        priceString = '$0.00';
      }
      
      const normalizedProduct = {
        ...product,
        price: priceString,
        quantity: product.quantity || 1
      };
      return [...prev, normalizedProduct];
    });
    toast.success('Added to cart!');
  };

  const handleUpdateCartQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleProductClick = (product: ProductData) => {
    setSelectedProduct(product);
    navigateToPage('product-detail');
  };

  const handleCategoryProductClick = (productId: string) => {
    // Look up product in allProductDetails
    const productDetail = allProductDetails[productId];
    if (productDetail) {
      setSelectedProduct(productDetail);
      navigateToPage('product-detail');
    } else {
      toast.error('Product not found');
    }
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleSearchSelect = (productName: string) => {
    setSearchQuery(productName);
    navigateToPage('search');
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigateToPage('search');
    }
  };

  const handleMenuClick = () => {
    setShowMenu(true);
  };

  const handleLoginClick = () => {
    setAuthOpenedFromProfile(false);
    setIsAuthModalOpen(true);
  };

  const handleProfileClick = () => {
    setAuthOpenedFromProfile(true);
    setIsAuthModalOpen(true);
  };

  // Navigation with history tracking
  const navigateToPage = (page: PageView) => {
    if (page !== currentPage) {
      setNavigationHistory(prev => [...prev, currentPage]);
      setPreviousPage(currentPage);
      setCurrentPage(page);
    }
  };

  // Back navigation
  const handleBackNavigation = () => {
    if (navigationHistory.length > 0) {
      const previousPage = navigationHistory[navigationHistory.length - 1];
      setNavigationHistory(prev => prev.slice(0, -1));
      setCurrentPage(previousPage);
      setPreviousPage(previousPage);
    } else {
      // If no history, go to home
      setCurrentPage('home');
    }
  };

  // Keyboard shortcuts for back navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // ESC key - go back
      if (event.key === 'Escape') {
        // Don't trigger if user is typing in an input
        const activeElement = document.activeElement;
        const isInputFocused = activeElement instanceof HTMLInputElement || 
                               activeElement instanceof HTMLTextAreaElement;
        
        if (!isInputFocused && currentPage !== 'home') {
          event.preventDefault();
          handleBackNavigation();
        }
      }
      
      // Backspace key - go back (only when not in input)
      if (event.key === 'Backspace') {
        const activeElement = document.activeElement;
        const isInputFocused = activeElement instanceof HTMLInputElement || 
                               activeElement instanceof HTMLTextAreaElement;
        
        if (!isInputFocused && currentPage !== 'home') {
          event.preventDefault();
          handleBackNavigation();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, navigationHistory]);

  // Filter products based on search (search across all products)
  const filteredProducts = searchQuery.trim()
    ? allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.price.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allProducts;
  
  // Get all products for search dropdown
  const allProductsForSearch = combinedProducts;

  // Show first 8 products or all products
  const displayedProducts = showAllProducts ? filteredProducts : filteredProducts.slice(0, 8);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Arial, sans-serif' }}>
      <Toaster position="top-center" />

      {/* Side Menu */}
      <SideMenu
        isOpen={showMenu}
        onClose={() => setShowMenu(false)}
        onNavigate={(page) => {
          navigateToPage(page as PageView);
          setShowMenu(false);
        }}
        currentPage={currentPage}
      />

      {/* Header */}
      <Header
        onSearchChange={handleSearchChange}
        onSearchSelect={handleSearchSelect}
        wishlistCount={wishlist.length}
        cartCount={cartItems.length}
        onMenuClick={handleMenuClick}
        onLoginClick={handleLoginClick}
        onProfileClick={handleProfileClick}
        onWomenClick={() => navigateToPage('women')}
        onMenClick={() => navigateToPage('men')}
        onKidsClick={() => navigateToPage('kids')}
        onCurveClick={() => navigateToPage('curve')}
        onBabyClick={() => navigateToPage('baby')}
        onShoesClick={() => navigateToPage('shoes')}
        onJewelryClick={() => navigateToPage('jewelry')}
        onNewInClick={() => navigateToPage('newin')}
        onHotDealsClick={() => navigateToPage('hotdeals')}
        onSaleClick={() => navigateToPage('sale')}
        onWishlistClick={() => navigateToPage('wishlist')}
        onCartClick={() => navigateToPage('cart')}
        onLogoClick={() => {
          setCurrentPage('home');
          setNavigationHistory([]);
        }}
        currentPage={currentPage}
        allProducts={allProductsForSearch}
      />

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => {
          setIsAuthModalOpen(false);
          setAuthOpenedFromProfile(false);
        }}
        onLoginSuccess={(email) => {
          setIsLoggedIn(true);
          setUserData({
            name: email.split('@')[0],
            email: email,
            phone: '',
            address: ''
          });
          toast.success('Login successful!');
          // Navigate to profile if auth was opened from profile button
          if (authOpenedFromProfile) {
            setTimeout(() => {
              navigateToPage('profile');
              setAuthOpenedFromProfile(false);
            }, 300);
          }
        }}
      />

      {/* Conditional Page Rendering */}
      {currentPage === 'shop-the-look' && selectedLook ? (
        <>
          <ShopTheLookPage
            lookData={selectedLook}
            onAddToCart={(items) => {
              // Add all items from the look to cart
              items.forEach(({ product, size }) => {
                const cartItem: CartItem = {
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                  quantity: 1,
                  size: size
                };
                setCartItems((prev) => {
                  const existing = prev.find((item) => item.id === product.id && item.size === size);
                  if (existing) {
                    return prev.map((item) =>
                      item.id === product.id && item.size === size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    );
                  }
                  return [...prev, cartItem];
                });
              });
            }}
            onProductClick={(productId) => {
              // Find product from the look
              const product = selectedLook.products.find((p) => p.id === productId);
              if (product) {
                setSelectedProduct({
                  ...product,
                  priceValue: product.priceValue,
                  images: [product.image],
                  colors: [],
                  sizes: product.sizes,
                  rating: 4.5,
                  reviewCount: 120,
                  brand: 'SHEIN'
                });
                navigateToPage('product-detail');
              }
            }}
            onBackToHome={handleBackNavigation}
            onAddToWishlist={(lookId) => {
              // Add all products from the look to wishlist
              selectedLook.products.forEach((product) => {
                if (!wishlist.includes(product.id)) {
                  handleWishlistToggle(product.id);
                }
              });
            }}
            wishlist={wishlist}
          />
          <Footer />
        </>
      ) : currentPage === 'shein-peplum-look' ? (
        <>
          <SheinPeplumShopTheLookPage
            onBack={handleBackNavigation}
            onAddToCart={handleAddToCart}
            onProductClick={handleCategoryProductClick}
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
          />
          <Footer />
        </>
      ) : currentPage === 'product-detail' ? (
        <>
          {selectedProduct?.category === 'Men' ? (
            <MenProductDetailPage
              productData={selectedProduct}
              onAddToCart={handleAddToCart}
              onWishlistToggle={handleWishlistToggle}
              onCheckout={() => navigateToPage('checkout')}
              onBack={handleBackNavigation}
              onShopTheLookClick={() => {
                // Navigate to the specific Shop the Look page for m5 product
                if (selectedProduct?.id === 'm5') {
                  const m5Look = menLooks.find(look => look.id === 'men-m5-premium-black');
                  if (m5Look) {
                    setSelectedLook(m5Look);
                    navigateToPage('shop-the-look');
                  }
                } else if (menLooks.length > 0) {
                  // Default to first men's look
                  setSelectedLook(menLooks[0]);
                  navigateToPage('shop-the-look');
                }
              }}
              onProductClick={(productId) => {
                // Find the product and show its detail page
                const allProductsSearch = [...combinedProducts];
                const product = allProductsSearch.find(p => p.id === productId);
                if (product) {
                  handleProductClick(product);
                }
              }}
              wishlist={wishlist}
              cartCount={cartItems.length}
              cartItems={cartItems}
              onUpdateCartQuantity={handleUpdateCartQuantity}
              onRemoveFromCart={handleRemoveFromCart}
            />
          ) : (
            <ProductDetailPage
              productData={selectedProduct}
              onAddToCart={handleAddToCart}
              onWishlistToggle={handleWishlistToggle}
              onCheckout={() => navigateToPage('checkout')}
              onBack={handleBackNavigation}
              onShopTheLookClick={() => {
                // Navigate to SHEIN Peplum Look page for product w6
                if (selectedProduct?.id === 'w6') {
                  navigateToPage('shein-peplum-look');
                } else if (womenLooks.length > 0) {
                  // Navigate to the regular Shop the Look page
                  setSelectedLook(womenLooks[0]);
                  navigateToPage('shop-the-look');
                }
              }}
              onProductClick={(productId) => {
                // Find the product and show its detail page
                const allProductsSearch = [...combinedProducts];
                const product = allProductsSearch.find(p => p.id === productId);
                if (product) {
                  handleProductClick(product);
                }
              }}
              wishlist={wishlist}
              cartCount={cartItems.length}
              cartItems={cartItems}
              onUpdateCartQuantity={handleUpdateCartQuantity}
              onRemoveFromCart={handleRemoveFromCart}
            />
          )}
          <Footer onNavigate={(page) => navigateToPage(page as PageView)} />
        </>
      ) : currentPage === 'profile' ? (
        <>
          <ProfilePage 
            isLoggedIn={isLoggedIn}
            userData={userData}
            orders={userOrders}
            onNavigate={(page) => navigateToPage(page as PageView)}
            onLogout={() => {
              setIsLoggedIn(false);
              setUserData(undefined);
              setUserOrders([]);
              // Clear localStorage
              localStorage.removeItem('isLoggedIn');
              localStorage.removeItem('userData');
              localStorage.removeItem('userOrders');
              toast.success('Logged out successfully');
              navigateToPage('home');
            }}
            onEditProfile={(data) => {
              setUserData(data);
              toast.success('Profile updated successfully');
            }}
            onOpenAuthModal={() => setIsAuthModalOpen(true)}
            onBack={handleBackNavigation}
          />
          <Footer />
        </>
      ) : currentPage === 'wishlist' ? (
        <>
          <WishlistPage 
            wishlist={wishlist}
            allProducts={combinedProducts}
            onWishlistToggle={handleWishlistToggle}
            onAddToCart={handleAddToCart}
            onBack={handleBackNavigation}
          />
          <Footer />
        </>
      ) : currentPage === 'cart' ? (
        <>
          <CartPage
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateCartQuantity}
            onRemove={handleRemoveFromCart}
            onCheckoutClick={() => navigateToPage('checkout')}
            onBack={handleBackNavigation}
          />
          <Footer />
        </>
      ) : currentPage === 'checkout' ? (
        <>
          <CheckoutPage
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            onAddToCart={handleAddToCart}
            isLoggedIn={isLoggedIn}
            userData={userData}
            onLogin={(email) => {
              setIsLoggedIn(true);
              setUserData({
                name: email.split('@')[0],
                email: email,
                phone: '',
                address: ''
              });
            }}
            onOrderComplete={(orderNum) => {
              setOrderNumber(orderNum);
              
              // Add orders to user history if logged in
              if (isLoggedIn && cartItems.length > 0) {
                const newOrders: OrderData[] = cartItems.map((item) => ({
                  order_id: orderNum,
                  product_name: item.name,
                  price: item.price,
                  quantity: item.quantity,
                  date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
                  status: 'Processing',
                  image: item.image
                }));
                setUserOrders((prev) => [...newOrders, ...prev]);
              }
              
              navigateToPage('order-confirmation');
            }}
            onBack={handleBackNavigation}
          />
          <Footer onNavigate={(page) => navigateToPage(page as PageView)} />
        </>
      ) : currentPage === 'women' ? (
        <>
          <WomenPage 
            wishlist={wishlist} 
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleProductClick}
            onBack={handleBackNavigation}
            onCategoryClick={(category) => navigateToPage(category as PageView)}
            onNavigate={(page) => navigateToPage(page as PageView)}
          />
          <Footer onNavigate={(page) => navigateToPage(page as PageView)} />
        </>
      ) : currentPage === 'men' ? (
        <>
          <MenPage 
            wishlist={wishlist} 
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleProductClick}
            onNavigate={navigateToPage}
            onBack={handleBackNavigation}
          />
          <Footer />
        </>
      ) : currentPage === 'kids' ? (
        <>
          <GenericShoppingPage
            title="Kids Collection"
            products={kidsProductsData}
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleProductClick}
            onBack={handleBackNavigation}
            onNavigate={(page) => navigateToPage(page as PageView)}
          />
          <Footer />
        </>
      ) : currentPage === 'curve' ? (
        <>
          <GenericShoppingPage
            title="Curve Collection"
            products={curveProductsData}
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleProductClick}
            onBack={handleBackNavigation}
            onNavigate={(page) => navigateToPage(page as PageView)}
          />
          <Footer />
        </>
      ) : currentPage === 'baby' ? (
        <>
          <GenericShoppingPage
            title="Baby Collection"
            products={babyProductsData}
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleProductClick}
            onBack={handleBackNavigation}
            onNavigate={(page) => navigateToPage(page as PageView)}
          />
          <Footer />
        </>
      ) : currentPage === 'shoes' ? (
        <>
          <GenericShoppingPage
            title="Shoes Collection"
            products={shoesProductsData}
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleProductClick}
            onBack={handleBackNavigation}
            onNavigate={(page) => navigateToPage(page as PageView)}
          />
          <Footer />
        </>
      ) : currentPage === 'jewelry' ? (
        <>
          <GenericShoppingPage
            title="Jewelry & Accessories"
            products={jewelryProductsData}
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleProductClick}
            onBack={handleBackNavigation}
            onNavigate={(page) => navigateToPage(page as PageView)}
          />
          <Footer />
        </>
      ) : currentPage === 'newin' ? (
        <>
          <GenericShoppingPage
            title="New In"
            products={newInProductsData}
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleProductClick}
            onBack={handleBackNavigation}
            onNavigate={(page) => navigateToPage(page as PageView)}
          />
          <Footer />
        </>
      ) : currentPage === 'tops' ? (
        <>
          <TopsPage
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleCategoryProductClick}
            onBack={handleBackNavigation}
            onNavigate={(page) => navigateToPage(page as PageView)}
          />
          <Footer />
        </>
      ) : currentPage === 'dresses' ? (
        <>
          <DressesPage
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleCategoryProductClick}
            onBack={handleBackNavigation}
            onNavigate={(page) => navigateToPage(page as PageView)}
          />
          <Footer />
        </>
      ) : currentPage === 'bottoms' ? (
        <>
          <BottomsPage
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleCategoryProductClick}
            onBack={handleBackNavigation}
            onNavigate={(page) => navigateToPage(page as PageView)}
          />
          <Footer />
        </>
      ) : currentPage === 'activewear' ? (
        <>
          <ActivewearPage
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleCategoryProductClick}
            onBack={handleBackNavigation}
            onNavigate={(page) => navigateToPage(page as PageView)}
          />
          <Footer />
        </>
      ) : currentPage === 'women-shoes' ? (
        <>
          <WomenShoesPage
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleCategoryProductClick}
            onBack={handleBackNavigation}
            onNavigate={(page) => navigateToPage(page as PageView)}
          />
          <Footer />
        </>
      ) : currentPage === 'accessories' ? (
        <>
          <AccessoriesPage
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleCategoryProductClick}
            onBack={handleBackNavigation}
            onNavigate={(page) => navigateToPage(page as PageView)}
          />
          <Footer />
        </>
      ) : currentPage === 'sweaters' ? (
        <>
          <SweatersPage
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleCategoryProductClick}
            onBack={handleBackNavigation}
            onNavigate={(page) => navigateToPage(page as PageView)}
          />
          <Footer />
        </>
      ) : currentPage === 'skirts' ? (
        <>
          <SkirtsPage
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleCategoryProductClick}
            onBack={handleBackNavigation}
            onNavigate={(page) => navigateToPage(page as PageView)}
          />
          <Footer />
        </>
      ) : currentPage === 'swimwear' ? (
        <>
          <SwimwearPage
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleCategoryProductClick}
            onBack={handleBackNavigation}
            onNavigate={(page) => navigateToPage(page as PageView)}
          />
          <Footer />
        </>
      ) : currentPage === 'lingerie' ? (
        <>
          <LingeriePage
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleCategoryProductClick}
            onBack={handleBackNavigation}
            onNavigate={(page) => navigateToPage(page as PageView)}
          />
          <Footer />
        </>
      ) : currentPage === 'men-tshirts' ? (
        <>
          <MenCategoryPage
            category="Men"
            subcategory="T-Shirts"
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onNavigate={navigateToPage}
            onProductClick={handleProductClick}
            onBack={handleBackNavigation}
          />
          <Footer />
        </>
      ) : currentPage === 'men-shirts' ? (
        <>
          <MenCategoryPage
            category="Men"
            subcategory="Shirts"
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onNavigate={navigateToPage}
            onProductClick={handleProductClick}
            onBack={handleBackNavigation}
          />
          <Footer />
        </>
      ) : currentPage === 'men-hoodies' ? (
        <>
          <MenCategoryPage
            category="Men"
            subcategory="Hoodies & Sweatshirts"
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onNavigate={navigateToPage}
            onProductClick={handleProductClick}
            onBack={handleBackNavigation}
          />
          <Footer />
        </>
      ) : currentPage === 'men-jeans' ? (
        <>
          <MenCategoryPage
            category="Men"
            subcategory="Jeans & Pants"
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onNavigate={navigateToPage}
            onProductClick={handleProductClick}
            onBack={handleBackNavigation}
          />
          <Footer />
        </>
      ) : currentPage === 'men-shorts' ? (
        <>
          <MenCategoryPage
            category="Men"
            subcategory="Shorts"
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onNavigate={navigateToPage}
            onProductClick={handleProductClick}
            onBack={handleBackNavigation}
          />
          <Footer />
        </>
      ) : currentPage === 'men-activewear' ? (
        <>
          <MenCategoryPage
            category="Men"
            subcategory="Activewear"
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onNavigate={navigateToPage}
            onProductClick={handleProductClick}
            onBack={handleBackNavigation}
          />
          <Footer />
        </>
      ) : currentPage === 'men-suits' ? (
        <>
          <MenCategoryPage
            category="Men"
            subcategory="Suits & Blazers"
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onNavigate={navigateToPage}
            onProductClick={handleProductClick}
            onBack={handleBackNavigation}
          />
          <Footer />
        </>
      ) : currentPage === 'men-underwear' ? (
        <>
          <MenCategoryPage
            category="Men"
            subcategory="Underwear & Sleepwear"
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onNavigate={navigateToPage}
            onProductClick={handleProductClick}
            onBack={handleBackNavigation}
          />
          <Footer />
        </>
      ) : currentPage === 'hotdeals' ? (
        <>
          <HotDealsRewardsPage
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
          />
          <Footer />
        </>
      ) : currentPage === 'sale' ? (
        <>
          <SalePage
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleProductClick}
            onNavigate={(page) => navigateToPage(page as PageView)}
          />
          <Footer />
        </>
      ) : currentPage === 'women-sale' ? (
        <>
          <WomenSalePage
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleProductClick}
            onBack={handleBackNavigation}
          />
          <Footer />
        </>
      ) : currentPage === 'men-sale' ? (
        <>
          <MenSalePage
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleProductClick}
            onBack={handleBackNavigation}
          />
          <Footer />
        </>
      ) : currentPage === 'kids-sale' ? (
        <>
          <KidsSalePage
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            cartItems={cartItems}
            onCartUpdate={setCartItems}
            onProductClick={handleProductClick}
            onBack={handleBackNavigation}
          />
          <Footer />
        </>
      ) : currentPage === 'search' ? (
        <>
          <SearchResultsPage
            searchQuery={searchQuery}
            allProducts={combinedProducts}
            wishlist={wishlist}
            onWishlistToggle={handleWishlistToggle}
            onAddToCart={handleAddToCart}
            onProductClick={handleProductClick}
            onClearSearch={() => {
              setSearchQuery('');
              setCurrentPage(previousPage);
            }}
            onBack={() => setCurrentPage(previousPage)}
          />
          <Footer />
        </>
      ) : currentPage === '404' ? (
        <>
          <NotFoundPage
            onGoHome={() => setCurrentPage('home')}
            onGoBack={() => setCurrentPage(previousPage)}
          />
          <Footer />
        </>
      ) : currentPage === 'order-confirmation' ? (
        <>
          <OrderConfirmationPage
            orderNumber={orderNumber}
            onContinueShopping={() => setCurrentPage('home')}
          />
          <Footer />
        </>
      ) : currentPage === 'sitemap' ? (
        <>
          <Sitemap
            onNavigate={(page) => setCurrentPage(page as PageView)}
            currentPage={currentPage}
          />
          <Footer />
        </>
      ) : currentPage === 'login' ? (
        <>
          <LoginPage
            onSuccess={(email?: string) => {
              setIsLoggedIn(true);
              const userEmail = email || 'user@example.com';
              setUserData({
                name: userEmail.split('@')[0],
                email: userEmail,
                phone: 'Not provided',
                address: 'Not provided'
              });
              toast.success('Login successful!');
              setCurrentPage('home');
            }}
            onSwitchToSignup={() => setCurrentPage('signup')}
            onContinueAsGuest={() => setCurrentPage('guest')}
          />
          <Footer />
        </>
      ) : currentPage === 'signup' ? (
        <>
          <SignupPage
            onSuccess={(email?: string) => {
              setIsLoggedIn(true);
              const userEmail = email || 'user@example.com';
              setUserData({
                name: userEmail.split('@')[0],
                email: userEmail,
                phone: 'Not provided',
                address: 'Not provided'
              });
              toast.success('Account created successfully!');
              setCurrentPage('home');
            }}
            onSwitchToLogin={() => setCurrentPage('login')}
          />
          <Footer />
        </>
      ) : currentPage === 'guest' ? (
        <>
          <GuestLoginPage
            onSuccess={(email) => {
              if (email) {
                setIsLoggedIn(true);
                setUserData({
                  name: email.split('@')[0],
                  email: email,
                  phone: '',
                  address: ''
                });
                toast.success(`Welcome, ${email.split('@')[0]}! Logged in as guest.`);
              } else {
                toast.success('Continuing as guest');
              }
              setCurrentPage('home');
            }}
          />
          <Footer />
        </>
      ) : currentPage === 'about' ? (
        <>
          <PolicyPage
            title="About Us"
            onBack={() => setCurrentPage('home')}
            content={
              <div>
                <p>Welcome to our fashion e-commerce store! We're dedicated to bringing you the latest trends in fashion at affordable prices.</p>
                <h3 className="text-xl mt-6 mb-3"><strong>Our Mission</strong></h3>
                <p>To make fashion accessible to everyone, everywhere.</p>
                <h3 className="text-xl mt-6 mb-3"><strong>Our Story</strong></h3>
                <p>Founded in 2024, we've grown from a small startup to a global fashion destination, serving millions of customers worldwide.</p>
              </div>
            }
          />
          <Footer />
        </>
      ) : currentPage === 'contact' ? (
        <>
          <PolicyPage
            title="Contact Us"
            onBack={() => setCurrentPage('home')}
            content={
              <div>
                <p>We'd love to hear from you! Get in touch with our customer support team.</p>
                <h3 className="text-xl mt-6 mb-3"><strong>Customer Service</strong></h3>
                <p><strong>Email:</strong> support@fashion-store.com</p>
                <p><strong>Phone:</strong> 1-800-FASHION (1-800-327-4466)</p>
                <p><strong>Hours:</strong> Monday - Friday, 9AM - 6PM EST</p>
                <h3 className="text-xl mt-6 mb-3"><strong>Address</strong></h3>
                <p>123 Fashion Street<br />New York, NY 10001<br />United States</p>
              </div>
            }
          />
          <Footer />
        </>
      ) : currentPage === 'track-order' ? (
        <>
          <PolicyPage
            title="Track Your Order"
            onBack={() => setCurrentPage('home')}
            content={
              <div>
                <p>Track your order status and delivery information.</p>
                <h3 className="text-xl mt-6 mb-3"><strong>How to Track</strong></h3>
                <p>1. Enter your order number and email address</p>
                <p>2. Click "Track Order" to see real-time updates</p>
                <p>3. You'll receive email notifications at each stage</p>
                <h3 className="text-xl mt-6 mb-3"><strong>Delivery Times</strong></h3>
                <p><strong>Standard:</strong> 5-7 business days</p>
                <p><strong>Express:</strong> 2-3 business days</p>
                <p><strong>Next Day:</strong> Available for select areas</p>
              </div>
            }
          />
          <Footer />
        </>
      ) : currentPage === 'shipping' ? (
        <>
          <PolicyPage
            title="Shipping Information"
            onBack={() => setCurrentPage('home')}
            content={
              <div>
                <p>Learn about our shipping options and policies.</p>
                <h3 className="text-xl mt-6 mb-3"><strong>Shipping Methods</strong></h3>
                <p><strong>Standard Shipping:</strong> Free on orders over $35 (5-7 business days)</p>
                <p><strong>Express Shipping:</strong> $9.99 (2-3 business days)</p>
                <p><strong>Next Day:</strong> $19.99 (order by 2PM EST)</p>
                <h3 className="text-xl mt-6 mb-3"><strong>International</strong></h3>
                <p>We ship to over 200 countries worldwide. International shipping costs vary by destination.</p>
              </div>
            }
          />
          <Footer />
        </>
      ) : currentPage === 'returns' ? (
        <>
          <PolicyPage
            title="Returns & Refunds"
            onBack={() => setCurrentPage('home')}
            content={
              <div>
                <p>We want you to be completely satisfied with your purchase.</p>
                <h3 className="text-xl mt-6 mb-3"><strong>Return Policy</strong></h3>
                <p>Items can be returned within 30 days of delivery for a full refund.</p>
                <p>Items must be unworn, unwashed, and with all tags attached.</p>
                <h3 className="text-xl mt-6 mb-3"><strong>How to Return</strong></h3>
                <p>1. Log into your account and go to order history</p>
                <p>2. Select the items you wish to return</p>
                <p>3. Print the prepaid return label</p>
                <p>4. Drop off at any carrier location</p>
                <h3 className="text-xl mt-6 mb-3"><strong>Refunds</strong></h3>
                <p>Refunds are processed within 5-7 business days of receiving your return.</p>
              </div>
            }
          />
          <Footer />
        </>
      ) : currentPage === 'size-guide' ? (
        <>
          <PolicyPage
            title="Size Guide"
            onBack={() => setCurrentPage('home')}
            content={
              <div>
                <p>Find your perfect fit with our comprehensive size guide.</p>
                <h3 className="text-xl mt-6 mb-3"><strong>Women's Clothing</strong></h3>
                <p><strong>XS:</strong> Bust 30-32", Waist 23-25", Hips 33-35"</p>
                <p><strong>S:</strong> Bust 32-34", Waist 25-27", Hips 35-37"</p>
                <p><strong>M:</strong> Bust 34-36", Waist 27-29", Hips 37-39"</p>
                <p><strong>L:</strong> Bust 36-38", Waist 29-31", Hips 39-41"</p>
                <p><strong>XL:</strong> Bust 38-40", Waist 31-33", Hips 41-43"</p>
                <h3 className="text-xl mt-6 mb-3"><strong>Men's Clothing</strong></h3>
                <p><strong>S:</strong> Chest 34-36", Waist 28-30"</p>
                <p><strong>M:</strong> Chest 38-40", Waist 32-34"</p>
                <p><strong>L:</strong> Chest 42-44", Waist 36-38"</p>
                <p><strong>XL:</strong> Chest 46-48", Waist 40-42"</p>
                <p><strong>XXL:</strong> Chest 50-52", Waist 44-46"</p>
              </div>
            }
          />
          <Footer />
        </>
      ) : currentPage === 'privacy' ? (
        <>
          <PolicyPage
            title="Privacy Policy"
            onBack={() => setCurrentPage('home')}
            content={
              <div>
                <p><em>Last Updated: November 2024</em></p>
                <h3 className="text-xl mt-6 mb-3"><strong>Information We Collect</strong></h3>
                <p>We collect information you provide directly, such as when you create an account, make a purchase, or contact customer service.</p>
                <h3 className="text-xl mt-6 mb-3"><strong>How We Use Your Information</strong></h3>
                <p>• Process and fulfill your orders</p>
                <p>• Communicate with you about your account or purchases</p>
                <p>• Send marketing communications (with your consent)</p>
                <p>• Improve our website and customer experience</p>
                <h3 className="text-xl mt-6 mb-3"><strong>Data Security</strong></h3>
                <p>We implement industry-standard security measures to protect your personal information.</p>
                <h3 className="text-xl mt-6 mb-3"><strong>Your Rights</strong></h3>
                <p>You have the right to access, correct, or delete your personal information at any time.</p>
              </div>
            }
          />
          <Footer />
        </>
      ) : currentPage === 'terms' ? (
        <>
          <PolicyPage
            title="Terms of Service"
            onBack={() => setCurrentPage('home')}
            content={
              <div>
                <p><em>Last Updated: November 2024</em></p>
                <h3 className="text-xl mt-6 mb-3"><strong>Acceptance of Terms</strong></h3>
                <p>By accessing and using this website, you accept and agree to be bound by these Terms of Service.</p>
                <h3 className="text-xl mt-6 mb-3"><strong>Use of Service</strong></h3>
                <p>You agree to use our service only for lawful purposes and in accordance with these Terms.</p>
                <h3 className="text-xl mt-6 mb-3"><strong>Product Information</strong></h3>
                <p>We strive to display product information accurately. However, we do not warrant that product descriptions or other content is error-free.</p>
                <h3 className="text-xl mt-6 mb-3"><strong>Pricing</strong></h3>
                <p>All prices are subject to change without notice. We reserve the right to refuse or cancel any order for any reason.</p>
                <h3 className="text-xl mt-6 mb-3"><strong>Intellectual Property</strong></h3>
                <p>All content on this website is the property of our company and protected by copyright laws.</p>
              </div>
            }
          />
          <Footer />
        </>
      ) : (
        <>

      {/* Hero Carousel */}
      <div className="mt-8">
        <Carousel />
      </div>

      {/* FOR YOU Section */}
      <div className="max-w-[1440px] mx-auto px-12 py-16">
        {/* Section Title */}
        <div className="text-center mb-12 relative">
          <div className="flex items-center justify-center gap-8">
            <div className="flex-1 h-px bg-black"></div>
            <h2 className="text-4xl px-8">FOR YOU</h2>
            <div className="flex-1 h-px bg-black"></div>
          </div>
        </div>

        {/* NEW IN Subsection */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl">NEW IN</h3>
            <button
              onClick={() => setShowAllProducts(!showAllProducts)}
              className="text-base hover:underline transition-all"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              {showAllProducts ? 'SHOW LESS' : 'VIEW ALL'}
            </button>
          </div>

          {/* Products Grid */}
          {searchQuery.trim() && filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No products found for "{searchQuery}"</p>
              <p className="text-gray-500 mt-2">Try a different search term</p>
            </div>
          ) : (
            <div
              className={`grid gap-6 ${
                showAllProducts ? 'grid-cols-4' : 'grid-cols-4'
              } transition-all`}
            >
              {displayedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  isInWishlist={wishlist.includes(product.id)}
                  onWishlistToggle={handleWishlistToggle}
                  onAddToCart={handleAddToCart}
                  onClick={() => handleProductClick(product)}
                />
              ))}
            </div>
          )}

          {/* Show more indicator */}
          {!showAllProducts && filteredProducts.length > 8 && (
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Showing 8 of {filteredProducts.length} products
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Perks Section */}
      <PerksSection />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer onNavigate={(page) => setCurrentPage(page as PageView)} />
        </>
      )}
    </div>
  );
}
