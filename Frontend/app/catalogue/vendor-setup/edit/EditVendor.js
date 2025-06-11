'use client';
import { useState } from 'react';

export default function EditVendorForm() {
  const [formData, setFormData] = useState({
    vendorName: '',
    userName: '',
    phoneNo: '',
    email: '',
    password: '',
    filePath: '',
    website: '',
    addressLine1: '',
    addressLine2: '',
    country: '',
    city: '',
    postalCode: '',
    state: '',
    port: '',
    host: '',
    sourceType: '',
    schedule: '',
    catalogFormat: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Vendor added successfully!');
  };

  const handleCancel = () => {
    setFormData({
      vendorName: '',
      userName: '',
      phoneNo: '',
      email: '',
      password: '',
      filePath: '',
      website: '',
      addressLine1: '',
      addressLine2: '',
      country: '',
      city: '',
      postalCode: '',
      state: '',
      port: '',
      host: '',
      sourceType: '',
      schedule: '',
      catalogFormat: ''
    });
  };

  const DropdownArrow = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-3 top-2/3 transform -translate-y-1/2 pointer-events-none">
      <path d="M4.13995 6H11.3604C11.4881 6.00055 11.6128 6.04019 11.7187 6.1139C11.8246 6.18761 11.907 6.29208 11.9554 6.4141C12.0037 6.53612 12.016 6.67021 11.9906 6.79942C11.9651 6.92863 11.9031 7.04715 11.8125 7.14L8.2087 10.86C8.14866 10.9225 8.07723 10.9721 7.99853 11.0059C7.91983 11.0398 7.83542 11.0572 7.75016 11.0572C7.6649 11.0572 7.58049 11.0398 7.50179 11.0059C7.42309 10.9721 7.35166 10.9225 7.29162 10.86L3.68787 7.14C3.59718 7.04715 3.5352 6.92863 3.50976 6.79942C3.48433 6.67021 3.49658 6.53612 3.54497 6.4141C3.59336 6.29208 3.67571 6.18761 3.78162 6.1139C3.88752 6.04019 4.01222 6.00055 4.13995 6Z" fill="#727A90" />
    </svg>
  );

  return (
    <div className="max-w-7xl  space-y-1">
      {/* Header Card */}
      <div className="bg-white p-4">
        <h2 className="text-2xl font-semibold text-[#2B2F32]">Edit Vendor</h2>
      </div>

      {/* Form Card */}
      <div className="bg-white shadow-lg p-6">
        <div className="space-y-8">

          <div className="bg-[#F6F8FB] rounded-xl shadow p-6">
            <h2 className="text-lg font-medium text-[#2B2F32] mb-4">Basic Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="Name"
                  value={formData.vendorName}
                  onChange={handleInputChange}
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Testing@gmail.com"
                  className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  Phone no
                </label>
                <input
                  type="tel"
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleInputChange}
                  placeholder="Your Phone Number"
                  className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                />
              </div>
            </div>

            {/* Address Section - Fixed Grid Structure */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              <div>
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  Address line 1
                </label>
                <input
                  type="text"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleInputChange}
                  placeholder="Enter Address Line 1"
                  className="w-full px-2 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  Address line 2
                </label>
                <input
                  type="text"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleInputChange}
                  placeholder="Enter Address Line 2"
                  className="w-full px-2 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                />
              </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              <div className="relative">
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent bg-white appearance-none pr-10"
                >
                  <option value="">Enter Country</option>
                  <option value="US">United States</option>
                  <option value="IN">India</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                </select>
                <DropdownArrow />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="Enter State"
                  className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter City"
                  className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  Postal Code
                </label>
                <input
                  type="number"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  placeholder="Enter Postal Code"
                  className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Sources Section */}
          <div className="bg-[#F6F8FB] rounded-xl shadow p-6">
            <h2 className="text-lg font-medium text-[#2B2F32] mb-4">Sources</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  Source-type
                </label>
                <select
                  name="sourceType"
                  value={formData.sourceType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent bg-white appearance-none pr-10"
                >
                  <option value="">Select Source-type</option>
                  <option value="FTP">FTP</option>
                  <option value="SFTP">SFTP</option>
                  <option value="HTTP">HTTP</option>
                  <option value="API">HTTPS</option>
                  <option value="API">Local</option>
                </select>
                <DropdownArrow />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
              <div>
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  Host
                </label>
                <input
                  type="text"
                  name="host"
                  value={formData.host}
                  onChange={handleInputChange}
                  placeholder="Host"
                  className="w-full px-2 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  UserName
                </label>
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                  placeholder="name"
                  className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  Port
                </label>
                <input
                  type="text"
                  name="port"
                  value={formData.port}
                  onChange={handleInputChange}
                  placeholder="Port"
                  className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <div>
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  File-Path
                </label>
                <input
                  type="text"
                  name="filePath"
                  value={formData.filePath}
                  onChange={handleInputChange}
                  placeholder="filepath"
                  className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  Catalog-Format
                </label>
                <input
                  type="text"
                  name="catalogFormat"
                  value={formData.catalogFormat}
                  onChange={handleInputChange}
                  placeholder="catalog"
                  className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  Schedule
                </label>
                <select
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent bg-white appearance-none pr-10"
                >
                  <option value="">Select Schedule</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>

                </select>
                <DropdownArrow />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-5 mt-5 sm:mt-6 lg:mt-8 w-full">
            <button
              type="button"
              onClick={handleCancel}
              className="w-full sm:w-auto md:min-w-40 h-9 sm:h-10 lg:h-10 text-sm sm:text-base lg:text-lg font-medium bg-white text-[#30B4FF] border border-[#30B4FF] rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#30B4FF] hover:text-white"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full sm:w-auto sm:min-w-40 md:min-w-40 h-9 sm:h-10 lg:h-10 text-sm sm:text-base lg:text-lg font-medium bg-[#30B4FF] text-white border-none rounded-lg cursor-pointer transition-all duration-200 ease-in-out"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}