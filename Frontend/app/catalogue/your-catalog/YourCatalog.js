// // components/CatalogueFilter.js

// "use client";
// import styles from "./YourCatalog.module.css";
// import { useState } from "react";
// import { MdTune } from "react-icons/md";

// import { Search, Plus, Check, ChevronDown } from "lucide-react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { Slider, Box } from "@mui/material";

// import { AiOutlineCaretDown } from "react-icons/ai";
// import EndCapRack from "../../images/End Cap Rack.png";
// import DoubleWall from "../../images/Double Wall.png";
// import SteelShopping from "../../images/Steel Shopping.png";
// import HangingAccessory from "../../images/Hanging Accessory.png";
// import UprightCooler from "../../images/Upright Cooler.png";
// import Foldable from "../../images/Foldable Shopping.png";
// import Modular from "../../images/Modular Freezer.png";
// import SingleSided from "../../images/Single Sided.png";
// import Commercial from "../../images/Commercial.png";
// import UnderCounter from "../../images/Under-Counter.png";

// export default function CatalogueFilter() {
//   const router = useRouter();

//   // Filter state from first component
//   const [filters, setFilters] = useState({
//     subCategory: "",
//     vendors: "",
//     option1Name: "",
//     option1Value: "",
//     option2Name: "",
//     option2Value: "",
//     option3Name: "",
//     option3Value: "",
//     enterKeyword: "CartXpress",
//     enterSKU: "",
//     catalog: "",
//     priceProfile: "",
//     manufacturer: "",
//     category: "",
//     partNumber: " ",
//     priceRange: 500,
//     inStock: true,
//     exportFilter: "",
//     minPrice: 0,
//     maxPrice: 999,
//   });

//   const [tables, setTables] = useState([
//     {
//       id: "#302012",
//       part: "BW-SH-01",
//       image: DoubleWall,
//       productName: "Double Wall Rack",
//       mfr: "Briteways",
//       category: "Shelving",
//       subcategory: "Wall Rack",
//       color: "Black",
//       size: "180mm",
//       stock: "50 units",
//       msrp: "₹12,000",
//       costPrice: "₹8,400",
//       status: "In-Stock",
//       selected: false,
//     },
//     {
//       id: "#302011",
//       part: "CH-WC-05",
//       image: Commercial,
//       productName: "Commercial Display Chiller",
//       mfr: "ChillCore",
//       category: "Refrigeration",
//       subcategory: "Upright Chiller",
//       color: "White",
//       size: "140 Ltr",
//       stock: "75 units",
//       msrp: "₹65,000",
//       costPrice: "₹49,500",
//       status: "Low Stock",
//       selected: false,
//     },
//     {
//       id: "#302002",
//       part: "BW-TR-10",
//       image: SteelShopping,
//       productName: "Steel Shopping Trolley",
//       mfr: "CartExpress",
//       category: "Trolleys",
//       subcategory: "Standard Trolley",
//       color: "Silver",
//       size: "140 Ltr",
//       stock: "100 units",
//       msrp: "₹7,500",
//       costPrice: "₹5,300",
//       status: "Out-of-Stock",
//       selected: false,
//     },
//     {
//       id: "#301901",
//       part: "AC-WC-22",
//       image: EndCapRack,
//       productName: "End Cap Rack Adj",
//       mfr: "RackSpace",
//       category: "Accessories",
//       subcategory: "Display Add-on",
//       color: "White",
//       size: "140 Ltr",
//       stock: "100 units",
//       msrp: "₹3,000",
//       costPrice: "₹2,300",
//       status: "Out-of-Stock",
//       selected: false,
//     },
//     {
//       id: "#301900",
//       part: "BW-FR-17",
//       image: Modular,
//       productName: "Modular Freezer U",
//       mfr: "NordicChill",
//       category: "Refrigeration",
//       subcategory: "Freezer",
//       color: "White",
//       size: "500 Ltr",
//       stock: "100 units",
//       msrp: "₹85,000",
//       costPrice: "₹67,000",
//       status: "Low Stock",
//       selected: false,
//     },
//     {
//       id: "#301800",
//       part: "SH-WC-09",
//       image: SingleSided,
//       productName: "Single Sided Rack",
//       mfr: "StoreFrame",
//       category: "Shelving",
//       subcategory: "Gondola Rack",
//       color: "Black",
//       size: "180mm",
//       stock: "100 units",
//       msrp: "₹8,000",
//       costPrice: "₹7,000",
//       status: "Low Stock",
//       selected: false,
//     },
//     {
//       id: "#301701",
//       part: "BW-CH-12",
//       image: UprightCooler,
//       productName: "Upright Cooler with...",
//       mfr: "CoolEdge",
//       category: "Refrigeration",
//       subcategory: "Cooler",
//       color: "Black",
//       size: "140 Ltr",
//       stock: "100 units",
//       msrp: "₹42,000",
//       costPrice: "₹32,000",
//       status: "In-Stock",
//       selected: false,
//     },
//     {
//       id: "#301600",
//       part: "BW-TR-14",
//       image: Foldable,
//       productName: "Foldable Shopping...",
//       mfr: "FlexCart",
//       category: "Trolleys",
//       subcategory: "Foldable Trolley",
//       color: "Black",
//       size: "140 Ltr",
//       stock: "100 units",
//       msrp: "₹4,500",
//       costPrice: "₹4,300",
//       status: "Out-of-Stock",
//       selected: false,
//     },
//     {
//       id: "#301500",
//       part: "AC-WC-31",
//       image: HangingAccessory,
//       productName: "Hanging Accessory...",
//       mfr: "RackZone",
//       category: "Accessories",
//       subcategory: "Hanging System",
//       color: "Cream",
//       size: "8'",
//       stock: "100 units",
//       msrp: "₹2,000",
//       costPrice: "₹1,500",
//       status: "Out-of-Stock",
//       selected: false,
//     },
//     {
//       id: "#301400",
//       part: "FR-WC-23",
//       image: UnderCounter,
//       productName: "Under Counter Co...",
//       mfr: "ChillX",
//       category: "Refrigeration",
//       subcategory: "Under-counter Freezer",
//       color: "White",
//       size: "100 Ltr",
//       stock: "100 units",
//       msrp: "₹38,000",
//       costPrice: "₹29,000",
//       status: "In-Stock",
//       selected: false,
//     },
//   ]);

