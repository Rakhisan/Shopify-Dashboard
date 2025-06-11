'use client';

import React, { useState } from 'react';

export default function EditProductForm() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        partNo: 'BW-SH-01',
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
    const [selectedImage, setSelectedImage] = useState(0);

    const productImages = [
        '/api/placeholder/200/200',
        '/api/placeholder/60/60',
        '/api/placeholder/60/60',
        '/api/placeholder/60/60'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Handle form submission logic here
    };

    const handleCancel = () => {
        console.log('Form cancelled');
        // Handle cancel logic here
    };

    return (
        <div className="max-w-7xl mx-auto  min-h-screen">
            {/* Header Card - Tab Navigation */}
            <div className="bg-white mb-1 p-4">
                <div className="flex">
                    <button
                        className={`px-6 py-2 rounded-t-lg font-medium ${activeTab === 'Add Product'
                            ? ' bg-[#30B4FF]  text-white'
                            : 'bg-gray-200 text-[#5E6366]'
                            }`}
                        onClick={() => setActiveTab('Add Product')}
                    >
                        Add Product
                    </button>
                    <button
                        className={`px-6 py-2 rounded-t-lg font-medium ml-2 ${activeTab === 'Variants'
                            ? 'bg-[#30B4FF]  text-white'
                            : 'bg-gray-200 text-[#5E6366]'
                            }`}
                        onClick={() => setActiveTab('Variants')}
                    >
                        Variants
                    </button>
                </div>
            </div>

            {/* Main Form Card */}
            <div className="bg-white shadow-sm p-5">

                {/* First Row - Image on left, Title & Description on right */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
                    {/* Left Column - Image Section */}
                    <div className="lg:col-span-1 space-y-2">
                        {/* Main Product Image */}
                        <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center min-h-40 w-full">
                            <img
                                src="/api/placeholder/200/200"
                                alt="Product"
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div className="flex space-x-2">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer">
                            </div>
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer">
                            </div>
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer">
                            </div>
                        </div>

                        {/* Change Image Button */}
                        <button className="w-full bg-[#30B4FF] text-white py-2 px-4 rounded-lg  transition-colors">
                            Change Image
                        </button>
                    </div>

                    {/* Right Column - Title & Description */}
                    <div className="lg:col-span-2 space-y-4">
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
                                rows="4"
                                className="w-full p-3 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF]"
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
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30B4FF] "
                            >
                                <option value="Shelving">Shelving</option>
                                <option value="Storage">Storage</option>
                                <option value="Display">Display</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[#5E6366] font-medium mb-2">Sub-Category</label>
                            <select
                                name="subCategory"
                                value={formData.subCategory}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF]"
                            >
                                <option value="Wall Rack">Wall Rack</option>
                                <option value="Floor Rack">Floor Rack</option>
                                <option value="Corner Rack">Corner Rack</option>
                            </select>
                        </div>
                    </div>

                    {/* Price and Status */}
                    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-4">
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
                            <input
                                type="text"
                                name="cost"
                                value={formData.cost}
                                onChange={handleInputChange}
                                className="w-full p-3 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF]"
                                placeholder="36,400"
                            />
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
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}