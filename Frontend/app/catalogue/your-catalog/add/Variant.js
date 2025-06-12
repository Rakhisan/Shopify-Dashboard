
'use client';

import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';

export default function VariantForm() {

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



    return (
        <div className="max-w-7xl mx-auto p-6 bg-white">


            {/* Form Content */}
            <div>
                {/* Field Headers */}
                <div className="grid grid-cols-12 gap-4 mb-4">
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-[#5E6366]">Title</label>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-[#5E6366]">Barcode</label>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-[#5E6366]">Price</label>
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-[#5E6366]">SKU</label>
                    </div>
                    <div className="col-span-3">
                        <label className="block text-sm font-medium text-[#5E6366]">Inventory Quantity</label>
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
                                className="w-full px-3 py-2 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30B4FF]  focus:border-transparent"
                            />
                        </div>

                        {/* Barcode */}
                        <div className="col-span-2">
                            <input
                                type="text"
                                placeholder="Enter Barcode"
                                value={variant.barcode}
                                onChange={(e) => updateVariant(variant.id, 'barcode', e.target.value)}
                                className="w-full px-3 py-2 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30B4FF]  focus:border-transparent"
                            />
                        </div>

                        {/* Price */}
                        <div className="col-span-2">
                            <input
                                type="text"
                                placeholder="Enter Price"
                                value={variant.price}
                                onChange={(e) => updateVariant(variant.id, 'price', e.target.value)}
                                className="w-full px-3 py-2 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30B4FF]  focus:border-transparent"
                            />
                        </div>

                        {/* SKU */}
                        <div className="col-span-2">
                            <input
                                type="text"
                                placeholder="Enter SKU No"
                                value={variant.sku}
                                onChange={(e) => updateVariant(variant.id, 'sku', e.target.value)}
                                className="w-full  px-3 py-2 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30B4FF]  focus:border-transparent"
                            />
                        </div>

                        {/* Inventory Quantity */}
                        <div className="col-span-3">
                            <input
                                type="number"
                                placeholder="50"
                                value={variant.inventoryQuantity}
                                onChange={(e) => updateVariant(variant.id, 'inventoryQuantity', e.target.value)}
                                className="w-full px-3 py-2 border border-[#CFD3D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#30B4FF]  focus:border-transparent"
                            />
                        </div>

                        {/* Remove Button */}
                        <div className="col-span-1 flex justify-center">
                            {variants.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeVariant(variant.id)}
                                    className="p-2 text-gray-400 transition-colors"
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
                        className="inline-flex items-center px-6 py-3 bg-[#30B4FF] text-white font-medium rounded-lg transition-colors"
                    >
                        Add More Variant
                        <Plus size={18} className="ml-2" />
                    </button>

                </div>


            </div>


        </div>
    );
}