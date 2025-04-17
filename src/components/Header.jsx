import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faBars,
  faTimes,
  faSearch,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../pictures/hue/logo.jpg";
import { useAppContext } from "../AppContext";

export default function HeaderPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { wishlist } = useAppContext();

  const isHomepage = location.pathname === "/";

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    if (!isSidebarOpen) {
      setIsSearchFocused(false);
    }
  };

  const closeAllPanels = () => {
    setIsSidebarOpen(false);
    setIsSearchFocused(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      closeAllPanels();
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
    };

    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        closeAllPanels();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Wishlist", href: "/wishlist" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`flex items-center absolute justify-between p-4 md:px-8 w-full top-0 z-50 transition-colors duration-300 ${
          isHomepage
            ? "text-gray-900 bg-transparent"
            : "text-gray-900 bg-white shadow-sm"
        }`}
      >
        {/* Logo with image */}
        <div className="flex-shrink-0 flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="puremotif logo" className="h-14" />
            <span className="text-2xl font-bold tracking-tight">PureMotif</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`hover:text-emerald-600 transition-colors ${
                location.pathname === link.href ? "font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-6 ml-auto">
          {/* Search */}
          <div className="hidden md:block relative" ref={searchRef}>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Search products..."
                className={`py-2 pl-10 pr-4 border rounded-full text-sm w-48 lg:w-64 transition-all duration-300 ${
                  isHomepage
                    ? "bg-white bg-opacity-20 border-white placeholder-white text-white focus:bg-opacity-30"
                    : "bg-gray-50 border-gray-200 text-gray-700 placeholder-gray-400 focus:bg-white"
                }`}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className={`absolute left-3 top-3 h-4 w-4 ${
                  isHomepage ? "text-white" : "text-gray-400"
                }`}
              />
            </form>
          </div>

          {/* Account */}
          <div className="hidden md:block">
            <Link
              to="/account"
              className="hover:text-emerald-600 transition-colors"
            >
              <FontAwesomeIcon icon={faUserAlt} className="text-xl" />
            </Link>
          </div>

          {/* Wishlist */}
          <div className="hidden md:block relative">
            <Link
              to="/wishlist"
              className="hover:text-emerald-600 transition-colors"
            >
              <FontAwesomeIcon icon={faHeart} className="text-xl" />
              {wishlist.length > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </div>
              )}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleSidebar}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon
              icon={isSidebarOpen ? faTimes : faBars}
              className="text-xl hover:text-emerald-600 transition-colors"
            />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={toggleSidebar}
          ></div>
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl z-50 overflow-y-auto transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="puremotif logo"
                  className="h-8 w-auto mr-2"
                />
                <h3 className="text-lg font-medium">Menu</h3>
              </div>
              <button
                onClick={toggleSidebar}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block py-3 px-2 font-medium hover:bg-gray-50 rounded transition-colors"
                  onClick={closeAllPanels}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.name}</span>
                    {link.name === "Wishlist" && wishlist.length > 0 && (
                      <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {wishlist.length}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
