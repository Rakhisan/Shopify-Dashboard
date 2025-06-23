'use client';

import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Check } from 'lucide-react';

export default function AddProfileRuleForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    setAsDefault: false,
    precedence: '',
    sequence: '',
    subsequence: '',
    subCategoryId: '',
    productId: '',
    categoryId: '',
    manufacturerId: '',
    method: '',
    costSourceId: '',
    useMinSource: false,
    costTo: '',
    specialCost: '',
    ceilingIsMerp: false,
    inStock: false,
    costFrom: '',
    percentValue: '',
    costAdjValue: '',
    deceedToMsp: false,
    minMarginCheck: false,
    roundedTo: '',
    costAdjPercent: '',
    minMargin: '',
    minMarginCheckValue: '',
    minMarginPercentage: '0.5%'
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCancel = () => {
    // router.back();
  };

  // Custom dropdown arrow component
  const DropdownArrow = () => (
    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
      <path d="M5.4444 8.45312H14.9281C15.096 8.45316 15.26 8.50297 15.3996 8.59624C15.5392 8.68952 15.648 8.82209 15.7122 8.97718C15.7764 9.13227 15.7932 9.30292 15.7605 9.46756C15.7278 9.6322 15.6469 9.78344 15.5283 9.90216L10.7864 14.644C10.6272 14.8031 10.4113 14.8925 10.1862 14.8925C9.96116 14.8925 9.74528 14.8031 9.58609 14.644L4.84424 9.90216C4.72556 9.78344 4.64474 9.6322 4.612 9.46756C4.57927 9.30292 4.59608 9.13227 4.66031 8.97718C4.72455 8.82209 4.83332 8.68952 4.97289 8.59624C5.11245 8.50297 5.27654 8.45316 5.4444 8.45312Z" fill="#3D3C3C" />
    </svg>
  );

  // Custom Checkbox Component
  const CustomCheckbox = ({ name, checked, onChange, label }) => (
    <div className="flex items-center">
      <div className="relative inline-block">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`h-4 w-4 border-2 rounded cursor-pointer transition-all duration-200 flex items-center justify-center ${checked
            ? 'bg-[#30B4FF] border-[#30B4FF]'
            : 'bg-transparent border-[#CFD3D4] hover:border-[#30B4FF]'
            }`}
          onClick={() => onChange({ target: { name, checked: !checked, type: 'checkbox' } })}
        >
          {checked && (
            <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />
          )}
        </div>
      </div>
      <label className="ml-2 text-sm text-[#727272] cursor-pointer" onClick={() => onChange({ target: { name, checked: !checked, type: 'checkbox' } })}>
        {label}
      </label>
    </div>
  );

  return (
    <div className="flex items-center justify-center p-2 sm:p-4 min-h-screen">
      <div className="bg-white rounded-lg w-full max-w-7xl">
        {/* Header */}
        <div className="bg-white px-4 sm:px-6 py-4 rounded-tl-lg">
          <h2 className="font-semibold text-[#24282E] text-lg sm:text-xl">Add Profile Rule</h2>
        </div>

        <div className="p-3 sm:p-4">
          {/* First Row - Basic Information & Rule Structure */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 mb-3">
            {/* Basic Information */}
            <div className="bg-[#F6F8FB] rounded-lg p-4 w-full max-w-[395px] h-[423px]">
              <h3 className="font-bold text-[#5E6366] mb-4">Basic Information</h3>

              <div className="h-[350px] overflow-y-auto pr-2">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#5E6366] mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#5E6366] mb-1">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Description"
                      className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none bg-transparent focus:ring-2 focus:ring-[#2FB4FF] h-20 resize-none"
                    />
                  </div>

                  <div className="py-2">
                    <CustomCheckbox
                      name="setAsDefault"
                      checked={formData.setAsDefault}
                      onChange={handleInputChange}
                      label="Set as Default Rule"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#727272] mb-1">Precedence</label>
                    <div className="relative">
                      <select
                        name="precedence"
                        value={formData.precedence}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] appearance-none bg-transparent pr-12"
                        style={{ backgroundImage: 'none' }}
                      >
                        <option value="" className="bg-white text-gray-700">Precedence</option>
                        <option value="1" className="bg-white text-gray-700">1</option>
                        <option value="2" className="bg-white text-gray-700">2</option>
                        <option value="3" className="bg-white text-gray-700">3</option>
                      </select>
                      <DropdownArrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule Structure & Scope */}
            <div className="bg-[#F6F8FB] p-4 rounded-lg w-full max-w-[667px] h-[423px] ">
              <h3 className="font-bold text-[#5E6366] mb-4">Rule Structure & Scope</h3>

              <div className="h-[350px] overflow-y-auto pr-2">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#727272] mb-1">Sequence</label>
                      <input
                        type="text"
                        name="sequence"
                        value={formData.sequence}
                        onChange={handleInputChange}
                        placeholder="Sequence"
                        className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#727272] mb-1">Subsequence</label>
                      <div className="relative">
                        <select
                          name="subsequence"
                          value={formData.subsequence}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] appearance-none bg-transparent pr-12"
                        >
                          <option value="" className="bg-white text-gray-700">Subsequence</option>
                          <option value="A" className="bg-white text-gray-700">A</option>
                          <option value="B" className="bg-white text-gray-700">B</option>
                          <option value="C" className="bg-white text-gray-700">C</option>
                        </select>
                        <DropdownArrow />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#727272] mb-1">Sub Category Id</label>
                      <div className="relative">
                        <select
                          name="subCategoryId"
                          value={formData.subCategoryId}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] appearance-none bg-transparent pr-12"
                        >
                          <option value="" className="bg-white text-gray-700">Sub category id</option>
                          <option value="1" className="bg-white text-gray-700">Category 1</option>
                          <option value="2" className="bg-white text-gray-700">Category 2</option>
                        </select>
                        <DropdownArrow />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#727272] mb-1">Product Id</label>
                      <div className="relative">
                        <select
                          name="productId"
                          value={formData.productId}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] appearance-none bg-transparent pr-12"
                        >
                          <option value="" className="bg-white text-gray-700">Product id</option>
                          <option value="1" className="bg-white text-gray-700">Product 1</option>
                          <option value="2" className="bg-white text-gray-700">Product 2</option>
                        </select>
                        <DropdownArrow />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#727272] mb-1">Category Id</label>
                      <div className="relative">
                        <select
                          name="categoryId"
                          value={formData.categoryId}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] appearance-none bg-transparent pr-12"
                        >
                          <option value="" className="bg-white text-gray-700">Category id</option>
                          <option value="1" className="bg-white text-gray-700">Category 1</option>
                          <option value="2" className="bg-white text-gray-700">Category 2</option>
                        </select>
                        <DropdownArrow />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#727272] mb-1">Manufacturer Id</label>
                      <div className="relative">
                        <select
                          name="manufacturerId"
                          value={formData.manufacturerId}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] appearance-none bg-transparent pr-12"
                        >
                          <option value="" className="bg-white text-gray-700">Manufacturer id</option>
                          <option value="1" className="bg-white text-gray-700">Manufacturer 1</option>
                          <option value="2" className="bg-white text-gray-700">Manufacturer 2</option>
                        </select>
                        <DropdownArrow />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Method & Source and Adjustment Values */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mb-3">
            {/* Method & Source */}
            <div className="bg-[#F6F8FB] p-4 rounded-lg w-full max-w-[522px] h-[451px] mx-auto xl:mx-0">
              <h3 className="font-bold text-[#5E6366] mb-4">Method & Source</h3>

              <div className="h-[378px] overflow-y-auto pr-2">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#727272] mb-1">Method</label>
                      <div className="relative">
                        <select
                          name="method"
                          value={formData.method}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] appearance-none bg-transparent pr-16"
                        >
                          <option value="" className="bg-white text-gray-700">select method</option>
                          <option value="method1" className="bg-white text-gray-700">Method 1</option>
                          <option value="method2" className="bg-white text-gray-700">Method 2</option>
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col">
                          <ChevronUp className="w-3 h-3 text-[#3D3C3C] cursor-pointer hover:text-[#2FB4FF]" />
                          <ChevronDown className="w-3 h-3 text-[#3D3C3C] cursor-pointer hover:text-[#2FB4FF]" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#727272] mb-1">Cost Source Id</label>
                      <div className="relative">
                        <select
                          name="costSourceId"
                          value={formData.costSourceId}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] appearance-none bg-transparent pr-12"
                        >
                          <option value="" className="bg-white text-gray-700">cost source id</option>
                          <option value="source1" className="bg-white text-gray-700">Source 1</option>
                          <option value="source2" className="bg-white text-gray-700">Source 2</option>
                        </select>
                        <DropdownArrow />
                      </div>
                    </div>
                  </div>

                  <div className="py-2">
                    <CustomCheckbox
                      name="useMinSource"
                      checked={formData.useMinSource}
                      onChange={handleInputChange}
                      label="Use Min Source"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#727272] mb-1">Cost To</label>
                      <input
                        type="text"
                        name="costTo"
                        value={formData.costTo}
                        onChange={handleInputChange}
                        placeholder="Cost To"
                        className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#727272] mb-1">Special Cost</label>
                      <div className="relative">
                        <select
                          name="specialCost"
                          value={formData.specialCost}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] appearance-none bg-transparent pr-12"
                        >
                          <option value="" className="bg-white text-gray-700">Special Deal</option>
                          <option value="deal1" className="bg-white text-gray-700">Deal 1</option>
                          <option value="deal2" className="bg-white text-gray-700">Deal 2</option>
                        </select>
                        <DropdownArrow />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 py-2">
                    <CustomCheckbox
                      name="ceilingIsMerp"
                      checked={formData.ceilingIsMerp}
                      onChange={handleInputChange}
                      label="Ceiling Is Merp"
                    />
                    <CustomCheckbox
                      name="inStock"
                      checked={formData.inStock}
                      onChange={handleInputChange}
                      label="In Stock"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#727272] mb-1">Cost From</label>
                    <input
                      type="text"
                      name="costFrom"
                      value={formData.costFrom}
                      onChange={handleInputChange}
                      placeholder="Cost From"
                      className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] bg-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Adjustment Values */}
            <div className="bg-[#F6F8FB] p-4 rounded-lg w-full max-w-[535px] h-[451px] mx-auto xl:mx-0">
              <h3 className="font-bold text-[#5E6366] mb-4">Adjustment Values</h3>

              <div className="h-[378px] overflow-y-auto pr-2">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#727272] mb-1">Percent Value</label>
                      <input
                        type="text"
                        name="percentValue"
                        value={formData.percentValue}
                        onChange={handleInputChange}
                        placeholder="percent value"
                        className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#727272] mb-1">Cost Adj Value</label>
                      <input
                        type="text"
                        name="costAdjValue"
                        value={formData.costAdjValue}
                        onChange={handleInputChange}
                        placeholder="0.5%"
                        className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#727272] mb-1">Rounded To</label>
                      <input
                        type="text"
                        name="roundedTo"
                        value={formData.roundedTo}
                        onChange={handleInputChange}
                        placeholder="0.5%"
                        className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] bg-transparent"
                      />
                    </div>
                    <div className="flex flex-col gap-3 pt-2">
                      <CustomCheckbox
                        name="deceedToMsp"
                        checked={formData.deceedToMsp}
                        onChange={handleInputChange}
                        label="Deceed To Msp"
                      />
                      <CustomCheckbox
                        name="minMarginCheck"
                        checked={formData.minMarginCheck}
                        onChange={handleInputChange}
                        label="Min Margin Check"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#727272] mb-1">Cost Adj Percent</label>
                    <input
                      type="text"
                      name="costAdjPercent"
                      value={formData.costAdjPercent}
                      onChange={handleInputChange}
                      placeholder="cost adj percent"
                      className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] bg-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Margin Rules - Full Width */}
          <div className="mb-4">
            <div className="bg-[#F6F8FB] p-4 rounded-lg">
              <h3 className="font-bold text-[#5E6366] mb-4">Margin Rules</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#727272] mb-1">Min Margin</label>
                  <input
                    type="text"
                    name="minMargin"
                    value={formData.minMargin}
                    onChange={handleInputChange}
                    placeholder="percent value"
                    className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#727272] mb-1">Min Margin Check</label>
                  <input
                    type="text"
                    name="minMarginCheckValue"
                    value={formData.minMarginCheckValue}
                    onChange={handleInputChange}
                    placeholder="cost adj percent"
                    className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] bg-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#727272] mb-1">Min Margin Percentage</label>
                  <input
                    type="text"
                    name="minMarginPercentage"
                    value={formData.minMarginPercentage}
                    onChange={handleInputChange}
                    placeholder="0.5%"
                    className="w-full px-3 py-2 border border-[#CFD3D4] text-[#ABAFB1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] bg-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="w-full sm:w-auto min-w-40 h-10 text-base font-medium bg-white text-[#30B4FF] border border-[#30B4FF] rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#30B4FF] hover:text-white"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-full sm:w-auto min-w-40 h-10 text-base font-medium bg-[#30B4FF] text-white border-none rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#30B4FF]/90"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}