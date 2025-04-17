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
        return prev.filter((item) => item.id !== product.id);
      } else {
        setShowWishlistAlert(true);
        return [...prev, product];
      }
    });
  };

  const openWhatsappOrder = (product) => {
    setWhatsappOrderModal({ open: true, product });
  };

  const closeWhatsappOrder = () => {
    setWhatsappOrderModal({ open: false, product: null });
  };

  return (
    <AppContext.Provider
      value={{
        wishlist,
        addToWishlist,
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
