'use client';
import { useState } from 'react';

export default function AddVendorForm() {
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
    zipCode: '',
    state: '',
    port: '',
    host: '',
    sourceType: '',
    schedule: '',
    catalogFormat: ''
  });

  const [dropdownStates, setDropdownStates] = useState({
    country: false,
    sourceType: false,
    schedule: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDropdownSelect = (name, value) => {
    setFormData({ ...formData, [name]: value });
    setDropdownStates({ ...dropdownStates, [name]: false });
  };

  const toggleDropdown = (name) => {
    setDropdownStates({
      ...dropdownStates,
      [name]: !dropdownStates[name],
      // Close other dropdowns when one is opened
      ...(name === "country" ? { sourceType: false, schedule: false } :
        name === "sourceType" ? { country: false, schedule: false } :
          { country: false, sourceType: false }),
    });
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
      zipCode: '',
      state: '',
      port: '',
      host: '',
      sourceType: '',
      schedule: '',
      catalogFormat: ''
    });
  };

  const SvgArrow = ({ isOpen }) => (
    <svg
      className={`absolute top-1/2 right-3 sm:right-4 lg:right-5 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 pointer-events-none transform -translate-y-1/2 transition-transform duration-200 ease-in-out ${isOpen ? "rotate-180" : ""
        }`}
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.81794 8.06274H15.3016C15.4695 8.06278 15.6336 8.11259 15.7731 8.20586C15.9127 8.29914 16.0215 8.43171 16.0857 8.5868C16.15 8.74189 16.1668 8.91254 16.134 9.07718C16.1013 9.24182 16.0205 9.39306 15.9018 9.51178L11.1599 14.2536C11.0008 14.4128 10.7849 14.5022 10.5598 14.5022C10.3347 14.5022 10.1188 14.4128 9.95963 14.2536L5.21778 9.51178C5.0991 9.39306 5.01828 9.24182 4.98554 9.07718C4.9528 8.91254 4.96961 8.74189 5.03385 8.5868C5.09808 8.43171 5.20686 8.29914 5.34642 8.20586C5.48598 8.11259 5.65007 8.06278 5.81794 8.06274Z"
        fill="#8E95A6"
      />
    </svg>
  );

  const CustomDropdown = ({
    name,
    value,
    placeholder,
    options,
    isOpen,
    onToggle,
    onSelect,
    label,
  }) => (
    <div className="flex flex-col w-full">
      <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
        {label}
      </label>
      <div className="relative w-full">
        <div
          onClick={() => onToggle(name)}
          className={`flex items-center w-full placeholder-gray-400 h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 pr-8 sm:pr-10 lg:pr-11 text-left text-sm sm:text-base bg-white border rounded-lg cursor-pointer transition-all duration-200 ease-in-out ${isOpen
            ? "border-2 border-[#30B4FF]"
            : "border border-[#CFD3D4] hover:border-[#CFD3D4]"
            } ${value ? "text-[#5E6366]" : "text-[#5E6366]"}`}
        >
          {value || placeholder}
        </div>
        <SvgArrow isOpen={isOpen} />

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-0.5 bg-white border border-[#CFD3D4] focus:border-[#30B4FF] rounded-lg shadow-lg z-50">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => onSelect(name, option.value)}
                className={`px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3 text-sm sm:text-base lg:text-base text-[#5E6366] cursor-pointer transition-colors duration-200 ease-in-out hover:bg-[#30B4FF] hover:text-white ${index === 0 ? "rounded-t-lg" : ""
                  } ${index === options.length - 1 ? "rounded-b-lg" : ""}`}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const countryOptions = [
    { label: "United States", value: "US" },
    { label: "India", value: "IN" },
    { label: "United Kingdom", value: "UK" },
    { label: "Canada", value: "CA" },
    { label: "Australia", value: "AU" },
  ];

  const sourceTypeOptions = [
    { label: "FTP", value: "FTP" },
    { label: "SFTP", value: "SFTP" },
    { label: "HTTP", value: "HTTP" },
    { label: "HTTPS", value: "HTTPS" },
    { label: "Local", value: "Local" },
  ];

  const scheduleOptions = [
    { label: "Daily", value: "Daily" },
    { label: "Weekly", value: "Weekly" },
    { label: "Monthly", value: "Monthly" },
  ];

  return (
    <div className="w-full mx-auto space-y-1">
      {/* Header Card */}
      <div className="bg-white p-2 sm:p-6 rounded-tl-lg lg:p-4 lg:rounded-1xl w-full">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-left">
          Add Vendor
        </h2>
      </div>

      {/* Form Card */}
      <div className="bg-white p-1 sm:p-5 lg:p-4 lg:rounded-1xl w-full">
        <div className="flex flex-col pt-1 sm:pt-2 lg:pt-1">
          <div className="space-y-6 sm:space-y-8">
            {/* Basic Information Section */}
            <div className="bg-[#F6F8FB] rounded-xl shadow p-3 sm:p-6">
              <h2 className="text-base sm:text-lg font-medium text-[#2B2F32] mb-3 sm:mb-4">Basic Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-3 mb-4 sm:mb-6">
                <div className="flex flex-col w-full">
                  <label className=" font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleInputChange}
                    placeholder="Enter Name"
                    className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base  border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF] placeholder-gray-400"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Testing@gmail.com"
                    className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base  border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF] placeholder-gray-400"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF]"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                    Phone no
                  </label>
                  <input
                    type="tel"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleInputChange}
                    placeholder="Your Phone Number"
                    className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF]"
                  />
                </div>
              </div>

              {/* Address Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-3 mb-3 sm:mb-4">
                <div className="flex flex-col w-full">
                  <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                    Address line 1
                  </label>
                  <input
                    type="text"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleInputChange}
                    placeholder="Enter Address Line 1"
                    className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base text-black bg-white border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF]"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                    Address line 2
                  </label>
                  <input
                    type="text"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleInputChange}
                    placeholder="Enter Address Line 2"
                    className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base text-black bg-white border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-3">
                <CustomDropdown
                  name="country"
                  value={formData.country}
                  placeholder="Select Country"
                  options={countryOptions}
                  isOpen={dropdownStates.country}
                  onToggle={toggleDropdown}
                  onSelect={handleDropdownSelect}
                  label="Country"
                />

                <div className="flex flex-col w-full">
                  <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="Enter State"
                    className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base text-black bg-white border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF]"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter City"
                    className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base text-black bg-white border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF]"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="Enter Postal Code"
                    className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base text-black bg-white border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF]"
                  />
                </div>
              </div>
            </div>

            {/* Sources Section */}
            <div className="bg-[#F6F8FB] rounded-xl shadow p-3 sm:p-6">
              <h2 className="text-base sm:text-lg font-medium text-[#2B2F32] mb-3 sm:mb-4">Sources</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-3 mb-3 sm:mb-4">
                <CustomDropdown
                  name="sourceType"
                  value={formData.sourceType}
                  placeholder="Select Source-type"
                  options={sourceTypeOptions}
                  isOpen={dropdownStates.sourceType}
                  onToggle={toggleDropdown}
                  onSelect={handleDropdownSelect}
                  label="Source-type"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-3 mb-3 sm:mb-4">
                <div className="flex flex-col w-full">
                  <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                    Host
                  </label>
                  <input
                    type="text"
                    name="host"
                    value={formData.host}
                    onChange={handleInputChange}
                    placeholder="Host"
                    className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base text-black bg-white border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF]"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                    UserName
                  </label>
                  <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleInputChange}
                    placeholder="name"
                    className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base text-black bg-white border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF]"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base text-black bg-white border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF]"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                    Port
                  </label>
                  <input
                    type="text"
                    name="port"
                    value={formData.port}
                    onChange={handleInputChange}
                    placeholder="Port"
                    className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base text-black bg-white border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-3">
                <div className="flex flex-col w-full">
                  <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                    File-Path
                  </label>
                  <input
                    type="text"
                    name="filePath"
                    value={formData.filePath}
                    onChange={handleInputChange}
                    placeholder="filepath"
                    className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base text-black bg-white border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF]"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-1.5 sm:mb-2">
                    Catalog-Format
                  </label>
                  <input
                    type="text"
                    name="catalogFormat"
                    value={formData.catalogFormat}
                    onChange={handleInputChange}
                    placeholder="catalog"
                    className="w-full h-9 sm:h-10 lg:h-10 px-3 sm:px-4 lg:px-5 text-sm sm:text-base  lg:text-base text-black bg-white border border-[#CFD3D4] rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:border-2 focus:border-[#30B4FF]"
                  />
                </div>

                <CustomDropdown
                  name="schedule"
                  value={formData.schedule}
                  placeholder="Select Schedule"
                  options={scheduleOptions}
                  isOpen={dropdownStates.schedule}
                  onToggle={toggleDropdown}
                  onSelect={handleDropdownSelect}
                  label="Schedule"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-5 mt-5 sm:mt-6 lg:mt-8 w-full">
              <button
                type="button"
                onClick={handleCancel}
                className="w-full sm:w-auto sm:min-w-40 md:min-w-40 h-9 sm:h-10 lg:h-10 text-sm sm:text-base lg:text-lg font-medium bg-white text-[#30B4FF] border border-[#30B4FF] rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#30B4FF] hover:text-white"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full sm:w-auto sm:min-w-40 md:min-w-40 h-9 sm:h-10 lg:h-10 text-sm sm:text-base lg:text-lg font-medium bg-[#30B4FF] text-white border-none rounded-lg cursor-pointer transition-all duration-200 ease-in-out"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}