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

export default function EditProfilePrice() {
  const [name, setName] = useState("Standard Pricing");
  const [description, setDescription] = useState("ABC");
  const [currency, setCurrency] = useState("EDK");
  const [value, setValue] = useState("4");
  const [excludeVendor, setExcludeVendor] = useState("3");

  return (
    <div className="w-full font-sans max-w-[1200px]  text-[#686f83] ">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <Typography variant="h5" className="text-gray-800 font-medium mb-8">
          Edit Profile Price
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <Typography variant="body2" className="text-#5E6366 mb-2">
                Name
              </Typography>
              <div className="relative mb-11">
                <TextField
                  className="bg-white"
                  label=""
                  variant="outlined"
                  color="#5E6366"
                  fullWidth
                  value="john"
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
                  onChange={(e) => setValue(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <EditIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {/* <IconButton
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  size="small"
                  sx={{ color: "#3b82f6" }}
                >
                  <EditIcon fontSize="small" />
                </IconButton> */}
              </div>
            </div>

            {/* Currency and Value Row */}
            <div className="grid grid-cols-2 gap-4 text-#5E6366">
              <FormControl fullWidth>
                <Select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
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
                  <MenuItem value="EDK">EDK</MenuItem>
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="EUR">EUR</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <Select
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
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
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="5">5</MenuItem>
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
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                  <MenuItem value="5">5</MenuItem>
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
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
