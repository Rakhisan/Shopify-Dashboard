"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProfilePrice() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pricetype, setPricetype] = useState("");
  const [priceRule, setPriceRule] = useState("");
  const [excludeVendor, setExcludeVendor] = useState("");
  const [showPriceTypeDropdown, setShowPriceTypeDropdown] = useState(false);
  const [showPriceRuleDropdown, setShowPriceRuleDropdown] = useState(false);
  const [showExcludeVendorDropdown, setShowExcludeVendorDropdown] = useState(false);

  const handleCancel = () => {
    router.back();
  };

  const priceTypes = [
    { value: "type1", label: "Type 1" },
    { value: "type2", label: "Type 2" },
    { value: "type3", label: "Type 3" }
  ];

  const priceRules = [
    { value: "rule1", label: "Rule 1" },
    { value: "rule2", label: "Rule 2" },
    { value: "rule3", label: "Rule 3" }
  ];

  const vendors = [
    { value: "vendor1", label: "Vendor 1" },
    { value: "vendor2", label: "Vendor 2" },
    { value: "vendor3", label: "Vendor 3" }
  ];

  return (
    <div className="w-full sm:px-4">
      {/* Header Card */}
      <div className="w-full  mx-auto bg-white rounded-tl-lg p-2 sm:p-4 md:p-4 mb-1">
        <h2 className="text-lg sm:text-xl font-semibold text-[#2B2F32]">Add Profile Price</h2>
      </div>

      <div className="w-full  mx-auto bg-white p-3 sm:p-4 md:p-5 lg:p-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 sm:gap-6 lg:gap-2 mt-1 sm:mt-1">
          {/* Left Column */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-3 w-full">
            {/* Name Field */}
            <div className="w-full">
              <label className="block text-[#5E6366] mb-2 text-sm sm:text-base font-medium">
                Name
              </label>
              <div className="relative mb-1 sm:mb-4 lg:mb-3 w-full">
                <input
                  type="text"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-2 py-2 sm:py-2 border border-[#CFD3D4]  text-[#727272] rounded-lg text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#30B4FF] focus:border-[#30B4FF]  transition-colors"
                />
              </div>
            </div>

            {/* Pricetype and Price Rule Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2 mt-3 sm:mt-4 lg:mt-8 w-full">
              {/* Pricetype Dropdown */}
              <div className="w-full relative">
                <label className="block text-[#5E6366] mb-2 text-sm sm:text-base font-medium">
                  Pricetype
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowPriceTypeDropdown(!showPriceTypeDropdown)}
                    className="w-full px-2 py-2 sm:py-2   text-[#727272] border border-[#CFD3D4] rounded-lg text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#30B4FF] focus:border-[#30B4FF]  transition-colors text-left flex justify-between items-center"
                  >
                    <span className={pricetype ? "  text-[#727272]" : "  text-[#727272]"}>
                      {pricetype ? priceTypes.find(type => type.value === pricetype)?.label : "Pricetype"}
                    </span>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44489 0.453125H10.9286C11.0965 0.453161 11.2605 0.502966 11.4001 0.596244C11.5397 0.689523 11.6484 0.822087 11.7127 0.977177C11.7769 1.13227 11.7937 1.30292 11.761 1.46756C11.7282 1.6322 11.6474 1.78344 11.5287 1.90216L6.7869 6.644C6.62771 6.80314 6.41183 6.89254 6.18674 6.89254C5.96165 6.89254 5.74577 6.80314 5.58658 6.644L0.844732 1.90216C0.726051 1.78344 0.645232 1.6322 0.612493 1.46756C0.579754 1.30292 0.596564 1.13227 0.660799 0.977177C0.725034 0.822087 0.833809 0.689523 0.973373 0.596244C1.11294 0.502966 1.27702 0.453161 1.44489 0.453125Z" fill="#3D3C3C" />
                    </svg>

                  </button>
                  {showPriceTypeDropdown && (
                    <div className="absolute z-10 w-full  text-[#727272] sm:max-w-[280px] mt-1 bg-white border border-[#CFD3D4] rounded-lg ">
                      {priceTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => {
                            setPricetype(type.value);
                            setShowPriceTypeDropdown(false);
                          }}
                          className="w-full px-2 py-2 text-left text-sm sm:text-base text-[#5E6366] hover:text-white hover:bg-[#30B4FF] transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Price Rule Dropdown */}
              <div className="w-full relative">
                <label className="block text-[#5E6366] mb-2 text-sm sm:text-base font-medium">
                  Price Rule
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowPriceRuleDropdown(!showPriceRuleDropdown)}
                    className="w-full px-3 py-2 sm:py-2 text-[#727272] border border-[#CFD3D4] rounded-lg text-sm sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#30B4FF] focus:border-[#30B4FF]  transition-colors text-left flex justify-between items-center"
                  >
                    <span className={priceRule ? "text-[#5E6366]" : "text-[#5E6366]"}>
                      {priceRule ? priceRules.find(rule => rule.value === priceRule)?.label : "Price Rule"}
                    </span>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.44489 0.453125H10.9286C11.0965 0.453161 11.2605 0.502966 11.4001 0.596244C11.5397 0.689523 11.6484 0.822087 11.7127 0.977177C11.7769 1.13227 11.7937 1.30292 11.761 1.46756C11.7282 1.6322 11.6474 1.78344 11.5287 1.90216L6.7869 6.644C6.62771 6.80314 6.41183 6.89254 6.18674 6.89254C5.96165 6.89254 5.74577 6.80314 5.58658 6.644L0.844732 1.90216C0.726051 1.78344 0.645232 1.6322 0.612493 1.46756C0.579754 1.30292 0.596564 1.13227 0.660799 0.977177C0.725034 0.822087 0.833809 0.689523 0.973373 0.596244C1.11294 0.502966 1.27702 0.453161 1.44489 0.453125Z" fill="#3D3C3C" />
                    </svg>

                  </button>
                  {showPriceRuleDropdown && (
                    <div className="absolute z-10 w-full max-w-[90vw]    text-[#727272] sm:max-w-[280px] mt-1 bg-white border border-[#CFD3D4] rounded-lg shadow-lg">
                      {priceRules.map((rule) => (
                        <button
                          key={rule.value}
                          type="button"
                          onClick={() => {
                            setPriceRule(rule.value);
                            setShowPriceRuleDropdown(false);
                          }}
                          className="w-full px-2 py-2 text-left text-sm sm:text-base  text-[#5E6366] hover:text-white hover:bg-[#30B4FF] transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {rule.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-4 w-full">
            {/* Description Field */}
            <div className="w-full">
              <label className="block text-[#5E6366] mb-1 text-sm sm:text-base font-medium">
                Description
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 sm:py-2 border border-[#CFD3D4] rounded-lg text-sm sm:text-base  text-[#727272] bg-white focus:outline-none focus:ring-2 focus:ring-[#30B4FF] focus:border-[#30B4FF]transition-colors"
              />
            </div>

            {/* Exclude Vendor Field */}
            <div className="w-full relative">
              <label className="block text-[#5E6366] mb-2 text-sm sm:text-base font-medium">
                Exclude vendor
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowExcludeVendorDropdown(!showExcludeVendorDropdown)}
                  className="w-full px-3 py-2 sm:py-2 border border-[#CFD3D4] text-[#727272] rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#30B4FF] focus:border-[#30B4FF] transition-colors text-left flex justify-between items-center"
                >
                  <span className={excludeVendor ? "text-[#5E6366]" : "text-[#5E6366]"}>
                    {excludeVendor ? vendors.find(vendor => vendor.value === excludeVendor)?.label : "Vendor 1"}
                  </span>
                  <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.44489 0.453125H10.9286C11.0965 0.453161 11.2605 0.502966 11.4001 0.596244C11.5397 0.689523 11.6484 0.822087 11.7127 0.977177C11.7769 1.13227 11.7937 1.30292 11.761 1.46756C11.7282 1.6322 11.6474 1.78344 11.5287 1.90216L6.7869 6.644C6.62771 6.80314 6.41183 6.89254 6.18674 6.89254C5.96165 6.89254 5.74577 6.80314 5.58658 6.644L0.844732 1.90216C0.726051 1.78344 0.645232 1.6322 0.612493 1.46756C0.579754 1.30292 0.596564 1.13227 0.660799 0.977177C0.725034 0.822087 0.833809 0.689523 0.973373 0.596244C1.11294 0.502966 1.27702 0.453161 1.44489 0.453125Z" fill="#3D3C3C" />
                  </svg>

                </button>
                {showExcludeVendorDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-[#CFD3D4] rounded-lg">
                    {vendors.map((vendor) => (
                      <button
                        key={vendor.value}
                        type="button"
                        onClick={() => {
                          setExcludeVendor(vendor.value);
                          setShowExcludeVendorDropdown(false);
                        }}
                        className="w-full px-4 py-3 text-left text-sm sm:text-base text-[#5E6366]   hover:text-white hover:bg-[#30B4FF]  transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {vendor.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 lg:gap-5 mt-3 sm:mt-6 lg:mt-7 w-full px-2 sm:px-0">
          <button
            type="button"
            onClick={handleCancel}
            className="w-full sm:w-auto sm:min-w-28  md:min-w-32 lg:min-w-36 xl:min-w-40 h-8 sm:h-9 md:h-10 text-xs sm:text-sm md:text-base lg:text-lg font-medium bg-white text-[#30B4FF] border border-[#30B4FF] rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#30B4FF] hover:text-white"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-full sm:w-auto sm:min-w-28  md:min-w-32 lg:min-w-36 xl:min-w-40 h-8 sm:h-9 md:h-10 text-xs sm:text-sm md:text-base lg:text-lg font-medium bg-[#30B4FF] text-white border-none rounded-lg cursor-pointer transition-all duration-200 ease-in-out"
          >
            Add
          </button>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(showPriceTypeDropdown || showPriceRuleDropdown || showExcludeVendorDropdown) && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => {
            setShowPriceTypeDropdown(false);
            setShowPriceRuleDropdown(false);
            setShowExcludeVendorDropdown(false);
          }}
        />
      )}
    </div>
  );
}