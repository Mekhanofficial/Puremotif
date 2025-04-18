import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ShopSidebar = ({
  categories,
  activeFilter,
  priceRange,
  handlePriceChange,
  handleFilter,
  clearFilters,
  openDropdowns,
  toggleDropdown,
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
}) => {
  const shouldShowDropdown = (itemId, itemName, parentId) => {
    // Only show dropdown for these specific categories
    const dropdownCategories = ["men", "women", "accessories", "clothing"];
    return dropdownCategories.some(
      (cat) =>
        itemId.includes(cat) ||
        itemName.toLowerCase().includes(cat) ||
        (parentId && parentId.includes(cat))
    );
  };

  const renderCategoryItems = (items, parentId = "") => {
    return Object.entries(items).map(([itemName, itemData]) => {
      const itemId = `${parentId}-${itemName}`
        .toLowerCase()
        .replace(/\s+/g, "-");

      const showDropdown =
        shouldShowDropdown(itemId, itemName, parentId) &&
        itemData.subcategories;

      return (
        <div key={itemId} className="mb-1">
          <div
            className={`flex justify-between items-center py-2 px-3 rounded-lg cursor-pointer transition-colors ${
              activeFilter === itemData.name
                ? "bg-gray-800 text-white"
                : "hover:bg-gray-800/50 text-gray-300"
            }`}
            onClick={() => {
              if (showDropdown) {
                toggleDropdown(itemId);
              } else if (itemData.products) {
                handleFilter(itemData.products, itemData.name);
              }
            }}
          >
            <span className="text-sm">{itemName}</span>
            {showDropdown && (
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`text-xs transition-transform ${
                  openDropdowns[itemId] ? "rotate-180" : ""
                }`}
              />
            )}
          </div>

          {showDropdown && openDropdowns[itemId] && (
            <div className="pl-4 mt-1 space-y-1">
              {itemData.subcategories &&
                renderCategoryItems(itemData.subcategories, itemId)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div
      className={`shop-sidebar w-full md:w-64 bg-gradient-to-b from-gray-900 to-gray-800 p-6 border-r border-gray-700 overflow-y-auto transition-all duration-300 fixed md:sticky top-0 bottom-0 z-40 ${
        isMobileSidebarOpen ? "left-0" : "-left-full md:left-0"
      }`}
      style={{ maxHeight: "100vh" }}
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-bold text-white font-serif">PureMotif</h2>
        <div className="flex items-center gap-3">
          <button
            className="text-gray-300 hover:text-white text-xs font-medium flex items-center gap-2 transition-colors duration-300"
            onClick={clearFilters}
          >
            <FontAwesomeIcon icon={faTimes} />
            Clear
          </button>
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
          Price Range
        </h3>
        <div className="py-2 px-3 bg-gray-800/50 rounded-xl backdrop-blur-sm">
          <div className="flex justify-between mb-3">
            <span className="text-xs text-gray-300">${priceRange[0]}</span>
            <span className="text-xs text-gray-300">${priceRange[1]}</span>
          </div>
          <div className="relative h-1">
            <div className="absolute h-full w-full bg-gray-700 rounded-full" />
            <div
              className="absolute h-full bg-gradient-to-r from-gray-300 to-white rounded-full"
              style={{
                left: `${(priceRange[0] / 500) * 100}%`,
                right: `${100 - (priceRange[1] / 500) * 100}%`,
              }}
            />
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange[0]}
              onChange={(e) =>
                handlePriceChange(Number(e.target.value), priceRange[1])
              }
              className="absolute w-full h-2 opacity-0 cursor-pointer"
            />
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange[1]}
              onChange={(e) =>
                handlePriceChange(priceRange[0], Number(e.target.value))
              }
              className="absolute w-full h-2 opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {Object.entries(categories).map(([category, items]) => {
        const categoryId = category.toLowerCase().replace(/\s+/g, "-");
        return (
          <div key={categoryId} className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
              {category}
            </h3>
            <div className="space-y-1">
              {renderCategoryItems(items, categoryId)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopSidebar;
