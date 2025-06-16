"use client";
import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";

const EditRuleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    setAsDefault: false,
    precedence: "Precedence",
    sequence: "",
    subsequence: "Subsequence",
    categoryId: "Category id",
    subCategoryId: "Sub category id",
    manufacturerId: "Manufacturer id",
    productId: "Product id",
    method: "Select Method",
    costSourceId: "cost source id",
    useMinSource: false,
    percentValue: 0,
    roundedTo: 10.5,
    minMargin: 0,
    costFrom: 0,
    costAdjValue: 10.5,
    costTo: 0,
    specialCost: 0,
    costAdjPercent: 0,
    deceedToMap: false,
    ceilingIsMrp: false,
    minMarginCheck: false,
    inStock: false,
    minMarginCheckValue: 0,
    minMarginPercentage: 0,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="w-full font-sans max-w-[1200px]  text-[#686f83] ">
      <div className="max-w-6xl mx-auto bg-white rounded-t-lg shadow-sm p-5 border border-gray-200">
        <Typography
          variant="h5"
          className="text-gray-800 font-semibold mb-18 pb-4 border-b border-gray-400"
        >
          Add Profile Price
        </Typography>
        {/* </div> */}

        <div className="flex flex-wrap gap-6 mt-8">
          {/* Basic Information */}
          <div className=" min-w-[400px] mb-10">
            <div className="bg-gray-100  rounded-lg px-12 py-6 mb-10">
              <h2 className="text-lg font-medium text-gray-600 mb-4">
                Basic Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Name
                  </label>
                  <TextField
                    fullWidth
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    size="small"
                    className="bg-white"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "white",
                        "& fieldset": { borderColor: "#e0e0e0" },
                        "&:hover fieldset": { borderColor: "#b0b0b0" },
                        "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                      },
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Description
                  </label>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    placeholder="Description"
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    size="small"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "white",
                        "& fieldset": { borderColor: "#e0e0e0" },
                        "&:hover fieldset": { borderColor: "#b0b0b0" },
                        "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                      },
                    }}
                  />
                </div>

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.setAsDefault}
                      onChange={(e) =>
                        handleInputChange("setAsDefault", e.target.checked)
                      }
                      sx={{ color: "#1976d2" }}
                    />
                  }
                  label="Set as Default Rule"
                  className="mb-4"
                />

                <div>
                  <FormControl fullWidth size="small">
                    <InputLabel>Precedence</InputLabel>
                    <Select
                      value={formData.precedence}
                      label="Precedence"
                      onChange={(e) =>
                        handleInputChange("precedence", e.target.value)
                      }
                      sx={{
                        backgroundColor: "white",
                        "& fieldset": { borderColor: "#e0e0e0" },
                        "&:hover fieldset": { borderColor: "#b0b0b0" },
                        "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                      }}
                    >
                      <MenuItem value="Precedence">Precedence</MenuItem>
                      <MenuItem value="High">High</MenuItem>
                      <MenuItem value="Medium">Medium</MenuItem>
                      <MenuItem value="Low">Low</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>

          {/* Rule Structure & Scope */}
          <div className="flex-1 min-w-200px]">
            <div className="bg-gray-100  rounded-lg px-12 py-6 mb-6">
              <h2 className="text-lg font-medium text-gray-600 mb-4">
                Rule Structure & Scope
              </h2>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Sequence
                  </label>
                  <TextField
                    fullWidth
                    placeholder="Sequence"
                    value={formData.sequence}
                    onChange={(e) =>
                      handleInputChange("sequence", e.target.value)
                    }
                    size="small"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "white",
                        "& fieldset": { borderColor: "#e0e0e0" },
                        "&:hover fieldset": { borderColor: "#b0b0b0" },
                        "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                      },
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Subsequence
                  </label>
                  <FormControl fullWidth size="small">
                    <Select
                      value={formData.subsequence}
                      onChange={(e) =>
                        handleInputChange("subsequence", e.target.value)
                      }
                      displayEmpty
                      sx={{
                        backgroundColor: "white",
                        "& fieldset": { borderColor: "#e0e0e0" },
                        "&:hover fieldset": { borderColor: "#b0b0b0" },
                        "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                      }}
                    >
                      <MenuItem value="Subsequence">Subsequence</MenuItem>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Category Id
                  </label>
                  <FormControl fullWidth size="small">
                    <Select
                      value={formData.categoryId}
                      onChange={(e) =>
                        handleInputChange("categoryId", e.target.value)
                      }
                      displayEmpty
                      sx={{
                        backgroundColor: "white",
                        "& fieldset": { borderColor: "#e0e0e0" },
                        "&:hover fieldset": { borderColor: "#b0b0b0" },
                        "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                      }}
                    >
                      <MenuItem value="Category id">Category id</MenuItem>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Sub Category Id
                  </label>
                  <FormControl fullWidth size="small">
                    <Select
                      value={formData.subCategoryId}
                      onChange={(e) =>
                        handleInputChange("subCategoryId", e.target.value)
                      }
                      displayEmpty
                      sx={{
                        backgroundColor: "white",
                        "& fieldset": { borderColor: "#e0e0e0" },
                        "&:hover fieldset": { borderColor: "#b0b0b0" },
                        "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                      }}
                    >
                      <MenuItem value="Sub category id">
                        Sub category id
                      </MenuItem>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Manufacturer Id
                  </label>
                  <FormControl fullWidth size="small">
                    <Select
                      value={formData.manufacturerId}
                      onChange={(e) =>
                        handleInputChange("manufacturerId", e.target.value)
                      }
                      displayEmpty
                      sx={{
                        backgroundColor: "white",
                        "& fieldset": { borderColor: "#e0e0e0" },
                        "&:hover fieldset": { borderColor: "#b0b0b0" },
                        "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                      }}
                    >
                      <MenuItem value="Manufacturer id">
                        Manufacturer id
                      </MenuItem>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Product Id
                  </label>
                  <FormControl fullWidth size="small">
                    <Select
                      value={formData.productId}
                      onChange={(e) =>
                        handleInputChange("productId", e.target.value)
                      }
                      displayEmpty
                      sx={{
                        backgroundColor: "white",
                        "& fieldset": { borderColor: "#e0e0e0" },
                        "&:hover fieldset": { borderColor: "#b0b0b0" },
                        "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                      }}
                    >
                      <MenuItem value="Product id">Product id</MenuItem>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <h3 className="text-lg font-medium text-gray-600 mb-4">
                Pricing Method
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Method
                  </label>
                  <FormControl fullWidth size="small">
                    <Select
                      value={formData.method}
                      onChange={(e) =>
                        handleInputChange("method", e.target.value)
                      }
                      displayEmpty
                      sx={{
                        backgroundColor: "white",
                        "& fieldset": { borderColor: "#e0e0e0" },
                        "&:hover fieldset": { borderColor: "#b0b0b0" },
                        "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                      }}
                    >
                      <MenuItem value="Select Method">Select Method</MenuItem>
                      <MenuItem value="Method 1">Method 1</MenuItem>
                      <MenuItem value="Method 2">Method 2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    Cost Source Id
                  </label>
                  <FormControl fullWidth size="small">
                    <Select
                      value={formData.costSourceId}
                      onChange={(e) =>
                        handleInputChange("costSourceId", e.target.value)
                      }
                      displayEmpty
                      sx={{
                        backgroundColor: "white",
                        "& fieldset": { borderColor: "#e0e0e0" },
                        "&:hover fieldset": { borderColor: "#b0b0b0" },
                        "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                      }}
                    >
                      <MenuItem value="cost source id">cost source id</MenuItem>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.useMinSource}
                    onChange={(e) =>
                      handleInputChange("useMinSource", e.target.checked)
                    }
                    sx={{ color: "#1976d2" }}
                  />
                }
                label="Use Min Source"
                className="mt-4"
              />
            </div>
          </div>
        </div>

        {/* Pricing Values & Adjustments */}
        <div className="bg-gray-100 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-medium text-gray-600 mb-4">
            Pricing Values & Adjustments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Percent Value
              </label>
              <TextField
                fullWidth
                placeholder="percent value"
                value={formData.percentValue}
                onChange={(e) =>
                  handleInputChange("percentValue", e.target.value)
                }
                size="small"
                className="mb-4"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    "& fieldset": { borderColor: "#e0e0e0" },
                    "&:hover fieldset": { borderColor: "#b0b0b0" },
                    "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                  },
                }}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Rounded To
              </label>
              <TextField
                fullWidth
                placeholder="10.5%"
                value={formData.roundedTo}
                onChange={(e) => handleInputChange("roundedTo", e.target.value)}
                size="small"
                className="mb-4"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    "& fieldset": { borderColor: "#e0e0e0" },
                    "&:hover fieldset": { borderColor: "#b0b0b0" },
                    "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                  },
                }}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Min Margin
              </label>
              <TextField
                fullWidth
                placeholder="min margin"
                value={formData.minMargin}
                onChange={(e) => handleInputChange("minMargin", e.target.value)}
                size="small"
                className="mb-4"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    "& fieldset": { borderColor: "#e0e0e0" },
                    "&:hover fieldset": { borderColor: "#b0b0b0" },
                    "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                  },
                }}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Cost From
              </label>
              <TextField
                fullWidth
                placeholder="Cost From"
                value={formData.costFrom}
                onChange={(e) => handleInputChange("costFrom", e.target.value)}
                size="small"
                className="mb-4"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    "& fieldset": { borderColor: "#e0e0e0" },
                    "&:hover fieldset": { borderColor: "#b0b0b0" },
                    "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                  },
                }}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Cost Adj Value
              </label>
              <TextField
                fullWidth
                placeholder="10.5%"
                value={formData.costAdjValue}
                onChange={(e) =>
                  handleInputChange("costAdjValue", e.target.value)
                }
                size="small"
                className="mb-4"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    "& fieldset": { borderColor: "#e0e0e0" },
                    "&:hover fieldset": { borderColor: "#b0b0b0" },
                    "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                  },
                }}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Cost To
              </label>
              <TextField
                fullWidth
                placeholder="Cost To"
                value={formData.costTo}
                onChange={(e) => handleInputChange("costTo", e.target.value)}
                size="small"
                className="mb-4"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    "& fieldset": { borderColor: "#e0e0e0" },
                    "&:hover fieldset": { borderColor: "#b0b0b0" },
                    "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                  },
                }}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Special Cost
              </label>
              <TextField
                fullWidth
                placeholder="special cost"
                value={formData.specialCost}
                onChange={(e) =>
                  handleInputChange("specialCost", e.target.value)
                }
                size="small"
                className="mb-4"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    "& fieldset": { borderColor: "#e0e0e0" },
                    "&:hover fieldset": { borderColor: "#b0b0b0" },
                    "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                  },
                }}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Cost Adj Percent
              </label>
              <TextField
                fullWidth
                placeholder="cost adj percent"
                value={formData.costAdjPercent}
                onChange={(e) =>
                  handleInputChange("costAdjPercent", e.target.value)
                }
                size="small"
                className="mb-4"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    "& fieldset": { borderColor: "#e0e0e0" },
                    "&:hover fieldset": { borderColor: "#b0b0b0" },
                    "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                  },
                }}
              />
            </div>
          </div>

          {/* Checkboxes and Min Margin Fields in the Same Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            {/* Left Side: Checkboxes in 2x2 Grid (spanning 2 columns) */}
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.deceedToMap}
                    onChange={(e) =>
                      handleInputChange("deceedToMap", e.target.checked)
                    }
                    sx={{ color: "#1976d2" }}
                  />
                }
                label="Deceed To Map"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.ceilingIsMrp}
                    onChange={(e) =>
                      handleInputChange("ceilingIsMrp", e.target.checked)
                    }
                    sx={{ color: "#1976d2" }}
                  />
                }
                label="Ceiling Is Mrp"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.minMarginCheck}
                    onChange={(e) =>
                      handleInputChange("minMarginCheck", e.target.checked)
                    }
                    sx={{ color: "#1976d2" }}
                  />
                }
                label="Min Margin Check"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.inStock}
                    onChange={(e) =>
                      handleInputChange("inStock", e.target.checked)
                    }
                    sx={{ color: "#1976d2" }}
                  />
                }
                label="In Stock"
              />
            </div>

            {/* Right Side: Min Margin Fields (spanning 2 columns) */}
            <div className="grid grid-cols-2 gap-4 col-span-2 ">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Min Margin Check
                </label>
                <TextField
                  fullWidth
                  placeholder="min margin check"
                  value={formData.minMarginCheckValue}
                  onChange={(e) =>
                    handleInputChange("minMarginCheckValue", e.target.value)
                  }
                  size="small"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "white",
                      "& fieldset": { borderColor: "#e0e0e0" },
                      "&:hover fieldset": { borderColor: "#b0b0b0" },
                      "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                    },
                  }}
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Min Margin Percentage
                </label>
                <TextField
                  fullWidth
                  placeholder="min margin percentage"
                  value={formData.minMarginPercentage}
                  onChange={(e) =>
                    handleInputChange("minMarginPercentage", e.target.value)
                  }
                  size="small"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "white",
                      "& fieldset": { borderColor: "#e0e0e0" },
                      "&:hover fieldset": { borderColor: "#b0b0b0" },
                      "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <Button
            variant="outlined"
            className="px-16 py-6 text-blue-500 border-blue-500 rounded-lg"
            sx={{
              borderColor: "#3b82f6",
              color: "#3b82f6",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "500",
              minWidth: "120px",
              height: " 50px",
              borderRadius: "8px",
              "&:hover": {
                borderColor: "#2563eb",
                backgroundColor: "rgba(59, 130, 246, 0.04)",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            className="px-8 py-3 bg-blue-500 text-white rounded-lg"
            sx={{
              backgroundColor: "#3b82f6",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "500",
              minWidth: "120px",
              height: " 50px",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#2563eb",
              },
            }}
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditRuleForm;
