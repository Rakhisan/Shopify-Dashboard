"use client";
import React, { useState } from "react";
import { Upload } from "lucide-react";

const CustomChevronDown = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.81769 7.72449H15.3014C15.4693 7.72452 15.6333 7.77433 15.7729 7.86761C15.9125 7.96089 16.0212 8.09345 16.0855 8.24854C16.1497 8.40363 16.1665 8.57428 16.1338 8.73892C16.101 8.90357 16.0202 9.05481 15.9015 9.17352L11.1597 13.9154C11.0005 14.0745 10.7846 14.1639 10.5595 14.1639C10.3344 14.1639 10.1186 14.0745 9.95938 13.9154L5.21754 9.17352C5.09885 9.05481 5.01803 8.90357 4.9853 8.73892C4.95256 8.57428 4.96937 8.40363 5.0336 8.24854C5.09784 8.09345 5.20661 7.96089 5.34618 7.86761C5.48574 7.77433 5.64983 7.72452 5.81769 7.72449Z" fill="#8E95A6" />
  </svg>
);



const CompanyProfileForm = () => {
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
    <div className="max-w-7xl  mx-auto min-h-screen">
      {/* Header Section */}
      <div className="bg-white p-4 sm:p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#2B2F32]">
          Company Profile
        </h2>
      </div>

      <div className="p-4 sm:p-6 h-auto bg-white mb-10 mt-1 max-w-7xl mx-auto">


        <div className="space-y-2">

          <div>

            <div
              className=" w-auto max-w-xl h-20 border-2 border-dashed border-[#CFD3D4] rounded-lg flex items-center justify-center cursor-pointer hover:border-[#30B4FF] transition-colors"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => document.getElementById("logo-upload").click()}
            >
              {logo ? (
                <img
                  src={logo}
                  alt="Logo"
                  className=" object-contain rounded-lg"
                />
              ) : (
                <div className="text-center">
                  <Upload className="w-8 h-8 text-[#5E6366] mx-auto  item-center" />
                  <span className="text-sm text-[#5E6366] "> Logo max 150kb support jpg, png </span>
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


          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#5E6366] mb-2">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Enter company name"
                value={formData.companyName}
                onChange={(e) => handleInputChange("companyName", e.target.value)}
                className="w-full px-2 py-2 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30B4FF]  focus:border-transparent"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#5E6366] mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-2 py-2 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30B4FF]  focus:border-transparent"
              />
            </div>
          </div>


          <div className="flex flex-col lg:flex-row gap-2 lg:gap-2">
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#5E6366] mb-2">
                Phone Number
              </label>
              <div className="flex">
                <div className="relative">
                  <button
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    className="flex items-center px-2 py-2  border border-[#CFD3D4] rounded-l-lg   focus:outline-none focus:ring-2 focus:ring-[#30B4FF] "
                  >
                    <span className="mr-1">{selectedCountryCode.flag}</span>
                    <span className="text-sm">{selectedCountryCode.code}</span>
                    <CustomChevronDown />
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
                          className="w-full px-3 py-2 hover:bg-[#30B4FF] text-left text-[#5E6366] flex items-center"
                        >
                          <span className="mr-2">{country.flag}</span>
                          <span className="mr-2">{country.code}</span>
                          <span className="text-sm hover:bg-[#30B4FF] text-[#5E6366]">
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
                  className="flex-1 px-4 py-2 border border-[#CFD3D4] border-l-0 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#30B4FF]  focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex-1 relative">
              <label className="block text-sm font-medium text-[#5E6366] mb-2">
                Currency
              </label>
              <button
                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                className="w-full px-2 py-2 border border-[#CFD3D4] rounded-lg text-left bg-white hover:[#30B4FF]  focus:outline-none focus:ring-2 focus:ring-[#30B4FF]  flex items-center justify-between"
              >
                <span
                  className={formData.currencySymbol ? "text-[#5E6366]" : "text-[#5E6366]"}
                >
                  {formData.currencySymbol || "Select currency"}
                </span>
                <CustomChevronDown />
              </button>
              {showCurrencyDropdown && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#CFD3D4] rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                  {currencies.map((currency) => (
                    <button
                      key={currency}
                      onClick={() => {
                        handleInputChange("currencySymbol", currency);
                        setShowCurrencyDropdown(false);
                      }}
                      className="w-full px-2 py-2 text-left text-[#5E6366] hover:bg-[#30B4FF] "
                    >
                      {currency}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#5E6366] mb-1">
              Address
            </label>
            <textarea
              placeholder="Enter complete address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              rows={2}
              className="w-full px-2 py-2 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30B4FF]  focus:border-transparent resize-none"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-2">

            <div className="flex-1 space-y-2">

              <div className="relative">
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  Country
                </label>
                <button
                  onClick={() =>
                    setShowCountryNameDropdown(!showCountryNameDropdown)
                  }
                  className="w-full px-2 py-2 border border-[#CFD3D4] rounded-lg text-left bg-white  focus:outline-none focus:ring-2 focus:ring-[#30B4FF]  flex items-center justify-between"
                >
                  <span
                    className={formData.country ? "text-[#5E6366]" : "text-[#5E6366]"}
                  >
                    {formData.country || "Select country"}
                  </span>
                  <CustomChevronDown />
                </button>
                {showCountryNameDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#CFD3D4] rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    {countries.map((country) => (
                      <button
                        key={country}
                        onClick={() => {
                          handleInputChange("country", country);
                          setShowCountryNameDropdown(false);
                        }}
                        className="w-full px-2 py-2 text-left text-[#5E6366] hover:bg-[#30B4FF] "
                      >
                        {country}
                      </button>
                    ))}
                  </div>
                )}
              </div>



              <div>
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className="w-full px-2 py-2 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30B4FF]  focus:border-transparent"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  Plan
                </label>
                <button
                  onClick={() => setShowPlanDropdown(!showPlanDropdown)}
                  className="w-full px-2 py-2 border border-[#CFD3D4] rounded-lg text-left bg-white focus:outline-none focus:ring-2 focus:ring-[#30B4FF]  flex items-center justify-between"
                >
                  <span
                    className={formData.plan ? "text-[#5E6366]" : "text-[#5E6366]"}
                  >
                    {formData.plan || "Select plan"}
                  </span>
                  <CustomChevronDown />
                </button>
                {showPlanDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#CFD3D4]rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    {planOptions.map((plan) => (
                      <button
                        key={plan}
                        onClick={() => {
                          handleInputChange("plan", plan);
                          setShowPlanDropdown(false);
                        }}
                        className="w-full px-4 py-2 text-left  text-[#5E6366] hover:bg-[#30B4FF] "
                      >
                        {plan}
                      </button>
                    ))}
                  </div>
                )}
              </div>

            </div>


            <div className="flex-1 space-y-2">


              <div className="relative">
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  State
                </label>
                <button
                  onClick={() => setShowStateDropdown(!showStateDropdown)}
                  className="w-full px-2 py-2 border border-[#CFD3D4] rounded-lg text-left bg-white  focus:outline-none focus:ring-2 focus:ring-[#30B4FF]  flex items-center justify-between"
                >
                  <span
                    className={formData.state ? "text-[#5E6366]" : "text-[#5E6366]"}
                  >
                    {formData.state || "Select state"}
                  </span>
                  <CustomChevronDown />
                </button>
                {showStateDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#CFD3D4] rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    {states.map((state) => (
                      <button
                        key={state}
                        onClick={() => {
                          handleInputChange("state", state);
                          setShowStateDropdown(false);
                        }}
                        className="w-full px-2 py-2 text-left hover:bg-[#30B4FF] "
                      >
                        {state}
                      </button>
                    ))}
                  </div>
                )}
              </div>


              <div>
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  placeholder="Enter postal code"
                  value={formData.postalCode}
                  onChange={(e) => handleInputChange("postalCode", e.target.value)}
                  className="w-full px-2 py-2 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30B4FF]  focus:border-transparent"
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-[#5E6366] mb-2">
                  Timezone
                </label>
                <button
                  onClick={() => setShowTimezoneDropdown(!showTimezoneDropdown)}
                  className="w-full px-2 py-2 border border-[#CFD3D4] rounded-lg text-left bg-white focus:outline-none focus:ring-2 focus:ring-[#30B4FF] flex items-center justify-between"
                >
                  <span
                    className={formData.timezone ? "text-[#5E6366]" : "text-[#5E6366]"}
                  >
                    {formData.timezone || "Select timezone"}
                  </span>
                  <CustomChevronDown />
                </button>
                {showTimezoneDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#CFD3D4] rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    {timezones.map((timezone) => (
                      <button
                        key={timezone}
                        onClick={() => {
                          handleInputChange("timezone", timezone);
                          setShowTimezoneDropdown(false);
                        }}
                        className="w-full px-2 py-2 text-left text-[#5E6366] hover:bg-[#30B4FF] "
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

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2">
          <button
            onClick={() => console.log("Cancel clicked")}
            className="w-full h-10 sm:w-40 px-6 py-2 text-[#30B4FF] rounded-lg hover:bg-[#30B4FF] hover:text-white "
            style={{ border: "2px solid #30B4FF" }}
          >
            Cancel
          </button>
          <button
            onClick={() => console.log("Submit clicked", formData)}
            className="w-full h-10 sm:w-40 px-6 py-2 bg-[#30B4FF] text-white rounded-lg "
          >
            Save
          </button>
        </div>
      </div>
    </div>


  );
};

export default CompanyProfileForm;