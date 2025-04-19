// src/context/AppContext.js
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [showWishlistAlert, setShowWishlistAlert] = useState(false);
  const [whatsappOrderModal, setWhatsappOrderModal] = useState({
    open: false,
    product: null,
  });

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const isAlreadyInWishlist = prev.some((item) => item.id === product.id);
      if (isAlreadyInWishlist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        setShowWishlistAlert(true);
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateWishlistItemQuantity = (productId, quantity) => {
    setWishlist((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const openWhatsappOrder = (product) => {
    setWhatsappOrderModal({
      open: true,
      product: {
        ...product,
        quantity: product.quantity || 1,
      },
    });
  };

  const closeWhatsappOrder = () => {
    setWhatsappOrderModal({ open: false, product: null });
  };

  return (
    <AppContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        updateWishlistItemQuantity,
        showWishlistAlert,
        setShowWishlistAlert,
        whatsappOrderModal,
        openWhatsappOrder,
        closeWhatsappOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
