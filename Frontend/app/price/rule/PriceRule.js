"use client";
import React, { useState } from "react";
import { MdTune } from "react-icons/md";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  FormControl,
  Select,
  MenuItem,
  Button,
  Pagination,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  Collapse,
} from "@mui/material";
import { Search, Add, MoreVert } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const PriceRuleTable = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);


  const priceRuleData = [
    {
      id: "#302012",
      name: "Standard Pricing",
      description: "ABC",
      precedence: "GHI",
      method: "GadgetX",
      categoryId: "DEVICE-101",
      manufactureId: "GAD-001",
      effectiveFrom: "3/15/2023",
      effectiveTo: "3/15/2023",
      isDefault: true,
      inStock: true,
    },
    {
      id: "#302011",
      name: "Premium Pricing",
      description: "ABC",
      precedence: "XYZ",
      method: "GadgetY",
      categoryId: "DEVICE-202",
      manufactureId: "GAD-002",
      effectiveFrom: "2/20/2023",
      effectiveTo: "2/20/2023",
      isDefault: false,
      inStock: false,
    },
    {
      id: "#302002",
      name: "Basic Pricing",
      description: "def",
      precedence: "LMN",
      method: "GadgetZ",
      categoryId: "DEVICE-303",
      manufactureId: "GAD-003",
      effectiveFrom: "4/25/2023",
      effectiveTo: "5/30/2023",
      isDefault: true,
      inStock: true,
    },
    {
      id: "#301901",
      name: "Enterprise Pricing",
      description: "ghi",
      precedence: "ABC",
      method: "GadgetA",
      categoryId: "DEVICE-404",
      manufactureId: "GAD-004",
      effectiveFrom: "5/30/2023",
      effectiveTo: "7/10/2023",
      isDefault: false,
      inStock: true,
    },
    {
      id: "#301900",
      name: "Student Pricing",
      description: "jkl",
      precedence: "DEF",
      method: "GadgetB",
      categoryId: "DEVICE-505",
      manufactureId: "GAD-005",
      effectiveFrom: "7/10/2023",
      effectiveTo: "7/10/2023",
      isDefault: true,
      inStock: false,
    },
    {
      id: "#301800",
      name: "Family Plan",
      description: "mno",
      precedence: "JKL",
      method: "GadgetC",
      categoryId: "DEVICE-606",
      manufactureId: "GAD-006",
      effectiveFrom: "4/15/2023",
      effectiveTo: "4/25/2023",
      isDefault: false,
      inStock: false,
    },
    {
      id: "#301701",
      name: "Seasonal Discount",
      description: "pqr",
      precedence: "GHI",
      method: "GadgetX",
      categoryId: "DEVICE-101",
      manufactureId: "GAD-007",
      effectiveFrom: "6/18/2023",
      effectiveTo: "6/18/2023",
      isDefault: true,
      inStock: true,
    },
    {
      id: "#301600",
      name: "Loyalty Program",
      description: "stu",
      precedence: "ABC",
      method: "GadgetD",
      categoryId: "DEVICE-404",
      manufactureId: "GAD-008",
      effectiveFrom: "2/22/2023",
      effectiveTo: "2/22/2023",
      isDefault: false,
      inStock: true,
    },
    {
      id: "#301500",
      name: "Referral Pricing",
      description: "vw",
      precedence: "GHI",
      method: "GadgetX",
      categoryId: "DEVICE-101",
      manufactureId: "GAD-009",
      effectiveFrom: "7/29/2023",
      effectiveTo: "8/10/2023",
      isDefault: true,
      inStock: false,
    },
    {
      id: "#301400",
      name: "Trial Offer",
      description: "xyz",
      precedence: "LMN",
      method: "GadgetE",
      categoryId: "DEVICE-303",
      manufactureId: "GAD-010",
      effectiveFrom: "8/31/2023",
      effectiveTo: "8/31/2023",
      isDefault: true,
      inStock: false,
    },
  ];
  const router = useRouter();

  const handleAddPriceRule = () => {
    router.push("/price/rule/add");
  };

  const handleFilterClick = () => {
    setFilterOpen(!filterOpen);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(1);
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedRows(priceRuleData.map((row) => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const isSelected = (id) => selectedRows.includes(id);
  const isAllSelected = selectedRows.length === priceRuleData.length;
  const isIndeterminate =
    selectedRows.length > 0 && selectedRows.length < priceRuleData.length;

  const filteredPages = Math.ceil(priceRuleData.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = priceRuleData.slice(startIndex, endIndex);

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-[#24282E]">Price Rule</h2>
        <div className="flex items-center gap-3">
          {/* Search Bar - shows when filter is open */}
          {filterOpen && (
            <TextField
              size="small"
              placeholder="Search name or description"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search className="text-[#575757]" fontSize="small" />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: 300,
                "& .MuiOutlinedInput-root": {
                  height: 40,
                  borderRadius: "8px",
                  "& fieldset": {
                    borderColor: "#D5D5D5",
                  },
                  "&:hover fieldset": {
                    borderColor: "#2FB4FF",
                  },
                },
              }}
            />
          )}

          <Button
            variant="contained"
            startIcon={<MdTune />}
            onClick={handleFilterClick}
            sx={{
              height: 40,
              textTransform: "none",
              backgroundColor: "#2FB4FF",
              color: "white",
              borderRadius: "8px",

            }}
          >
            Filters
          </Button>

          <Button
            onClick={handleAddPriceRule}
            variant="contained"
            startIcon={<Add />}
            sx={{
              height: 40,
              textTransform: "none",
              backgroundColor: "#2FB4FF",
              borderRadius: "8px",

            }}
          >
            Add Price Rule
          </Button>
        </div>
      </div>

      {/* Filters Row - Collapsible */}
      <Collapse in={filterOpen} timeout="auto" unmountOnExit>
        <div className="flex items-center gap-4 p-4 border-b border-[#D5D5D5] ">
          <FormControl size="small" sx={{ minWidth: 185 }}>
            <Select
              displayEmpty
              defaultValue=""
              sx={{
                height: 36,
                color: "#686F83",
                backgroundColor: "white",
                borderRadius: "8px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#D5D5D5",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2FB4FF",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2FB4FF",
                },
                "& .MuiSelect-select": {
                  color: "#686F83",
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "white",
                    maxHeight: 200,
                    "& .MuiMenuItem-root": {
                      color: "#686F83",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#2FB4FF",
                        color: "white",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "white",
                        color: "#686F83",
                        "&:hover": {
                          backgroundColor: "#2FB4FF",
                          color: "white",
                        },
                      },
                    },
                  },
                },
              }}
            >
              <MenuItem value="">Effective From</MenuItem>
              <MenuItem value="2023">2023</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 185 }}>
            <Select
              displayEmpty
              defaultValue=""
              sx={{
                height: 36,
                color: "#686F83",
                backgroundColor: "white",
                borderRadius: "8px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#D5D5D5",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2FB4FF",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2FB4FF",
                },
                "& .MuiSelect-select": {
                  color: "#686F83",
                },
              }}

              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "white",
                    maxHeight: 200,
                    "& .MuiMenuItem-root": {
                      color: "#686F83",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#2FB4FF",
                        color: "white",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "white",
                        color: "#686F83",
                        "&:hover": {
                          backgroundColor: "#2FB4FF",
                          color: "white",
                        },
                      },
                    },
                  },
                },
              }}
            >
              <MenuItem value="">Effective To</MenuItem>
              <MenuItem value="2023">2023</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 185 }}>
            <Select
              displayEmpty
              defaultValue=""
              sx={{
                height: 36,
                color: "#686F83",
                backgroundColor: "white",
                borderRadius: "8px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#D5D5D5",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2FB4FF",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2FB4FF",
                },
                "& .MuiSelect-select": {
                  color: "#686F83",
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "white",
                    maxHeight: 200,
                    "& .MuiMenuItem-root": {
                      color: "#686F83",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#2FB4FF",
                        color: "white",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "white",
                        color: "#686F83",
                        "&:hover": {
                          backgroundColor: "#2FB4FF",
                          color: "white",
                        },
                      },
                    },
                  },
                },
              }}
            >
              <MenuItem value="">Category Id</MenuItem>
              <MenuItem value="DEVICE-101">DEVICE-101</MenuItem>
              <MenuItem value="DEVICE-202">DEVICE-202</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 185 }}>
            <Select
              displayEmpty
              defaultValue=""
              sx={{
                height: 36,
                color: "#686F83",
                backgroundColor: "white",
                borderRadius: "8px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#D5D5D5",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2FB4FF",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2FB4FF",
                },
                "& .MuiSelect-select": {
                  color: "#686F83",
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "white",
                    maxHeight: 200,
                    "& .MuiMenuItem-root": {
                      color: "#686F83",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#2FB4FF",
                        color: "white",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "white",
                        color: "#686F83",
                        "&:hover": {
                          backgroundColor: "#2FB4FF",
                          color: "white",
                        },
                      },
                    },
                  },
                },
              }}
            >
              <MenuItem value="">Method</MenuItem>
              <MenuItem value="GadgetX">GadgetX</MenuItem>
              <MenuItem value="GadgetY">GadgetY</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 185 }}>
            <Select
              displayEmpty
              defaultValue=""
              sx={{
                height: 36,
                color: "#686F83",
                backgroundColor: "white",
                borderRadius: "8px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#D5D5D5",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2FB4FF",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2FB4FF",
                },
                "& .MuiSelect-select": {
                  color: "#686F83",
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "white",
                    maxHeight: 200,
                    "& .MuiMenuItem-root": {
                      color: "#686F83",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#2FB4FF",
                        color: "white",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "white",
                        color: "#686F83",
                        "&:hover": {
                          backgroundColor: "#2FB4FF",
                          color: "white",
                        },
                      },
                    },
                  },
                },
              }}

            >
              <MenuItem value="">Is Default</MenuItem>
              <MenuItem value="true">Yes</MenuItem>
              <MenuItem value="false">No</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 185 }}>
            <Select
              displayEmpty
              defaultValue=""
              sx={{
                height: 36,
                color: "#686F83",
                backgroundColor: "white",
                borderRadius: "8px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#D5D5D5",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2FB4FF",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2FB4FF",
                },
                "& .MuiSelect-select": {
                  color: "#686F83",
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "white",
                    maxHeight: 200,
                    "& .MuiMenuItem-root": {
                      color: "#686F83",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#2FB4FF",
                        color: "white",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "white",
                        color: "#686F83",
                        "&:hover": {
                          backgroundColor: "#2FB4FF",
                          color: "white",
                        },
                      },
                    },
                  },
                },
              }}
            >
              <MenuItem value="">Manufacturer Id</MenuItem>
              <MenuItem value="GAD-001">GAD-001</MenuItem>
              <MenuItem value="GAD-002">GAD-002</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Collapse>

      {/* Table Container with Horizontal Scroll */}
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

        }}
      >
        <Table sx={{ minWidth: 1200 }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" sx={{ width: 50 }}>
                {/* <Checkbox
                  checked={isAllSelected}
                  indeterminate={isIndeterminate}
                  onChange={handleSelectAll}
                  sx={{
                    color: "#686F83",
                    "&.Mui-checked": {
                      color: "#3b82f6",
                    },
                  }}
                /> */}
              </TableCell>
              {/* <TableCell
                sx={{ fontWeight: 600, color: "#686F83", minWidth: 100 }}
              >
                ID
              </TableCell> */}
              <TableCell
                sx={{ fontWeight: 600, color: "#686F83", minWidth: 150 }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600, color: "#686F83", minWidth: 120 }}
              >
                Description
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600, color: "#686F83", minWidth: 120 }}
              >
                Precedence
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600, color: "#686F83", minWidth: 120 }}
              >
                Method
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600, color: "#686F83", minWidth: 120 }}
              >
                Category id
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600, color: "#686F83", minWidth: 140 }}
              >
                Manufacture id
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600, color: "#686F83", minWidth: 130 }}
              >
                Effective from
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600, color: "#686F83", minWidth: 120 }}
              >
                Effective to
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600, color: "#686F83", minWidth: 100 }}
              >
                Is default
              </TableCell>
              <TableCell
                sx={{ fontWeight: 600, color: "#686F83", minWidth: 100 }}
              >
                In stock
              </TableCell>
              <TableCell sx={{ width: 50 }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentRows.map((row) => (
              <TableRow
                key={row.id}

              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={isSelected(row.id)}
                    onChange={() => handleSelectRow(row.id)}
                    sx={{
                      color: "#686F83",
                      "&.Mui-checked": {
                        color: "#2FB4FF",
                      },
                    }}
                  />
                </TableCell>
                {/* <TableCell sx={{ color: "#686F83", fontSize: "14px" }}>
                  {row.id}
                </TableCell> */}
                <TableCell sx={{ color: "#686F83", fontSize: "14px" }}>
                  {row.name}
                </TableCell>
                <TableCell sx={{ color: "#686F83", fontSize: "14px" }}>
                  {row.description}
                </TableCell>
                <TableCell sx={{ color: "#6b7280", fontSize: "14px" }}>
                  {row.precedence}
                </TableCell>
                <TableCell sx={{ color: "#686F83", fontSize: "14px" }}>
                  {row.method}
                </TableCell>
                <TableCell sx={{ color: "#686F83", fontSize: "14px" }}>
                  {row.categoryId}
                </TableCell>
                <TableCell sx={{ color: "#686F83", fontSize: "14px" }}>
                  {row.manufactureId}
                </TableCell>
                <TableCell sx={{ color: "#686F83", fontSize: "14px" }}>
                  {row.effectiveFrom}
                </TableCell>
                <TableCell sx={{ color: "#686F83", fontSize: "14px" }}>
                  {row.effectiveTo}
                </TableCell>
                <TableCell>
                  <Chip
                    label={row.isDefault ? "Yes" : "No"}
                    size="small"
                    sx={{
                      backgroundColor: "white",
                      color: "#686F83",
                      fontSize: "14px",
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={row.inStock ? "Yes" : "No"}
                    size="small"
                    sx={{
                      backgroundColor: "white",
                      color: "#686F83",
                      fontSize: "14px",
                    }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton size="small" sx={{ color: "#686F83" }}>
                    <MoreVert fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Footer */}
      <div className="flex justify-between items-center p-4 border-t border-gray-200">

        <Pagination
          count={filteredPages}
          page={page}
          onChange={handleChangePage}
          variant="contained"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              borderColor: "#2FB4FF",
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
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Show</span>
          <FormControl size="small" sx={{ minWidth: 80 }}>
            <Select
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
              sx={{
                height: 36,
                color: "#727A90",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#E9EAEA",
                  borderRadius: "8px",
                },


              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    "& .MuiMenuItem-root": {
                      color: "#686F83",

                      "&.Mui-selected": {
                        backgroundColor: "#f3f4f6",

                      },
                    },
                  },
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
  );
};

export default PriceRuleTable;