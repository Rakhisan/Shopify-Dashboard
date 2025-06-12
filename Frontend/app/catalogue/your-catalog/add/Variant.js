
'use client';

import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

export default function VariantForm() {
    const [activeTab, setActiveTab] = useState('variant');
    const [variants, setVariants] = useState([
        {
            id: 1,
            title: '',
            barcode: '',
            price: '',
            sku: '',
            inventoryQuantity: '50'
        }
    ]);

    const addVariant = () => {
        const newVariant = {
            id: Date.now(),
            title: '',
            barcode: '',
            price: '',
            sku: '',
            inventoryQuantity: '50'
        };
        setVariants([...variants, newVariant]);
    };

    const removeVariant = (id) => {
        if (variants.length > 1) {
            setVariants(variants.filter(variant => variant.id !== id));
        }
    };

    const updateVariant = (id, field, value) => {
        setVariants(variants.map(variant =>
            variant.id === id ? { ...variant, [field]: value } : variant
        ));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Variants data:', variants);
        // Handle form submission here
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white">
            {/* Tab Navigation */}
            <div className="flex mb-8">
                <button
                    onClick={() => setActiveTab('product')}
                    className={`px-6 py-3 font-medium rounded-l-lg border ${activeTab === 'product'
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                        }`}
                >
                    Add Product
                </button>
                <button
                    onClick={() => setActiveTab('variant')}
                    className={`px-6 py-3 font-medium rounded-r-lg border-t border-r border-b ${activeTab === 'variant'
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                        }`}
                >
                    Variant
                </button>
            </div>

            {/* Form Content */}
            <div>
                {/* Field Headers */}
                <div className="grid grid-cols-12 gap-4 mb-4">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Barcode</label>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">Price</label>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700">SKU</label>
                    </div>
                    <div className="col-span-3">
                        <label className="block text-sm font-medium text-gray-700">Inventory Quantity</label>
                    </div>
                    <div className="col-span-1"></div>
                </div>

                {/* Dynamic Variants */}
                {variants.map((variant, index) => (
                    <div key={variant.id} className="grid grid-cols-12 gap-4 mb-4 items-start">
                        {/* Title */}
                        <div className="col-span-2">
                            <input
                                type="text"
                                placeholder="Title name"
                                value={variant.title}
                                onChange={(e) => updateVariant(variant.id, 'title', e.target.value)}
                                className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Barcode */}
                        <div className="col-span-2">
                            <input
                                type="text"
                                placeholder="Enter Barcode"
                                value={variant.barcode}
                                onChange={(e) => updateVariant(variant.id, 'barcode', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Price */}
                        <div className="col-span-2">
                            <input
                                type="text"
                                placeholder="Enter Price"
                                value={variant.price}
                                onChange={(e) => updateVariant(variant.id, 'price', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* SKU */}
                        <div className="col-span-2">
                            <input
                                type="text"
                                placeholder="Enter SKU No"
                                value={variant.sku}
                                onChange={(e) => updateVariant(variant.id, 'sku', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Inventory Quantity */}
                        <div className="col-span-3">
                            <input
                                type="number"
                                placeholder="50"
                                value={variant.inventoryQuantity}
                                onChange={(e) => updateVariant(variant.id, 'inventoryQuantity', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        {/* Remove Button */}
                        <div className="col-span-1 flex justify-center">
                            {variants.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeVariant(variant.id)}
                                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                {/* Add More Variant Button */}
                <div className="mt-6">
                    <button
                        type="button"
                        onClick={addVariant}
                        className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        <Plus size={18} className="mr-2" />
                        Add More Variant
                    </button>
                </div>

                {/* Submit Button */}
                <div className="mt-8 flex justify-end space-x-4">
                    <button
                        type="button"
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Save Product
                    </button>
                </div>
            </div>

            {/* Debug Info */}
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Current Data:</h3>
                <pre className="text-xs text-gray-600 overflow-auto">
                    {JSON.stringify(variants, null, 2)}
                </pre>
            </div>
        </div>
    );
}