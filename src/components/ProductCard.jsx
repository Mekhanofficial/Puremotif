import React from "react";

// ProductCard component (replace the existing one)
const ProductCard = ({ product }) => {
  // WhatsApp number (replace with your actual number)
  const whatsappNumber = "1234567890"; // Example: "1234567890" (no spaces or special chars)
  
  // Create WhatsApp message
  const message = encodeURIComponent(
    `Hi! I'm interested in ordering:\n\n*${product.name}*\nPrice: $${product.price.toFixed(2)}\n\nCan you help me with this order?`
  );
  
  // Generate WhatsApp link
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="bg-gray-100 h-64 flex items-center justify-center overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400">Product Image</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-gray-900 font-semibold">
          ${product.price.toFixed(2)}
        </p>
        {product.sizes && (
          <p className="text-xs text-gray-500 mt-1">
            Sizes: {product.sizes.join(", ")}
          </p>
        )}
        {product.colors && (
          <p className="text-xs text-gray-500 mt-1">
            Colors: {product.colors.join(", ")}
          </p>
        )}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 w-full inline-block text-center bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors duration-200 text-sm font-medium"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