//   // ----------------

//   const SelectDropdown = ({ placeholder, value, onChange, className = "" }) => (
//     <div className={`relative ${className}`}>
//       <select
//         className="w-full px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-md bg-white appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         value={value}
//         onChange={onChange}
//       >
//         <option value="">{placeholder}</option>
//       </select>
//       <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//     </div>
//   );

//   // State
//   const [priceRange, setPriceRange] = useState([0, 999]);

//   // Handler
//   const handlePriceRangeChange = (event, newValue) => {
//     setPriceRange(newValue);
//   };
//   // ----------------

//   const statusColor = {
//     "In-Stock": styles.instock,
//     "Low Stock": styles.lowstock,
//     "Out-of-Stock": styles.outofstock,
//   };

//   const [activeMenu, setActiveMenu] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(10);
//   const [selectAll, setSelectAll] = useState(false);
//   const [showPageSizeDropdown, setShowPageSizeDropdown] = useState(false);
//   const [selectedPageSize, setSelectedPageSize] = useState(10);

//   const pageSizeOptions = [10, 20, 50];

//   // const handleFilter = () => {
//   //   router.push("/catalogue/your-catalog/filter");
//   // };

//   // const handleEditProduct = () => {
//   //   router.push("/catalogue/your-catalog/edit-product");
//   // };

//   const handleCheckboxChange = (id) => {
//     setTables(
//       tables.map((filter) =>
//         filter.id === id ? { ...filter, selected: !filter.selected } : filter
//       )
//     );
//   };

//   const handleSelectAll = () => {
//     const newSelectAll = !selectAll;
//     setSelectAll(newSelectAll);
//     setTables(
//       tables.map((filter) => ({
//         ...filter,
//         selected: newSelectAll,
//       }))
//     );
//   };

//   const toggleMenu = (index) => {
//     setActiveMenu(activeMenu === index ? null : index);
//   };

//   const handleMenuAction = (action, id) => {
//     console.log(`${action} action for filter ${id}`);
//     setActiveMenu(null);
//   };

//   const handlePageChange = (direction) => {
//     if (direction === "next" && currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     } else if (direction === "prev" && currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const togglePageSizeDropdown = () => {
//     setShowPageSizeDropdown(!showPageSizeDropdown);
//   };

//   const handlePageSizeSelect = (size) => {
//     setSelectedPageSize(size);
//     setItemsPerPage(size);
//     setShowPageSizeDropdown(false);
//     setCurrentPage(1); // Reset to first page when changing page size
//   };

//   // Calculate pagination
//   const totalPages = Math.ceil(tables.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = tables.slice(indexOfFirstItem, indexOfLastItem);

//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <h2 className={styles.title}>Your Catalog</h2>

//         <div className={styles.searchContainer}>
//           <button className={styles.Button}>Save Filter</button>

