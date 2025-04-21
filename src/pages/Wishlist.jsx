import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faTrash,
  faCheck,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import WhatsAppOrderModal from "../components/WhatsappOrder";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WishlistPage = () => {
  const {
    wishlist,
    removeFromWishlist,
    updateWishlistItemQuantity,
    openWhatsappOrder,
    whatsappOrderModal,
    closeWhatsappOrder,
  } = useAppContext();
  const navigate = useNavigate();

  // Initialize selectedItems from localStorage, but filter out any IDs that don't exist in current wishlist
  const [selectedItems, setSelectedItems] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("wishlistSelectedItems");
      if (saved) {
        const parsed = JSON.parse(saved);
        // Filter to only include IDs that exist in current wishlist
        return parsed.filter((id) => wishlist.some((item) => item.id === id));
      }
    }
    return [];
  });

  const [selectMode, setSelectMode] = useState(false);

  // Update localStorage whenever selectedItems changes
  useEffect(() => {
    localStorage.setItem(
      "wishlistSelectedItems",
      JSON.stringify(selectedItems)
    );
  }, [selectedItems]);

  // Also update selectedItems when wishlist changes (in case items were removed elsewhere)
  useEffect(() => {
    setSelectedItems((prev) =>
      prev.filter((id) => wishlist.some((item) => item.id === id))
    );
  }, [wishlist]);

  const toggleSelectMode = () => {
    setSelectMode(!selectMode);
    if (selectMode) {
      setSelectedItems([]);
    }
  };

  const toggleSelectItem = (productId) => {
    setSelectedItems((prev) => {
      const newSelected = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
      return newSelected;
    });
  };

  const handleIncreaseQuantity = (productId, e) => {
    e.stopPropagation();
    const product = wishlist.find((item) => item.id === productId);
    updateWishlistItemQuantity(productId, (product.quantity || 1) + 1);
  };

  const handleDecreaseQuantity = (productId, e) => {
    e.stopPropagation();
    const product = wishlist.find((item) => item.id === productId);
    if ((product.quantity || 1) > 1) {
      updateWishlistItemQuantity(productId, product.quantity - 1);
    }
  };

  const handleBulkOrder = () => {
    if (selectedItems.length === 0) return;

    const selectedProducts = wishlist.filter((product) =>
      selectedItems.includes(product.id)
    );

    const message = `Hi, I'd like to order the following products:\n\n${selectedProducts
      .map(
        (product) =>
          `*${product.name}* - $${product.price.toFixed(2)} (Qty: ${
            product.quantity || 1
          })`
      )
      .join("\n")}\n\nTotal: $${selectedProducts
      .reduce(
        (sum, product) => sum + product.price * (product.quantity || 1),
        0
      )
      .toFixed(2)}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348163131065?text=${encodedMessage}`, "_blank");

    // Don't clear selected items after ordering
    setSelectMode(false);
  };

  const handleRemoveSelected = () => {
    selectedItems.forEach((id) => removeFromWishlist(id));
    // Items will be automatically removed from selectedItems by the wishlist effect
    setSelectMode(false);
  };

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
          <>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                {selectMode ? (
                  <>
                    <span className="text-sm text-gray-600">
                      {selectedItems.length} selected
                    </span>
                    <button
                      onClick={handleRemoveSelected}
                      className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1"
                      disabled={selectedItems.length === 0}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                      Remove
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => navigate("/shop")}
                    className="text-gray-600 hover:text-gray-900 text-sm flex items-center gap-1"
                  >
                    Continue Shopping
                  </button>
                )}
              </div>
              <div className="flex gap-3">
                {selectMode && selectedItems.length > 0 && (
                  <button
                    onClick={handleBulkOrder}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2 text-sm"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                    Order Selected ({selectedItems.length})
                  </button>
                )}
                <button
                  onClick={toggleSelectMode}
                  className={`px-4 py-2 rounded-md transition-colors text-sm ${
                    selectMode
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {selectMode ? "Cancel" : "Select Items"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlist.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative ${
                    selectMode ? "cursor-pointer" : ""
                  }`}
                  onClick={() => {
                    if (selectMode) toggleSelectItem(product.id);
                  }}
                >
                  {selectMode && (
                    <div
                      className={`absolute top-3 left-3 w-6 h-6 rounded-full border-2 flex items-center justify-center z-10 ${
                        selectedItems.includes(product.id)
                          ? "bg-green-500 border-green-500 text-white"
                          : "bg-white border-gray-300"
                      }`}
                    >
                      {selectedItems.includes(product.id) && (
                        <FontAwesomeIcon icon={faCheck} className="text-xs" />
                      )}
                    </div>
                  )}
                  <div
                    className="relative aspect-square bg-gray-100 cursor-pointer"
                  
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                  
                    />
                    {!selectMode && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFromWishlist(product.id);
                        }}
                        className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="text-gray-700"
                        />
                      </button>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-700 font-bold mb-2">
                      ${product.price.toFixed(2)}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">Quantity:</span>
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={(e) => handleDecreaseQuantity(product.id, e)}
                          className={`px-2 py-1 ${
                            (product.quantity || 1) <= 1
                              ? "text-gray-300 cursor-not-allowed"
                              : "text-gray-600 hover:bg-gray-100"
                          } transition-colors`}
                          disabled={(product.quantity || 1) <= 1}
                        >
                          <FontAwesomeIcon icon={faMinus} size="xs" />
                        </button>
                        <span className="px-3 text-sm font-medium">
                          {product.quantity || 1}
                        </span>
                        <button
                          onClick={(e) => handleIncreaseQuantity(product.id, e)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                          <FontAwesomeIcon icon={faPlus} size="xs" />
                        </button>
                      </div>
                    </div>

                    {!selectMode && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openWhatsappOrder(product);
                        }}
                        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <FontAwesomeIcon icon={faWhatsapp} />
                        Order via WhatsApp
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {whatsappOrderModal.open && (
        <WhatsAppOrderModal
          product={{
            ...whatsappOrderModal.product,
            quantity: whatsappOrderModal.product.quantity || 1,
          }}
          onClose={closeWhatsappOrder}
        />
      )}
    </div>
  );
};

export default WishlistPage;
