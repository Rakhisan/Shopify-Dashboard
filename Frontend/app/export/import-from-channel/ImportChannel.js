'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Chip,
  LinearProgress,
  Box,
  Card,
  CardContent
} from '@mui/material';
import { MoreVert, Edit, Update, Delete } from '@mui/icons-material';

// Import logo images
import amazonLogo from "../../images/logo_amazon.png";
import googleLogo from "../../images/logo_google.png";
import walmartLogo from "../../images/logo_walmart.png";
import shopifyLogo from "../../images/logo.png";
import { useRouter } from 'next/navigation';

// Logo component using Next.js Image component with imported images
const LogoComponent = ({ name, logoSrc, className, width = 80, height = 32 }) => (
  <div className={`${className} flex items-center justify-center rounded overflow-hidden bg-white borderrelative`}>
    <Image
      src={logoSrc}
      alt={`${name} logo`}
      width={width}
      height={height}
      className="object-contain p-1"
      priority={false}
      placeholder="blur"
    />
  </div>
);

export default function VendorSetup() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const router = useRouter();

  const handleMenuClick = (event, vendorId) => {
    setAnchorEl(event.currentTarget);
    setSelectedVendor(vendorId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedVendor(null);
  };
  const handleViewLogs = () => {
    router.push("/export/import-from-channel/logs");
  };

  const vendors = [
    {
      id: 1,
      name: 'Shopify',
      logoSrc: shopifyLogo,
      progressValue: 1500,
      progressPercent: 70,
      progressColor: 'success',
      lastSync: '2025-05-12, 8:15 PM',
      status: 'Connected',
      statusColor: 'success',
      statusVariant: 'filled'
    },
    {
      id: 2,
      name: 'Google',
      logoSrc: googleLogo,
      progressValue: 1200,
      progressPercent: 65,
      progressColor: 'warning',
      lastSync: '2025-04-20, 8:10 PM',
      status: 'Setup Required',
      statusColor: 'warning',
      statusVariant: 'filled'
    },
    {
      id: 3,
      name: 'Amazon',
      logoSrc: amazonLogo,
      progressValue: 200,
      progressPercent: 80,
      progressColor: 'error',
      lastSync: '2025-02-12, 10:15 PM',
      status: 'Error',
      statusColor: 'error',
      statusVariant: 'filled'
    },
    {
      id: 4,
      name: 'Walmart',
      logoSrc: walmartLogo,
      progressValue: 1800,
      progressPercent: 30,
      progressColor: 'info',
      lastSync: '2025-01-07, 11:15 PM',
      status: 'Error',
      statusColor: 'error',
      statusVariant: 'filled'
    }
  ];

  const getProgressBarColor = (color) => {
    switch (color) {
      case 'success': return 'bg-[#66914A]';
      case 'warning': return 'bg-[#FF302F]';
      case 'error': return 'bg-[#FF9A00]';
      case 'info': return 'bg-[#0073D5]';

    }
  };

  const getProgressBgColor = (color) => {
    switch (color) {
      case 'success': return 'bg-[#98C050]';
      case 'warning': return 'bg-[#FF9C9C]';
      case 'error': return 'bg-[#292929]';
      case 'info': return 'bg-[#FFB200]';

    }
  };

  return (
    <div className="max-w-7xl mx-auto pt-1 px-1 sm:pt-3 sm:px-6 lg:pt-4 lg:px-6">
      <Card className="mb-3">
        <CardContent className="pb-2">
          <div className="flex justify-between items-center">
            <Typography
              variant="h5"
              component="h2"
              className="font-semibold"
            >
              Import from Channels
            </Typography>

            {/* View Logs Button */}
            <button className="bg-[#2FB4FF]  text-white text-sm font-medium px-5 py-2 rounded-lg shadow-sm" onClick={handleViewLogs}>
              View Logs
            </button>
          </div>
        </CardContent>
      </Card>





      {/* Desktop Table */}
      <div className="hidden md:block">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-medium text-gray-600 py-4">
                  <Typography variant="body2" className="font-medium">
                    Icon
                  </Typography>
                </TableCell>
                <TableCell className="font-medium text-gray-600 py-4">
                  <Typography variant="body2" className="font-medium">
                    Progress
                  </Typography>
                </TableCell>
                <TableCell className="font-medium text-gray-600 py-4">
                  <Typography variant="body2" className="font-medium">
                    Last Export
                  </Typography>
                </TableCell>
                <TableCell className="font-medium text-gray-600 py-4">
                  <Typography variant="body2" className="font-medium">
                    Status
                  </Typography>
                </TableCell>
                <TableCell className="font-medium text-gray-600 py-4">
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vendors.map((vendor) => (
                <TableRow
                  key={vendor.id}
                  className="transition-colors duration-200"
                >
                  <TableCell className="py-4">
                    <LogoComponent
                      name={vendor.name}
                      logoSrc={vendor.logoSrc}
                      className="w-20 h-8"
                      width={80}
                      height={32}
                    />
                  </TableCell>

                  <TableCell className="py-4 min-w-[200px]">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Typography variant="caption" className="text-gray-600">
                          Total Product Imported
                        </Typography>
                        <Typography variant="caption" className="font-medium">
                          {vendor.progressValue}
                        </Typography>
                      </div>

                      <div className={`w-full h-2 rounded-full ${getProgressBgColor(vendor.progressColor)}`}>
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${getProgressBarColor(vendor.progressColor)}`}
                          style={{ width: `${vendor.progressPercent}%` }}
                        />
                      </div>

                      <div className="text-right">
                        <Typography variant="caption" className="text-gray-600">
                          {vendor.progressPercent}%
                        </Typography>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="py-4">
                    <Typography variant="body2" className="text-gray-700">
                      {vendor.lastSync}
                    </Typography>
                  </TableCell>

                  <TableCell className="py-4">
                    <Chip
                      label={vendor.status}
                      color={vendor.statusColor}
                      variant={vendor.statusVariant}
                      size="small"
                      className="font-medium"
                    />
                  </TableCell>

                  <TableCell className="py-4">
                    <IconButton
                      onClick={(e) => handleMenuClick(e, vendor.id)}
                      className="transition-colors duration-200"
                      size="small"
                    >
                      <MoreVert />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {vendors.map((vendor) => (
          <Card key={vendor.id} className="shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <LogoComponent
                  name={vendor.name}
                  logoSrc={vendor.logoSrc}
                  className="w-16 h-6"
                  width={64}
                  height={24}
                />
                <div className="flex items-center space-x-2">
                  <Chip
                    label={vendor.status}
                    color={vendor.statusColor}
                    variant={vendor.statusVariant}
                    size="small"
                  />
                  <IconButton
                    onClick={(e) => handleMenuClick(e, vendor.id)}
                    size="small"
                  >
                    <MoreVert />
                  </IconButton>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <Typography variant="caption" className="text-gray-600">
                      Total Products
                    </Typography>
                    <Typography variant="caption" className="font-medium">
                      {vendor.progressValue}
                    </Typography>
                  </div>

                  <div className={`w-full h-2 rounded-full ${getProgressBgColor(vendor.progressColor)} mb-1`}>
                    <div
                      className={`h-full rounded-full ${getProgressBarColor(vendor.progressColor)}`}
                      style={{ width: `${vendor.progressPercent}%` }}
                    />
                  </div>

                  <Typography variant="caption" className="text-gray-600">
                    {vendor.progressPercent}%
                  </Typography>
                </div>

                <div>
                  <Typography variant="caption" className="text-gray-600 block">
                    Last Export
                  </Typography>
                  <Typography variant="body2" className="text-gray-800">
                    {vendor.lastSync}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        className="mt-2"
        PaperProps={{
          className: "shadow-lg rounded-lg min-w-[120px]"
        }}
      >
        <MenuItem
          onClick={handleMenuClose}
          className="px-4 py-2 transition-colors duration-200"
        >
          <Edit className="w-4 h-4 mr-2 text-gray-600" />
          <Typography variant="body2">Edit</Typography>
        </MenuItem>
        <MenuItem
          onClick={handleMenuClose}
          className="px-4 py-2  transition-colors duration-200"
        >
          <Update className="w-4 h-4 mr-2 text-gray-600" />
          <Typography variant="body2">Update</Typography>
        </MenuItem>
        <MenuItem
          onClick={handleMenuClose}
          className="px-4 py-2 hover:bg-red-50 transition-colors duration-200"
        >
          <Delete className="w-4 h-4 mr-2 text-red-600" />
          <Typography variant="body2" className="text-red-600">Delete</Typography>
        </MenuItem>
      </Menu>
    </div >
  );
}