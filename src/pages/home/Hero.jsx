import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import fx1 from "../../pictures/hue/fx1.jpg";
import fx2 from "../../pictures/hue/fx2.jpg";
import fx3 from "../../pictures/hue/fx3.jpg";
import fx4 from "../../pictures/hue/fx4.jpg";
import fx5 from "../../pictures/hue/fx5.jpg";
import fx6 from "../../pictures/hue/pd61.jpg";
import px21 from "../../pictures/hue/px21.webp";
import jk6 from "../../pictures/wall/jk6.jpg";
import jk9 from "../../pictures/wall/jk9.jpg";
import jk11 from "../../pictures/wall/jk11.jpg";
import jk5 from "../../pictures/wall/jk5.jpg";
import jk3 from "../../pictures/wall/jk3.jpg";
import px1 from "../../pictures/hue/px1.jpg";
import px2 from "../../pictures/hue/px2.jpg";
import px3 from "../../pictures/hue/px3.jpg";
import px4 from "../../pictures/hue/px4.jpg";
import px9 from "../../pictures/hue/px9.webp";
import px10 from "../../pictures/hue/px10.webp";
import px11 from "../../pictures/hue/px11.jpg";
import px12 from "../../pictures/hue/px12.jpg";
import px13 from "../../pictures/hue/px13.jpg";
import px14 from "../../pictures/hue/px14.jpg";
import px15 from "../../pictures/hue/px15.jpg";
import px16 from "../../pictures/hue/px16.jpg";
import px18 from "../../pictures/hue/px18.jpg";
import px19 from "../../pictures/hue/px19.png";
import px20 from "../../pictures/hue/px20.jpg";
import px22 from "../../pictures/hue/px22.avif";
import px23 from "../../pictures/hue/px23.avif";
import px24 from "../../pictures/hue/px24.avif";
import px29 from "../../pictures/hue/px29.jpg";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowRotateBack,
  faChevronLeft,
  faChevronRight,
  faLocationDot,
  faLock,
  faStar,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const popularItems = [
  { src: fx1, name: "Monty jacket", price: "$150.00" },
  { src: fx2, name: "Monty jacket", price: "$150.00" },
  { src: fx3, name: "Monty jacket", price: "$150.00" },
  { src: fx4, name: "Monty jacket", price: "$150.00" },
  { src: fx5, name: "Monty jacket", price: "$150.00" },
  { src: fx6, name: "Monty jacket", price: "$150.00" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const totalStars = 5; // Adjust as needed

const slides = [
  {
    id: 1,
    title: "Elevating Women, Defining Style.",
    description: "Shop Exclusive Collections",
    buttonText: "Shop Now",
    image: jk11,
  },
  {
    id: 2,
    title: "New Arrivals",
    description: "Discover the Latest Trends",
    buttonText: "Explore Now",
    image: jk5,
  },
  {
    id: 3,
    title: "New Arrivals",
    description: "Discover the Latest Trends",
    buttonText: "Explore Now",
    image: jk3,
  },
];
const HomeHeroSection = () => {
  const SLIDE_INTERVAL = 5000; // 5 seconds per slide
  const LOADING_INTERVAL = 100; // 0.1 seconds per loading tick

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const loadingTimer = setInterval(() => {
      setLoadingProgress(
        (prev) => prev + 100 / (SLIDE_INTERVAL / LOADING_INTERVAL)
      );
    }, LOADING_INTERVAL);

    const slideTimer = setTimeout(() => {
      handleNext();
    }, SLIDE_INTERVAL);

    return () => {
      clearInterval(loadingTimer);
      clearTimeout(slideTimer);
    };
  }, [currentSlide]);

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    setLoadingProgress(0);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    setLoadingProgress(0);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  // Slider settings
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 3000, // Set autoplay interval to 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    {
      src: px1,
      cate: "Activewear",
      text: "Professional Pinstripe Blazer",
      price: "$250.00",
    },
    {
      src: px2,
      cate: "Work & Office",
      text: "Relaxed Fit Joggers",
      price: "$199.99",
    },
    {
      src: px3,
      cate: "Evening Dresses",
      text: "Urban Chic Ensemble",
      price: "$210.50",
    },
    {
      src: px4,
      cate: "Image 4",
      text: "Weekend Wanderlust Wardrobe",
      price: "$150.34",
    },
  ];

  const images2 = [
    {
      src: px22,
      text: "Men",
      subtext: "Step into sophistication.",
    },
    {
      src: px23,
      text: "Women",
      subtext: "Confidence you can wear.",
    },
    {
      src: px24,
      text: "Shoes",
      subtext: "Walk in comfort & style.",
    },
  ];

  const images3 = [
    { src: px11 },
    { src: px12 },
    { src: px13 },
    { src: px14 },
    { src: px15 },
    { src: px16 },
  ];

  const [activeCategory, setActiveCategory] = useState("T-Shirts");
  const [categoryCarouselIndex, setCategoryCarouselIndex] = useState(0);

  const nextCategorySlide = () => {
    const totalItems = categories[activeCategory].length;
    if (categoryCarouselIndex < totalItems - 4) {
      setCategoryCarouselIndex((prev) => prev + 1);
    }
  };

  const prevCategorySlide = () => {
    if (categoryCarouselIndex > 0) {
      setCategoryCarouselIndex((prev) => prev - 1);
    }
  };

  const categories = {
    "T-Shirts": [
      {
        id: 1,
        image: fx1,
        alt: "Our Legacy T-shirt",
        badge: "GOLD CUP",
        designer: "Our Legacy",
        price: "N261,000",
        status: "quick-buy",
        sizes: ["S", "M", "L", "XL"],
        repeatCount: 1,
      },
      {
        id: 2,
        image: fx2,
        alt: "Charles Jeffery T-shirt",
        designer: "Charles Jeffery",
        price: "N289,000",
        status: "sold-out",
        repeatCount: 1,
      },
      {
        id: 3,
        image: fx3,
        alt: "Chorles Jeffery T-shirt",
        designer: "Chorles Jeffery",
        price: "N275,000",
        status: "quick-buy",
        sizes: ["M", "L"],
        repeatCount: 1,
      },
      {
        id: 4,
        image: fx4,
        alt: "Premium Cotton T-shirt",
        badge: "LIMITED",
        designer: "Premium Cotton",
        price: "N310,000",
        status: "quick-buy",
        sizes: ["S", "M", "L", "XL", "XXL"],
        repeatCount: 1,
      },
      {
        id: 5,
        image: fx5,
        alt: "Classic White T-shirt",
        designer: "Classic White",
        price: "N240,000",
        status: "sold-out",
        repeatCount: 1,
      },
      {
        id: 6,
        image: fx6,
        alt: "Black Edition T-shirt",
        badge: "EXCLUSIVE",
        designer: "Black Edition",
        price: "N330,000",
        status: "quick-buy",
        sizes: ["S", "L"],
        repeatCount: 1,
      },
      {
        id: 7,
        image: px1,
        alt: "Oversized Fit T-shirt",
        designer: "Oversized Fit",
        price: "N295,000",
        status: "quick-buy",
        sizes: ["L", "XL"],
        repeatCount: 1,
      },
      {
        id: 8,
        image: px2,
        alt: "Vintage Wash T-shirt",
        designer: "Vintage Wash",
        price: "N265,000",
        status: "sold-out",
        repeatCount: 1,
      },
    ],

    Ashluxe: [
      {
        id: 1,
        image: px3,
        alt: "Ashluxe Graphic Tee",
        badge: "EXCLUSIVE",
        designer: "Ashluxe",
        price: "N310,000",
        status: "quick-buy",
        sizes: ["S", "M", "L"],
        repeatCount: 1,
      },
      {
        id: 2,
        image: px4,
        alt: "Ashluxe Monogram Tee",
        designer: "Ashluxe",
        price: "N290,000",
        status: "sold-out",
        repeatCount: 1,
      },
      {
        id: 3,
        image: px9,
        alt: "Ashluxe Cityscape Tee",
        badge: "LIMITED",
        designer: "Ashluxe",
        price: "N345,000",
        status: "quick-buy",
        sizes: ["M", "L", "XL"],
        repeatCount: 1,
      },
      {
        id: 4,
        image: px10,
        alt: "Ashluxe Flame Tee",
        designer: "Ashluxe",
        price: "N270,000",
        status: "quick-buy",
        sizes: ["S", "M"],
        repeatCount: 1,
      },
      {
        id: 5,
        image: px11,
        alt: "Ashluxe Sporty Tee",
        designer: "Ashluxe",
        price: "N250,000",
        status: "sold-out",
        repeatCount: 1,
      },
      {
        id: 6,
        image: px12,
        alt: "Ashluxe Culture Tee",
        badge: "GOLD CUP",
        designer: "Ashluxe",
        price: "N360,000",
        status: "quick-buy",
        sizes: ["L", "XL"],
        repeatCount: 1,
      },
      {
        id: 7,
        image: px13,
        alt: "Ashluxe Street Art Tee",
        designer: "Ashluxe",
        price: "N280,000",
        status: "quick-buy",
        sizes: ["M", "L"],
        repeatCount: 1,
      },
      {
        id: 8,
        image: px14,
        alt: "Ashluxe Signature Tee",
        designer: "Ashluxe",
        price: "N320,000",
        status: "sold-out",
        repeatCount: 1,
      },
    ],
    "Wood Wood": [
      {
        id: 1,
        image: px15,
        alt: "Wood Wood Logo Tee",
        badge: "LIMITED",
        designer: "Wood Wood",
        price: "N290,000",
        status: "quick-buy",
        sizes: ["S", "M", "L"],
        repeatCount: 1,
      },
      {
        id: 2,
        image: px16,
        alt: "Wood Wood Statement Tee",
        designer: "Wood Wood",
        price: "N265,000",
        status: "sold-out",
        repeatCount: 1,
      },
      {
        id: 3,
        image: px1,
        alt: "Wood Wood Artistic Tee",
        designer: "Wood Wood",
        price: "N300,000",
        status: "quick-buy",
        sizes: ["M", "L", "XL"],
        repeatCount: 1,
      },
      {
        id: 4,
        image: px18,
        alt: "Wood Wood Bold Tee",
        badge: "EXCLUSIVE",
        designer: "Wood Wood",
        price: "N310,000",
        status: "quick-buy",
        sizes: ["S", "M", "XL"],
        repeatCount: 1,
      },
      {
        id: 5,
        image: px19,
        alt: "Wood Wood Minimal Tee",
        designer: "Wood Wood",
        price: "N240,000",
        status: "sold-out",
        repeatCount: 1,
      },
      {
        id: 6,
        image: px20,
        alt: "Wood Wood Grid Tee",
        designer: "Wood Wood",
        price: "N270,000",
        status: "quick-buy",
        sizes: ["L", "XL"],
        repeatCount: 1,
      },
      {
        id: 7,
        image: px21,
        alt: "Wood Wood Vintage Tee",
        badge: "GOLD CUP",
        designer: "Wood Wood",
        price: "N285,000",
        status: "quick-buy",
        sizes: ["S", "M", "L"],
        repeatCount: 1,
      },
      {
        id: 8,
        image: px3,
        alt: "Wood Wood Monochrome Tee",
        designer: "Wood Wood",
        price: "N295,000",
        status: "sold-out",
        repeatCount: 1,
      },
    ],
  };

  const visibleProducts = categories[activeCategory].slice(
    categoryCarouselIndex,
    categoryCarouselIndex + 4
  );

  useEffect(() => {
    setCategoryCarouselIndex(0);
  }, [activeCategory]);

  const [currentArrivalsIndex, setCurrentArrivalsIndex] = useState(0);
  const itemsPerPage = 4;

  const nextArrivalsSlide = () => {
    if (currentArrivalsIndex < newArrivals.length - itemsPerPage) {
      setCurrentArrivalsIndex((prev) => prev + 1); // Move by 1 item
    }
  };

  const prevArrivalsSlide = () => {
    if (currentArrivalsIndex > 0) {
      setCurrentArrivalsIndex((prev) => prev - 1); // Move by 1 item
    }
  };

  const newArrivals = [
    {
      id: 1,
      image: px1,
      alt: "Premium Cotton T-Shirt",
      badge: "NEW",
      designer: "Premium Cotton",
      price: "N310,000",
      status: "quick-buy",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 2,
      image: px2,
      alt: "Vintage Wash T-Shirt",
      designer: "Vintage Wash",
      price: "N265,000",
      status: "sold-out",
    },
    {
      id: 3,
      image: px3,
      alt: "Ashluxe Graphic Tee",
      badge: "LIMITED",
      designer: "Ashluxe",
      price: "N345,000",
      status: "quick-buy",
      sizes: ["M", "L", "XL"],
    },
    {
      id: 4,
      image: px4,
      alt: "Ashluxe Monogram Tee",
      designer: "Ashluxe",
      price: "N290,000",
      status: "quick-buy",
      sizes: ["S", "M"],
    },
    {
      id: 5,
      image: px16,
      alt: "Classic White T-Shirt",
      badge: "NEW",
      designer: "Classic White",
      price: "N240,000",
      status: "quick-buy",
      sizes: ["S", "M", "L"],
    },
    {
      id: 6,
      image: px18,
      alt: "Black Edition T-Shirt",
      badge: "EXCLUSIVE",
      designer: "Black Edition",
      price: "N330,000",
      status: "quick-buy",
      sizes: ["S", "L"],
    },
    {
      id: 7,
      image: px2,
      alt: "Oversized Fit T-Shirt",
      designer: "Oversized Fit",
      price: "N295,000",
      status: "sold-out",
    },
    {
      id: 8,
      image: px3,
      alt: "Wood Wood Logo Tee",
      badge: "NEW",
      designer: "Wood Wood",
      price: "N290,000",
      status: "quick-buy",
      sizes: ["S", "M", "L"],
    },
    {
      id: 9,
      image: px9,
      alt: "Ashluxe Cityscape Tee",
      badge: "LIMITED",
      designer: "Ashluxe",
      price: "N345,000",
      status: "quick-buy",
      sizes: ["L", "XL"],
    },
    {
      id: 10,
      image: px10,
      alt: "Ashluxe Flame Tee",
      designer: "Ashluxe",
      price: "N270,000",
      status: "quick-buy",
      sizes: ["M", "L"],
    },
    {
      id: 11,
      image: px11,
      alt: "Wood Wood Bold Tee",
      badge: "EXCLUSIVE",
      designer: "Wood Wood",
      price: "N310,000",
      status: "quick-buy",
      sizes: ["S", "M", "XL"],
    },
    {
      id: 12,
      image: px12,
      alt: "Wood Wood Grid Tee",
      designer: "Wood Wood",
      price: "N270,000",
      status: "quick-buy",
      sizes: ["L", "XL"],
    },
  ];

  const visibleArrivals = newArrivals.slice(
    currentArrivalsIndex,
    currentArrivalsIndex + itemsPerPage
  );

  return (
    <>
      <section className="overflow-x-hidden ">
        <div className="w-full h-screen bg-gray-100 -mt-16 relative overflow-hidden">
          <AnimatePresence>
            {slides.map((slide, index) =>
              index === currentSlide ? (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <div className="relative flex items-center justify-center h-screen bg-gray-200">
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

                    {/* Slide Content */}
                    <div className="absolute left-6 md:left-16 top-1/3 text-left text-white z-10 max-w-md space-y-4">
                      <motion.h1
                        className="text-4xl md:text-6xl font-bold leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        className="text-md md:text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        {slide.description}
                      </motion.p>

                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
                      >
                        {slide.buttonText}
                      </motion.button>
                    </div>

                    {/* Background Image */}
                    <img
                      src={slide.image}
                      alt="Fashion Slide"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
            <button
              onClick={handlePrev}
              className="bg-white p-1 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-black text-base"
              />
            </button>

            {/* Progress Circle */}
            <div className="relative w-5 h-5">
              <svg
                className="w-full h-full"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="opacity-25 text-gray-300"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset={100 - loadingProgress}
                  className="text-black transition-all duration-300"
                />
              </svg>
            </div>

            <button
              onClick={handleNext}
              className="bg-white p-1 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-black text-base"
              />
            </button>
          </div>
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-5 py-12 font-sans"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Category Navigation */}
          <motion.div
            className="flex items-center border-b border-gray-200 pb-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex space-x-1 relative">
              {Object.keys(categories).map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setCategoryCarouselIndex(0);
                  }}
                  className={`text-lg px-4 py-2 relative transition-all ${
                    activeCategory === category
                      ? "text-black font-medium"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {category}
                  {activeCategory === category && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black -mb-6"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="ml-auto flex items-center space-x-4">
              <button
                onClick={prevCategorySlide}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                disabled={categoryCarouselIndex === 0}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className={`w-4 h-4 ${
                    categoryCarouselIndex === 0
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                />
              </button>
              <button
                onClick={nextCategorySlide}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                disabled={
                  categoryCarouselIndex >= categories[activeCategory].length - 4
                }
              >
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={`w-4 h-4 ${
                    categoryCarouselIndex >=
                    categories[activeCategory].length - 4
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                />
              </button>
              <button className="text-sm font-medium text-gray-600 hover:text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-all">
                View all
              </button>
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {visibleProducts.map((product) => (
              <motion.div
                key={product.id}
                className="group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-square mb-4 rounded-lg bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-white text-black text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                      {product.badge}
                    </div>
                  )}

                  {/* Sold Out Button */}
                  {product.status === "sold-out" && (
                    <div className="absolute top-3 right-3 bg-white bg-opacity-80 text-black text-xs px-2 py-1 rounded-full font-medium">
                      SOLD OUT
                    </div>
                  )}

                  {/* Quick Buy Button */}
                  {product.status === "quick-buy" && (
                    <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pb-4">
                      <div className="bg-white py-2 px-3 rounded-full shadow-md flex items-center">
                        <select className="bg-transparent border-none text-xs focus:outline-none mr-2">
                          {product.sizes?.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                        <button className="bg-black text-white text-xs px-3 py-1 rounded-full hover:bg-gray-800 transition-colors">
                          QUICK BUY
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="text-center px-2">
                  <h2 className="text-md font-medium text-gray-900 mb-1 truncate">
                    {product.designer}
                  </h2>
                  <p className="text-gray-600 text-sm">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Slide Indicators */}
          <motion.div
            className="flex justify-center mt-8 space-x-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {Array.from({
              length: Math.ceil(categories[activeCategory].length / 4),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCategoryCarouselIndex(index * 4)}
                className={`w-2 h-2 rounded-full transition-all ${
                  categoryCarouselIndex >= index * 4 &&
                  categoryCarouselIndex < (index + 1) * 4
                    ? "bg-black w-4"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </motion.div>
        </motion.div>

        <div className="relative w-full h-[800px] sm:h-[1000px] bg-zinc-950">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-scroll lg:bg-fixed opacity-30"
            style={{ backgroundImage: `url(${px20})` }}
          ></div>
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Foreground Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-end p-4 space-y-6 lg:pr-12 xl:pr-24">
            {/* Image */}
            <motion.div
              className="w-[300px] h-[350px] sm:w-[350px] sm:h-[400px] md:w-[400px] md:h-[450px] lg:w-[350px] lg:h-[400px] xl:w-[450px] xl:h-[550px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <img
                src={px18}
                alt="Collection"
                className="w-full h-full object-cover shadow-2xl"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              className="text-white max-w-[90%] lg:max-w-[600px] text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-semibold mb-6">
                Explore Our Exquisite <br />
                <span className="text-[#16bb7c]">Bag Collection</span>
              </h1>
              <button className="px-8 py-3.5 text-sm md:text-base border border-gray-300 text-white font-bold uppercase tracking-wide hover:text-[#16bb7c]">
                <a href="#" className="no-underline">
                  VIEW COLLECTION
                </a>
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left lg:pr-8 xl:pr-12 p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-xs sm:text-sm font-semibold text-[#292828] mb-2 uppercase tracking-widest">
              Work & Office Attire
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.7rem] text-black mb-4 font-bold leading-tight">
              Professional Pinstripe Blazers Collection
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 mb-6">
              Elevate your workwear with our Professional Pinstripe Blazers
              Collection, where tailored sophistication meets modern confidence
              for a powerfully polished office look.
            </p>
            <motion.button
              className="w-full sm:w-[150px] py-2 sm:py-3 rounded-sm bg-transparent border-[1.9px] border-gray-900 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="#"
                className="no-underline text-gray-900 hover:text-[#16bb7c] font-semibold text-xs sm:text-sm uppercase"
              >
                Shop Now
              </a>
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={px19}
              alt="Professional Pinstripe Blazers"
              className="w-full max-w-[700px] h-auto lg:h-[635px] object-cover shadow-lg"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-full h-[800px] sm:h-[1000px] bg-zinc-950"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Background Image with Opacity */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-scroll lg:bg-fixed opacity-30"
            style={{ backgroundImage: `url(${px21})` }}
          ></div>

          {/* Content Container */}
          <div className="absolute lg:-top-36 lg:left-0 top-1/2 left-1/2 lg:translate-x-0 lg:translate-y-0 -translate-x-1/2 -translate-y-1/2 p-4 sm:p-10 flex flex-col items-center lg:items-start">
            {/* Image - Slightly larger on desktop */}
            <motion.div
              className="w-[280px] h-[330px] sm:w-[350px] sm:h-[400px] md:w-[400px] md:h-[450px] lg:w-[380px] lg:h-[430px] xl:w-[400px] xl:h-[450px] mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <img
                src={px29}
                alt="Collection"
                className="w-full h-full object-cover shadow-2xl"
              />
            </motion.div>

            {/* Text Content - Subtle scaling */}
            <motion.div
              className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[380px] xl:w-[400px] text-white text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-[32px] font-semibold mb-2 sm:mb-4">
                Discover the allure of fashion reinvented!
              </h1>
              <p className="text-xs sm:text-sm md:text-[15px] lg:text-[15px] text-[#16bb7c] mb-4 sm:mb-6">
                Dive into a world of style with our latest collection! Shop now
                and redefine your wardrobe narrative!
              </p>
              <motion.button
                className="px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm border border-gray-300 text-white font-bold uppercase tracking-wide hover:bg-[#128a5f] hover:scale-105 transition-all duration-300 shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <a href="#" className="no-underline">
                  VIEW COLLECTION
                </a>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 px-4 md:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {images2.map((image, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Image with hover zoom */}
              <div className="w-full overflow-hidden rounded-t-xl">
                <motion.img
                  src={image.src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>

              {/* Text Below Image */}
              <div className="p-6">
                <motion.p
                  className="text-lg font-semibold text-gray-900"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {image.text}
                </motion.p>
                <motion.p
                  className="mt-2 text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {image.subtext}
                </motion.p>

                {/* Shop Now Button */}
                <motion.button
                  className="mt-5 inline-flex items-center text-sm font-medium text-white bg-black px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  Shop now
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="ml-2 w-3 h-3 text-white"
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div>
          {/* Brand Testimonial Section */}
          <div
            className="w-full min-h-screen bg-cover bg-center bg-scroll lg:bg-fixed flex flex-col justify-center items-center"
            style={{ backgroundImage: `url(${jk9})` }}
          >
            {/* Star Rating */}
            <motion.div
              className="flex gap-2 mb-6"
              initial={{ opacity: 0, y: -50 }} // Start from top
              animate={{ opacity: 1, y: 0 }} // Animate to the normal position
              transition={{ duration: 1 }}
            >
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className="text-yellow-500 text-lg"
                />
              ))}
            </motion.div>

            {/* Testimonial Text */}
            <motion.h1
              className="text-white text-lg md:text-xl lg:text-2xl text-center px-6 md:px-12 lg:px-48 leading-relaxed"
              initial={{ opacity: 0, x: -100 }} // Start from the left
              animate={{ opacity: 1, x: 0 }} // Animate to the normal position
              transition={{ duration: 1 }}
            >
              ”FemmeWardrobe is my fashion sanctuary! The curated collection
              effortlessly blends chic trends with timeless elegance, making
              every purchase a delightful discovery. The quality of their pieces
              is unmatched, and I appreciate the brand's commitment to
              sustainable fashion. What truly sets FemmeWardrobe apart is their
              customer-centric approach.”
            </motion.h1>

            {/* Testimonial Author */}
            <motion.h1
              className="mt-8 text-white text-sm md:text-base font-light"
              initial={{ opacity: 0, y: 50 }} // Start from bottom
              animate={{ opacity: 1, y: 0 }} // Animate to the normal position
              transition={{ duration: 1 }}
            >
              Sarah M., Devoted FemmeWardrobe Fan
            </motion.h1>
          </div>

          <div className="mt-24 px-6 text-slate-950 font-bold md:px-12 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Secure Payments */}
            <motion.div
              className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 relative group"
              initial={{ opacity: 0, x: -100 }} // Start from left
              animate={{ opacity: 1, x: 0 }} // Animate to normal position
              transition={{ duration: 0.8 }}
            >
              <div className="icon-container relative inline-block">
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <FontAwesomeIcon
                  icon={faLock}
                  className="text-slate-950 h-6 text-3xl mb-4 relative z-10 group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <h1 className="text-xl mb-2">Secure Payments</h1>
              <p className="text-gray-600 font-semibold">
                Shop with confidence knowing that your transactions are
                safeguarded.
              </p>
            </motion.div>

            {/* Free Shipping */}
            <motion.div
              className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 relative group"
              initial={{ opacity: 0, x: 100 }} // Start from right
              animate={{ opacity: 1, x: 0 }} // Animate to normal position
              transition={{ duration: 0.8 }}
            >
              <div className="icon-container relative inline-block">
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <FontAwesomeIcon
                  icon={faTruck}
                  className="text-slate-950 h-6 text-3xl mb-4 relative z-10 group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <h1 className="text-xl mb-2">Free Shipping</h1>
              <p className="text-gray-600 font-semibold">
                Shopping with no extra charges – savor the liberty of
                complimentary shipping on every order.
              </p>
            </motion.div>

            {/* Easy Returns */}
            <motion.div
              className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 relative group"
              initial={{ opacity: 0, y: 100 }} // Start from bottom
              animate={{ opacity: 1, y: 0 }} // Animate to normal position
              transition={{ duration: 0.8 }}
            >
              <div className="icon-container relative inline-block">
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <FontAwesomeIcon
                  icon={faArrowRotateBack}
                  className="text-slate-950 h-6 text-3xl mb-4 relative z-10 group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <h1 className="text-xl mb-2">Easy Returns</h1>
              <p className="text-gray-600 font-semibold">
                With our hassle-free Easy Returns, changing your mind has never
                been more convenient.
              </p>
            </motion.div>

            {/* Order Tracking */}
            <motion.div
              className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 relative group"
              initial={{ opacity: 0, y: -100 }} // Start from top
              animate={{ opacity: 1, y: 0 }} // Animate to normal position
              transition={{ duration: 0.8 }}
            >
              <div className="icon-container relative inline-block">
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-slate-950 h-6 text-3xl mb-4 relative z-10 group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <h1 className="text-xl mb-2">Order Tracking</h1>
              <p className="text-gray-600 font-semibold">
                Stay in the loop with our Order Tracking feature – from checkout
                to your doorstep.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 py-12 font-sans">
          <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-8">
            <div>
              <h1 className="text-center text-5xl font-semibold bg-gradient-to-r from-teal-900 via-purple-500 to-gray-900 text-transparent bg-clip-text animate-gradient bg-300% hover:animate-pulse">
                New Arrival
              </h1>
              <p className="text-center text-md font-semibold bg-gradient-to-r from-teal-900 via-purple-500 to-gray-900 text-transparent bg-clip-text animate-gradient bg-300% hover:animate-pulse">
                Discover the latest arrivals.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevArrivalsSlide}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  disabled={currentArrivalsIndex === 0}
                >
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className={`w-4 h-4 ${
                      currentArrivalsIndex === 0
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  />
                </button>
                <button
                  onClick={nextArrivalsSlide}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  disabled={
                    currentArrivalsIndex >= newArrivals.length - itemsPerPage
                  }
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className={`w-4 h-4 ${
                      currentArrivalsIndex >= newArrivals.length - itemsPerPage
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  />
                </button>
              </div>
              <button className="flex items-center text-sm font-medium text-gray-600 hover:text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-all">
                View all{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Products Grid - 12 items (1 per slide on smaller screens) */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {visibleArrivals.map((product) => (
              <motion.div
                key={product.id}
                className="group relative"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden aspect-square mb-4 rounded-lg bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-white text-black text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                      {product.badge}
                    </div>
                  )}

                  {/* Sold Out Button */}
                  {product.status === "sold-out" && (
                    <div className="absolute top-3 right-3 bg-white bg-opacity-80 text-black text-xs px-2 py-1 rounded-full font-medium">
                      SOLD OUT
                    </div>
                  )}

                  {/* Quick Buy Button */}
                  {product.status === "quick-buy" && (
                    <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pb-4">
                      <div className="bg-white py-2 px-3 rounded-full shadow-md flex items-center">
                        <select className="bg-transparent border-none text-xs focus:outline-none mr-2">
                          {product.sizes?.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                        <button className="bg-black text-white text-xs px-3 py-1 rounded-full hover:bg-gray-800 transition-colors">
                          QUICK BUY
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="text-center px-2">
                  <h2 className="text-md font-medium text-gray-900 mb-1 truncate">
                    {product.designer}
                  </h2>
                  <p className="text-gray-600 text-sm">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Slide Indicators - Only show if more than 12 items */}
          {newArrivals.length > 12 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({
                length: Math.ceil(newArrivals.length / itemsPerPage),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentArrivalsIndex(index * itemsPerPage)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentArrivalsIndex >= index * itemsPerPage &&
                    currentArrivalsIndex < (index + 1) * itemsPerPage
                      ? "bg-black w-4"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        <motion.div
          className="check mt-24 w-full h-[500px] bg-cover bg-center bg-scroll lg:bg-fixed flex flex-col items-end justify-center"
          style={{ backgroundImage: `url(${jk6})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="checktext text-white p-6 lg:p-12">
            <motion.h1
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Explore
            </motion.h1>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Elevate your wardrobe, <br className="hidden sm:block" /> embrace
              timeless style!
            </motion.h2>
            <motion.h3
              className="text-sm sm:text-base md:text-lg lg:text-xl font-light mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore our collections today and experience the joy of fashion.{" "}
              <br className="hidden sm:block" />
              Shop now for the epitome of chic sophistication!
            </motion.h3>
            <motion.button
              className="px-8 py-3 border border-gray-400 rounded-sm hover:bg-white hover:border-white transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#"
                className="text-white font-semibold text-sm sm:text-base hover:text-gray-800"
              >
                Shop Now
              </a>
            </motion.button>
          </div>
        </motion.div>
         <div className="bg-zinc-950 text-white py-[120px]">
          <div className="text-center mx-[70px]">
            {/* Section Heading */}
            <motion.h1
              className="text-2xl font-semibold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Our Featured Products
            </motion.h1>
            <hr className="w-[70px] h-[3px] mx-auto my-5 bg-[#16bb7c] border-none" />

            {/* Product Slider */}
            <Slider {...settings}>
              {popularItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="px-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105">
                    <img
                      className="w-full h-[350px] object-cover"
                      src={item.src}
                      alt={item.name}
                    />
                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                      <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-[#16bb7c] hover:text-white transition-all duration-300">
                        Quick View
                      </button>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mt-4 text-left">
                    <h3 className="text-base font-medium">{item.name}</h3>
                    <div className="flex items-center mt-1">
                      {Array.from({ length: totalStars }, (_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          className="text-yellow-500 text-base"
                          icon={faStar}
                        />
                      ))}
                    </div>
                    <h2 className="text-base mt-1 text-gray-300 font-semibold">
                      {item.price}
                    </h2>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
        <motion.div
          className="my-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Heading */}
          <motion.h1
            className="m-10 text-center text-3xl font-semibold bg-gradient-to-r from-teal-900 via-purple-500 to-gray-900 text-transparent bg-clip-text animate-gradient bg-300% hover:animate-pulse"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Join The Crew
          </motion.h1>

          {/* Image Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {images3.map((image, index) => (
              <motion.div
                key={index}
                className="text-center group relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 * index }} // Staggered animation for each image
              >
                {/* Image Container */}
                <div className="w-full h-64 rounded-lg shadow-md overflow-hidden relative">
                  <img
                    src={image.src}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Instagram Icon (Visible on Hover) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-white text-4xl cursor-pointer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
       
      </section>
    </>
  );
};

export default HomeHeroSection;
