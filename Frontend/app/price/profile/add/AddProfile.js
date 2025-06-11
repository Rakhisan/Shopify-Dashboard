"use client";
import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
  Paper,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function AddProfilePrice() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pricetype, setPricetype] = useState("");
  const [priceRule, setPriceRule] = useState("");
  const [excludeVendor, setExcludeVendor] = useState(
    "for eg Vendor 1,vendor 2, vendor 3"
  );

  return (
    <div className="w-full font-sans max-w-[1200px]  text-[#686f83] ">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <Typography variant="h5" className="text-gray-800 font-medium mb-8">
          Add Profile Price
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <Typography variant="body2" className="text-gray-600 mb-2">
                Name
              </Typography>
              <div className="relative mb-11">
                <TextField
                  className="bg-white"
                  label="Premium Price"
                  variant="outlined"
                  fullWidth
                  value={name}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "#d1d5db",
                      },
                      "&:hover fieldset": {
                        borderColor: "#9ca3af",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#3b82f6",
                      },
                    },
                  }}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            {/* Pricetype and Price Rule Row */}

            <div className="grid grid-cols-2 gap-4 mt-8">
              <FormControl fullWidth>
                <InputLabel id="pricetype-label">Pricetype</InputLabel>
                <Select
                  labelId="pricetype-label"
                  value={pricetype}
                  label="Pricetype"
                  onChange={(e) => setPricetype(e.target.value)}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#d1d5db",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#9ca3af",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#3b82f6",
                    },
                  }}
                >
                  <MenuItem value="type1">Type 1</MenuItem>
                  <MenuItem value="type2">Type 2</MenuItem>
                  <MenuItem value="type3">Type 3</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel id="price-rule-label">Price Rule</InputLabel>
                <Select
                  labelId="price-rule-label"
                  value={priceRule}
                  label="Price Rule"
                  onChange={(e) => setPriceRule(e.target.value)}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#d1d5db",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#9ca3af",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#3b82f6",
                    },
                  }}
                >
                  <MenuItem value="rule1">Rule 1</MenuItem>
                  <MenuItem value="rule2">Rule 2</MenuItem>
                  <MenuItem value="rule3">Rule 3</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Description Field */}
            <div>
              <Typography variant="body2" className="text-gray-600 mb-2">
                Description
              </Typography>
              <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                variant="outlined"
                fullWidth
                className="bg-white"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "#d1d5db",
                    },
                    "&:hover fieldset": {
                      borderColor: "#9ca3af",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#3b82f6",
                    },
                  },
                }}
              />
            </div>

            {/* Exclude Vendor Field */}
            <div>
              <Typography variant="body2" className="text-gray-600 mb-2">
                Exclude vendor
              </Typography>
              <FormControl fullWidth>
                <Select
                  value={excludeVendor}
                  onChange={(e) => setExcludeVendor(e.target.value)}
                  displayEmpty
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#d1d5db",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#9ca3af",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#3b82f6",
                    },
                  }}
                >
                  <MenuItem value="vendor1">Vendor 1</MenuItem>
                  <MenuItem value="vendor2">Vendor 2</MenuItem>
                  <MenuItem value="vendor3">Vendor 3</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <Button
            variant="outlined"
            className="px-8 py-3 text-blue-500 border-blue-500 rounded-lg"
            sx={{
              borderColor: "#3b82f6",
              color: "#3b82f6",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "500",
              minWidth: "120px",
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
}
