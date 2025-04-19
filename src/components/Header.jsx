import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faBars,
  faTimes,
  faSearch,
  faHeart,
  faHome,
  faStore,
  faInfoCircle,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../pictures/hue/logo.jpg";
import { useAppContext } from "../AppContext";

export default function HeaderPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchRef = useRef(null);
  const sidebarRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { wishlist } = useAppContext();

  const isHomepage = location.pathname === "/";

  const links = [
    { name: "Home", href: "/", icon: faHome },
    { name: "Shop", href: "/shop", icon: faStore },
    { name: "Abogggut", href: "/about", icon: faInfoCircle },
    { name: "Contact", href: "/contact", icon: faPhone },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    setIsSearchFocused(false);
  };

  const closeAllPanels = () => {
    setIsSidebarOpen(false);
    setIsSearchFocused(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query.length > 0) {
      navigate(`/shop?search=${encodeURIComponent(query)}`);
      setSearchQuery("");
      closeAllPanels();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    if (isHomepage) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isHomepage]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target) &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        closeAllPanels();
      }
    };

    const handleEscapeKey = (e) => {
      if (e.key === "Escape") closeAllPanels();
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

  return (
    <>
      {/* Header */}
      <header
        className={`w-full top-0 z-50 transition-all duration-300 ${
          isHomepage
            ? `fixed ${
                isScrolled
                  ? "bg-white text-gray-900 shadow-sm"
                  : "bg-transparent text-white"
              }`
            : "sticky bg-white text-gray-900 shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 z-50"
            onClick={closeAllPanels}
          >
            <img
              src={logo}
              alt="PureMotif logo"
              className="h-10 w-auto rounded"
            />
            <span
              className={`text-2xl font-bold tracking-tight ${
                isHomepage && !isScrolled ? "text-white" : "text-gray-900"
              }`}
            >
              PureMotif
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-1 py-2 text-sm font-medium transition-colors duration-200 ${
                  isHomepage && !isScrolled ? "text-white" : "text-gray-900"
                } ${
                  location.pathname === link.href
                    ? "text-purple-500 font-semibold" // Changed active color to purple
                    : "hover:text-emerald-500"
                }`}
              >
                {link.name}
                {location.pathname === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Search */}
            <div className="hidden md:block relative" ref={searchRef}>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  placeholder="Search products..."
                  className={`py-2 pl-10 pr-4 border rounded-full text-sm w-48 lg:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
                    isHomepage && !isScrolled
                      ? "bg-white bg-opacity-20 border-white placeholder-white text-white focus:bg-opacity-30"
                      : "bg-gray-50 border-gray-200 text-gray-700 placeholder-gray-400 focus:bg-white"
                  }`}
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className={`absolute left-3 top-3 h-4 w-4 ${
                    isHomepage && !isScrolled ? "text-white" : "text-gray-400"
                  }`}
                />
              </form>
            </div>

            {/* Account & Wishlist */}
            <Link
              to="/account"
              className={`hidden md:flex items-center justify-center h-10 w-10 rounded-full transition-colors ${
                isHomepage && !isScrolled
                  ? "hover:bg-white hover:bg-opacity-20"
                  : "hover:bg-gray-100"
              }`}
            >
              <FontAwesomeIcon
                icon={faUserAlt}
                className={`text-lg ${
                  isHomepage && !isScrolled ? "text-white" : "text-gray-700"
                }`}
              />
            </Link>

            <Link
              to="/wishlist"
              className={`hidden md:flex items-center justify-center h-10 w-10 rounded-full transition-colors relative ${
                isHomepage && !isScrolled
                  ? "hover:bg-white hover:bg-opacity-20"
                  : "hover:bg-gray-100"
              }`}
            >
              <FontAwesomeIcon
                icon={faHeart}
                className={`text-lg ${
                  isHomepage && !isScrolled ? "text-white" : "text-gray-700"
                }`}
              />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={toggleSidebar}
              className={`md:hidden flex items-center justify-center h-10 w-10 rounded-full transition-colors ${
                isHomepage && !isScrolled
                  ? "hover:bg-white hover:bg-opacity-20"
                  : "hover:bg-gray-100"
              }`}
            >
              <FontAwesomeIcon
                icon={isSidebarOpen ? faTimes : faBars}
                className={`text-xl ${
                  isHomepage && !isScrolled ? "text-white" : "text-gray-700"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeAllPanels}
          />

          <aside
            ref={sidebarRef}
            className="fixed inset-y-0 left-0 w-96 max-w-xs  bg-white shadow-xl z-100 overflow-y-auto transform transition-transform duration-300 ease-in-out"
          >
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-4 border-b">
                {/* <Link
                  to="/"
                  className="flex items-center space-x-2"
                  onClick={closeAllPanels}
                >
                  <img
                    src={logo}
                    alt="PureMotif logo"
                    className="h-10 w-auto rounded"
                  />
                  <span className="text-xl font-bold text-gray-900">
                    PureMotif
                  </span>
                </Link> */}

                
                <button
                  onClick={closeAllPanels}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="h-5 w-5 text-gray-500"
                  />
                </button>
              </div>

              {/* Sidebar Content */}
              <div className="flex-1 p-4 overflow-y-auto">
                {/* Search */}
                <div className="mb-6">
                  <form onSubmit={handleSearch} className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products..."
                      className="w-full py-3 pl-10 pr-4 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="absolute left-3 top-3.5 text-gray-400 text-sm"
                    />
                  </form>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-2">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={closeAllPanels}
                      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                        location.pathname === link.href
                          ? "bg-purple-100 text-purple-700" // Changed active background to purple
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={link.icon}
                        className={`mr-3 ${
                          location.pathname === link.href
                            ? "text-purple-500" // Changed icon color to match
                            : "text-gray-500"
                        }`}
                      />
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  ))}
                </nav>

                {/* Account Links */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    to="/account"
                    onClick={closeAllPanels}
                    className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === "/account"
                        ? "bg-purple-100 text-purple-700"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={faUserAlt}
                      className={`mr-3 ${
                        location.pathname === "/account"
                          ? "text-purple-500"
                          : "text-gray-500"
                      }`}
                    />
                    <span className="font-medium">My Account</span>
                  </Link>
                  <Link
                    to="/wishlist"
                    onClick={closeAllPanels}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === "/wishlist"
                        ? "bg-purple-100 text-purple-700"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <div className="flex items-center">
                      <FontAwesomeIcon
                        icon={faHeart}
                        className={`mr-3 ${
                          location.pathname === "/wishlist"
                            ? "text-purple-500"
                            : "text-gray-500"
                        }`}
                      />
                      <span className="font-medium">Wishlist</span>
                    </div>
                    {wishlist.length > 0 && (
                      <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                        {wishlist.length}
                      </span>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
