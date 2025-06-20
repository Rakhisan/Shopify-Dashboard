

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Checkbox,
  Button,
  Select,
  MenuItem,
  FormControl,
  Menu,
  MenuItem as MenuItemMUI,
  MenuItem as SelectMenuItem,
  IconButton,
  Pagination,
} from "@mui/material";
import { Search, Add, MoreVert } from "@mui/icons-material";

export default function Price() {
  const router = useRouter();
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const [priceData, setPriceData] = useState([
    {
      id: "#302012",
      profilename: "Standard Pricing",
      Description: "ABC",
      pricetype: "EDK",
      excludevendore: "3",
      pricerule: "1",
    },
    {
      id: "#302011",
      profilename: "Premium Pricing",
      Description: "ABC",
      pricetype: "EDH",
      excludevendore: "2",
      pricerule: "4",
    },
    {
      id: "#302002",
      profilename: "Basic Pricing",
      Description: "def",
      pricetype: "FED",
      excludevendore: "4",
      pricerule: "3",
    },
    {
      id: "#301901",
      profilename: "Enterprise Pricing",
      Description: "ghi",
      pricetype: "LOC",
      excludevendore: "5",
      pricerule: "2",
    },
    {
      id: "#301900",
      profilename: "Student Pricing",
      Description: "jkl",
      pricetype: "STA",
      excludevendore: "7",
      pricerule: "5",
    },
    {
      id: "#301800",
      profilename: "Family Plan",
      Description: "mno",
      pricetype: "REG",
      excludevendore: "5",
      pricerule: "8",
    },
    {
      id: "#301701",
      profilename: "Seasonal Discount",
      Description: "pqr",
      pricetype: "EDK",
      excludevendore: "3",
      pricerule: "6",
    },
    {
      id: "#301600",
      profilename: "Loyalty Program",
      Description: "stu",
      pricetype: "LOC",
      excludevendore: "5",
      pricerule: "7",
    },
    {
      id: "#301500",
      profilename: "Referral Pricing",
      Description: "vwx",
      pricetype: "EDK",
      excludevendore: "4",
      pricerule: "8",
    },
    {
      id: "#301400",
      profilename: "Trial Offer",
      Description: "yz",
      pricetype: "FED",
      excludevendore: "6",
      pricerule: "9",
    },
  ]);

  // Pagination logic
  const totalPages = Math.ceil(priceData.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = priceData.slice(startIndex, endIndex);

  const handlePriceRule = () => {
    router.push("/price/profile/add");
  };

  const handleEditRule = () => {
    router.push("/price/profile/edit");
  };

  const handleMenuClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuIndex(index);
  };

  const [priceType, setPriceType] = useState("");

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenuIndex(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(1);
  };

  return (
    <div className="w-full mx-auto  text-[#686f83]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-1 bg-white text-[#727a90] rounded-tl-lg px-4 py-4 shadow-md overflow-hidden">
        <h2 className="text-xl font-bold text-[#24282e] w-full md:w-auto">
          Price Profile
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          {/* Select Dropdown */}
          <FormControl size="small" className="w-full sm:w-40">
            <Select
              value={priceType}
              onChange={(e) => setPriceType(e.target.value)}
              displayEmpty
              className="bg-white"
              MenuProps={{
                PaperProps: {
                  sx: {
                    color: "#5E6366",
                    '& .MuiMenuItem-root:hover': {
                      backgroundColor: '#30B4FF',
                      color: 'white',
                    },
                  },
                },
              }}
              sx={{
                textTransform: "none",
                height: "44px",
                fontSize: "14px",
                borderRadius: "8px",
                fontWeight: 500,
                width: "100%",
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#CFD3D4',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#30B4FF',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#30B4FF',
                },
              }}
            >
              <SelectMenuItem value="">Price type</SelectMenuItem>
              <SelectMenuItem value="EDK">EDK</SelectMenuItem>
              <SelectMenuItem value="EDH">EDH</SelectMenuItem>
              <SelectMenuItem value="FED">FED</SelectMenuItem>
              <SelectMenuItem value="LOC">LOC</SelectMenuItem>
              <SelectMenuItem value="STA">STA</SelectMenuItem>
              <SelectMenuItem value="REG">REG</SelectMenuItem>
            </Select>
          </FormControl>


          {/* Add Button */}
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handlePriceRule}
            sx={{
              backgroundColor: "#2FB4FF",
              color: "white",
              textTransform: "none",
              height: "44px",
              fontSize: "14px",
              borderRadius: "8px",
              fontWeight: 500,
              width: "100%",
              "@media (min-width: 640px)": {
                width: "auto",
              },
              "&:hover": {
                backgroundColor: "#2fb4fe",
              },
            }}
          >
            Add Price Profile
          </Button>
        </div>
      </div>


      {/* Table Container */}
      <div className="bg-white shadow-sm">
        <div className="w-full overflow-x-auto bg-white shadow-sm md:w-full md:max-w-full md:overflow-x-auto md:-webkit-overflow-scrolling-touch md:box-border md:border md:border-gray-200">
          <table className="w-full min-w-[1200px] ">
            <thead>
              <tr className="h-14">
                <th className="w-10 text-center px-0 py-2 text-left border-b border-[#e9eaea] align-middle text-[#686f83] bg-transparent text-sm md:py-3.5 md:px-2 sm:py-3.5 sm:px-1.5">
                  {/* <Checkbox
                    size="small"
                    sx={{
                      color: "#686f83",
                      "&.Mui-checked": {
                        color: "#2fb4ff",
                      },
                    }}
                  /> */}
                </th>
                {/* <th className="w-15 px-1 py-4 text-left border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm">
                  ID
                </th> */}
                <th className="px-2 pr-6 py-4 text-left border-b border-[#e9eaea] align-middle text-[#686f83] font-bold bg-transparent text-sm md:text-sm md:py-3.5 md:px-4 md:pr-2 sm:text-xs sm:py-2.5 sm:px-3.5 sm:pr-2">
                  Profile Name
                </th>
                <th className="px-7 py-4 text-left border-b border-[#e9eaea] align-middle text-[#686f83] font-bold bg-transparent text-sm md:text-sm md:py-3.5 md:px-4 sm:text-xs sm:py-2.5 sm:px-3.5">
                  Description
                </th>
                <th className="px-7 py-4 text-left border-b border-[#e9eaea] align-middle text-[#686f83] font-bold bg-transparent text-sm md:text-sm md:py-3.5 md:px-4 sm:text-xs sm:py-2.5 sm:px-3.5">
                  Price Type
                </th>
                <th className="px-7 py-4 text-left border-b border-[#e9eaea] align-middle text-[#686f83] font-bold bg-transparent text-sm md:text-sm md:py-3.5 md:px-4 sm:text-xs sm:py-2.5 sm:px-3.5">
                  Exclude Vendor
                </th>
                <th className="px-7 py-4 text-left pr-6 border-b border-[#e9eaea] align-middle text-[#686f83] font-bold bg-transparent text-sm md:text-sm md:py-3.5 md:px-4 sm:text-xs sm:py-2.5 sm:px-3.5">
                  Price Rule
                </th>
                <th className="px-7 py-4 text-left border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm"></th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr key={index}>
                  <td className="text-center px-0 py-2  border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm md:py-3.5 md:px-2 sm:py-2.5 sm:px-1.5">
                    <Checkbox
                      size="small"
                      sx={{
                        color: "#686f83",
                        "&.Mui-checked": {
                          color: "#2fb4ff",
                        },
                      }}
                    />
                  </td>
                  {/* <td className="w-15 px-1 py-4 border-b border-[#e9eaea] align-middle text-[#24282e] font-semibold bg-transparent text-sm">
                    {item.id}
                  </td> */}
                  <td className="px-2 pr-6 py-4 border-b border-[#e9eaea] align-middle text-[#727a90] font-medium bg-transparent text-sm whitespace-nowrap overflow-hidden text-ellipsis md:text-sm md:py-3.5 md:px-4 md:pr-2 sm:text-xs sm:py-2.5 sm:px-3.5 sm:pr-4">
                    {item.profilename}
                  </td>
                  <td className="px-7 py-4 border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm min-w-32 md:text-sm md:py-3.5 md:px-4 md:min-w-24 sm:text-xs sm:py-2.5 sm:px-3.5 sm:min-w-20">
                    {item.Description}
                  </td>
                  <td className="px-7 py-4 border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm min-w-32 md:text-sm md:py-3.5 md:px-4 md:min-w-24 sm:text-xs sm:py-2.5 sm:px-3.5 sm:min-w-20">
                    {item.pricetype}
                  </td>
                  <td className="px-7 py-4 border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm min-w-32 md:text-sm md:py-3.5 md:px-4 md:min-w-24 sm:text-xs sm:py-2.5 sm:px-3.5 sm:min-w-20">
                    {item.excludevendore}
                  </td>
                  <td className="px-7 py-4 border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm min-w-32 md:text-sm md:py-3.5 md:px-4 md:min-w-24 sm:text-xs sm:py-2.5 sm:px-3.5 sm:min-w-20">
                    {item.pricerule}
                  </td>
                  <td className="relative text-right w-1 px-7 py-4 border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm">
                    <IconButton
                      size="small"
                      onClick={(e) => handleMenuClick(e, index)}
                      sx={{
                        color: "#686f83",
                        "&:hover": {
                          backgroundColor: "rgba(104, 111, 131, 0.1)",
                        },
                      }}
                    >
                      <MoreVert />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        PaperProps={{
          sx: {
            minWidth: "120px",
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          },
        }}
      >
        <MenuItemMUI
          onClick={() => {
            handleEditRule();
            handleMenuClose();
          }}
          sx={{
            fontSize: "14px",
            color: "#5E6366",
            "&:hover": {
              backgroundColor: "#f3f4f6",
            },
          }}
        >
          Edit
        </MenuItemMUI>

        <MenuItemMUI
          onClick={handleMenuClose}
          sx={{
            fontSize: "14px",
            color: "#5E6366",
            "&:hover": {
              backgroundColor: "#f3f4f6",
            },
          }}
        >
          Delete
        </MenuItemMUI>
      </Menu>

      {/* Updated Pagination Section */}
      <div className="bg-white shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-t border-gray-200 gap-4">
          <div className="flex items-center gap-2 order-2 sm:order-1">
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
                    backgroundColor: "#2FB4FF",
                    borderColor: "#2FB4FF",
                    color: "white"
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#2FB4FF",
                    borderColor: "#2FB4FF",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#1da1e6",
                    },
                  },
                },
              }}
            />
          </div>

          <div className="flex items-center gap-2 order-1 sm:order-2">
            <span className="text-sm text-[#5E6366]">Show</span>
            <FormControl size="small" sx={{ minWidth: 80 }}>
              <Select
                value={rowsPerPage}
                onChange={handleChangeRowsPerPage}
                sx={{
                  height: 36,
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#CFD2D4",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#30B4FF",
                  },
                }}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
}