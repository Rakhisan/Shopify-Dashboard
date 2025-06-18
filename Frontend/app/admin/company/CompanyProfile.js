'use client';

import React, { useState } from "react";
import { Upload } from "lucide-react";

const CustomChevronDown = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.81769 7.72449H15.3014C15.4693 7.72452 15.6333 7.77433 15.7729 7.86761C15.9125 7.96089 16.0212 8.09345 16.0855 8.24854C16.1497 8.40363 16.1665 8.57428 16.1338 8.73892C16.101 8.90357 16.0202 9.05481 15.9015 9.17352L11.1597 13.9154C11.0005 14.0745 10.7846 14.1639 10.5595 14.1639C10.3344 14.1639 10.1186 14.0745 9.95938 13.9154L5.21754 9.17352C5.09885 9.05481 5.01803 8.90357 4.9853 8.73892C4.95256 8.57428 4.96937 8.40363 5.0336 8.24854C5.09784 8.09345 5.20661 7.96089 5.34618 7.86761C5.48574 7.77433 5.64983 7.72452 5.81769 7.72449Z" fill="#8E95A6" />
  </svg>
);

export default function CompanyProfileForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    plan: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    timezone: "",
    currencySymbol: "",
  });

  const [logo, setLogo] = useState(null);
  const [selectedCountryCode, setSelectedCountryCode] = useState({
    code: "+1",
    flag: "🇺🇸",
    country: "US",
  });
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showCountryNameDropdown, setShowCountryNameDropdown] = useState(false);
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [showTimezoneDropdown, setShowTimezoneDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showPlanDropdown, setShowPlanDropdown] = useState(false);

  const countryCodes = [
    { code: "+1", flag: "🇺🇸", country: "US", name: "United States" },
    { code: "+91", flag: "🇮🇳", country: "IN", name: "India" },
    { code: "+44", flag: "🇬🇧", country: "GB", name: "United Kingdom" },
    { code: "+81", flag: "🇯🇵", country: "JP", name: "Japan" },
    { code: "+86", flag: "🇨🇳", country: "CN", name: "China" },
    { code: "+49", flag: "🇩🇪", country: "DE", name: "Germany" },
    { code: "+33", flag: "🇫🇷", country: "FR", name: "France" },
    { code: "+61", flag: "🇦🇺", country: "AU", name: "Australia" },
    { code: "+55", flag: "🇧🇷", country: "BR", name: "Brazil" },
    { code: "+7", flag: "🇷🇺", country: "RU", name: "Russia" },
  ];

  const countries = [
    "United States",
    "India",
    "United Kingdom",
    "Japan",
    "China",
    "Germany",
    "France",
    "Australia",
    "Brazil",
    "Russia",
    "Canada",
    "Mexico",
    "Italy",
    "Spain",
    "Netherlands",
  ];

  const states = [
    "California",
    "Texas",
    "Florida",
    "New York",
    "Pennsylvania",
    "Illinois",
    "Ohio",
    "Georgia",
    "North Carolina",
    "Michigan",
  ];

  const timezones = [
    "UTC-12:00",
    "UTC-11:00",
    "UTC-10:00",
    "UTC-09:00",
    "UTC-08:00",
    "UTC-07:00",
    "UTC-06:00",
    "UTC-05:00",
    "UTC-04:00",
    "UTC-03:00",
    "UTC-02:00",
    "UTC-01:00",
    "UTC+00:00",
    "UTC+01:00",
    "UTC+02:00",
    "UTC+03:00",
    "UTC+04:00",
    "UTC+05:00",
    "UTC+05:30",
    "UTC+06:00",
    "UTC+07:00",
    "UTC+08:00",
    "UTC+09:00",
    "UTC+10:00",
    "UTC+11:00",
    "UTC+12:00",
  ];

  const currencies = [
    "USD ($)",
    "EUR (€)",
    "GBP (£)",
    "JPY (¥)",
    "INR (₹)",
    "CNY (¥)",
    "AUD ($)",
    "CAD ($)",
  ];

  const planOptions = ["Basic", "Standard", "Premium", "Enterprise"];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white rounded-tl-lg  w-full p-4 border-b">
        <h2 className="text-xl font-semibold text-gray-800">Company Profile</h2>
      </div>

      {/* Form Content */}
      <div className="p-4 sm:p-6 bg-white w-full">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6">

            {/* Left Column */}
            <div className="space-y-3">

              <div className="mt-5">
                <div
                  className="w-full min-h-40 border-2 border-dashed border-[#CFD3D4] rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("logo-upload").click()}
                >
                  {logo ? (
                    <img
                      src={logo}
                      alt="Logo"
                      className="h-full object-contain rounded-lg"
                    />
                  ) : (
                    <div className="text-center  sm:text-base lg:text-base ">
                      <Upload className="w-6 h-6  text-gray-400 mx-auto mb-1" />
                      <span className="text-xs 2 sm:text-base lg:text-base  text-gray-500">logo max 150 kb</span>
                      <br />
                      <span className="text-xs  2 sm:text-base lg:text-base text-gray-500">support jpg, png</span>
                    </div>
                  )}
                </div>
                <input
                  id="logo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm 2 sm:text-base lg:text-base  font-medium text-[#5E6366] mb-2">
                  Address
                </label>
                <textarea
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  rows={4}
                  className="w-full px-2 py-2 2 sm:text-base lg:text-base  border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4FF] focus:border-transparent resize-none text-sm"
                />
              </div>

              {/* Country */}
              <div className="relative">
                <label className="block text-sm 2 sm:text-base lg:text-base  font-medium text-[#5E6366] mb-1">
                  Country
                </label>
                <button
                  onClick={() => setShowCountryNameDropdown(!showCountryNameDropdown)}
                  className="w-full px-2 py-2  2 sm:text-base lg:text-base border border-[#CFD3D4] rounded-md text-left bg-white focus:outline-none focus:ring-2 focus:ring-[#30B4FF] flex items-center justify-between text-sm"
                >
                  <span className={formData.country ? "text-gray-900" : "text-gray-500"}>
                    {formData.country || "Country"}
                  </span>
                  <CustomChevronDown />
                </button>
                {showCountryNameDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white 2 sm:text-base lg:text-base  border border-[#CFD3D4] rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                    {countries.map((country) => (
                      <button
                        key={country}
                        onClick={() => {
                          handleInputChange("country", country);
                          setShowCountryNameDropdown(false);
                        }}
                        className="w-full px-3 py-2  2 sm:text-base lg:text-base text-left text-[#5E6366] hover:bg-[#30B4FF] hover:text-white text-sm"
                      >
                        {country}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* State */}
              <div className="relative">
                <label className="block text-sm 2 sm:text-base lg:text-base  font-medium text-[#5E6366] mb-2">
                  State
                </label>
                <button
                  onClick={() => setShowStateDropdown(!showStateDropdown)}
                  className="w-full px-2 py-2 2 sm:text-base lg:text-base border border-[#CFD3D4] rounded-md text-left bg-white focus:outline-none focus:ring-2 focus:ring-[#30B4FF] flex items-center justify-between text-sm"
                >
                  <span className={formData.state ? "text-gray-900" : "text-gray-500"}>
                    {formData.state || "State"}
                  </span>
                  <CustomChevronDown />
                </button>
                {showStateDropdown && (
                  <div className="absolute top-full 2 sm:text-base lg:text-base  left-0 mt-1 w-full bg-white border border-[#CFD3D4] rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                    {states.map((state) => (
                      <button
                        key={state}
                        onClick={() => {
                          handleInputChange("state", state);
                          setShowStateDropdown(false);
                        }}
                        className="w-full px-3 py-2 2 sm:text-base lg:text-base  text-left text-[#5E6366] hover:bg-[#30B4FF] hover:text-white text-sm"
                      >
                        {state}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Plan */}
              <div className="relative">
                <label className="block text-sm  2 sm:text-base lg:text-base font-medium text-[#5E6366] mb-2">
                  Plan
                </label>
                <button
                  onClick={() => setShowPlanDropdown(!showPlanDropdown)}
                  className="w-full px-3 py-2  2 sm:text-base lg:text-base border border-[#CFD3D4] rounded-md text-left bg-white focus:outline-none focus:ring-2 focus:ring-[#30B4FF] flex items-center justify-between text-sm"
                >
                  <span className={formData.plan ? "text-gray-900" : "text-gray-500"}>
                    {formData.plan || "Plan"}
                  </span>
                  <CustomChevronDown />
                </button>
                {showPlanDropdown && (
                  <div className="absolute top-full left-0 2 sm:text-base lg:text-base mt-1 w-full bg-white border border-[#CFD3D4] rounded-md  z-10 max-h-60 overflow-y-auto">
                    {planOptions.map((plan) => (
                      <button
                        key={plan}
                        onClick={() => {
                          handleInputChange("plan", plan);
                          setShowPlanDropdown(false);
                        }}
                        className="w-full px-3 py-2 2 sm:text-base lg:text-base text-left text-[#5E6366] hover:bg-[#30B4FF] hover:text-white text-sm"
                      >
                        {plan}
                      </button>
                    ))}
                  </div>
                )}
              </div>




            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium 2 sm:text-base lg:text-base text-[#5E6366] mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  className="w-full px-3 py-2  2 sm:text-base lg:text-base border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4FF] focus:border-transparent text-sm"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm sm:text-base lg:text-base font-medium text-[#5E6366] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-3 py-2 sm:text-base lg:text-base border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4FF] focus:border-transparent text-sm"
                />
              </div>


              {/* Country */}
              <div>
                <label className="block text-sm  sm:text-base lg:text-base font-medium text-[#5E6366] mb-2">
                  Phone Number
                </label>
                <div className="flex">
                  <div className="relative">
                    <button
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      className="flex items-center px-3 py-2 border border-[#CFD3D4] rounded-l-md bg-white focus:outline-none focus:ring-2 focus:ring-[#30B4FF] text-sm"
                    >
                      <span className="mr-1">{selectedCountryCode.flag}</span>
                      <span className="mr-1">{selectedCountryCode.code}</span>
                      <CustomChevronDown />
                    </button>
                    {showCountryDropdown && (
                      <div className="absolute top-full  2 sm:text-base lg:text-base left-0 mt-1 w-48 bg-white border border-[#CFD3D4] rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                        {countryCodes.map((country) => (
                          <button
                            key={country.country}
                            onClick={() => {
                              setSelectedCountryCode(country);
                              setShowCountryDropdown(false);
                            }}
                            className="w-full px-3 py-2 2 sm:text-base lg:text-base hover:bg-[#30B4FF] hover:text-white text-left text-[#5E6366] flex items-center text-sm"
                          >
                            <span className="mr-2">{country.flag}</span>
                            <span className="mr-2">{country.code}</span>
                            <span className="text-xs 2 sm:text-base lg:text-base  text-gray-600 hover:bg-[#30B4FF] hover:text-white">
                              {country.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    placeholder="8023456789"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="flex-1 px-3 py-2  2 sm:text-base lg:text-base border border-[#CFD3D4] border-l-0 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#30B4FF] focus:border-transparent text-sm"
                  />
                </div>
              </div>

              {/* Currency Symbol */}
              <div className="relative">
                <label className="block text-sm 2 sm:text-base lg:text-base  font-medium text-[#5E6366] mb-2">
                  Currency Symbol
                </label>
                <button
                  onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                  className="w-full px-3 py-2  2 sm:text-base lg:text-base border border-[#CFD3D4] rounded-md text-left bg-white focus:outline-none focus:ring-2 focus:ring-[#30B4FF] flex items-center justify-between text-sm"
                >
                  <span className={formData.currencySymbol ? "text-gray-900" : "text-gray-500"}>
                    {formData.currencySymbol || "Currency Symbol"}
                  </span>
                  <CustomChevronDown />
                </button>
                {showCurrencyDropdown && (
                  <div className="absolute top-full  2 sm:text-base lg:text-base left-0 mt-1 w-full bg-white border border-[#CFD3D4] rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                    {currencies.map((currency) => (
                      <button
                        key={currency}
                        onClick={() => {
                          handleInputChange("currencySymbol", currency);
                          setShowCurrencyDropdown(false);
                        }}
                        className="w-full px-3 py-2 2 sm:text-base lg:text-base  text-left text-[#5E6366] hover:bg-[#30B4FF] hover:text-white text-sm"
                      >
                        {currency}
                      </button>
                    ))}
                  </div>
                )}
              </div>


              <div className="grid grid-cols-1  gap-2">

                <div>
                  <label className="block text-sm 2 sm:text-base lg:text-base font-medium text-[#5E6366] mb-2">
                    Postal code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Postal-code"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange("postalCode", e.target.value)}
                    className="w-full px-3 py-2 2 sm:text-base lg:text-base  border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4FF] focus:border-transparent text-sm"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm 2 sm:text-base lg:text-base  font-medium text-[#5E6366] mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="w-full px-3 py-2 2 sm:text-base lg:text-base  border border-[#CFD3D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#30B4FF] focus:border-transparent text-sm"
                  />
                </div>

                {/* Time Zone */}
                <div className="relative">
                  <label className="block text-sm 2 2 sm:text-base lg:text-base  sm:text-base lg:text-base  font-medium text-[#5E6366] mb-2">
                    Time Zone
                  </label>
                  <button
                    onClick={() => setShowTimezoneDropdown(!showTimezoneDropdown)}
                    className="w-full px-3 py-2 2 sm:text-base lg:text-base  border border-[#CFD3D4] rounded-md text-left bg-white focus:outline-none focus:ring-2 focus:ring-[#30B4FF] flex items-center justify-between text-sm"
                  >
                    <span className={formData.timezone ? "text-gray-900" : "text-gray-500"}>
                      {formData.timezone || "Enter Time-zone"}
                    </span>
                    <CustomChevronDown />
                  </button>
                  {showTimezoneDropdown && (
                    <div className="absolute top-full 2 sm:text-base lg:text-base left-0 mt-1 w-full bg-white border border-[#CFD3D4] rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                      {timezones.map((timezone) => (
                        <button
                          key={timezone}
                          onClick={() => {
                            handleInputChange("timezone", timezone);
                            setShowTimezoneDropdown(false);
                          }}
                          className="w-full px- 2 sm:text-base lg:text-base  py-2 text-left text-[#5E6366] hover:bg-[#30B4FF] hover:text-white text-sm"
                        >
                          {timezone}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>



            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-5 mt-5 sm:mt-6 lg:mt-8 w-full">
            <button
              type="button"
              className="w-full sm:w-auto sm:min-w-40  md:min-w-40 h-9 sm:h-10 lg:h-10 text-sm sm:text-base lg:text-lg font-medium bg-white text-[#30B4FF] border border-[#30B4FF] rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#30B4FF] hover:text-white"
            >
              Cancel
            </button>
            <button
              type="button"

              className="w-full sm:w-auto  sm:min-w-40  md:min-w-40 h-9 sm:h-10 lg:h-10 text-sm sm:text-base lg:text-lg font-medium bg-[#30B4FF] text-white border-none rounded-lg cursor-pointer transition-all duration-200 ease-in-out "
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}