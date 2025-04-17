import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { allProducts } from "../components/Product";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, wishlist } = useAppContext();

  const product = allProducts.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-700">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <button
          onClick={() => navigate("/shop")}
          className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
        >
          Go Back to Shop
        </button>
      </div>
    );
  }

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 mb-6">
            {product.description || "This product has no description yet."}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              <FontAwesomeIcon icon={faShoppingBag} className="mr-2" />
              Add to Cart
            </button>
            <button
              onClick={() => addToWishlist(product)}
              className={`px-6 py-3 rounded-xl font-semibold border transition ${
                isWishlisted
                  ? "border-red-500 text-red-500 bg-red-100"
                  : "border-gray-300 text-gray-700 hover:border-gray-500"
              }`}
            >
              <FontAwesomeIcon icon={faHeart} className="mr-2" />
              {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
