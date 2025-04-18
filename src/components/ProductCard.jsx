import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import ProductModal from "./ProductModal";

const ProductCard = ({ product, addToWishlist, isWishlisted }) => {
  const [showModal, setShowModal] = useState(false);

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
        <ProductModal
          product={product}
          onClose={() => setShowModal(false)}
          addToWishlist={addToWishlist}
          isWishlisted={isWishlisted}
        />
      )}
    </>
  );
};

export default ProductCard;
