'use client';

import { useState } from 'react';

export default function AddRolePage() {
    const [roleName, setRoleName] = useState('Admin');
    const [description, setDescription] = useState('Manages product catalogs');
    const [copyRoleFrom, setCopyRoleFrom] = useState('');

    // Permissions state
    const [permissions, setPermissions] = useState({
        catalog: { view: true, create: false, edit: true, delete: true },
        product: { view: true, create: false, edit: false, delete: true },
        order: { view: true, create: true, edit: true, delete: false }
    });

    // Privileges state
    const [privileges, setPrivileges] = useState({
        catalog: true,
        product: true,
        order: true
    });

    const handlePermissionToggle = (module, action) => {
        setPermissions(prev => ({
            ...prev,
            [module]: {
                ...prev[module],
                [action]: !prev[module][action]
            }
        }));
    };

    const handlePrivilegeToggle = (module) => {
        setPrivileges(prev => ({
            ...prev,
            [module]: !prev[module]
        }));
    };

    const handleSave = () => {
        console.log('Saving role:', { roleName, description, permissions, privileges });
        alert('Role saved successfully!');
    };

    const handleCancel = () => {
        console.log('Cancelled');
        // Navigate back or reset form
    };

    return (
        <div className="min-h-screen p-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-tl-lg border border-[#CFD2D4] p-4 mb-0">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-medium text-gray-900">Add Role</h1>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={handleSave}
                                className="bg-[#2FB4FF] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                                Save
                            </button>
                            <button
                                onClick={handleCancel}
                                className="bg-[#2FB4FF] text-white px-4 py-2 rounded-lg  transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white  border-[#CFD2D4] p-6">
                    <div className="space-y-8">
                        {/* Role Name and Description */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Role name
                                </label>
                                <input
                                    type="text"
                                    value={roleName}
                                    onChange={(e) => setRoleName(e.target.value)}
                                    className="w-full px-3 py-2 border border-[#CFD2D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent text-sm"
                                    placeholder="Enter role name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Description
                                </label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={1}
                                    className="w-full px-3 py-2 border border-[#CFD2D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent resize-none text-sm"
                                    placeholder="Enter description"
                                />
                            </div>
                        </div>

                        {/* Copy Role From */}
                        <div className="max-w-md">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Copy Role From
                            </label>
                            <select
                                value={copyRoleFrom}
                                onChange={(e) => setCopyRoleFrom(e.target.value)}
                                className="w-full px-3 py-2 border border-[#CFD2D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent bg-white text-sm"
                            >
                                <option value="">Select a role to copy from</option>
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                                <option value="user">User</option>
                            </select>
                        </div>

                        {/* Permissions Section */}
                        <div>
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Permissions</h2>
                            <div className="rounded-lg p-4">
                                <div className="grid grid-cols-5 gap-4 mb-4 pb-2 border-b border-[#CFD2D4]">
                                    <div className="text-sm font-medium text-gray-700">Module Name</div>
                                    <div className="text-sm font-medium text-gray-700 text-center">View</div>
                                    <div className="text-sm font-medium text-gray-700 text-center">Create</div>
                                    <div className="text-sm font-medium text-gray-700 text-center">Edit</div>
                                    <div className="text-sm font-medium text-gray-700 text-center">Delete</div>
                                </div>

                                {/* Catalog Row */}
                                <div className="grid grid-cols-5 gap-4 items-center py-3">
                                    <div className="text-sm text-gray-700 font-medium">Catalog</div>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => handlePermissionToggle('catalog', 'view')}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${permissions.catalog.view ? 'bg-[#2FB4FF]' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${permissions.catalog.view ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => handlePermissionToggle('catalog', 'create')}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${permissions.catalog.create ? 'bg-[#2FB4FF]' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${permissions.catalog.create ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => handlePermissionToggle('catalog', 'edit')}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${permissions.catalog.edit ? 'bg-[#2FB4FF]' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${permissions.catalog.edit ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => handlePermissionToggle('catalog', 'delete')}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${permissions.catalog.delete ? 'bg-[#2FB4FF]' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${permissions.catalog.delete ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                </div>

                                {/* Product Row */}
                                <div className="grid grid-cols-5 gap-4 items-center py-3">
                                    <div className="text-sm text-gray-700 font-medium">Product</div>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => handlePermissionToggle('product', 'view')}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${permissions.product.view ? 'bg-[#2FB4FF]' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${permissions.product.view ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => handlePermissionToggle('product', 'create')}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${permissions.product.create ? 'bg-[#2FB4FF]' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${permissions.product.create ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => handlePermissionToggle('product', 'edit')}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${permissions.product.edit ? 'bg-[#2FB4FF]' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${permissions.product.edit ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => handlePermissionToggle('product', 'delete')}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${permissions.product.delete ? 'bg-[#2FB4FF]' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${permissions.product.delete ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                </div>

                                {/* Order Row */}
                                <div className="grid grid-cols-5 gap-4 items-center py-3">
                                    <div className="text-sm text-gray-700 font-medium">Order</div>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => handlePermissionToggle('order', 'view')}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${permissions.order.view ? 'bg-[#2FB4FF]' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${permissions.order.view ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => handlePermissionToggle('order', 'create')}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${permissions.order.create ? 'bg-[#2FB4FF]' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${permissions.order.create ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => handlePermissionToggle('order', 'edit')}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${permissions.order.edit ? 'bg-[#2FB4FF]' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${permissions.order.edit ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => handlePermissionToggle('order', 'delete')}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${permissions.order.delete ? 'bg-[#2FB4FF]' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${permissions.order.delete ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Privileges Section */}
                        <div>
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Privileges</h2>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="grid grid-cols-2 gap-4 mb-4 pb-2 border-b [#CFD2D4]">
                                    <div className="text-sm font-medium text-gray-700">Module Name</div>
                                    <div className="text-sm font-medium text-gray-700"></div>
                                </div>

                                {/* Catalog Privilege */}
                                <div className="grid grid-cols-2 gap-4 items-center py-3">
                                    <div className="text-sm text-gray-700 font-medium">Catalog</div>
                                    <div className="flex justify-start">
                                        <button
                                            onClick={() => handlePrivilegeToggle('catalog')}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${privileges.catalog ? 'bg-[#2FB4FF]' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${privileges.catalog ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                </div>

                                {/* Product Privilege */}
                                <div className="grid grid-cols-2 gap-4 items-center py-3">
                                    <div className="text-sm text-gray-700 font-medium">Product</div>
                                    <div className="flex justify-start">
                                        <button
                                            onClick={() => handlePrivilegeToggle('product')}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${privileges.product ? 'bg-[#2FB4FF]' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${privileges.product ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                </div>

                                {/* Order Privilege */}
                                <div className="grid grid-cols-2 gap-4 items-center py-3">
                                    <div className="text-sm text-gray-700 font-medium">Order</div>
                                    <div className="flex justify-start">
                                        <button
                                            onClick={() => handlePrivilegeToggle('order')}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${privileges.order ? 'bg-[#2FB4FF]' : 'bg-gray-300'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${privileges.order ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}