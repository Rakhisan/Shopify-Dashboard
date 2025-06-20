'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const DropdownIcon = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.44465 7.63965H14.9283C15.0962 7.63968 15.2603 7.68949 15.3999 7.78277C15.5394 7.87605 15.6482 8.00861 15.7124 8.1637C15.7767 8.31879 15.7935 8.48944 15.7607 8.65409C15.728 8.81873 15.6472 8.96997 15.5285 9.08868L10.7867 13.8305C10.6275 13.9897 10.4116 14.0791 10.1865 14.0791C9.9614 14.0791 9.74552 13.9897 9.58634 13.8305L4.84449 9.08868C4.72581 8.96997 4.64499 8.81873 4.61225 8.65409C4.57951 8.48944 4.59632 8.31879 4.66055 8.1637C4.72479 8.00861 4.83356 7.87605 4.97313 7.78277C5.11269 7.68949 5.27678 7.63968 5.44465 7.63965Z" fill="#3D3C3C" />
  </svg>
);

const Select = ({ label, value, onChange, options = [], placeholder = "Select..." }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-[#5E6366] mb-1">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-3 py-2.5 border border-gray-300 rounded text-left text-sm focus:outline-none focus:border-2 focus:border-[#2FB4FF] flex items-center justify-between h-10"
        >
          <span className={value ? "text-[#ABAFB1]" : "text-[#ABAFB1]"}>
            {value || placeholder}
          </span>
          <DropdownIcon />
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded max-h-60 overflow-auto">
            {options.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="w-full px-3 py-2 text-left text-sm hover:bg-[#2FB4FF] hover:text-white focus:outline-none focus:bg-[#2FB4FF] focus:text-white"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Input = ({ label, type = "text", placeholder, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-[#5E6366] mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2.5 border border-[#CFD3D4] rounded text-sm focus:border-2 bg-transparent focus:outline-none focus:border-[#2FB4FF] h-10"
    />
  </div>
);

export default function EditExport() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    channelName: '',
    exportFrequency: '',
    exportFilter: '',
    exportFileType: '',
    status: 'Active',
    savedsearches: 'Active',
    username: '',
    host: '',
    password: '',
    costFrom: '',
    costTo: '',
    priceFrom: '',
    priceTo: '',
    stockFrom: '',
    stockTo: '',
    weightFrom: '',
    weightTo: '',
    email: '',
    remark: '',
    exportDate: '',
    recordLimit: '',
    customField1: '',
    customField2: '',
    customField3: '',
    customField4: '',
    customField5: '',
    customField6: ''
  });
  const handleCancel = () => {
    router.back();
  };
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen w-full p-4">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="bg-white rounded-tl-lg p-4 mb-1">
          <h1 className="text-lg font-medium text-[#24282E]">Export to Channel</h1>
        </div>

        {/* Form Content */}
        <div className="bg-white p-6">
          <div className="flex gap-4">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {/* Basic Export Configuration */}
              <div className="bg-[#F6F8FB] w-[395px] h-[550px] p-4 rounded-lg">
                <h2 className="text-base font-bold text-[#5E6366] mb-4">Basic Export Configuration</h2>
                <div className="h-[600px] overflow-y-auto">
                  <Input
                    label="Channel Name"
                    placeholder="Channel Name"
                    value={formData.channelName}
                    onChange={(e) => handleInputChange('channelName', e.target.value)}
                  />
                  <Input
                    label="Export Frequency"
                    placeholder="Export frequency"
                    value={formData.exportFrequency}
                    onChange={(e) => handleInputChange('exportFrequency', e.target.value)}
                  />
                  <Select
                    label="Export Filter"
                    value={formData.exportFilter}
                    onChange={(value) => handleInputChange('exportFilter', value)}
                    options={['Filter 1', 'Filter 2', 'Filter 3']}
                    placeholder="Export filter"
                  />
                  <Select
                    label="Export File Type"
                    value={formData.exportFileType}
                    onChange={(value) => handleInputChange('exportFileType', value)}
                    options={['CSV', 'XML', 'JSON', 'Excel']}
                    placeholder="Export File Type"
                  />
                  <Select
                    label="Status"
                    value={formData.status}
                    onChange={(value) => handleInputChange('status', value)}
                    options={['Active', 'Inactive']}
                  />
                  <Select
                    label="Saved Searches"
                    value={formData.savedsearches}
                    onChange={(value) => handleInputChange('savedsearches', value)}
                    options={['savedsarches', 'Inactive']}
                  />
                </div>
              </div>

              {/* Contact & Export Status */}
              <div className="bg-[#F6F8FB] w-[395px] h-[400px] p-4 rounded-lg">
                <h2 className="text-base font-bold text-[#5E6366] mb-4">Contact</h2>
                <Input
                  label="Email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />

                <h2 className="text-base font-bold text-[#5E6366] mb-4 mt-6">Export Status</h2>
                <div>
                  <Input
                    label="Remark"
                    placeholder="Remark"
                    value={formData.remark}
                    onChange={(e) => handleInputChange('remark', e.target.value)}
                  />
                  <Input
                    label="Export Date"
                    placeholder="Export Date"
                    value={formData.exportDate}
                    onChange={(e) => handleInputChange('exportDate', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {/* FTP Settings & Value Filters */}
              <div className="bg-[#F6F8FB] w-[750px] h-[550px] w-full p-4 rounded-lg">
                <div className="h-[650px] overflow-y-auto">
                  <h2 className="text-base font-bold text-[#5E6366] mb-4">FTP Settings</h2>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <Input
                      label="Username"
                      placeholder="Username"
                      value={formData.username}
                      onChange={(e) => handleInputChange('username', e.target.value)}
                    />
                    <Input
                      label="Host"
                      placeholder="host"
                      value={formData.host}
                      onChange={(e) => handleInputChange('host', e.target.value)}
                    />
                    <Input
                      label="Password"
                      type="password"
                      placeholder="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                    />
                  </div>

                  <h2 className="text-base font-bold text-[#5E6366] mb-4">Value Filters</h2>
                  <div className="grid grid-cols-3 gap-3">
                    <Input
                      label="Cost From"
                      placeholder="Cost from"
                      value={formData.costFrom}
                      onChange={(e) => handleInputChange('costFrom', e.target.value)}
                    />
                    <Input
                      label="Cost To"
                      placeholder="Cost to"
                      value={formData.costTo}
                      onChange={(e) => handleInputChange('costTo', e.target.value)}
                    />
                    <Input
                      label="Price From"
                      placeholder="Price from"
                      value={formData.priceFrom}
                      onChange={(e) => handleInputChange('priceFrom', e.target.value)}
                    />
                    <Input
                      label="Price To"
                      placeholder="Price to"
                      value={formData.priceTo}
                      onChange={(e) => handleInputChange('priceTo', e.target.value)}
                    />
                    <Input
                      label="Stock From"
                      placeholder="Stock from"
                      value={formData.stockFrom}
                      onChange={(e) => handleInputChange('stockFrom', e.target.value)}
                    />
                    <Input
                      label="Stock To"
                      placeholder="Stock to"
                      value={formData.stockTo}
                      onChange={(e) => handleInputChange('stockTo', e.target.value)}
                    />

                    <Input
                      label="Weight From"
                      placeholder="Weight from"
                      value={formData.weightFrom}
                      onChange={(e) => handleInputChange('weightFrom', e.target.value)}
                    />
                    <Input
                      label="Weight To"
                      placeholder="Weight to"
                      value={formData.weightTo}
                      onChange={(e) => handleInputChange('weightTo', e.target.value)}
                    />

                  </div>
                </div>
              </div>

              {/* Limits & Customization */}
              <div className="bg-[#F6F8FB] w-[750px] h-[400px] p-4 rounded-lg">
                <h2 className="text-base font-bold text-[#5E6366] mb-4">Limits & Customization</h2>
                <div className="h-[390px] overflow-y-auto">
                  <Input
                    label="Record Limit"
                    placeholder="Record Limit"
                    value={formData.recordLimit}
                    onChange={(e) => handleInputChange('recordLimit', e.target.value)}
                  />
                  <div className="grid grid-cols-3 gap-3">
                    <Input
                      label="Custom Field 1"
                      placeholder="Custom field 1"
                      value={formData.customField1}
                      onChange={(e) => handleInputChange('customField1', e.target.value)}
                    />
                    <Input
                      label="Custom Field 2"
                      placeholder="Custom field 2"
                      value={formData.customField2}
                      onChange={(e) => handleInputChange('customField2', e.target.value)}
                    />
                    <Input
                      label="Custom Field 3"
                      placeholder="Custom field 3"
                      value={formData.customField3}
                      onChange={(e) => handleInputChange('customField3', e.target.value)}
                    />
                    <Input
                      label="Custom Field 4"
                      placeholder="Custom field 4"
                      value={formData.customField4}
                      onChange={(e) => handleInputChange('customField4', e.target.value)}
                    />
                    <Input
                      label="Custom Field 5"
                      placeholder="Custom field 5"
                      value={formData.customField5}
                      onChange={(e) => handleInputChange('customField5', e.target.value)}
                    />
                    <Input
                      label="Custom Field 6"
                      placeholder="Custom field 6"
                      value={formData.customField6}
                      onChange={(e) => handleInputChange('customField6', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-5 mt-5 sm:mt-6 lg:mt-8 w-full">
            <button
              onClick={handleCancel}
              type="button"
              className="w-full sm:w-auto sm:min-w-40 md:min-w-40 h-9 sm:h-10 lg:h-10 text-sm sm:text-base lg:text-lg font-medium bg-white text-[#30B4FF] border border-[#30B4FF] rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#30B4FF] hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleCancel}
              type="button"
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