"use client";
import { useState } from "react";

export default function AddVendor() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    email2: "",
    address: "",
    country: "",
    phone: "",
    website: "",
    taxId: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCountrySelect = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      country: value,
    }));
    setIsCountryDropdownOpen(false);
  };

  const toggleCountryDropdown = () => {
    setIsCountryDropdownOpen(!isCountryDropdownOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const SvgArrow = ({ isOpen }) => (
    <svg
      className={`absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none transition-transform duration-300 ease-in-out ${
        isOpen ? "rotate-180" : ""
      }`}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.25837 8.45361H15.7421C15.9099 8.45365 16.074 8.50345 16.2136 8.59673C16.3531 8.69001 16.4619 8.82258 16.5262 8.97767C16.5904 9.13276 16.6072 9.30341 16.5745 9.46805C16.5417 9.63269 16.4609 9.78393 16.3422 9.90265L11.6004 14.6445C11.4412 14.8036 11.2253 14.893 11.0002 14.893C10.7751 14.893 10.5592 14.8036 10.4001 14.6445L5.65821 9.90265C5.53953 9.78393 5.45871 9.63269 5.42597 9.46805C5.39323 9.30341 5.41004 9.13276 5.47428 8.97767C5.53851 8.82258 5.64729 8.69001 5.78685 8.59673C5.92641 8.50345 6.0905 8.45365 6.25837 8.45361Z"
        fill="#3D3C3C"
      />
    </svg>
  );

  const CustomDropdown = ({
    value,
    placeholder,
    options,
    isOpen,
    onToggle,
    onSelect,
  }) => (
    <div className="relative w-full max-w-[500px]">
      <div
        onClick={onToggle}
        className={`w-full h-[45px] px-4 pr-[50px] border border-[#cfd3d4] rounded-lg text-base font-normal outline-none transition-all duration-300 ease-in-out box-border bg-white cursor-pointer flex items-center text-left ${
          isOpen ? "border-2 border-[#2fb4ff]" : ""
        } ${value ? "text-[#5e6366]" : "text-[#abafb1]"}`}
        style={{ fontFamily: "Helvetica" }}
      >
        {value || placeholder}
      </div>
      <SvgArrow isOpen={isOpen} />

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border border-[#cfd3d4] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-[1000] mt-0.5 max-h-[200px] overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => onSelect(option.value)}
              className={`px-4 py-3 cursor-pointer text-base text-[#5e6366] transition-colors duration-200 ease-in-out hover:bg-[#30b4ff] ${
                index === 0 ? "rounded-t-lg" : ""
              } ${index === options.length - 1 ? "rounded-b-lg" : ""}`}
              style={{ fontFamily: "Helvetica" }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const countryOptions = [
    { label: "United States", value: "US" },
    { label: "India", value: "IN" },
    { label: "United Kingdom", value: "UK" },
    { label: "Canada", value: "CA" },
  ];

  return (
    <div className="max-w-[1138px] w-[90%] my-[10px] mb-[90px] px-[30px] py-5 pb-[10px] bg-white rounded-[20px] box-border flex flex-col justify-start overflow-visible min-h-auto relative lg:w-[95%] lg:px-[25px] lg:py-5 lg:pb-[45px] lg:my-[15px] lg:mb-[60px] lg:mx-auto md:px-5 md:py-[25px] md:pb-10 md:my-5 md:mb-[50px] md:mx-auto md:w-[95%] sm:px-[15px] sm:py-5 sm:pb-10 sm:my-[15px] sm:mb-[50px] sm:mx-auto sm:w-[calc(100%-30px)] xs:px-3 xs:py-[15px] xs:pb-[35px] xs:w-[calc(100%-20px)] xs:my-[10px] xs:mb-[45px] xs:mx-auto">
      <h1
        className="text-2xl font-normal text-[#2b2f32] mb-5 text-left md:text-[22px] md:mb-[25px] sm:text-xl sm:mb-5 xs:text-lg xs:mb-[18px]"
        style={{ fontFamily: "Inter" }}
      >
        Add Vendor
      </h1>
      <div className="w-full box-border overflow-visible flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-[10px] w-full items-start mb-5 md:gap-y-5 md:mb-[15px] sm:gap-y-[18px] sm:mb-3 xs:gap-y-4">
          {/* Left Column */}
          <div className="flex flex-col space-y-[10px] md:space-y-5 sm:space-y-[18px] xs:space-y-4">
            {[
              {
                id: "name",
                label: "Name",
                type: "text",
                placeholder: "Name",
              },
              {
                id: "email",
                label: "Email",
                type: "email",
                placeholder: "text@gmail.com",
              },
              {
                id: "address line",
                label: "Address Line1",
                type: "text",
                placeholder: "Address",
              },
              {
                id: "address line 2",
                label: "Address Line2",
                type: "text",
                placeholder: "Address",
              },
              // {
              //   id: "state",
              //   label: "State",
              //   type: "text",
              //   placeholder: "State Name",
              // },
            ].map((field) => (
              <div
                className="flex flex-col font-normal w-full min-h-auto"
                key={field.id}
                style={{ fontFamily: "Helvetica" }}
              >
                <label
                  htmlFor={field.id}
                  className="text-base text-[#5e6366] mb-2 font-normal leading-[1.2] text-left md:text-[15px] md:mb-[6px] xs:text-sm"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className="w-full h-[45px] px-4 py-[14px] border border-[#cfd3d4] rounded-lg text-base font-normal text-[#5e6366] outline-none transition-all duration-300 ease-in-out box-border placeholder-[#abafb1] focus:border-2 focus:border-[#2fb4ff] md:text-base md:h-12 md:px-4 md:py-3 sm:px-4 sm:py-3 sm:text-[15px] sm:h-[46px] xs:text-sm xs:h-11 xs:px-[14px] xs:py-[10px]"
                  style={{ fontFamily: "Helvetica" }}
                />
              </div>
            ))}

            <div
              className="flex flex-col font-normal w-full min-h-auto"
              style={{ fontFamily: "Helvetica" }}
            >
              <label
                htmlFor="country"
                className="text-base text-[#5e6366] mb-2 font-normal leading-[1.2] text-left md:text-[15px] md:mb-[6px] xs:text-sm"
              >
                Country
              </label>
              <CustomDropdown
                value={formData.country}
                placeholder="Country"
                options={countryOptions}
                isOpen={isCountryDropdownOpen}
                onToggle={toggleCountryDropdown}
                onSelect={handleCountrySelect}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-[10px] md:space-y-5 sm:space-y-[18px] xs:space-y-4">
            {[
              {
                id: "phone",
                label: "Phone no",
                type: "text",
                placeholder: "Phone Number",
              },
              {
                id: "website",
                label: "Website",
                type: "text",
                placeholder: "e.g. example.com",
              },
              {
                id: "taxId",
                label: "Tax-id",
                type: "text",
                placeholder: "Tax-id",
              },
              {
                id: "city",
                label: "City",
                type: "text",
                placeholder: "City Name",
              },
              {
                id: "state",
                label: "State",
                type: "text",
                placeholder: "State Name",
              },
            ].map((field) => (
              <div
                className="flex flex-col font-normal w-full min-h-auto"
                key={field.id}
                style={{ fontFamily: "Helvetica" }}
              >
                <label
                  htmlFor={field.id}
                  className="text-base text-[#5e6366] mb-2 font-normal leading-[1.2] text-left md:text-[15px] md:mb-[6px] xs:text-sm"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className="w-full h-[45px] px-4 py-[14px] border border-[#cfd3d4] rounded-lg text-base font-normal text-[#5e6366] outline-none transition-all duration-300 ease-in-out box-border placeholder-[#abafb1] focus:border-2 focus:border-[#2fb4ff] md:text-base md:h-12 md:px-4 md:py-3 sm:px-4 sm:py-3 sm:text-[15px] sm:h-[46px] xs:text-sm xs:h-11 xs:px-[14px] xs:py-[10px]"
                  style={{ fontFamily: "Helvetica" }}
                />
              </div>
            ))}

            <div
              className="flex flex-col font-normal w-full min-h-auto"
              style={{ fontFamily: "Helvetica" }}
            >
              <label
                htmlFor="postalCode"
                className="text-base text-[#5e6366] mb-2 font-normal leading-[1.2] text-left md:text-[15px] md:mb-[6px] xs:text-sm"
              >
                Postal-code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="Postal-code"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full h-[45px] px-4 py-[14px] border border-[#cfd3d4] rounded-lg text-base font-normal text-[#5e6366] outline-none transition-all duration-300 ease-in-out box-border placeholder-[#abafb1] focus:border-2 focus:border-[#2fb4ff] md:text-base md:h-12 md:px-4 md:py-3 sm:px-4 sm:py-3 sm:text-[15px] sm:h-[46px] xs:text-sm xs:h-11 xs:px-[14px] xs:py-[10px]"
                style={{ fontFamily: "Helvetica" }}
              />
            </div>
          </div>
        </div>
        {/* <div
          className="flex flex-col font-normal w-full min-h-auto"
          style={{ fontFamily: "Helvetica" }}
        >
          <label
            htmlFor="country"
            className="text-base text-[#5e6366] mb-2 font-normal leading-[1.2] text-left md:text-[15px] md:mb-[6px] xs:text-sm"
          >
            Country
          </label>
          <CustomDropdown
            value={formData.country}
            placeholder="Country"
            options={countryOptions}
            isOpen={isCountryDropdownOpen}
            onToggle={toggleCountryDropdown}
            onSelect={handleCountrySelect}
          />
        </div> */}

        <div className="flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-5 mt-5 lg:mt-5">
          <button
            type="button"
            className="w-full lg:w-44 h-11 lg:h-12 text-sm lg:text-lg font-medium font-inter bg-white text-blue-400 border border-blue-400 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-blue-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full lg:w-44 h-11 lg:h-12 text-sm lg:text-lg font-medium font-inter bg-blue-400 text-white border-none rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-blue-500"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
