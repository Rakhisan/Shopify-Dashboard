"use client";
import React, { useState } from "react";
import { Upload, ChevronDown } from "lucide-react";

const CompanyProfileForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    website: "",
    domain: "",
    industry: "",
    taxId: "",
    plan: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    timezone: "",
    currencySymbol: "",
    distributorFeedRefresh: "",
    roundingMultiple: "",
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
  const [showDistributorDropdown, setShowDistributorDropdown] = useState(false);

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

  const distributorOptions = ["Daily", "Weekly", "Monthly", "Real-time"];

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

  const DocumentUploadBox = () => (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition-colors">
      <Upload className="w-8 h-8 text-gray-400 mb-2" />
      <span className="text-sm text-gray-500">Upload Company Documents</span>
      <input
        type="file"
        multiple
        accept=".pdf,.doc,.docx"
        className="hidden"
        onChange={(e) => console.log("Documents uploaded:", e.target.files)}
      />
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Company Profile
      </h1>

      <div className="flex gap-8">
        {/* Left Side */}
        <div className="flex-1 space-y-6">
          {/* Logo Upload Section */}
          <div className="flex justify-start">
            <div
              className="w-[535px] h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-400 transition-colors"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => document.getElementById("logo-upload").click()}
            >
              {logo ? (
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              ) : (
                <div className="text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <span className="text-xs text-gray-500">logo</span>
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
            <input
              type="text"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Phone with Country Code */}
          <div className="flex">
            <div className="relative">
              <button
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                className="flex items-center px-3 py-3 border border-gray-300 rounded-l-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="mr-1">{selectedCountryCode.flag}</span>
                <span className="text-sm">{selectedCountryCode.code}</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {showCountryDropdown && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                  {countryCodes.map((country) => (
                    <button
                      key={country.country}
                      onClick={() => {
                        setSelectedCountryCode(country);
                        setShowCountryDropdown(false);
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-gray-100 flex items-center"
                    >
                      <span className="mr-2">{country.flag}</span>
                      <span className="mr-2">{country.code}</span>
                      <span className="text-sm text-gray-600">
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
              className="flex-1 px-4 py-3 border border-gray-300 border-l-0 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Currency Symbol Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between"
            >
              <span
                className={
                  formData.currencySymbol ? "text-gray-900" : "text-gray-500"
                }
              >
                {formData.currencySymbol || "Currency Symbol"}
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {showCurrencyDropdown && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {currencies.map((currency) => (
                  <button
                    key={currency}
                    onClick={() => {
                      handleInputChange("currencySymbol", currency);
                      setShowCurrencyDropdown(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    {currency}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Domain */}
          <div>
            <input
              type="text"
              placeholder="Domain"
              value={formData.domain}
              onChange={(e) => handleInputChange("domain", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Tax ID */}
          <div>
            <input
              type="text"
              placeholder="Tax-Id"
              value={formData.taxId}
              onChange={(e) => handleInputChange("taxId", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* State Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowStateDropdown(!showStateDropdown)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between"
            >
              <span
                className={formData.state ? "text-gray-900" : "text-gray-500"}
              >
                {formData.state || "State"}
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {showStateDropdown && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {states.map((state) => (
                  <button
                    key={state}
                    onClick={() => {
                      handleInputChange("state", state);
                      setShowStateDropdown(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    {state}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Postal Code */}
          <div>
            <input
              type="text"
              placeholder="Postal-code"
              value={formData.postalCode}
              onChange={(e) => handleInputChange("postalCode", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Timezone Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowTimezoneDropdown(!showTimezoneDropdown)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between"
            >
              <span
                className={
                  formData.timezone ? "text-gray-900" : "text-gray-500"
                }
              >
                {formData.timezone || "Time-zone"}
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {showTimezoneDropdown && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {timezones.map((timezone) => (
                  <button
                    key={timezone}
                    onClick={() => {
                      handleInputChange("timezone", timezone);
                      setShowTimezoneDropdown(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    {timezone}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Rounding Multiple */}
          <div>
            <input
              type="text"
              placeholder="Rounding-multiple"
              value={formData.roundingMultiple}
              onChange={(e) =>
                handleInputChange("roundingMultiple", e.target.value)
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 space-y-6">
          {/* Address */}
          <div>
            <input
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Distributor Feed Refresh Frequency */}
          <div className="relative">
            <button
              onClick={() =>
                setShowDistributorDropdown(!showDistributorDropdown)
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between"
            >
              <span
                className={
                  formData.distributorFeedRefresh
                    ? "text-gray-900"
                    : "text-gray-500"
                }
              >
                {formData.distributorFeedRefresh ||
                  "Distributor Feed Refresh Frequency"}
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {showDistributorDropdown && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {distributorOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      handleInputChange("distributorFeedRefresh", option);
                      setShowDistributorDropdown(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Website */}
          <div>
            <input
              type="url"
              placeholder="Website"
              value={formData.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Country Dropdown */}
          <div className="relative">
            <button
              onClick={() =>
                setShowCountryNameDropdown(!showCountryNameDropdown)
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between"
            >
              <span
                className={formData.country ? "text-gray-900" : "text-gray-500"}
              >
                {formData.country || "Country"}
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {showCountryNameDropdown && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {countries.map((country) => (
                  <button
                    key={country}
                    onClick={() => {
                      handleInputChange("country", country);
                      setShowCountryNameDropdown(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    {country}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Industry */}
          <div>
            <input
              type="text"
              placeholder="Industry"
              value={formData.industry}
              onChange={(e) => handleInputChange("industry", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Plan */}
          <div>
            <input
              type="text"
              placeholder="Plan"
              value={formData.plan}
              onChange={(e) => handleInputChange("plan", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* City */}
          <div>
            <input
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Document Upload Section - 3 boxes vertically */}
          <div className="flex space-x-4">
            <div
              onClick={() => document.getElementById("doc-upload-1").click()}
            >
              <DocumentUploadBox />
              <input
                id="doc-upload-1"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) =>
                  console.log("Document 1 uploaded:", e.target.files)
                }
              />
            </div>
            <div
              onClick={() => document.getElementById("doc-upload-2").click()}
            >
              <DocumentUploadBox />
              <input
                id="doc-upload-2"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) =>
                  console.log("Document 2 uploaded:", e.target.files)
                }
              />
            </div>
            <div
              onClick={() => document.getElementById("doc-upload-3").click()}
            >
              <DocumentUploadBox />
              <input
                id="doc-upload-3"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) =>
                  console.log("Document 3 uploaded:", e.target.files)
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <div className="md:col-span-2 flex justify-center gap-4 mt-8">
          <button className="px-8 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
            Cancel
          </button>
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileForm;
