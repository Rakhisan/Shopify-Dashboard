"use client";
import React from "react";
import { TextField, Button } from "@mui/material";
import { useParams, useRouter } from "next/navigation";

export default function SearchPageReplica() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  const handleBackClick = () => {
    router.back(); // This will navigate to the previous page
    // OR if you want to navigate to a specific page:
    // router.push('/export-filter'); // Replace with your export filter page route
  };

  return (
    <div className="w-full font-sans max-w-[1200px]  text-[#686f83] ">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-lg font-medium text-gray-800">ID #{id}</h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Saved Searches */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-3">
                Saved Searches
              </label>
              <TextField
                variant="outlined"
                placeholder="Save This Search"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "#e5e7eb",
                    },
                    "&:hover fieldset": {
                      borderColor: "#d1d5db",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#3b82f6",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "12px 14px",
                    fontSize: "14px",
                    color: "#9ca3af",
                  },
                }}
              />
            </div>

            {/* No Of Product */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-3">
                No of Product
              </label>
              <TextField
                variant="outlined"
                value="500"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "#e5e7eb",
                    },
                    "&:hover fieldset": {
                      borderColor: "#d1d5db",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#3b82f6",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "12px 14px",
                    fontSize: "14px",
                    color: "#6b7280",
                  },
                }}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Created By */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-3">
                Created By
              </label>
              <TextField
                variant="outlined"
                value="Shreyash"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "#e5e7eb",
                    },
                    "&:hover fieldset": {
                      borderColor: "#d1d5db",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#3b82f6",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "12px 14px",
                    fontSize: "14px",
                    color: "#6b7280",
                  },
                }}
              />
            </div>

            {/* Price Profile */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-3">
                Price Profile
              </label>
              <TextField
                variant="outlined"
                value="Britways +10%"
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "#e5e7eb",
                    },
                    "&:hover fieldset": {
                      borderColor: "#d1d5db",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#3b82f6",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "12px 14px",
                    fontSize: "14px",
                    color: "#6b7280",
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <Button
            variant="contained"
            onClick={handleBackClick}
            sx={{
              backgroundColor: "#38bdf8",
              color: "white",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: "500",
              padding: "12px 32px",
              borderRadius: "8px",
              minWidth: "120px",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#0ea5e9",
                boxShadow: "none",
              },
            }}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}