//           <button className={styles.Button}>
//             <Plus size={20} />
//             Add Your Product
//           </button>
//         </div>
//       </div>

//       {/* filter section */}

//       <div className="bg-white px-4 py-4 border-b shadow-sm">
//         {/* First Row - All dropdowns in one line */}
//         <div className="grid grid-cols-9 gap-3 mb-4">
//           <SelectDropdown
//             placeholder="Category"
//             value={filters.category}
//             onChange={(e) =>
//               setFilters({ ...filters, category: e.target.value })
//             }
//           />
//           <SelectDropdown
//             placeholder="Sub-Category"
//             value={filters.subCategory}
//             onChange={(e) =>
//               setFilters({ ...filters, subCategory: e.target.value })
//             }
//           />
//           <SelectDropdown
//             placeholder="Vendors"
//             value={filters.vendors}
//             onChange={(e) =>
//               setFilters({ ...filters, vendors: e.target.value })
//             }
//           />
//           <SelectDropdown
//             placeholder="Option 1 Name"
//             value={filters.option1Name}
//             onChange={(e) =>
//               setFilters({ ...filters, option1Name: e.target.value })
//             }
//           />
//           <SelectDropdown
//             placeholder="Option 1 Value"
//             value={filters.option1Value}
//             onChange={(e) =>
//               setFilters({ ...filters, option1Value: e.target.value })
//             }
//           />
//           <SelectDropdown
//             placeholder="Option 2 Name"
//             value={filters.option2Name}
//             onChange={(e) =>
//               setFilters({ ...filters, option2Name: e.target.value })
//             }
//           />
//           <SelectDropdown
//             placeholder="Option 2 Value"
//             value={filters.option2Value}
//             onChange={(e) =>
//               setFilters({ ...filters, option2Value: e.target.value })
//             }
//           />
//           <SelectDropdown
//             placeholder="Option 3 Name"
//             value={filters.option3Name}
//             onChange={(e) =>
//               setFilters({ ...filters, option3Name: e.target.value })
//             }
//           />
//           <SelectDropdown
//             placeholder="Option 3 Value"
//             value={filters.option3Value}
//             onChange={(e) =>
//               setFilters({ ...filters, option3Value: e.target.value })
//             }
//           />
//         </div>

//         {/* Second Row - Enter Keyword, Enter SKU, and Price Range */}
//         <div className="grid grid-cols-12 gap-4 mb-4 items-center">
//           <div className="col-span-3">
//             <label className="block text-sm text-gray-600 mb-1">
//               Enter Keyword
//             </label>
//             <input
//               type="text"
//               className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               value={filters.enterKeyword}
//               onChange={(e) =>
//                 setFilters({ ...filters, enterKeyword: e.target.value })
//               }
//             />
//           </div>

//           <div className="col-span-3">
//             <label className="block text-sm text-gray-600 mb-1">
//               Enter SKU
//             </label>
//             <input
//               type="text"
//               className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               value={filters.enterSKU}
//               onChange={(e) =>
//                 setFilters({ ...filters, enterSKU: e.target.value })
//               }
//             />
//           </div>

//           <div className="col-span-3">
//             <label className="block text-sm text-gray-600 mb-1">
//               Manufacture
//             </label>
//             <input
//               type="text"
//               className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               value={filters.manufacturer}
//               onChange={(e) =>
//                 setFilters({ ...filters, manufacture: e.target.value })
//               }
//             />
//           </div>

//           <div className="col-span-3">
//             <label className="block text-sm text-gray-600 mb-1">
//               Part Number
//             </label>
//             <input
//               type="text"
//               className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               value={filters.partNumber}
//               onChange={(e) =>
//                 setFilters({ ...filters, partNumber: e.target.value })
//               }
//             />
//           </div>
//         </div>

//         {/* Third Row - Other filters */}
//         <div className="grid grid-cols-11 gap-4 mb-4 items-end">
//           <div className="col-span-2">
//             <SelectDropdown
//               placeholder="Catalog"
//               value={filters.catalog}
//               onChange={(e) =>
//                 setFilters({ ...filters, catalog: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-span-2">
//             <SelectDropdown
//               placeholder="Price Profile"
//               value={filters.priceProfile}
//               onChange={(e) =>
//                 setFilters({ ...filters, priceProfile: e.target.value })
//               }
//             />
//           </div>

