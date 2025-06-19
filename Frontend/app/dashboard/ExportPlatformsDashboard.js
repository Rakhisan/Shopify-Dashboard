"use client";
import React from "react";
import { Card, CardContent, Typography, Box } from '@mui/material';
import Image from "next/image";

// Import images - Next.js recommended way
import amazonLogo from "../images/logo_amazon.png";
import googleLogo from "../images/logo_google.png";
import walmartLogo from "../images/logo_walmart.png";
import ebayLogo from "../images/logo_ebay.png";

export default function ExportPlatformsDashboard() {
  const platformData = [
    {
      name: "Amazon",
      percentage: 45,
      totalProducts: 1200,
      productsExported: 500,
      color: "#00A8E1",
      logo: amazonLogo,
    },
    {
      name: "Google",
      percentage: 60,
      totalProducts: 1000,
      productsExported: 600,
      color: "#EA4335",
      logo: googleLogo,
    },
    {
      name: "Walmart",
      percentage: 70,
      totalProducts: 2000,
      productsExported: 1400,
      color: "#00A8E1",
      logo: walmartLogo,
    },
    {
      name: "eBay",
      percentage: 50,
      totalProducts: 1800,
      productsExported: 900,
      color: "#EA4335",
      logo: ebayLogo,
    },
  ];

  const CircularProgress = ({ percentage, color }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative flex items-center justify-center">
        <svg
          width="120"
          height="120"
          className="transform -rotate-90 transition-all duration-500"
        >
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r="45"
            stroke="#E5E7EB"
            strokeWidth="16"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r="45"
            stroke={color}
            strokeWidth="16"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-in-out"
          />
        </svg>
        <Typography
          variant="h6"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-slate-500"
        >
          {percentage}%
        </Typography>
      </div>
    );
  };

  return (
    <Box className="bg-[#F1F1F1] p-8 rounded-lg flex flex-col gap-6 max-w-6xl mb-5">
      <Typography
        variant="h5"
        component="h1"
        className="text-2xl font-normal text-gray-800"
        sx={{ fontFamily: 'Helvetica' }}
      >
        Export to platform
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  m-0">
        {platformData.map((platform, index) => (
          <Card
            key={index}
            className="bg-white rounded-lg p-2  shadow-sm border border-gray-200 flex flex-col items-center transition-all duration-200 hover:-translate-y-0.5"
            elevation={0}
            sx={{
              width: 248, // Same width as Figma
              borderRadius: '12px',
              padding: '20px 16px',
              border: '1px solid #E0E0E0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 'none',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
                transform: 'translateY(-2px)',
              }
            }}
          >
            <CardContent className="p-0 px-4 py-4  w-full flex flex-col items-center">
              {/* Chart Container */}
              <Box className="relative mb-2">
                <CircularProgress
                  percentage={platform.percentage}
                  color={platform.color}
                />
              </Box>

              {/* Logo Container */}
              <Box className="mb-2 h-14 flex items-center justify-center">
                <Image
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  width={85}
                  height={25}
                  className="max-w-full h-auto object-contain"
                />
              </Box>

              {/* Stats Container */}
              <Box className="w-full flex flex-col">
                <Box className="flex items-center gap-2  text-sm">
                  <div className="w-3.5 h-3.5 rounded-full bg-gray-300 flex-shrink-0"></div>
                  <Typography
                    variant="body2"
                    className="text-gray-500 flex-1 text-base font-normal"
                    sx={{ fontFamily: 'Nunito Sans, sans-serif' }}
                  >
                    Total Product
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-gray-700 text-base font-semibold ml-auto"
                    sx={{ fontFamily: 'Nunito Sans, sans-serif' }}
                  >
                    {platform.totalProducts}
                  </Typography>
                </Box>

                <Box className="flex items-center gap-2 text-sm">
                  <div
                    className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: platform.color }}
                  ></div>
                  <Typography
                    variant="body2"
                    className="text-gray-500 flex-1 text-base font-normal"
                    sx={{ fontFamily: 'Nunito Sans, sans-serif' }}
                  >
                    Products Exported
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-gray-700 text-base font-semibold ml-auto"
                    sx={{ fontFamily: 'Nunito Sans, sans-serif' }}
                  >
                    {platform.productsExported}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </div>
    </Box>
  );
}