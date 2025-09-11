import tshirts from "../../src/assets/CandyShake/tshirts.jpg";
import towel from "../../src/assets/CandyShake/towel.jpg";
import skinnies from "../../src/assets/CandyShake/skinnies.jpg";
import router from "../../src/assets/CandyShake/router.jpg";
import creme from "../../src/assets/CandyShake/creme.jpg";
import washer from "../../src/assets/CandyShake/washer.jpg";
import bottle from "../../src/assets/CandyShake/bottle.jpg";
import blanket from "../../src/assets/CandyShake/blanket.jpg";
import { TrendingDown } from "lucide-react";

export const products = [
  {
    id: "prod-1",
    title: "4-Pack White Men’s T-Shirts",
    price: "$12.00",
    rating: 4,
    image: tshirts,
    gallery: [tshirts],
    description: "Soft cotton t-shirts perfect for everyday wear. Comes in a pack of four.",
    category: "Clothing",
    stock: 120,
    brand: "Generic",
    featured: true,  // Marked as featured
    popular: true,
  },
  {
    id: "prod-2",
    title: "Wearable Bath Towel Dress",
    price: "$18.00",
    rating: 5,
    image: towel,
    gallery: [towel],
    description: "Absorbent and wearable towel that doubles as a dress.",
    category: "Home & Living",
    stock: 60,
    brand: "SoftWear",
    featured: true,  // Marked as featured
    popular: true,
  },
  {
    id: "prod-3",
    title: "Women’s High-Waist Skinnies",
    price: "$25.00",
    rating: 3,
    image: skinnies,
    gallery: [skinnies],
    description: "Stretchable skinny jeans designed for comfort and style.",
    category: "Fashion",
    stock: 85,
    brand: "FitWear",
    featured: false,  // Not featured
    popular: false,
  },
  {
    id: "prod-4",
    title: "KuWFi WiFi Repeater",
    price: "$35.00",
    rating: 4,
    image: router,
    gallery: [router],
    description: "Boost your internet range with this compact WiFi repeater.",
    category: "Tech Deals",
    stock: 40,
    brand: "KuWFi",
    featured: false,  // Not featured
    popular: true,
  },
  {
    id: "prod-5",
    title: "Hydrating Face Creme",
    price: "$15.00",
    rating: 5,
    image: creme,
    gallery: [creme],
    description: "Moisturizing face cream that hydrates and nourishes your skin.",
    category: "Beauty & Personal Care",
    stock: 150,
    brand: "GlowCare",
    featured: true,  // Marked as featured
    popular: false,
  },
  {
    id: "prod-6",
    title: "Mini Portable Washer",
    price: "$45.00",
    rating: 4,
    image: washer,
    gallery: [washer],
    description: "Compact washing machine suitable for small apartments.",
    category: "Home Appliances",
    stock: 30,
    brand: "CleanPro",
    featured: false,  // Not featured
    popular: false,
  },
  {
    id: "prod-7",
    title: "Stainless Steel Water Bottle",
    price: "$15.00",
    rating: 5,
    image: bottle,
    gallery: [bottle],
    description: "Durable stainless steel water bottle with insulation.",
    category: "Expat Essentials",
    stock: 200,
    brand: "HydroLife",
    featured: true,  // Marked as featured
    popular: true,
  },
  {
    id: "prod-8",
    title: "Warm Cozy Blanket",
    price: "$30.00",
    rating: 4,
    image: blanket,
    gallery: [blanket],
    description: "Soft fleece blanket designed for comfort and warmth.",
    category: "Home & Living",
    stock: 70,
    brand: "CozyHome",
    featured: true,  // Marked as featured
    popular: false,
  },
  {
    id: "prod-9",
    title: "Warm Cozy Blanket-2",
    price: "$40.00",
    rating: 5,
    image: blanket,
    gallery: [blanket],
    description: "Soft fleece blanket designed for comfort and warmth.",
    category: "Home & Living",
    stock: 0,
    brand: "LozyHomes",
    featured: false,  // Not featured
    popular: false,
  },
  // Adding a new category for Most Popular Products
  {
    id: "prod-10",
    title: "Most Popular Item",
    price: "$50.00",
    rating: 5,
    image: towel,
    gallery: [towel],
    description: "A must-have product, beloved by many!",
    category: "Most Popular Products",
    stock: 100,
    brand: "PopularBrand",
    featured: true,  // Marked as featured
    popular: true,
  },
];
