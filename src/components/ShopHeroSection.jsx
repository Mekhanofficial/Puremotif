import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ShopSidebar from "./ShopSidebar";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
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
  const [openDropdowns, setOpenDropdowns] = useState({
    collections: false,
    men: false,
    women: false,
    "men-accessories": false,
    "men-clothing": false,
    "women-accessories": false,
    "women-clothing": false,
  });
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
        subcategories: {
          Accessories: {
            products: menAccessories.map(
              (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
            ),
            name: "Men's Accessories",
            subcategories: {
              Belts: {
                products: menBelts.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Men's Belts",
              },
              "Gifts for him": {
                products: menGiftsForHim.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Gifts for Him",
              },
              Jewelry: {
                products: menJewelry.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Men's Jewelry",
              },
              "Pocket Squares": {
                products: menPocketSquares.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Pocket Squares",
              },
              Ties: {
                products: menTies.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Men's Ties",
              },
              "Bow Ties": {
                products: menBowTies.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Bow Ties",
              },
            },
          },
          Clothing: {
            products: menClothing.map(
              (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
            ),
            name: "Men's Clothing",
            subcategories: {
              Suits: {
                products: menSuits.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Men's Suits",
              },
              Jeans: {
                products: menJeans.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Men's Jeans",
              },
              Pants: {
                products: menPants.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Men's Pants",
              },
              Polos: {
                products: menPolos.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Men's Polos",
              },
              Shirts: {
                products: menShirts.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Men's Shirts",
              },
              "Sweatshirts & Hoodies": {
                products: menSweatshirts.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Men's Sweatshirts",
              },
              "T-Shirts": {
                products: menTShirts.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Men's T-Shirts",
              },
              Tuxedos: {
                products: menTuxedos.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Men's Tuxedos",
              },
              Waistcoats: {
                products: menWaistcoats.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Waistcoats",
              },
            },
          },
        },
      },
      Women: {
        products: womenProducts.map(
          (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
        ),
        name: "Women",
        subcategories: {
          Accessories: {
            products: womenAccessories.map(
              (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
            ),
            name: "Women's Accessories",
            subcategories: {
              Eyewear: {
                products: womenEyewear.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Women's Eyewear",
              },
              Gifts: {
                products: womenGifts.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Women's Gifts",
              },
              "Hats & Scarves": {
                products: womenHats.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Hats & Scarves",
              },
              Hosiery: {
                products: womenHosiery.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Hosiery",
              },
              Jewellery: {
                products: womenJewellery.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Jewellery",
              },
            },
          },
          Clothing: {
            products: womenClothing.map(
              (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
            ),
            name: "Women's Clothing",
            subcategories: {
              Suits: {
                products: womenSuits.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Women's Suits",
              },
              Dresses: {
                products: womenDresses.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Dresses",
              },
              Denim: {
                products: womenDenim.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Women's Denim",
              },
              Gowns: {
                products: womenGowns.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Gowns",
              },
              "Jackets & Coats": {
                products: womenJackets.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Jackets & Coats",
              },
              Knitwear: {
                products: womenKnitwear.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Knitwear",
              },
              "Shirts & Tops": {
                products: womenShirts.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Shirts & Tops",
              },
              Skirts: {
                products: womenSkirts.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Skirts",
              },
              "T-Shirts & Sweatshirts": {
                products: womenSweatshirts.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "T-Shirts & Sweatshirts",
              },
              Tailoring: {
                products: womenTailoring.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Tailoring",
              },
              Trousers: {
                products: womenTrousers.map(
                  (p) => enhancedProducts.find((ep) => ep.id === p.id) || p
                ),
                name: "Trousers",
              },
            },
          },
        },
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

  const toggleDropdown = (dropdown) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
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
    setOpenDropdowns({
      collections: false,
      men: false,
      women: false,
      "men-accessories": false,
      "men-clothing": false,
      "women-accessories": false,
      "women-clothing": false,
    });
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
        if (itemData.subcategories) {
          for (const [subName, subData] of Object.entries(
            itemData.subcategories
          )) {
            if (subData.name === filterName) return subData;
            if (subData.subcategories) {
              for (const [subSubName, subSubData] of Object.entries(
                subData.subcategories
              )) {
                if (subSubData.name === filterName) return subSubData;
              }
            }
          }
        }
      }
    }
    return null;
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
        <ShopSidebar
          categories={categories}
          activeFilter={activeFilter}
          priceRange={priceRange}
          handlePriceChange={handlePriceChange}
          handleFilter={handleFilter}
          clearFilters={clearFilters}
          openDropdowns={openDropdowns}
          toggleDropdown={toggleDropdown}
          isMobileSidebarOpen={isMobileSidebarOpen}
          setIsMobileSidebarOpen={setIsMobileSidebarOpen}
        />

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
                isWishlisted={wishlist.some((item) => item.id === product.id)}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-500 font-medium">
              No products found. Try adjusting your filters.
            </div>
          )}

          {filteredProducts.length > productsPerPage && (
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopHeroSection;
