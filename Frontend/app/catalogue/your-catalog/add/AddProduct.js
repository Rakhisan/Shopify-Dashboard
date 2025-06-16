'use client';

import React, { useState, useRef } from 'react';
import bottle from "../../../images/bottle.jpg"
import HeadPhone from "../../../images/HeadPhone.jpg"
import Image from 'next/image';
import Variant from './Variant.js';

export default function AddProductForm() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        partNo: '',
        productName: 'Double Wall Retail Rack (Black)',
        mfr: 'Britways',
        stock: '50 units',
        msrp: '112,000',
        price: '36,400',
        category: 'Shelving',
        subCategory: 'Wall Rack',
        cost: '36,400',
        option1Name: 'Wall Rack',
        option1Value: 'Wall Rack',
        option2Name: '36,400',
        option2Value: '36,400',
        option3Name: '36,400',
        option3Value: '36,400'
    });

    const [activeTab, setActiveTab] = useState('Add Product');
    const [selectedImages, setSelectedImages] = useState([bottle, HeadPhone, HeadPhone, HeadPhone]);
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const fileInputRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        if (files.length > 0) {
            files.forEach((file, index) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setSelectedImages(prev => {
                        const newImages = [...prev];
                        if (index === 0) {
                            newImages[mainImageIndex] = e.target.result;
                        } else if (index < 4) {
                            newImages[index] = e.target.result;
                        }
                        return newImages;
                    });
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const handleChangeImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleThumbnailClick = (index) => {
        setMainImageIndex(index);
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Handle form submission logic here
    };

    const handleCancel = () => {
        console.log('Form cancelled');
        // Handle cancel logic here
    };

    // Tab switching function - no route change, just state change
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    // Dropdown Arrow SVG Component
    const DropdownArrow = () => (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <path d="M5.4444 7.64014H14.9281C15.096 7.64017 15.26 7.68998 15.3996 7.78326C15.5392 7.87653 15.648 8.0091 15.7122 8.16419C15.7764 8.31928 15.7932 8.48993 15.7605 8.65457C15.7278 8.81922 15.6469 8.97046 15.5283 8.08917L10.7864 13.831C10.6272 13.9902 10.4113 14.0796 10.1862 14.0796C9.96116 14.0796 9.74528 13.9902 9.58609 13.831L4.84424 9.08917C4.72556 8.97046 4.64474 8.81922 4.612 8.65457C4.57927 8.48993 4.59608 8.31928 4.66031 8.16419C4.72455 8.0091 4.83332 7.87653 4.97289 7.78326C5.11245 7.68998 5.27654 7.64017 5.4444 7.64014Z" fill="#3D3C3C" />
        </svg>
    );




    return (
        <div className="max-w-7xl mx-auto min-h-screen">

            {/* Hidden file input */}
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                multiple
                className="hidden"
            />

            {/* Header Card - Tab Navigation */}
            <div className="bg-white mb-1 p-4">
                <div className="flex">
                    <button
                        className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === 'Add Product'
                            ? 'bg-[#30B4FF] text-white'
                            : 'bg-gray-200 text-[#5E6366] hover:bg-gray-300'
                            }`}
                        onClick={() => handleTabChange('Add Product')}
                    >
                        Add Product
                    </button>
                    <button
                        className={`px-6 py-2 rounded-lg font-medium ml-2 transition-colors ${activeTab === 'Variants'
                            ? 'bg-[#30B4FF] text-white'
                            : 'bg-gray-200 text-[#5E6366] hover:bg-gray-300'
                            }`}
                        onClick={() => handleTabChange('Variants')}
                    >
                        Variants
                    </button>
                </div>
            </div>

            {/* Conditional Content Rendering */}
            {activeTab === 'Add Product' ? (
                /* Main Form Card - Add Product */
                <div className="bg-white  p-5">

                    {/* First Row - Image on left, Title & Description on right */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-5">
                        {/* Left Column - Image Section (2 columns width) */}
                        <div className="lg:col-span-2 space-y-1">
                            {/* Main Product Image */}
                            <div className=" p-1 flex justify-center items-center min-h-[100px]">
                                <Image
                                    src={selectedImages[mainImageIndex]}
                                    alt="Product"
                                    width={0}
                                    height={0}
                                    className="max-w-[150px] max-h-[150px] w-auto h-auto object-contain"
                                />
                            </div>

                            {/* Thumbnail Images */}
                            <div className="flex space-x-2 justify-center">
                                {selectedImages.slice(0, 4).map((image, index) => (
                                    <div
                                        key={index}
                                        className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer border-2 transition-all ${mainImageIndex === index ? 'border-[#30B4FF] bg-blue-50' : 'border-transparent hover:border-gray-300'
                                            }`}
                                        onClick={() => handleThumbnailClick(index)}
                                    >
                                        <Image
                                            src={image}
                                            alt={`Product ${index + 1}`}
                                            width={0}
                                            height={0}
                                            className="max-w-[30px] max-h-[30px] w-auto h-auto object-contain"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Change Image Button */}
                            <button
                                onClick={handleChangeImageClick}
                                className="w-full bg-[#30B4FF] text-white py-2 px-6 rounded-lg hover:bg-[#2593d4] transition-colors"
                            >
                                Change Image
                            </button>
                        </div>

                        {/* Right Column - Title & Description (3 columns width) */}
                        <div className="lg:col-span-3 space-y-4">
                            {/* Title */}
                            <div>
                                <label className="block text-[#5E6366] font-medium mb-2">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF]"
                                    placeholder="Title name"
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-[#5E6366] font-medium mb-2">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows="3"
                                    className="w-full p-3 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] resize-vertical"
                                    placeholder="Description"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Second Row - Categories and other form fields */}
                    <div className="space-y-4">
                        {/* Category and Sub-Category */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[#5E6366] font-medium mb-2">Category</label>
                                <div className="relative">
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        className="w-full p-3 pr-12 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30B4FF] appearance-none bg-white"
                                    >
                                        <option value="Shelving">Shelving</option>
                                        <option value="Storage">Storage</option>
                                        <option value="Display">Display</option>
                                    </select>
                                    <DropdownArrow />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[#5E6366] font-medium mb-2">Sub-Category</label>
                                <div className="relative">
                                    <select
                                        name="subCategory"
                                        value={formData.subCategory}
                                        onChange={handleInputChange}
                                        className="w-full p-3 pr-12 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] appearance-none bg-white"
                                    >
                                        <option value="Wall Rack">Wall Rack</option>
                                        <option value="Floor Rack">Floor Rack</option>
                                        <option value="Corner Rack">Corner Rack</option>
                                    </select>
                                    <DropdownArrow />
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-[#5E6366] font-medium mb-2">Cost</label>
                                <input
                                    type="text"
                                    name="cost"
                                    value={formData.cost}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF]"
                                    placeholder="36,400"
                                />
                            </div>
                            <div>
                                <label className="block text-[#5E6366] font-medium mb-2">Price</label>
                                <input
                                    type="text"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF]"
                                    placeholder="36,400"
                                />
                            </div>

                            <div>
                                <label className="block text-[#5E6366] font-medium mb-2">Status</label>
                                <div className="relative">
                                    <select
                                        name="status"
                                        value={formData.status || 'Active'}
                                        onChange={handleInputChange}
                                        className="w-full p-3 pr-12 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] appearance-none bg-white"
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>

                                    </select>
                                    <DropdownArrow />
                                </div>
                            </div>
                        </div>

                        {/* Stock and Part No */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[#5E6366] font-medium mb-2">Stock</label>
                                <input
                                    type="text"
                                    name="stock"
                                    value={formData.stock}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF]"
                                />
                            </div>
                            <div>
                                <label className="block text-[#5E6366] font-medium mb-2">Part No.</label>
                                <input
                                    type="text"
                                    name="partNo"
                                    value={formData.partNo}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF]"
                                />
                            </div>
                        </div>

                        {/* Option 1 Name and Value */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[#5E6366] font-medium mb-2">Option 1 name</label>
                                <input
                                    type="text"
                                    name="option1Name"
                                    value={formData.option1Name}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF]"
                                />
                            </div>
                            <div>
                                <label className="block text-[#5E6366] font-medium mb-2">Option 1 Value</label>
                                <input
                                    type="text"
                                    name="option1Value"
                                    value={formData.option1Value}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF]"
                                />
                            </div>
                        </div>

                        {/* Option 2 Name and Value */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[#5E6366] font-medium mb-2">Option 2 name</label>
                                <input
                                    type="text"
                                    name="option2Name"
                                    value={formData.option2Name}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF]"
                                />
                            </div>
                            <div>
                                <label className="block text-[#5E6366] font-medium mb-2">Option 2 value</label>
                                <input
                                    type="text"
                                    name="option2Value"
                                    value={formData.option2Value}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF]"
                                />
                            </div>
                        </div>

                        {/* Option 3 Name and Value */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[#5E6366] font-medium mb-2">Option 3 name</label>
                                <input
                                    type="text"
                                    name="option3Name"
                                    value={formData.option3Name}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF]"
                                />
                            </div>
                            <div>
                                <label className="block text-[#5E6366] font-medium mb-2">Option 3 value</label>
                                <input
                                    type="text"
                                    name="option3Value"
                                    value={formData.option3Value}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
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
                            Add
                        </button>
                    </div>
                </div>
            ) : (
                /* Variants Content */
                <Variant />
            )}
        </div>
    );
}