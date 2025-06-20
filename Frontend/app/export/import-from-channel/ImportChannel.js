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
import { MoreVert, Edit, Delete } from '@mui/icons-material';

// Import logo images
import amazonLogo from "../../images/logo_amazon.png";
import googleLogo from "../../images/logo_google.png";
import walmartLogo from "../../images/logo_walmart.png";
import shopifyLogo from "../../images/logo.png";
import { useRouter } from 'next/navigation';


const LogoComponent = ({ name, logoSrc, className, width = 98, height = 32 }) => (
  <div className={`${className} flex items-center justify-center rounded overflow-hidden  relative`}>
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

export default function ImportChannel() {
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

  const handleViewlogs = () => {
    router.push("/export/import-from-channel/logs");
  };

  const handleedit = () => {
    router.push("/export/export-to-channel/edit");
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
      statusVariant: 'outlined'
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
      statusVariant: 'outlined'
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
      statusVariant: 'outlined'
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
      statusVariant: 'outlined'
    }
  ];

  const getProgressBarColor = (color) => {
    switch (color) {
      case 'success': return 'bg-[#66914A]';
      case 'warning': return 'bg-[#FF302F]';
      case 'error': return 'bg-[#FF9A00]';
      case 'info': return 'bg-[#0073D5]';
      default: return 'bg-gray-400';
    }
  };

  const getProgressBgColor = (color) => {
    switch (color) {
      case 'success': return 'bg-[#98C050]';
      case 'warning': return 'bg-[#FF9C9C]';
      case 'error': return 'bg-[#292929]';
      case 'info': return 'bg-[#FFB200]';
      default: return 'bg-gray-200';
    }
  };

  const getStatusChipStyles = (status) => {
    switch (status) {
      case 'Connected':
        return {
          backgroundColor: '#EAFFC3',
          color: '#66914A',
          border: '1px solid #66914A'
        };
      case 'Setup Required':
        return {
          backgroundColor: ' #FFFAEA',
          color: '#816406',
          border: '1px solid #FFC300'
        };
      case 'Error':
        return {
          backgroundColor: '#FFD5D6',
          color: '#A8280C',
          border: '1px solid #FF6365'
        };
      default:
        return {
          backgroundColor: '#FFD5D6',
          color: '#A8280C',
          border: '1px solid #FF6365'
        };
    }
  };

  return (
    <div className="w-full mx-auto pt-1 px-1 sm:pt-3 sm:px-6 lg:pt-2 lg:px-5">
      <div className="mb-1 rounded-tl-lg bg-white">
        <div className="bg-white w-full rounded-tl-lg p-3 sm:p-4">
          <div className="flex justify-between items-center ">
            <h2 className="text-2xl font-semibold text-[#2B2F32]">
              Import from Channels
            </h2>
            <button
              className="bg-[#2FB4FF] text-white text-sm font-medium px-5 py-2 rounded-lg"
              onClick={handleViewlogs}
            >
              View Logs
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-bold text-[#727A90] py-4" style={{ width: '20%' }}>
                  <Typography variant="body2" className="semibold">
                    Icon
                  </Typography>
                </TableCell>
                <TableCell className="font-bold text-[#727A90] py-4" style={{ width: '35%' }}>
                  <Typography variant="body2" className="font-medium">
                    Progress
                  </Typography>
                </TableCell>
                <TableCell className="font-bold text-[#727A90] py-4" style={{ width: '25%' }}>
                  <Typography variant="body2" className="font-medium">
                    Last Export
                  </Typography>
                </TableCell>
                <TableCell className="font-bold text-[#727A90] py-4" style={{ width: '15%' }}>
                  <Typography variant="body2" className="font-medium">
                    Status
                  </Typography>
                </TableCell>
                <TableCell className="font-bold text-[#727A90] py-4" style={{ width: '5%' }}>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vendors.map((vendor) => (
                <TableRow
                  key={vendor.id}
                  className="transition-colors duration-200"
                >
                  <TableCell className="py-4" style={{ width: '20%' }}>
                    <LogoComponent
                      name={vendor.name}
                      logoSrc={vendor.logoSrc}
                      className="w-20 h-8"
                      width={80}
                      height={32}
                    />
                  </TableCell>

                  <TableCell className="py-4" style={{ width: '35%' }}>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <Typography variant="caption" className="text-[#686F83] text-xs">
                          Total Product Receive
                        </Typography>
                        <div className="text-left">
                          <Typography variant="caption" className="text-sm text-[#686F83]" sx={{ fontWeight: 'bold', mr: 6, }}>
                            {vendor.progressValue}
                          </Typography>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className={`flex-1 h-3 max-w-[300px] rounded-full ${getProgressBgColor(vendor.progressColor)}`}>
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${getProgressBarColor(vendor.progressColor)}`}
                            style={{ width: `${vendor.progressPercent}%` }}
                          />
                        </div>
                        <Typography variant="caption" className="text-[#686F83] text-sm min-w-[30px]" sx={{ fontWeight: 'bold' }}>
                          {vendor.progressPercent}%
                        </Typography>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="py-4" style={{ width: '25%' }}>
                    <Typography variant="body2" className="text-[#686F83] whitespace-nowrap">
                      {vendor.lastSync}
                    </Typography>
                  </TableCell>

                  <TableCell className="py-4" style={{ width: '15%' }}>
                    <Chip
                      label={vendor.status}
                      size="small"
                      className="font-bold"
                      style={getStatusChipStyles(vendor.status)}
                    />
                  </TableCell>

                  <TableCell className="py-4" style={{ width: '5%' }}>
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
                  width={70}
                  height={30}
                />
                <div className="flex items-center space-x-2">
                  <Chip
                    label={vendor.status}
                    size="small"
                    style={getStatusChipStyles(vendor.status)}
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
                    <Typography variant="caption" className="text-[#686F83]">
                      Total Product Sent
                    </Typography>
                    <Typography variant="caption" className="font-bold">
                      {vendor.progressValue}
                    </Typography>
                  </div>

                  <div className={`w-full h-2 rounded-full ${getProgressBgColor(vendor.progressColor)} mb-1`}>
                    <div
                      className={`h-full rounded-full ${getProgressBarColor(vendor.progressColor)}`}
                      style={{ width: `${vendor.progressPercent}%` }}
                    />
                  </div>

                  <Typography variant="caption" className="font-bold text-[#686F83]">
                    {vendor.progressPercent}%
                  </Typography>
                </div>

                <div>
                  <Typography variant="caption" className="text-[#686F83] block">
                    Last Export
                  </Typography>
                  <Typography variant="body2" className="text-[#686F83]">
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
          className: "rounded-lg min-w-[120px] "
        }}
      >
        <MenuItem
          onClick={handleMenuClose}
          className="px-4 py-2 transition-colors duration-200"
        >
          <Edit className="w-4 h-4 mr-2 text-[#686F83]" onClick={handleedit} />
          <Typography variant="body2" className="text-[#686F83]">Edit</Typography>
        </MenuItem>
        <MenuItem
          onClick={handleMenuClose}
          className="px-4 py-2 transition-colors duration-200"
        >
          <Delete className="w-4 h-4 mr-2 text-[#686F83] " />
          <Typography variant="body2" className="text-[#686F83]">Delete</Typography>
        </MenuItem>
      </Menu>
    </div >
  );
}