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
      option1Name: "Black",
      option1Value: "Black",
      option2Name: "Black",
      option2Value: "1800mm",
      option3Name: "1800mm",
      option3Value: "1800mm",
      color: "Black",
      size: "180mm",
      stock: "50 units",
      msrp: "₹12,000",
      cost: "₹8,400",
      price: "₹9,400",
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
      subcategory: "Freezer",
      option1Name: "White",
      option1Value: "White",
      option2Name: "White",
      option2Value: "140Ltr",
      option3Name: "140Ltr",
      option3Value: "140Ltr",
      color: "White",
      size: "140 Ltr",
      stock: "75 units",
      msrp: "₹65,000",
      cost: "₹50,500",
      price: "₹49,500",
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
      option1Name: "Silver",
      option1Value: "Silver",
      option2Name: "Silver",
      option2Value: "140Ltr",
      option3Name: "140Ltr",
      option3Value: "140Ltr",
      color: "Silver",
      size: "140 Ltr",
      stock: "100 units",
      msrp: "₹7,500",
      cost: "₹9,300",
      price: "₹5,300",
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
      option1Name: "Black",
      option1Value: "Black",
      option2Name: "Black",
      option2Value: "1800mm",
      option3Name: "1800mm",
      option3Value: "1800mm",
      color: "White",
      size: "140 Ltr",
      stock: "100 units",
      msrp: "₹3,000",
      cost: "₹7,200",
      price: "₹2,300",
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
      option1Name: "White",
      option1Value: "White",
      option2Name: "White",
      option2Value: "140Ltr",
      option3Name: "140Ltr",
      option3Value: "140Ltr",
      color: "White",
      size: "500 Ltr",
      stock: "100 units",
      msrp: "₹85,000",
      cost: "₹60,000",
      price: "₹67,000",
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
      option1Name: "Silver",
      option1Value: "Silver",
      option2Name: "Silver",
      option2Value: "140Ltr",
      option3Name: "140Ltr",
      option3Value: "140Ltr",
      color: "Black",
      size: "180mm",
      stock: "100 units",
      msrp: "₹8,000",
      cost: "₹8,000",
      price: "₹7,000",
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
      option1Name: "White",
      option1Value: "White",
      option2Name: "White",
      option2Value: "140Ltr",
      option3Name: "140Ltr",
      option3Value: "140Ltr",
      color: "Black",
      size: "140 Ltr",
      stock: "100 units",
      msrp: "₹42,000",
      cost: "₹15,000",
      price: "₹32,000",
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
      option1Name: "White",
      option1Value: "White",
      option2Name: "White",
      option2Value: "500Ltr",
      option3Name: "500Ltr",
      option3Value: "500Ltr",
      color: "Black",
      size: "140 Ltr",
      stock: "100 units",
      msrp: "₹4,500",
      cost: "₹6,400",
      price: "₹4,300",
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
      option1Name: "Black",
      option1Value: "Black",
      option2Name: "Black",
      option2Value: "1800mmf",
      option3Name: "1800mmf",
      option3Value: "1800mmf",
      color: "Cream",
      size: "8'",
      stock: "100 units",
      msrp: "₹2,000",
      cost: "₹8,500",
      price: "₹1,500",
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
      option1Name: "Black",
      option1Value: "Black",
      option2Name: "Black",
      option2Value: "140Ltr",
      option3Name: "140Ltr",
      option3Value: "140Ltr",
      color: "White",
      size: "100 Ltr",
      stock: "100 units",
      msrp: "₹38,000",
      cost: "₹22,000",
      price: "₹29,000",
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
    <div className="w-full font-sans max-w-8xl mx-auto text-gray-500 min-h-[920px] ">
      <div className="flex justify-between items-center mb-[3px] bg-white text-gray-600 rounded-t-lg p-4 shadow-sm font-sans">
        <h2 className="text-xl font-semibold text-gray-900 m-0">
          Your Catalog
        </h2>
        <div className="flex items-center gap-4">
          <button className="text-gray-600 py-2 px-4 rounded-lg text-sm font-medium flex items-center gap-2 cursor-pointer transition-colors bg-white border border-gray-200">
            Save Filter
          </button>
          <button className="text-gray-600 py-2 px-4 rounded-lg text-sm font-medium flex items-center gap-2 cursor-pointer transition-colors bg-white border border-gray-200">
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
                      filters.inStock ? "border" : "border-gray-300"
                    }`}
                    style={
                      filters.inStock
                        ? { backgroundColor: "#32B4FE", borderColor: "#32B4FE" }
                        : {}
                    }
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
                    color: "#32B4FE",
                    "& .MuiSlider-thumb": {
                      backgroundColor: "#32B4FE",
                      border: "2px solid white",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    },
                    "& .MuiSlider-track": {
                      backgroundColor: "#32B4FE",
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "#32B4FE",
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
            <button
              className="flex-1 px-6 py-2 text-sm text-white rounded-md hover:bg-blue-600 transition-colors"
              style={{ backgroundColor: "#32B4FE" }}
            >
              {" "}
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
          <Table stickyHeader sx={{ minWidth: 2500 }}>
            <TableHead>
              <TableRow>
                <TableCell
                  padding="checkbox"
                  sx={{ width: 50, bgcolor: "#f9fafb" }}
                ></TableCell>

                <TableCell
                  sx={{
                    width: 150,
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
                    width: 330,
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
                    width: 130,
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
                    width: 130,
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
                    width: 220,
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
                    width: 150,
                    bgcolor: "#f9fafb",
                    fontWeight: 600,
                    color: "#686f83",
                    fontSize: "0.875rem",
                  }}
                >
                  Option 1 Value
                </TableCell>
                <TableCell
                  sx={{
                    width: 150,
                    bgcolor: "#f9fafb",
                    fontWeight: 600,
                    color: "#686f83",
                    fontSize: "0.875rem",
                  }}
                >
                  Option 1 Name
                </TableCell>
                <TableCell
                  sx={{
                    width: 130,
                    bgcolor: "#f9fafb",
                    fontWeight: 600,
                    color: "#686f83",
                    fontSize: "0.875rem",
                  }}
                >
                  Option 2 Value
                </TableCell>
                <TableCell
                  sx={{
                    width: 150,
                    bgcolor: "#f9fafb",
                    fontWeight: 600,
                    color: "#686f83",
                    fontSize: "0.875rem",
                  }}
                >
                  Option 2 Name
                </TableCell>
                <TableCell
                  sx={{
                    width: 130,
                    bgcolor: "#f9fafb",
                    fontWeight: 600,
                    color: "#686f83",
                    fontSize: "0.875rem",
                  }}
                >
                  Option 3 Value
                </TableCell>
                <TableCell
                  sx={{
                    width: 130,
                    bgcolor: "#f9fafb",
                    fontWeight: 600,
                    color: "#686f83",
                    fontSize: "0.875rem",
                  }}
                >
                  Option 3 Name
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
                  Color
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
                  Size
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
                  Stock
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
                  Cost
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
                  Price
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
                  {/* <TableCell
                    sx={{
                      fontWeight: 500,
                      color: "#111827",
                      fontSize: "0.875rem",
                    }}
                  >
                    {row.id}
                  </TableCell> */}
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
                  <TableCell sx={{ color: "#6b7280", fontSize: "0.875rem" }}>
                    {row.option1Value}
                  </TableCell>
                  <TableCell sx={{ color: "#6b7280", fontSize: "0.875rem" }}>
                    {row.option1Name}
                  </TableCell>
                  <TableCell sx={{ color: "#6b7280", fontSize: "0.875rem" }}>
                    {row.option2Value}
                  </TableCell>
                  <TableCell sx={{ color: "#6b7280", fontSize: "0.875rem" }}>
                    {row.option2Name}
                  </TableCell>
                  <TableCell sx={{ color: "#6b7280", fontSize: "0.875rem" }}>
                    {row.option3Value}
                  </TableCell>
                  <TableCell sx={{ color: "#6b7280", fontSize: "0.875rem" }}>
                    {row.option3Name}
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
                    {row.cost}
                  </TableCell>
                  <TableCell sx={{ color: "#686f83", fontSize: "0.875rem" }}>
                    {row.price}
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
                  height: 36,
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
