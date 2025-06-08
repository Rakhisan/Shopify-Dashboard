"use client";
import { useState } from "react";

const CustomDropdown = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (optionValue) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col relative">
      {label && (
        <label
          className="text-base font-normal text-[#5e6366] mb-2"
          style={{ fontFamily: "Helvetica" }}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <div
          className="px-4 py-3 border border-[#cfd3d4] rounded-lg bg-white cursor-pointer flex justify-between items-center text-base transition-colors duration-200 hover:border-2 hover:border-[#2fb4ff]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={value ? "text-[#727272]" : "text-[#727272]"}>
            {value || placeholder}
          </span>
          <span
            className={`flex items-center transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                d="M5.44489 8.45312H14.9286C15.0965 8.45316 15.2605 8.50297 15.4001 8.59624C15.5397 8.68952 15.6484 8.82209 15.7127 8.97718C15.7769 9.13227 15.7937 9.30292 15.761 9.46756C15.7282 9.6322 15.6474 9.78344 15.5287 9.90216L10.7869 14.644C10.6277 14.8031 10.4118 14.8925 10.1867 14.8925C9.96165 14.8925 9.74577 14.8031 9.58658 14.644L4.84473 9.90216C4.72605 9.78344 4.64523 9.6322 4.61249 9.46756C4.57975 9.30292 4.59656 9.13227 4.6608 8.97718C4.72503 8.82209 4.83381 8.68952 4.97337 8.59624C5.11294 8.50297 5.27702 8.45316 5.44489 8.45312Z"
                fill="#3D3C3C"
              />
            </svg>
          </span>
        </div>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border border-[#cfd2d4] border-t-0 rounded-b-md text-[#727272] z-[1000] max-h-[200px] overflow-y-auto">
            {options.map((option, index) => (
              <div
                key={index}
                className="px-4 py-3 cursor-pointer text-base transition-colors duration-200 border-b border-[#f0f0f0] hover:bg-[#2fb4ff]"
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default function AddProfilePrice() {
  const [formData, setFormData] = useState({
    name: "Premium Price",
    description: "ABC",
    pricetype: "",
    priceRule: "",
    excludeVendor: "Vendor 1,vendor 2,",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    console.log("Cancel clicked");
  };

  const handleAdd = () => {
    console.log("Add clicked", formData);
  };

  const pricetypeOptions = [
    { value: "", label: "Pricetype" },
    { value: "fixed", label: "Fixed" },
    { value: "percentage", label: "Percentage" },
    { value: "dynamic", label: "Dynamic" },
  ];

  const priceRuleOptions = [
    { value: "", label: "Price Rule" },
    { value: "standard", label: "Standard" },
    { value: "premium", label: "Premium" },
    { value: "discount", label: "Discount" },
  ];

  const vendorOptions = [
    {
      value: "for eg Vendor 1,vendor 2, vender 3",
      label: "for eg Vendor 1,vendor 2, vender 3",
    },
    { value: "vendor1", label: "Vendor 1" },
    { value: "vendor2", label: "Vendor 2" },
    { value: "vendor3", label: "Vendor 3" },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="w-[900px] max-w-full mb-0.5 bg-white px-8 py-5 rounded-t-xl">
        <h2
          className="text-xl font-semibold text-[#24282e] m-0"
          style={{ fontFamily: "Public Sans" }}
        >
          Add Profile Price
        </h2>
      </div>

      <div className="bg-white w-[900px] max-w-full p-5">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1.5 lg:flex-row flex-col lg:gap-1.5 gap-4">
            <div className="flex flex-col w-[390px] lg:w-[390px] w-full">
              <label
                className="text-base font-normal text-[#5e6366] mb-2"
                style={{ fontFamily: "Helvetica" }}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="h-11 px-4 py-3 border border-[#cfd3d4] rounded-lg text-base transition-colors duration-200 bg-white text-[#727272] font-medium focus:border-2 focus:border-[#2fb4ff] focus:outline-none lg:text-base text-sm lg:px-4 lg:py-3 px-3 py-2.5 lg:h-11 h-10"
                style={{ fontFamily: "Public Sans" }}
                placeholder="Premium Price"
              />
            </div>

            <div className="w-[390px] flex flex-col flex-1 ml-2.5 lg:w-[390px] lg:ml-2.5 w-full ml-0">
              <label
                className="text-base font-normal text-[#5e6366] mb-2 lg:text-base text-sm"
                style={{ fontFamily: "Helvetica" }}
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="h-11 px-4 py-3 border border-[#cfd3d4] rounded-lg text-base transition-colors duration-200 bg-white text-[#727272] font-medium focus:border-2 focus:border-[#2fb4ff] focus:outline-none lg:text-base text-sm lg:px-4 lg:py-3 px-3 py-2.5 lg:h-11 h-10"
                style={{ fontFamily: "Public Sans" }}
                placeholder="ABC"
              />
            </div>
          </div>

          <div className="flex gap-5 items-end lg:flex-row flex-col lg:gap-5 gap-4">
            <div
              className="flex flex-col w-[182px] lg:w-[182px] w-full"
              style={{ fontFamily: "Helvetica" }}
            >
              <CustomDropdown
                name="pricetype"
                value={formData.pricetype}
                onChange={handleInputChange}
                options={pricetypeOptions}
                placeholder="Pricetype"
              />
            </div>

            <div
              className="flex flex-col w-[182px] lg:w-[182px] w-full"
              style={{ fontFamily: "Helvetica" }}
            >
              <CustomDropdown
                name="priceRule"
                value={formData.priceRule}
                onChange={handleInputChange}
                options={priceRuleOptions}
                placeholder="Price Rule"
              />
            </div>

            <div
              className="flex flex-col mr-0 flex-1 lg:mr-0 lg:flex-1 w-full mr-0"
              style={{ fontFamily: "Helvetica" }}
            >
              <CustomDropdown
                label="Exclude vendor"
                name="excludeVendor"
                value={formData.excludeVendor}
                onChange={handleInputChange}
                options={vendorOptions}
                placeholder="Select vendor"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-5 mt-5 lg:mt-5">
            <button
              type="button"
              className="w-full lg:w-44 h-11 lg:h-12 text-sm lg:text-lg font-medium font-inter bg-white text-blue-400 border border-blue-400 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-blue-50"
            >
              Cancel
            </button>
            <button
              type="button"
              // onClick={handleSubmit}
              className="w-full lg:w-44 h-11 lg:h-12 text-sm lg:text-lg font-medium font-inter bg-blue-400 text-white border-none rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-blue-500"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
