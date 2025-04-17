import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faTimes,
  faChevronDown,
  faPlus,
  faMinus,
  faStar,
  faStarHalfAlt,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  allProducts,
  menProducts,
  womenProducts,
  menAccessories,
  menBelts,
  menGiftsForHim,
  menJewelry,
  menPocketSquares,
  menTies,
  menBowTies,
  menClothing,
  menSuits,
  menJeans,
  menPants,
  menPolos,
  menShirts,
  menSweatshirts,
  menTShirts,
  menTuxedos,
  menWaistcoats,
  womenAccessories,
  womenEyewear,
  womenGifts,
  womenHats,
  womenHosiery,
  womenJewellery,
  womenClothing,
  womenSuits,
  womenDresses,
  womenDenim,
  womenGowns,
  womenJackets,
  womenKnitwear,
  womenShirts,
  womenSkirts,
  womenSweatshirts,
  womenTailoring,
  womenTrousers,
  minimalismFantasy,
  preFall23,
  preSpring23,
  preSpring24,
  readyToWear,
  summer23,
  summer24,
  winter22,
  winter23,
} from "../components/Product";

const enhancedProducts = allProducts.map((product) => {
  const baseRating = 4.0 + Math.random() * 1.0;
  const rating = Math.round(baseRating * 10) / 10;
  const reviews = Math.floor(10 + Math.random() * 50);

  let description = "";
  if (product.category === "suits") {
    description = `Tailored from premium ${
      product.material || "wool"
    } fabric, this ${
      product.name
    } features a modern slim fit with meticulous attention to detail.`;
  } else if (product.category === "dresses") {
    description = `This elegant ${product.name} is crafted from ${
      product.material || "luxury silk"
    } with a flattering silhouette that drapes beautifully.`;
  } else if (product.category === "shirts") {
    description = `Our premium ${product.name} is made from ${
      product.material || "100% Egyptian cotton"
    } for exceptional softness and breathability.`;
  } else {
    description = `Expertly crafted ${product.name} made from premium materials for lasting quality and comfort.`;
  }

  return {
    ...product,
    rating,
    reviews,
    description,
  };
});

const ProductModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToWishlist, wishlist } = useAppContext();
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`full-${i}`}
          icon={faStar}
          className="text-yellow-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon
          key="half"
          icon={faStarHalfAlt}
          className="text-yellow-400"
        />
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`empty-${i}`}
          icon={faStar}
          className="text-gray-300"
        />
      );
    }

    return stars;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="bg-white px-6 pt-6 pb-6 sm:p-8 sm:pb-8">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl font-bold text-gray-900 font-serif">
                    {product.name}
                  </h3>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500 text-xl transition-colors"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToWishlist(product);
                      }}
                      className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-300 hover:scale-110"
                      aria-label="Add to wishlist"
                    >
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={`text-lg ${
                          isWishlisted ? "text-red-500" : "text-gray-600"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="flex mr-3">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-gray-600 text-sm">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    <p className="text-gray-900 font-bold text-3xl">
                      ${product.price.toFixed(2)}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="font-medium text-gray-900 mb-3">
                        Quantity
                      </h4>
                      <div className="flex items-center border border-gray-200 rounded-lg w-32">
                        <button
                          onClick={() => handleQuantityChange(-1)}
                          className="p-3 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className="flex-1 text-center font-medium text-lg">
                          {quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(1)}
                          className="p-3 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(
                        `Hi, I'd like to order:\n\n*${
                          product.name
                        }*\nQuantity: ${quantity}\nPrice: $${product.price.toFixed(
                          2
                        )}\n\nTotal: $${(product.price * quantity).toFixed(
                          2
                        )}\n\nProduct URL: ${window.location.origin}/product/${
                          product.id
                        }`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center rounded-xl shadow-lg px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-lg font-medium text-white hover:opacity-90 transition-opacity duration-300"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="mr-3" />
                      Order via WhatsApp ($
                      {(product.price * quantity).toFixed(2)})
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product, addToWishlist, wishlist }) => {
  const [showModal, setShowModal] = useState(false);
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`text-sm ${
            i < fullStars ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <>
      <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
        <div
          className="relative aspect-square bg-gray-50 cursor-pointer flex-grow"
          onClick={() => setShowModal(true)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToWishlist(product);
            }}
            className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all duration-300 hover:scale-110"
            aria-label="Add to wishlist"
          >
            <FontAwesomeIcon
              icon={faHeart}
              className={`text-sm ${
                isWishlisted ? "text-red-500" : "text-gray-600"
              }`}
            />
          </button>
        </div>

        <div className="p-5 space-y-2 flex flex-col flex-grow-0">
          <h3
            className="font-semibold text-gray-900 text-lg leading-tight cursor-pointer hover:text-gray-600 transition-colors"
            onClick={() => setShowModal(true)}
          >
            {product.name}
          </h3>

          <div className="flex items-center">
            <div className="flex mr-1">{renderStars(product.rating)}</div>
            <span className="text-gray-500 text-xs ml-1">{product.rating}</span>
          </div>

          <p className="text-gray-700 font-bold text-xl mt-1">
            ${product.price.toFixed(2)}
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="w-full mt-3 bg-gradient-to-br from-gray-900 to-gray-800 text-white py-3 rounded-lg hover:opacity-90 transition-all duration-300 text-sm font-semibold tracking-wide shadow-md"
          >
            View Details
          </button>
        </div>
      </div>

      {showModal && (
        <ProductModal product={product} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

const ShopHeroSection = () => {
  const { addToWishlist, wishlist, showWishlistAlert, setShowWishlistAlert } =
    useAppContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState(enhancedProducts);
  const [activeFilter, setActiveFilter] = useState("All Products");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const categories = {
    "Product Type": {
      "All Products": { products: enhancedProducts, name: "All Products" },
      Men: {
        products: menProducts.map(
          (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
        ),
        name: "Men",
      },
      Women: {
        products: womenProducts.map(
          (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
        ),
        name: "Women",
      },
    },
    Collections: {
      "Minimalism and fantasy": {
        products: minimalismFantasy.map(
          (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
        ),
        name: "Minimalism & Fantasy",
      },
      "Pre Fall 23": {
        products: preFall23.map(
          (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
        ),
        name: "Pre Fall 23",
      },
      "Pre-Spring 23": {
        products: preSpring23.map(
          (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
        ),
        name: "Pre-Spring 23",
      },
      "Pre-Spring 24": {
        products: preSpring24.map(
          (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
        ),
        name: "Pre-Spring 24",
      },
      "Ready to wear": {
        products: readyToWear.map(
          (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
        ),
        name: "Ready to Wear",
      },
      "Summer 23": {
        products: summer23.map(
          (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
        ),
        name: "Summer 23",
      },
      "Summer 24": {
        products: summer24.map(
          (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
        ),
        name: "Summer 24",
      },
      "Winter 22": {
        products: winter22.map(
          (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
        ),
        name: "Winter 22",
      },
      "Winter 23": {
        products: winter23.map(
          (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
        ),
        name: "Winter 23",
      },
    },
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get("search");
    if (search) {
      setSearchQuery(search);
      const results = enhancedProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(results);
      setActiveFilter(`Search: "${search}"`);
    } else {
      setFilteredProducts(enhancedProducts);
      setActiveFilter("All Products");
    }
  }, [location.search]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, priceRange, location.search]);

  useEffect(() => {
    if (showWishlistAlert) {
      const timer = setTimeout(() => setShowWishlistAlert(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showWishlistAlert]);

  const toggleCollections = () => {
    setIsCollectionsOpen(!isCollectionsOpen);
  };

  const handleFilter = (products, filterName) => {
    const filtered = products.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    setFilteredProducts(filtered);
    setActiveFilter(filterName);
    setIsMobileSidebarOpen(false);
  };

  const clearFilters = () => {
    setFilteredProducts(enhancedProducts);
    setActiveFilter("All Products");
    setIsCollectionsOpen(false);
    setPriceRange([0, 500]);
    setSearchQuery("");
    navigate("/Shop");
  };

  const handlePriceChange = (min, max) => {
    setPriceRange([min, max]);
    if (activeFilter !== "All Products") {
      const currentFilter = findCurrentFilter(activeFilter);
      if (currentFilter) {
        const filtered = currentFilter.products.filter(
          (product) => product.price >= min && product.price <= max
        );
        setFilteredProducts(filtered);
      }
    } else {
      const filtered = enhancedProducts.filter(
        (product) => product.price >= min && product.price <= max
      );
      setFilteredProducts(filtered);
    }
  };

  const findCurrentFilter = (filterName) => {
    for (const [category, items] of Object.entries(categories)) {
      for (const [itemName, itemData] of Object.entries(items)) {
        if (itemData.name === filterName) return itemData;
      }
    }
    return null;
  };

  const Pagination = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    let startPage, endPage;
    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const maxPagesBeforeCurrent = Math.floor(maxVisiblePages / 2);
      const maxPagesAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;

      if (currentPage <= maxPagesBeforeCurrent) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
        startPage = totalPages - maxVisiblePages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - maxPagesBeforeCurrent;
        endPage = currentPage + maxPagesAfterCurrent;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex items-center justify-center mt-10 gap-1">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`p-2 rounded-lg ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {startPage > 1 && (
          <>
            <button
              onClick={() => setCurrentPage(1)}
              className={`px-3 py-1 rounded-lg ${
                currentPage === 1
                  ? "bg-gray-800 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              1
            </button>
            {startPage > 2 && <span className="px-2">...</span>}
          </>
        )}

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`px-3 py-1 rounded-lg ${
              currentPage === number
                ? "bg-gray-800 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {number}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="px-2">...</span>}
            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`px-3 py-1 rounded-lg ${
                currentPage === totalPages
                  ? "bg-gray-800 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`p-2 rounded-lg ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col">
      {showWishlistAlert && (
        <div className="fixed top-4 right-4 animate-slide-in z-50">
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
            <FontAwesomeIcon icon={faHeart} />
            <span>Item added to wishlist!</span>
          </div>
        </div>
      )}

      <button
        onClick={() => navigate("/wishlist")}
        className="fixed bottom-6 right-6 bg-gray-900 text-white p-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-300 flex items-center gap-2 z-40"
      >
        <FontAwesomeIcon icon={faHeart} />
        <span className="bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {wishlist.length}
        </span>
      </button>

      <button
        onClick={() => setIsMobileSidebarOpen(true)}
        className="md:hidden fixed top-4 left-4 bg-gray-900 text-white p-3 rounded-lg shadow-lg z-30"
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </button>

      <div className="flex-1 flex flex-col md:flex-row">
        <div
          className={`w-full md:w-64 bg-gradient-to-b from-gray-900 to-gray-800 p-6 border-r border-gray-700 overflow-y-auto transition-all duration-300 fixed md:sticky top-0 bottom-0 z-40 ${
            isMobileSidebarOpen ? "left-0" : "-left-full md:left-0"
          }`}
          style={{ maxHeight: "100vh" }}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-white font-serif">
              PureMotif
            </h2>
            <div className="flex items-center gap-3">
              <button
                className="text-gray-300 hover:text-white text-xs font-medium flex items-center gap-2 transition-colors duration-300"
                onClick={clearFilters}
              >
                <FontAwesomeIcon icon={faTimes} />
                Clear
              </button>
              <button
                onClick={() => setIsMobileSidebarOpen(false)}
                className="md:hidden text-gray-300 hover:text-white"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Price Range
            </h3>
            <div className="py-2 px-3 bg-gray-800/50 rounded-xl backdrop-blur-sm">
              <div className="flex justify-between mb-3">
                <span className="text-xs text-gray-300">${priceRange[0]}</span>
                <span className="text-xs text-gray-300">${priceRange[1]}</span>
              </div>
              <div className="relative h-1">
                <div className="absolute h-full w-full bg-gray-700 rounded-full" />
                <div
                  className="absolute h-full bg-gradient-to-r from-gray-300 to-white rounded-full"
                  style={{
                    left: `${(priceRange[0] / 500) * 100}%`,
                    right: `${100 - (priceRange[1] / 500) * 100}%`,
                  }}
                />
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[0]}
                  onChange={(e) =>
                    handlePriceChange(Number(e.target.value), priceRange[1])
                  }
                  className="absolute w-full h-2 opacity-0 cursor-pointer"
                />
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) =>
                    handlePriceChange(priceRange[0], Number(e.target.value))
                  }
                  className="absolute w-full h-2 opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {Object.entries(categories).map(([category, items]) => {
            const categoryId = category.toLowerCase().replace(/\s+/g, "-");
            return (
              <div key={categoryId} className="mb-6">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  {category}
                </h3>
                <div className="space-y-1">
                  {Object.entries(items).map(([itemName, itemData]) => {
                    const isCollections = itemName === "Collections";
                    return (
                      <div key={itemName} className="mb-1">
                        <div
                          className={`flex justify-between items-center py-2 px-3 rounded-lg cursor-pointer transition-colors ${
                            activeFilter === itemData.name
                              ? "bg-gray-800 text-white"
                              : "hover:bg-gray-800/50 text-gray-300"
                          }`}
                          onClick={() => {
                            if (isCollections) {
                              toggleCollections();
                            } else {
                              handleFilter(itemData.products, itemData.name);
                            }
                          }}
                        >
                          <span className="text-sm">{itemName}</span>
                          {isCollections && (
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className={`text-xs transition-transform ${
                                isCollectionsOpen ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </div>

                        {isCollections && isCollectionsOpen && (
                          <div className="pl-4 mt-1 space-y-1">
                            {Object.entries(itemData).map(
                              ([collectionName, collectionData]) => {
                                if (collectionName === "name") return null;
                                return (
                                  <div
                                    key={collectionName}
                                    className={`py-2 px-3 rounded-lg cursor-pointer transition-colors ${
                                      activeFilter === collectionData.name
                                        ? "bg-gray-800 text-white"
                                        : "hover:bg-gray-800/50 text-gray-300"
                                    } text-sm`}
                                    onClick={() =>
                                      handleFilter(
                                        collectionData.products,
                                        collectionData.name
                                      )
                                    }
                                  >
                                    {collectionName}
                                  </div>
                                );
                              }
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex-1 p-6" id="products-container">
          {searchQuery && (
            <div className="mb-6">
              <button
                onClick={() => {
                  setSearchQuery("");
                  navigate("/Shop");
                  setFilteredProducts(enhancedProducts);
                  setActiveFilter("All Products");
                }}
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2 transition-colors text-sm"
              >
                <FontAwesomeIcon icon={faTimes} />
                Clear search: "{searchQuery}"
              </button>
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 font-serif">
              {activeFilter}
              <span className="ml-3 text-gray-500 font-normal text-xl">
                ({filteredProducts.length})
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToWishlist={addToWishlist}
                wishlist={wishlist}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-500 font-medium">
              No products found. Try adjusting your filters.
            </div>
          )}

          {filteredProducts.length > productsPerPage && <Pagination />}
        </div>
      </div>
    </div>
  );
};

export default ShopHeroSection;
