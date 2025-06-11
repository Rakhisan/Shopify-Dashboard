"use client";
import { FaSearch } from "react-icons/fa";
import { MdTune } from "react-icons/md";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Pagination, Select, FormControl, Menu, MenuItem } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation"; // Add this import

export default function CatalogueFilter() {
  const router = useRouter(); // Add router hook

  const [filters, setFilters] = useState([
    {
      id: "#302012",
      name: "My Catalog",
      createdBy: "Alex Johnson",
      productCount: "1900",
      rule: "Britways+10%",
      selected: false,
    },
    {
      id: "#302011",
      name: "GadgetHub",
      createdBy: "Emily Davis",
      productCount: "1600",
      rule: "Moduline +12%",
      selected: false,
    },
    {
      id: "#302002",
      name: "GizmoNest",
      createdBy: "Michael Brown",
      productCount: "1700",
      rule: "RackSpace +15%",
      selected: false,
    },
    {
      id: "#301901",
      name: "DeviceSphere",
      createdBy: "Sarah Wilson",
      productCount: "1800",
      rule: "UrbanGrid +18%",
      selected: false,
    },
    {
      id: "#301900",
      name: "TechHaven",
      createdBy: "David Lee",
      productCount: "1900",
      rule: "StoreCraft +20%",
      selected: false,
    },
    {
      id: "#301800",
      name: "GadgetNest",
      createdBy: "Jessica Taylor",
      productCount: "2000",
      rule: "ChillCore +16%",
      selected: false,
    },
    {
      id: "#301701",
      name: "SmartGadget",
      createdBy: "Daniel Martinez",
      productCount: "2100",
      rule: "DisplayNest +14%",
      selected: false,
    },
    {
      id: "#301600",
      name: "TechSphere",
      createdBy: "Laura Anderson",
      productCount: "2200",
      rule: "Shelvix +20%",
      selected: false,
    },
    {
      id: "#301500",
      name: "GizmoHub",
      createdBy: "James Thomas",
      productCount: "2300",
      rule: "Structura +14%",
      selected: false,
    },
    {
      id: "#301400",
      name: "DeviceNest",
      createdBy: "Sophia White",
      productCount: "2400",
      rule: "SpaceWell +12%",
      selected: false,
    },
  ]);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const [activeMenu, setActiveMenu] = useState(null);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Calculate pagination
  const paginatedData = filters.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  const filtrePages = Math.ceil(filters.length / rowsPerPage);

  // Filter section states
  const [savedSearches, setSavedSearches] = useState("");
  const [rules, setRules] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [showSavedSearches, setShowSavedSearches] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showCreatedBy, setShowCreatedBy] = useState(false);

  const savedSearchOptions = [
    "My Catalog",
    "GadgetHub",
    "GizmoNest",
    "DeviceSphere",
    "TechHaven",
  ];
  const rulesOptions = [
    "Britways+10%",
    "Moduline +12%",
    "RackSpace +15%",
    "UrbanGrid +18%",
    "StoreCraft +20%",
  ];
  const createdByOptions = [
    "Alex Johnson",
    "Emily Davis",
    "Michael Brown",
    "Sarah Wilson",
    "David Lee",
  ];

  const handleFilter = () => {
    // router.push("/catalogue/your-catalog/filter");
  };

  const handleCheckboxChange = (id, event) => {
    event.stopPropagation(); // Prevent row click when checkbox is clicked
    setFilters(
      filters.map((filter) =>
        filter.id === id ? { ...filter, selected: !filter.selected } : filter
      )
    );
  };

  const toggleMenu = (id, event) => {
    event.stopPropagation(); // Prevent row click when menu is clicked
    if (activeMenu === id) {
      setActiveMenu(null);
    } else {
      setActiveMenu(id);
    }
  };

  const handleMenuAction = (action, id, event) => {
    event.stopPropagation(); // Prevent row click when menu action is clicked
    console.log(`${action} action for filter ${id}`);
    setActiveMenu(null);
  };

  // Add this function to handle row click
  const handleRowClick = (filterId) => {
    // Remove # from id for clean URL
    const cleanId = filterId.replace("#", "");
    router.push(`/catalogue/export-filter/${cleanId}`);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filters.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="w-full font-sans max-w-[1200px] mx-auto text-[#686f83] ">
      {/* Header */}
      <div className="flex justify-between items-center mb-0.5 bg-white text-[#727a90] rounded-t-lg px-4 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.1)] overflow-hidden font-sans">
        <h2 className="text-[#24282e] m-0 text-xl font-semibold">
          Export Filters
        </h2>
        <div className="flex flex-nowrap gap-[350px] items-center">
          {/* <div className="relative w-full">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#aaa] pointer-events-none" />
            <input
              type="text"
              placeholder="Search by Created By..."
              className="w-full py-2 px-3 pl-[66px] border border-[#ccc] rounded-[10px] text-sm"
            />
          </div> */}

          <button
            className="flex items-center gap-1.5 bg-[#2fb4ff] text-white border-none rounded-lg py-3 px-4 text-sm cursor-pointer transition-colors duration-200 hover:bg-[#32a5fd]"
            onClick={handleFilter}
          >
            <MdTune />
            Filter
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="w-full bg-white  border-gray-200  p-4 mb-0.5 shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
        <div className="flex flex-wrap items-center gap-16">
          {/* Saved Searches Dropdown */}
          <div className="flex-1 min-w-[230px] max-w-[280px] relative">
            <div
              className="w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onClick={() => setShowSavedSearches(!showSavedSearches)}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-sm ${
                    savedSearches ? "text-gray-800" : "text-gray-400"
                  }`}
                >
                  {savedSearches || "Saved Searches"}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            {showSavedSearches && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                {savedSearchOptions.map((option, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSavedSearches(option);
                      setShowSavedSearches(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Rules Dropdown */}
          <div className="flex gap-4">
            <div className="flex-1 min-w-[170px] max-w-[200px] relative">
              <div
                className="w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onClick={() => setShowRules(!showRules)}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm ${
                      rules ? "text-gray-800" : "text-gray-400"
                    }`}
                  >
                    {rules || "Rules"}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              {showRules && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  {rulesOptions.map((option, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setRules(option);
                        setShowRules(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Created By Dropdown */}
            <div className="flex-1 min-w-[170px] max-w-[200px] relative">
              <div
                className="w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onClick={() => setShowCreatedBy(!showCreatedBy)}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm ${
                      createdBy ? "text-gray-800" : "text-gray-400"
                    }`}
                  >
                    {createdBy || "Created By"}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              {showCreatedBy && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  {createdByOptions.map((option, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setCreatedBy(option);
                        setShowCreatedBy(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product */}
          <div className="col-span-3 flex flex-col gap-2">
            <label className="block text-sm text-gray-600">Product</label>
            <div className="flex gap-2">
              <div className="min-w-[80px] max-w-[120px]">
                <input
                  type="text"
                  placeholder="Min"
                  value={minValue}
                  onChange={(e) => setMinValue(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
              </div>
              <div className="min-w-[80px] max-w-[120px]">
                <input
                  type="text"
                  placeholder="Max"
                  value={maxValue}
                  onChange={(e) => setMaxValue(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="w-full overflow-x-auto bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="w-10 py-[17px] px-4 border-b border-[#f0f0f0] text-sm font-medium text-[#686f83] whitespace-nowrap">
                {/* <input
                  type="checkbox"
                  onChange={() => {
                    const allSelected = filters.every(
                      (filter) => filter.selected
                    );
                    setFilters(
                      filters.map((filter) => ({
                        ...filter,
                        selected: !allSelected,
                      }))
                    );
                  }}
                  checked={
                    filters.length > 0 &&
                    filters.every((filter) => filter.selected)
                  }
                /> */}
              </th>
              {/* <th className="w-[100px] text-[#24282e] py-[17px] px-4 border-b border-[#f0f0f0] text-sm font-medium text-[#686f83] whitespace-nowrap">
                ID
              </th> */}
              <th className="min-w-[180px] py-[17px] px-4 border-b border-[#f0f0f0] text-sm font-medium text-[#686f83] whitespace-nowrap">
                Saved Searches
              </th>
              <th className="min-w-[150px] py-[17px] px-4 border-b border-[#f0f0f0] text-sm font-medium text-[#686f83] whitespace-nowrap">
                Created By
              </th>
              <th className="py-[17px] px-4 border-b border-[#f0f0f0] text-sm font-medium text-[#686f83] whitespace-nowrap">
                No. of Product
              </th>
              <th className="min-w-[150px] py-[17px] px-4 border-b border-[#f0f0f0] text-sm font-medium text-[#686f83] whitespace-nowrap">
                Rule
              </th>
              <th className="w-10 text-center relative py-[17px] px-4 border-b border-[#f0f0f0] text-sm font-medium text-[#686f83] whitespace-nowrap"></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((filter) => (
              <tr
                key={filter.id}
                className={`${
                  filter.selected ? "bg-[#f0f7ff]" : ""
                } hover:bg-gray-50 cursor-pointer transition-colors duration-150`}
                onClick={() => handleRowClick(filter.id)}
              >
                <td className="w-10 py-[17px] px-4 border-b border-[#f0f0f0] text-sm">
                  <input
                    type="checkbox"
                    checked={filter.selected}
                    onChange={(e) => handleCheckboxChange(filter.id, e)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </td>
                {/* <td className="w-[100px] text-[#24282e] py-[17px] px-4 border-b border-[#f0f0f0] text-sm">
                  {filter.id}
                </td> */}
                <td className="min-w-[180px] py-[17px] px-4 border-b border-[#f0f0f0] text-sm">
                  {filter.name}
                </td>
                <td className="min-w-[150px] py-[17px] px-4 border-b border-[#f0f0f0] text-sm">
                  {filter.createdBy}
                </td>
                <td className="py-[17px] px-4 border-b border-[#f0f0f0] text-sm">
                  {filter.productCount}
                </td>
                <td className="min-w-[150px] py-[17px] px-4 border-b border-[#f0f0f0] text-sm">
                  {filter.rule}
                </td>
                <td className="w-10 text-center relative py-[17px] px-4 border-b border-[#f0f0f0] text-sm">
                  <button
                    className="bg-transparent border-none cursor-pointer text-lg p-0 w-6 h-6 flex items-center justify-center text-[#374957]"
                    onClick={(e) => toggleMenu(filter.id, e)}
                  >
                    <span className="font-bold leading-none text-[#374957]">
                      ⋮
                    </span>
                  </button>
                  {activeMenu === filter.id && (
                    <div className="absolute right-5 bg-white border border-[#ddd] rounded shadow-[0_2px_5px_rgba(0,0,0,0.15)] z-10 flex flex-col min-w-[120px] overflow-hidden">
                      <button
                        className="bg-transparent border-none text-left py-2 px-3 text-sm cursor-pointer hover:bg-[#f5f5f5]"
                        onClick={(e) => handleMenuAction("edit", filter.id, e)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-transparent border-none text-left py-2 px-3 text-sm cursor-pointer hover:bg-[#f5f5f5]"
                        onClick={(e) =>
                          handleMenuAction("update", filter.id, e)
                        }
                      >
                        Update
                      </button>
                      <button
                        className="bg-transparent border-none text-left py-2 px-3 text-sm cursor-pointer hover:bg-[#f5f5f5]"
                        onClick={(e) =>
                          handleMenuAction("delete", filter.id, e)
                        }
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
            count={filtrePages}
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
      </div>
    </div>
  );
}
