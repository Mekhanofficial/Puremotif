import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faTimes,
  faPlus,
  faMinus,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ProductModal = ({ product, onClose, addToWishlist, isWishlisted }) => {
  const [quantity, setQuantity] = useState(1);

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

export default ProductModal;