//           <div className="col-span-2 w-full px-3 py-2 text-sm border border-400 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//             <div className="flex items-center space-x-2">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="inStock"
//                   checked={filters.inStock}
//                   onChange={(e) =>
//                     setFilters({ ...filters, inStock: e.target.checked })
//                   }
//                   className="sr-only"
//                 />
//                 <label
//                   htmlFor="inStock"
//                   className="flex items-center cursor-pointer"
//                 >
//                   <div
//                     className={`w-5 h-5 border-2 rounded flex items-center justify-center ${
//                       filters.inStock
//                         ? "bg-blue-500 border-blue-500"
//                         : "border-gray-300"
//                     }`}
//                   >
//                     {filters.inStock && (
//                       <Check className="w-3 h-3 text-white" />
//                     )}
//                   </div>
//                   <span className="ml-2 text-sm text-gray-600">In-Stock</span>
//                 </label>
//               </div>
//             </div>
//           </div>
//           <div className="col-span-2">
//             <SelectDropdown
//               placeholder="Export Filter"
//               value={filters.exportFilter}
//               onChange={(e) =>
//                 setFilters({ ...filters, exportFilter: e.target.value })
//               }
//             />
//           </div>

//           <div className="col-span-3">
//             <label className="block text-sm text-gray-600 mb-1">
//               Price Range
//             </label>
//             <div className="flex items-center space-x-4">
//               <span className="text-sm font-medium">${priceRange[0]}</span>
//               <Box sx={{ width: "50%" }}>
//                 <Slider
//                   value={priceRange}
//                   onChange={handlePriceRangeChange}
//                   valueLabelDisplay="auto"
//                   min={0}
//                   max={999}
//                   sx={{
//                     color: "#3b82f6",
//                     "& .MuiSlider-thumb": {
//                       backgroundColor: "#3b82f6",
//                       border: "2px solid white",
//                       boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
//                     },
//                     "& .MuiSlider-track": {
//                       backgroundColor: "#3b82f6",
//                     },
//                     "& .MuiSlider-rail": {
//                       backgroundColor: "#e5e7eb",
//                     },
//                   }}
//                 />
//               </Box>
//               <span className="text-sm font-medium">${priceRange[1]}</span>
//             </div>
//           </div>
//           <div className="col-span-2"></div>
//         </div>

//         {/* Fourth Row - Category, Part Number and Buttons */}
//         <div className="grid grid-cols-12  items-end">
//           <div className="col-span-4"></div>
//           <div className="col-span-4 flex space-x-3">
//             <button className="flex-1 px-6 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
//               Cancel
//             </button>
//             <button className="flex-1 px-6 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
//               Apply
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ---------------- */}

//       <div className={styles.tableContainer}>
//         <table className={styles.filtersTable}>
//           <thead>
//             <tr>
//               <th className={styles.checkboxColumn}>
//                 <input
//                   type="checkbox"
//                   onChange={handleSelectAll}
//                   checked={selectAll}
//                 />
//               </th>
//               <th className={styles.idColumn}>ID</th>
//               <th className={styles.partColumn}>Part</th>
//               <th className={styles.nameColumn}>Product Name</th>
//               <th className={styles.mfrColumn}>MFR</th>
//               <th className={styles.categoryColumn}>Category</th>
//               <th className={styles.subcategoryColumn}>Subcategory</th>
//               <th className={styles.colorColumn}>Color</th>
//               <th className={styles.sizeColumn}>Size</th>
//               <th className={styles.stockColumn}>Stock</th>
//               <th className={styles.msrpColumn}>MSRP</th>
//               <th className={styles.costPriceColumn}>Cost Price</th>
//               <th className={styles.statusColumn}>Status</th>
//               <th className={styles.actionsColumn}></th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.map((filter, index) => (
//               <tr
//                 key={filter.id}
//                 className={filter.selected ? styles.selectedRow : ""}
//               >
//                 <td className={styles.checkboxColumn}>
//                   <input
//                     type="checkbox"
//                     checked={filter.selected}
//                     onChange={() => handleCheckboxChange(filter.id)}
//                   />
//                 </td>
//                 <td className={styles.idColumn}>{filter.id}</td>
//                 <td className={styles.partColumn}>{filter.part}</td>
//                 <td className={styles.nameColumn}>
//                   <Image
//                     src={filter.image}
//                     alt={filter.productName}
//                     width={40}
//                     height={40}
//                     className={styles.productImage}
//                   />
//                   <span className={styles.productNameText}>
//                     {filter.productName}
//                   </span>
//                 </td>
//                 <td className={styles.mfrColumn}>{filter.mfr}</td>
//                 <td className={styles.categoryColumn}>{filter.category}</td>
//                 <td className={styles.subcategoryColumn}>
//                   {filter.subcategory}
//                 </td>
//                 <td className={styles.colorColumn}>{filter.color}</td>
//                 <td className={styles.sizeColumn}>{filter.size}</td>
//                 <td className={styles.stockColumn}>{filter.stock}</td>
//                 <td className={styles.msrpColumn}>{filter.msrp}</td>
//                 <td className={styles.costPriceColumn}>{filter.costPrice}</td>
//                 <td className={styles.statusColumn}>
//                   <span
//                     className={`${styles.statusBadge} ${
//                       statusColor[filter.status]
//                     }`}
//                   >
//                     {filter.status}
//                   </span>
//                 </td>
//                 <td className={styles.actionsColumn}>
//                   <button
//                     className={styles.menuButton}
//                     onClick={() => toggleMenu(index)}
//                   >
//                     <span className={styles.menuDots}>⋮</span>
//                   </button>
//                   {activeMenu === index && (
//                     <div className={styles.menuDropdown}>
//                       <button>Edit</button>
//                       <button
//                         onClick={() => handleMenuAction("update", filter.id)}
//                       >
//                         Update
//                       </button>
//                       <button
//                         onClick={() => handleMenuAction("delete", filter.id)}
//                         className={styles.deleteButton}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className={styles.tableContainer}>
//         <div className={styles.pagination}>
//           <div className={styles.paginationButtons}>
//             <button className={styles.paginationButton}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <polyline points="15 18 9 12 15 6" />
//               </svg>
//             </button>
//             <button className={styles.paginationButton}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <polyline points="9 18 15 12 9 6" />
//               </svg>
//             </button>
//           </div>
//           <div className={styles.paginationInfo}>
//             <span>Show</span>
//             <div className={styles.customDropdown}>
//               <button
//                 className={styles.dropdownButton}
//                 onClick={togglePageSizeDropdown}
//               >
//                 {selectedPageSize}
//                 <AiOutlineCaretDown
//                   className={`${styles.dropdownIcon} ${
//                     showPageSizeDropdown ? styles.rotated : ""
//                   }`}
//                 />
//               </button>

