// components/CatalogueFilter.js

"use client";
import styles from "./YourCatalog.module.css";
import { useState } from "react";
import { MdTune } from "react-icons/md";
import { Search, Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiOutlineCaretDown } from "react-icons/ai";
import EndCapRack from "../../images/End Cap Rack.png";
import DoubleWall from "../../images/Double Wall.png";
import SteelShopping from "../../images/Steel Shopping.png";
import HangingAccessory from "../../images/Hanging Accessory.png";
import UprightCooler from "../../images/Upright Cooler.png";
import Foldable from "../../images/Foldable Shopping.png";
import Modular from "../../images/Modular Freezer.png";
import SingleSided from "../../images/Single Sided.png";
import Commercial from "../../images/Commercial.png";
import UnderCounter from "../../images/Under-Counter.png";

export default function CatalogueFilter() {
  const router = useRouter();

  const [filters, setFilters] = useState([
    {
      id: "#302012",
      part: "BW-SH-01",
      image: DoubleWall,
      productName: "Double Wall Rack",
      mfr: "Briteways",
      category: "Shelving",
      subcategory: "Wall Rack",
      color: "Black",
      size: "180mm",
      stock: "50 units",
      msrp: "₹12,000",
      costPrice: "₹8,400",
      status: "In-Stock",
      selected: false,
    },
    {
      id: "#302011",
      part: "CH-WC-05",
      image: Commercial,
      productName: "Commercial Display Chiller",
      mfr: "ChillCore",
      category: "Refrigeration",
      subcategory: "Upright Chiller",
      color: "White",
      size: "140 Ltr",
      stock: "75 units",
      msrp: "₹65,000",
      costPrice: "₹49,500",
      status: "Low Stock",
      selected: false,
    },
    {
      id: "#302002",
      part: "BW-TR-10",
      image: SteelShopping,
      productName: "Steel Shopping Trolley",
      mfr: "CartExpress",
      category: "Trolleys",
      subcategory: "Standard Trolley",
      color: "Silver",
      size: "140 Ltr",
      stock: "100 units",
      msrp: "₹7,500",
      costPrice: "₹5,300",
      status: "Out-of-Stock",
      selected: false,
    },
    {
      id: "#301901",
      part: "AC-WC-22",
      image: EndCapRack,
      productName: "End Cap Rack Adj",
      mfr: "RackSpace",
      category: "Accessories",
      subcategory: "Display Add-on",
      color: "White",
      size: "140 Ltr",
      stock: "100 units",
      msrp: "₹3,000",
      costPrice: "₹2,300",
      status: "Out-of-Stock",
      selected: false,
    },
    {
      id: "#301900",
      part: "BW-FR-17",
      image: Modular,
      productName: "Modular Freezer U",
      mfr: "NordicChill",
      category: "Refrigeration",
      subcategory: "Freezer",
      color: "White",
      size: "500 Ltr",
      stock: "100 units",
      msrp: "₹85,000",
      costPrice: "₹67,000",
      status: "Low Stock",
      selected: false,
    },
    {
      id: "#301800",
      part: "SH-WC-09",
      image: SingleSided,
      productName: "Single Sided Rack",
      mfr: "StoreFrame",
      category: "Shelving",
      subcategory: "Gondola Rack",
      color: "Black",
      size: "180mm",
      stock: "100 units",
      msrp: "₹8,000",
      costPrice: "₹7,000",
      status: "Low Stock",
      selected: false,
    },
    {
      id: "#301701",
      part: "BW-CH-12",
      image: UprightCooler,
      productName: "Upright Cooler with...",
      mfr: "CoolEdge",
      category: "Refrigeration",
      subcategory: "Cooler",
      color: "Black",
      size: "140 Ltr",
      stock: "100 units",
      msrp: "₹42,000",
      costPrice: "₹32,000",
      status: "In-Stock",
      selected: false,
    },
    {
      id: "#301600",
      part: "BW-TR-14",
      image: Foldable,
      productName: "Foldable Shopping...",
      mfr: "FlexCart",
      category: "Trolleys",
      subcategory: "Foldable Trolley",
      color: "Black",
      size: "140 Ltr",
      stock: "100 units",
      msrp: "₹4,500",
      costPrice: "₹4,300",
      status: "Out-of-Stock",
      selected: false,
    },
    {
      id: "#301500",
      part: "AC-WC-31",
      image: HangingAccessory,
      productName: "Hanging Accessory...",
      mfr: "RackZone",
      category: "Accessories",
      subcategory: "Hanging System",
      color: "Cream",
      size: "8'",
      stock: "100 units",
      msrp: "₹2,000",
      costPrice: "₹1,500",
      status: "Out-of-Stock",
      selected: false,
    },
    {
      id: "#301400",
      part: "FR-WC-23",
      image: UnderCounter,
      productName: "Under Counter Co...",
      mfr: "ChillX",
      category: "Refrigeration",
      subcategory: "Under-counter Freezer",
      color: "White",
      size: "100 Ltr",
      stock: "100 units",
      msrp: "₹38,000",
      costPrice: "₹29,000",
      status: "In-Stock",
      selected: false,
    },
  ]);

  const statusColor = {
    "In-Stock": styles.instock,
    "Low Stock": styles.lowstock,
    "Out-of-Stock": styles.outofstock,
  };

  const [activeMenu, setActiveMenu] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectAll, setSelectAll] = useState(false);
  const [showPageSizeDropdown, setShowPageSizeDropdown] = useState(false);
  const [selectedPageSize, setSelectedPageSize] = useState(10);

  const pageSizeOptions = [10, 20, 50];

  const handleFilter = () => {
    router.push("/catalogue/your-catalog/filter");
  };

  // const handleEditProduct = () => {
  //   router.push("/catalogue/your-catalog/edit-product");
  // };

  const handleCheckboxChange = (id) => {
    setFilters(
      filters.map((filter) =>
        filter.id === id ? { ...filter, selected: !filter.selected } : filter
      )
    );
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setFilters(
      filters.map((filter) => ({
        ...filter,
        selected: newSelectAll,
      }))
    );
  };

  const toggleMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleMenuAction = (action, id) => {
    console.log(`${action} action for filter ${id}`);
    setActiveMenu(null);
  };

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const togglePageSizeDropdown = () => {
    setShowPageSizeDropdown(!showPageSizeDropdown);
  };

  const handlePageSizeSelect = (size) => {
    setSelectedPageSize(size);
    setItemsPerPage(size);
    setShowPageSizeDropdown(false);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999);

  const handleSliderChange = (e) => {
    const value = e.target.value;
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  // Calculate pagination
  const totalPages = Math.ceil(filters.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filters.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Your Catalog</h2>
        <div className={styles.searchContain}>
          <div className={styles.inputWrapper}>
            <Search className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search Catalog"
              className={styles.searchInput}
            />
          </div>
        </div>
        <div className={styles.searchContainer}>
          <button className={styles.Button}>Save Filter</button>

          <button className={styles.Button}>
            <Plus size={20} />
            Add Your Product
          </button>
        </div>
      </div>

      <div className={styles.filterContainer}>
        {/* Row 1 */}
        <div className={styles.filterRow}>
          <select className={styles.filterDropdown}>
            <option>Sub-category</option>
          </select>
          <select className={styles.filterDropdown}>
            <option>Vendors</option>
          </select>
          <select className={styles.filterDropdown}>
            <option>Option 1 Name</option>
          </select>
          <select className={styles.filterDropdown}>
            <option>Option 1 Value</option>
          </select>
          <select className={styles.filterDropdown}>
            <option>Option 2 Name</option>
          </select>
          <select className={styles.filterDropdown}>
            <option>Option 2 Value</option>
          </select>
          <select className={styles.filterDropdown}>
            <option>Option 3 Name</option>
          </select>
          <select className={styles.filterDropdown}>
            <option>Option 3 Value</option>
          </select>
        </div>

        {/* Row 2 */}
        <div className={styles.filterRow}>
          <label className={styles.myLabelClass}>Enter Keyword</label>
          <input
            type="text"
            placeholder="Enter Keyword"
            className={styles.filterInput}
            defaultValue="CartXpress"
          />
          <label className={styles.myLabelClass}>Enter SKU</label>
          <br></br>
          <input type="text" placeholder="" className={styles.filterInput} />
          <div className={styles.priceRangeContainer}>
            <span className={styles.priceLabel}>Price Range</span>
            <input
              type="text"
              value="$0"
              readOnly
              className={styles.priceInput}
            />
            <span className={styles.priceSeparator}>Min</span>
            <input
              type="text"
              value="$999"
              readOnly
              className={styles.priceInput}
            />
            <span className={styles.priceSeparator}>Max</span>
          </div>
        </div>

        {/* Row 3 */}
        <div className={styles.filterRow}>
          <select className={styles.filterDropdownn}>
            <option>Catalog</option>
          </select>
          <select className={styles.filterDropdownn}>
            <option>Price Profile</option>
          </select>
          <select className={styles.filterDropdowns}>
            <option>Manufacturer</option>
          </select>
          <div className={styles.sliderContainer}>
            <span className={styles.sliderLabel}>$0</span>
            <input
              type="range"
              min="0"
              max="999"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className={styles.priceSlider}
            />
            {/* <input
              type="range"
              min="0"
              max="999"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className={styles.priceSlider}
            /> */}
            <span className={styles.sliderLabel}>$999</span>
          </div>
        </div>

        {/* Row 4 */}
        <div className={styles.filterRow + " " + styles.lastRow}>
          <div className={styles.leftSection}>
            <select className={styles.filterDropdown}>
              <option>Category</option>
            </select>
            <select className={styles.filterDropdown}>
              <option>Part Number</option>
            </select>
          </div>
          <div className={styles.centerSection}>
            <button className={styles.cancelButton}>Cancel</button>
            <button className={styles.applyButton}>Apply</button>
          </div>
          <div className={styles.rightSection}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" className={styles.inStockCheckbox} />
              In-Stock
            </label>
            <select className={styles.filterDropdown}>
              <option>Export Filter</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.filtersTable}>
          <thead>
            <tr>
              <th className={styles.checkboxColumn}>
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectAll}
                />
              </th>
              <th className={styles.idColumn}>ID</th>
              <th className={styles.partColumn}>Part</th>
              <th className={styles.nameColumn}>Product Name</th>
              <th className={styles.mfrColumn}>MFR</th>
              <th className={styles.categoryColumn}>Category</th>
              <th className={styles.subcategoryColumn}>Subcategory</th>
              <th className={styles.colorColumn}>Color</th>
              <th className={styles.sizeColumn}>Size</th>
              <th className={styles.stockColumn}>Stock</th>
              <th className={styles.msrpColumn}>MSRP</th>
              <th className={styles.costPriceColumn}>Cost Price</th>
              <th className={styles.statusColumn}>Status</th>
              <th className={styles.actionsColumn}></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((filter, index) => (
              <tr
                key={filter.id}
                className={filter.selected ? styles.selectedRow : ""}
              >
                <td className={styles.checkboxColumn}>
                  <input
                    type="checkbox"
                    checked={filter.selected}
                    onChange={() => handleCheckboxChange(filter.id)}
                  />
                </td>
                <td className={styles.idColumn}>{filter.id}</td>
                <td className={styles.partColumn}>{filter.part}</td>
                <td className={styles.nameColumn}>
                  <Image
                    src={filter.image}
                    alt={filter.productName}
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  <span className={styles.productNameText}>
                    {filter.productName}
                  </span>
                </td>
                <td className={styles.mfrColumn}>{filter.mfr}</td>
                <td className={styles.categoryColumn}>{filter.category}</td>
                <td className={styles.subcategoryColumn}>
                  {filter.subcategory}
                </td>
                <td className={styles.colorColumn}>{filter.color}</td>
                <td className={styles.sizeColumn}>{filter.size}</td>
                <td className={styles.stockColumn}>{filter.stock}</td>
                <td className={styles.msrpColumn}>{filter.msrp}</td>
                <td className={styles.costPriceColumn}>{filter.costPrice}</td>
                <td className={styles.statusColumn}>
                  <span
                    className={`${styles.statusBadge} ${
                      statusColor[filter.status]
                    }`}
                  >
                    {filter.status}
                  </span>
                </td>
                <td className={styles.actionsColumn}>
                  <button
                    className={styles.menuButton}
                    onClick={() => toggleMenu(index)}
                  >
                    <span className={styles.menuDots}>⋮</span>
                  </button>
                  {activeMenu === index && (
                    <div className={styles.menuDropdown}>
                      <button>Edit</button>
                      <button
                        onClick={() => handleMenuAction("update", filter.id)}
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleMenuAction("delete", filter.id)}
                        className={styles.deleteButton}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.pagination}>
          <div className={styles.paginationButtons}>
            <button className={styles.paginationButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className={styles.paginationButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
          <div className={styles.paginationInfo}>
            <span>Show</span>
            <div className={styles.customDropdown}>
              <button
                className={styles.dropdownButton}
                onClick={togglePageSizeDropdown}
              >
                {selectedPageSize}
                <AiOutlineCaretDown
                  className={`${styles.dropdownIcon} ${
                    showPageSizeDropdown ? styles.rotated : ""
                  }`}
                />
              </button>

              {showPageSizeDropdown && (
                <div className={styles.dropdownMenu}>
                  {pageSizeOptions.map((option) => (
                    <div
                      key={option}
                      className={`${styles.dropdownItem} ${
                        selectedPageSize === option ? styles.selected : ""
                      }`}
                      onClick={() => handlePageSizeSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
