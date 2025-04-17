import { useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, } from "@fortawesome/free-solid-svg-icons";
import WhatsAppOrderModal from "../components/WhatsappOrder";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WishlistPage = () => {
  const {
    wishlist,
    openWhatsappOrder,
    whatsappOrderModal,
    closeWhatsappOrder,
  } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Your Wishlist
          </h1>
          <p className="text-gray-600">
            {wishlist.length} {wishlist.length === 1 ? "item" : "items"}
          </p>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-20">
            <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-gray-400 text-3xl"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Your wishlist is empty
            </h3>
            <p className="text-gray-500 mb-6">
              Start adding items you love to your wishlist
            </p>
            <button
              onClick={() => navigate("/shop")}
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div
                  className="relative aspect-square bg-gray-100 cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 font-bold mb-4">
                    ${product.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => openWhatsappOrder(product)}
                    className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                    Order via WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {whatsappOrderModal.open && (
        <WhatsAppOrderModal
          product={whatsappOrderModal.product}
          onClose={closeWhatsappOrder}
        />
      )}
    </div>
  );
};

export default WishlistPage;