//               {showPageSizeDropdown && (
//                 <div className={styles.dropdownMenu}>
//                   {pageSizeOptions.map((option) => (
//                     <div
//                       key={option}
//                       className={`${styles.dropdownItem} ${
//                         selectedPageSize === option ? styles.selected : ""
//                       }`}
//                       onClick={() => handlePageSizeSelect(option)}
//                     >
//                       {option}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// components/CatalogueFilter.js

"use client";
import styles from "./YourCatalog.module.css";
import { useState } from "react";
import { MdTune } from "react-icons/md";

import { Search, Plus, Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Slider, Box } from "@mui/material";

// Material-UI imports for the new table
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  Pagination,
  Select,
  FormControl,
  Chip,
  Avatar,
} from "@mui/material";
import { MoreVert, Save } from "@mui/icons-material";

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

  // Filter state from first component (unchanged)
  const [filters, setFilters] = useState({
    subCategory: "",
    vendors: "",
    option1Name: "",
    option1Value: "",
    option2Name: "",
    option2Value: "",
    option3Name: "",
    option3Value: "",
    enterKeyword: "CartXpress",
    enterSKU: "",
    catalog: "",
    priceProfile: "",
    manufacturer: "",
    category: "",
    partNumber: " ",
    priceRange: 500,
    inStock: true,
    exportFilter: "",
    minPrice: 0,
    maxPrice: 999,
  });

  const [tables, setTables] = useState([
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

  // Material-UI Table states
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectAll, setSelectAll] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  // ----------------

  const SelectDropdown = ({ placeholder, value, onChange, className = "" }) => (
    <div className={`relative ${className}`}>
      <select
        className="w-full px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-md bg-white appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={value}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
      </select>
      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  );

  // State
  const [priceRange, setPriceRange] = useState([0, 999]);

  // Handler
  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  // Material-UI Table handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handleSelectAllClick = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setTables(tables.map((row) => ({ ...row, selected: newSelectAll })));
  };

  const handleRowSelect = (id) => {
    setTables(
      tables.map((row) =>
        row.id === id ? { ...row, selected: !row.selected } : row
      )
    );
  };

  const handleMenuClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedRowIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRowIndex(null);
  };

  const getStatusChip = (status) => {
    let bgColor = "";
    let textColor = "";

    switch (status) {
      case "In-Stock":
        bgColor = "#dcfce7";
        textColor = "#22c55e";
        break;
      case "Low Stock":
        bgColor = "#fef3c7";
        textColor = "#ca8a04";
        break;
      case "Out-of-Stock":
        bgColor = "#fee2e2";
        textColor = "#dc2626";
        break;
      default:
        bgColor = "#f3f4f6";
        textColor = "#6b7280";
    }

    return (
      <Chip
        label={status}
        size="small"
        sx={{
          backgroundColor: bgColor,
          borderRadius: "5px",
          color: textColor,
          border: "none",
          fontSize: "0.875rem",
          fontWeight: 500,
          height: "28px",
          "& .MuiChip-label": {
            px: 1.5,
          },
        }}
      />
    );
  };

  // Calculate pagination
  const paginatedData = tables.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  const totalPages = Math.ceil(tables.length / rowsPerPage);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Your Catalog</h2>

        <div className={styles.searchContainer}>
          <button className={styles.Button}>Save Filter</button>

          <button className={styles.Button}>
            <Plus size={20} />
            Add Your Product
          </button>
        </div>
      </div>

      {/* filter section - UNCHANGED */}
      <div className="bg-white px-4 py-4 border-b shadow-sm">
        {/* First Row - All dropdowns in one line */}
        <div className="grid grid-cols-9 gap-3 mb-4">
          <SelectDropdown
            placeholder="Category"
            value={filters.category}
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
          />
          <SelectDropdown
            placeholder="Sub-Category"
            value={filters.subCategory}
            onChange={(e) =>
              setFilters({ ...filters, subCategory: e.target.value })
            }
          />
          <SelectDropdown
            placeholder="Vendors"
            value={filters.vendors}
            onChange={(e) =>
              setFilters({ ...filters, vendors: e.target.value })
            }
          />
          <SelectDropdown
            placeholder="Option 1 Name"
            value={filters.option1Name}
            onChange={(e) =>
              setFilters({ ...filters, option1Name: e.target.value })
            }
          />
          <SelectDropdown
            placeholder="Option 1 Value"
            value={filters.option1Value}
            onChange={(e) =>
              setFilters({ ...filters, option1Value: e.target.value })
            }
          />
          <SelectDropdown
            placeholder="Option 2 Name"
            value={filters.option2Name}
            onChange={(e) =>
              setFilters({ ...filters, option2Name: e.target.value })
            }
          />
          <SelectDropdown
            placeholder="Option 2 Value"
            value={filters.option2Value}
            onChange={(e) =>
              setFilters({ ...filters, option2Value: e.target.value })
            }
          />
          <SelectDropdown
            placeholder="Option 3 Name"
            value={filters.option3Name}
            onChange={(e) =>
              setFilters({ ...filters, option3Name: e.target.value })
            }
          />
          <SelectDropdown
            placeholder="Option 3 Value"
            value={filters.option3Value}
            onChange={(e) =>
              setFilters({ ...filters, option3Value: e.target.value })
            }
          />
        </div>

        {/* Second Row - Enter Keyword, Enter SKU, and Price Range */}
        <div className="grid grid-cols-12 gap-4 mb-4 items-center">
          <div className="col-span-3">
            <label className="block text-sm text-gray-600 mb-1">
              Enter Keyword
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.enterKeyword}
              onChange={(e) =>
                setFilters({ ...filters, enterKeyword: e.target.value })
              }
            />
          </div>

          <div className="col-span-3">
            <label className="block text-sm text-gray-600 mb-1">
              Enter SKU
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.enterSKU}
              onChange={(e) =>
                setFilters({ ...filters, enterSKU: e.target.value })
              }
            />
          </div>

          <div className="col-span-3">
            <label className="block text-sm text-gray-600 mb-1">
              Manufacture
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.manufacturer}
              onChange={(e) =>
                setFilters({ ...filters, manufacture: e.target.value })
              }
            />
          </div>

          <div className="col-span-3">
            <label className="block text-sm text-gray-600 mb-1">
              Part Number
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={filters.partNumber}
              onChange={(e) =>
                setFilters({ ...filters, partNumber: e.target.value })
              }
            />
          </div>
        </div>

        {/* Third Row - Other filters */}
        <div className="grid grid-cols-11 gap-4 mb-4 items-end">
          <div className="col-span-2">
            <SelectDropdown
              placeholder="Catalog"
              value={filters.catalog}
              onChange={(e) =>
                setFilters({ ...filters, catalog: e.target.value })
              }
            />
          </div>
          <div className="col-span-2">
            <SelectDropdown
              placeholder="Price Profile"
              value={filters.priceProfile}
              onChange={(e) =>
                setFilters({ ...filters, priceProfile: e.target.value })
              }
            />
          </div>

          <div className="col-span-2 w-full px-3 py-2 text-sm border border-400 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="inStock"
                  checked={filters.inStock}
                  onChange={(e) =>
                    setFilters({ ...filters, inStock: e.target.checked })
                  }
                  className="sr-only"
                />
                <label
                  htmlFor="inStock"
                  className="flex items-center cursor-pointer"
                >
                  <div
                    className={`w-5 h-5 border-2 rounded flex items-center justify-center ${
                      filters.inStock
                        ? "bg-blue-500 border-blue-500"
                        : "border-gray-300"
                    }`}
                  >
                    {filters.inStock && (
                      <Check className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">In-Stock</span>
                </label>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <SelectDropdown
              placeholder="Export Filter"
              value={filters.exportFilter}
              onChange={(e) =>
                setFilters({ ...filters, exportFilter: e.target.value })
              }
            />
          </div>

          <div className="col-span-3">
            <label className="block text-sm text-gray-600 mb-1">
              Price Range
            </label>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">${priceRange[0]}</span>
              <Box sx={{ width: "50%" }}>
                <Slider
                  value={priceRange}
                  onChange={handlePriceRangeChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={999}
                  sx={{
                    color: "#3b82f6",
                    "& .MuiSlider-thumb": {
                      backgroundColor: "#3b82f6",
                      border: "2px solid white",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    },
                    "& .MuiSlider-track": {
                      backgroundColor: "#3b82f6",
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "#e5e7eb",
                    },
                  }}
                />
              </Box>
              <span className="text-sm font-medium">${priceRange[1]}</span>
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>

        {/* Fourth Row - Category, Part Number and Buttons */}
        <div className="grid grid-cols-12  items-end">
          <div className="col-span-4"></div>
          <div className="col-span-4 flex space-x-3">
            <button className="flex-1 px-6 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button className="flex-1 px-6 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Material-UI Table Implementation */}
      <div className="w-full max-w-auto mx-200 bg-white h-auto font-sans">
        {/* Table Container with horizontal scroll */}
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            maxHeight: "none",
            overflowY: "visible",
            overflowX: "auto",
            "&::-webkit-scrollbar": {
              height: 8,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f1f1f1",
              borderRadius: 8,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#80c8f1",
              borderRadius: 8,
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#9be0f7",
            },
          }}
        >
          <Table stickyHeader sx={{ minWidth: 1600 }}>
            <TableHead>
              <TableRow>
                <TableCell
                  padding="checkbox"
                  sx={{ width: 50, bgcolor: "#f9fafb" }}
                >
                  {/* <Checkbox
                    checked={selectAll}
                    onChange={handleSelectAllClick}
                    indeterminate={
                      tables.some((row) => row.selected) &&
                      !tables.every((row) => row.selected)
                    }
                    sx={{ color: "#3b82f6" }}
                  /> */}
                </TableCell>
                <TableCell
                  sx={{
                    // width: 100,
                    bgcolor: "#f9fafb",
                    fontWeight: 600,
                    margin: "20%",
                    color: "#686f83",
                    fontSize: "0.875rem",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    // width: "20%",
                    bgcolor: "#f9fafb",
                    fontWeight: 600,
                    margin: "20%",
                    tableLayout: "auto",
                    color: "#686f83",
                    fontSize: "0.875rem",
                  }}
                >
                  Part
                </TableCell>
                <TableCell
                  sx={{
                    // width: "40%",
                    bgcolor: "#f9fafb",
                    fontWeight: 600,
                    color: "#686f83",
                    fontSize: "0.875rem",
                    tableLayout: "auto",
                  }}
                >
                  Product Name
                </TableCell>
                <TableCell
                  sx={{
                    width: 120,
                    bgcolor: "#f9fafb",
                    fontWeight: 600,
                    color: "#686f83",
                    fontSize: "0.875rem",
                  }}
                >
                  MFR
                </TableCell>
                <TableCell
                  sx={{
                    width: 120,
                    bgcolor: "#f9fafb",
                    fontWeight: 600,
                    color: "#686f83",
                    fontSize: "0.875rem",
                  }}
                >
                  Category
                </TableCell>
                <TableCell
                  sx={{
                    width: 140,
                    bgcolor: "#f9fafb",
                    fontWeight: 600,
                    color: "#686f83",
                    fontSize: "0.875rem",
                  }}
                >
                  Subcategory
                </TableCell>
                <TableCell
                  sx={{
                    width: 100,
                    bgcolor: "#f9fafb",
                    fontWeight: 600,
                    color: "#686f83",
                    fontSize: "0.875rem",
                  }}
                >
                  Color
                </TableCell>
                <TableCell
                  sx={{
                    width: 100,
                    bgcolor: "#f9fafb",
                    fontWeight: 600,
                    color: "#686f83",
                    fontSize: "0.875rem",
                  }}
                >
                  Size
                </TableCell>
                <TableCell
                  sx={{
                    width: 100,
                    bgcolor: "#f9fafb",
                    fontWeight: 600,
                    color: "#686f83",
                    fontSize: "0.875rem",
                  }}
                >
                  Stock
                </TableCell>
                <TableCell
                  sx={{
                    width: 100,
                    bgcolor: "#f9fafb",
                    fontWeight: 600,
                    color: "#686f83",
                    fontSize: "0.875rem",
                  }}
                >
                  MSRP
                </TableCell>
                <TableCell
                  sx={{
                    width: 120,
                    bgcolor: "#f9fafb",
                    fontWeight: 600,
                    color: "#686f83",
                    fontSize: "0.875rem",
                  }}
                >
                  Cost Price
                </TableCell>
                <TableCell
                  sx={{
                    width: 120,
                    bgcolor: "#f9fafb",
                    fontWeight: 600,
                    color: "#686f83",
                    fontSize: "0.875rem",
                  }}
                >
                  Status
                </TableCell>
                <TableCell sx={{ width: 60, bgcolor: "#f9fafb" }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{
                    height: 50,
                    backgroundColor: row.selected ? "#eff6ff" : "transparent",
                    "&:hover": {
                      backgroundColor: row.selected ? "#eff6ff" : "#f9fafb",
                    },
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={row.selected}
                      onChange={() => handleRowSelect(row.id)}
                      sx={{ color: "#CFD3D4" }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      color: "#111827",
                      fontSize: "0.875rem",
                    }}
                  >
                    {row.id}
                  </TableCell>
                  <TableCell sx={{ color: "#686f83", fontSize: "0.875rem" }}>
                    {row.part}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Image
                        src={row.image}
                        alt={row.productName}
                        width={40}
                        height={40}
                        className="rounded object-cover"
                      />
                      <span className="font-medium text-gray-900 text-sm truncate max-w-[200px]">
                        {row.productName}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell sx={{ color: "#686f83", fontSize: "0.875rem" }}>
                    {row.mfr}
                  </TableCell>
                  <TableCell sx={{ color: "#6b7280", fontSize: "0.875rem" }}>
                    {row.category}
                  </TableCell>
                  <TableCell sx={{ color: "#6b7280", fontSize: "0.875rem" }}>
                    {row.subcategory}
                  </TableCell>
                  <TableCell sx={{ color: "#686f83", fontSize: "0.875rem" }}>
                    {row.color}
                  </TableCell>
                  <TableCell sx={{ color: "#686f83", fontSize: "0.875rem" }}>
                    {row.size}
                  </TableCell>
                  <TableCell sx={{ color: "#6b7280", fontSize: "0.875rem" }}>
                    {row.stock}
                  </TableCell>
                  <TableCell sx={{ color: "#686f83", fontSize: "0.875rem" }}>
                    {row.msrp}
                  </TableCell>
                  <TableCell sx={{ color: "#686f83", fontSize: "0.875rem" }}>
                    {row.costPrice}
                  </TableCell>
                  <TableCell>{getStatusChip(row.status)}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={(event) => handleMenuClick(event, index)}
                      sx={{ color: "#9ca3af" }}
                    >
                      <MoreVert />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Show</span>
            <FormControl size="small" sx={{ minWidth: 80 }}>
              <Select
                value={rowsPerPage}
                onChange={handleChangeRowsPerPage}
                sx={{
                  height: 50,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#d1d5db",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#9ca3af",
                  },
                }}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={50}>50</MenuItem>
              </Select>
            </FormControl>
            <span className="text-sm text-gray-600">entries</span>
          </div>

          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            variant="outlined"
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root": {
                borderColor: "#e5e7eb",
                color: "#6b7280",
                "&:hover": {
                  backgroundColor: "#f3f4f6",
                  borderColor: "#9ca3af",
                },
                "&.Mui-selected": {
                  backgroundColor: "#3b82f6",
                  borderColor: "#3b82f6",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#2563eb",
                  },
                },
              },
            }}
          />
        </div>
        {/* Action Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              borderRadius: 2,
              minWidth: 120,
            },
          }}
        >
          <MenuItem
            onClick={handleMenuClose}
            sx={{ fontSize: "0.875rem", py: 1 }}
          >
            Edit
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            sx={{ fontSize: "0.875rem", py: 1 }}
          >
            Update
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            sx={{ fontSize: "0.875rem", py: 1, color: "#dc2626" }}
          >
            Delete
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
