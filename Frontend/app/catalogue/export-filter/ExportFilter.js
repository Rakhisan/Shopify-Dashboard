"use client";
import { FaSearch } from "react-icons/fa";
import { MdTune } from "react-icons/md";
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
      PriceProfile: "Alex Johnson",
      productCount: "1900",
      rule: "Britways+10%",
      selected: false,
    },
    {
      id: "#302011",
      name: "GadgetHub",
      PriceProfile: "Emily Davis",
      productCount: "1600",
      rule: "Moduline +12%",
      selected: false,
    },
    {
      id: "#302002",
      name: "GizmoNest",
      PriceProfile: "Michael Brown",
      productCount: "1700",
      rule: "RackSpace +15%",
      selected: false,
    },
    {
      id: "#301901",
      name: "DeviceSphere",
      PriceProfile: "Sarah Wilson",
      productCount: "1800",
      rule: "UrbanGrid +18%",
      selected: false,
    },
    {
      id: "#301900",
      name: "TechHaven",
      PriceProfile: "David Lee",
      productCount: "1900",
      rule: "StoreCraft +20%",
      selected: false,
    },
    {
      id: "#301800",
      name: "GadgetNest",
      PriceProfile: "Jessica Taylor",
      productCount: "2000",
      rule: "ChillCore +16%",
      selected: false,
    },
    {
      id: "#301701",
      name: "SmartGadget",
      PriceProfile: "Daniel Martinez",
      productCount: "2100",
      rule: "DisplayNest +14%",
      selected: false,
    },
    {
      id: "#301600",
      name: "TechSphere",
      PriceProfile: "Laura Anderson",
      productCount: "2200",
      rule: "Shelvix +20%",
      selected: false,
    },
    {
      id: "#301500",
      name: "GizmoHub",
      PriceProfile: "James Thomas",
      productCount: "2300",
      rule: "Structura +14%",
      selected: false,
    },
    {
      id: "#301400",
      name: "DeviceNest",
      PriceProfile: "Sophia White",
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
  const [Created, setCreated] = useState("");
  const [PriceProfile, setPriceProfile] = useState("");

  const [showSavedSearches, setShowSavedSearches] = useState(false);
  const [showCreated, setShowCreated] = useState(false);
  const [showPriceProfile, setShowPriceProfile] = useState(false);

  const savedSearchOptions = [
    "My Catalog",
    "GadgetHub",
    "GizmoNest",
    "DeviceSphere",
    "TechHaven",
  ];
  const CreatedOptions = [
    "Alex Johnson",
    "Emily Davis",
    "Michael Brown",
    "Sarah Wilson",
    "David Lee",

  ];
  const PriceProfileOptions = [
    "Britways+10%",
    "Moduline +12%",
    "RackSpace +15%",
    "UrbanGrid +18%",
    "StoreCraft +20%",
  ];

  const handleFilter = () => {
    // router.push("/catalogue/your-catalog/filter");
  };

  const handleSearch = () => {
    // Add search functionality here
    console.log("Search triggered");
  };

  // Custom dropdown arrow component
  const DropdownArrow = () => (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.27337 8.5H13.7267C13.8586 8.50055 13.9873 8.54019 14.0966 8.6139C14.2059 8.68761 14.2909 8.79208 14.3409 8.9141C14.3908 9.03612 14.4035 9.17021 14.3772 9.29942C14.351 9.42863 14.287 9.54715 14.1934 9.64L10.4734 13.36C10.4114 13.4225 10.3377 13.4721 10.2564 13.5059C10.1752 13.5398 10.088 13.5572 10 13.5572C9.91203 13.5572 9.82489 13.5398 9.74365 13.5059C9.66241 13.4721 9.58868 13.4225 9.5267 13.36L5.8067 9.64C5.71309 9.54715 5.64911 9.42863 5.62285 9.29942C5.59659 9.17021 5.60924 9.03612 5.65919 8.9141C5.70914 8.79208 5.79415 8.68761 5.90347 8.6139C6.0128 8.54019 6.14152 8.50055 6.27337 8.5Z" fill="#727A90" />
    </svg>
  );

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
    <div className="w-full  mx-auto text-[#686f83] ">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-0.5 bg-white text-[#727a90] rounded-t-lg px-4 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.1)] overflow-hidden font-sans gap-4 sm:gap-0">
        <h2 className="text-[#24282e] m-0 text-xl font-semibold">
          Export Filters
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[350px] items-start sm:items-center w-full sm:w-auto">
          <button
            className="flex items-center gap-1.5 bg-[#2fb4ff] text-white border-none rounded-lg py-3 px-4 text-sm cursor-pointer transition-colors duration-200 hover:bg-[#32a5fd] w-full sm:w-auto justify-center"
            onClick={handleFilter}
          >
            <MdTune />
            Filter
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="w-full bg-white border-gray-200 p-4 mb-0.5">
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
          {/* Saved Searches Dropdown */}
          <div className="flex-1 min-w-[200px] font-medium  max-w-full lg:max-w-[280px] relative">
            <div
              className="w-full px-3 py-2  font-medium border border-gray-300 rounded-md cursor-pointer bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onClick={() => setShowSavedSearches(!showSavedSearches)}
            >
              <div className="flex items-center  font-medium justify-between">
                <span
                  className={`text-sm ${savedSearches ? "text-gray-800" : "text-gray-400"
                    }`}
                >
                  {savedSearches || "Saved Searches"}
                </span>
                <DropdownArrow />
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

          {/* Created and Created By Dropdowns with Search Button */}
          <div className="flex flex-col  font-medium sm:flex-row gap-4 w-full lg:w-auto">
            {/* Created Dropdown */}
            <div className="flex-1 min-w-[170px]   font-medium  max-w-full sm:max-w-[200px] relative">
              <div
                className="w-full px-3 py-2   font-medium  border border-gray-300 rounded-md cursor-pointer bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onClick={() => setShowCreated(!showCreated)}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm ${Created ? "text-gray-800" : "text-gray-400"
                      }`}
                  >
                    {Created || "Created"}
                  </span>
                  <DropdownArrow />
                </div>
              </div>
              {showCreated && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  {CreatedOptions.map((option, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 text-sm text-gray-700 cursor-pointer"
                      onClick={() => {
                        setCreated(option);
                        setShowCreated(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Created By Dropdown with Search Button */}
            <div className="flex gap-2 items-center">
              <div className="flex-1 min-w-[170px] max-w-full sm:max-w-[200px] relative">
                <div
                  className="w-full px-3 py-2 border border-[#D5D5D5] rounded-md cursor-pointer bg-white  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onClick={() => setShowPriceProfile(!showPriceProfile)}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm ${PriceProfile ? "text-gray-800" : "text-gray-400"
                        }`}
                    >
                      {PriceProfile || "Created By"}
                    </span>
                    <DropdownArrow />
                  </div>
                </div>
                {showPriceProfile && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {PriceProfileOptions.map((option, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 text-sm text-gray-700  cursor-pointer"
                        onClick={() => {
                          setPriceProfile(option);
                          setShowPriceProfile(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Button */}
              <button
                className="flex items-center justify-center bg-[#2fb4ff] text-white border-none rounded-md p-2 cursor-pointer transition-colors duration-200 hover:bg-[#32a5fd] min-w-[40px] h-[40px]"
                onClick={handleSearch}
              >
                search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="w-full overflow-x-auto bg-white">
        <table className="w-full border-collapse text-left min-w-[600px]">
          <thead>
            <tr>
              <th className="w-10 py-[17px] px-2 border-b border-[#D5D5D5] text-sm font-medium text-[#686f83] whitespace-nowrap">
              </th>
              <th className="min-w-[180px] py-[17px] px-4 border-b border-[#D5D5D5] text-sm font-medium text-[#686f83] whitespace-nowrap">
                Saved Searches
              </th>
              <th className="min-w-[150px] py-[17px] px-4 border-b border-[#D5D5D5] text-sm font-medium text-[#686f83] whitespace-nowrap">
                Created By
              </th>
              <th className="py-[17px] px-4 border-b border-[#D5D5D5] text-sm font-medium text-[#686f83] whitespace-nowrap">
                No. of Product
              </th>
              <th className="min-w-[150px] py-[17px] px-4 border-b border-[#D5D5D5] text-sm font-medium text-[#686f83] whitespace-nowrap">
                Rule
              </th>
              <th className="w-10 text-center relative py-[17px] px-4 border-b border-[#D5D5D5] text-sm font-medium text-[#686f83] whitespace-nowrap"></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((filter) => (
              <tr
                key={filter.id}
                className={`${filter.selected ? "bg-[#f0f7ff]" : ""
                  } cursor-pointer transition-colors duration-150`}
                onClick={() => handleRowClick(filter.id)}
              >
                <td className="w-10 py-[17px] px-4 border-b border-[#D5D5D5] text-sm">
                  <input
                    type="checkbox"
                    checked={filter.selected}
                    onChange={(e) => handleCheckboxChange(filter.id, e)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </td>
                <td className="min-w-[180px] py-[17px]  font-medium text-[#727A90] px-4 font-medium border-b border-[#D5D5D5] text-sm">
                  {filter.name}
                </td>
                <td className="min-w-[150px] py-[17px] font-medium text-[#727A90] px-4 border-b border-[#D5D5D5] text-sm">
                  {filter.PriceProfile}
                </td>
                <td className="py-[17px] px-4 border-b border-[#D5D5D5] font-medium text-[#727A90] text-sm">
                  {filter.productCount}
                </td>
                <td className="min-w-[150px] py-[17px]  font-medium px-4 border-b border-[#D5D5D5] text-sm">
                  {filter.rule}
                </td>
                <td className="w-10 text-center relative py-[17px] font-medium  text-[#727A90] px-4 border-b border-[#D5D5D5] text-sm">
                  <button
                    className="bg-transparent border-none cursor-pointer text-lg p-0 w-6 h-6 flex items-center justify-center text-[#374957]"
                    onClick={(e) => toggleMenu(filter.id, e)}
                  >
                    <span className="font-bold leading-none text-[#374957]">
                      ⋮
                    </span>
                  </button>
                  {activeMenu === filter.id && (
                    <div className="absolute right-5  font-medium bg-white border border-[#D5D5D5] rounded z-10 flex flex-col min-w-[120px] overflow-hidden">
                      <button
                        className="bg-transparent border-none text-left py-2 px-3 text-sm cursor-pointer hover:bg-[#f5f5f5]"
                        onClick={(e) => handleMenuAction("edit", filter.id, e)}
                      >
                        Edit
                      </button>

                      <button
                        className="bg-transparent border-none font-medium  text-left py-2 px-3 text-sm cursor-pointer hover:bg-[#f5f5f5]"
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
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-t border-gray-200 gap-4">
          <div className="flex items-center gap-2 order-2 sm:order-1">
            <Pagination
              count={filtrePages}
              page={page}
              onChange={handleChangePage}
              variant="contained"
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  borderColor: "#e5e7eb",
                  color: "#6b7280",
                  "&:hover": {
                    backgroundColor: "#2FB4FF",
                    borderColor: "#9ca3af",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#2FB4FF",
                    borderColor: "#3b82f6",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#2FB4FF",
                    },
                  },
                },
              }}
            />
          </div>

          <div className="flex items-center font-medium rounded-lg  gap-2 order-1 sm:order-2">
            <span className="text-sm  text-gray-600">Show</span>
            <FormControl size="small" sx={{ minWidth: 80, }}>
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

          </div>
        </div>
      </div>
    </div>
  );
}