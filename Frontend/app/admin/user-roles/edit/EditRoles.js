'use client'
import React, { useState } from 'react';

export default function RoleEditor() {
    const [roleName, setRoleName] = useState('Admin');
    const [description, setDescription] = useState('Manages product catalogs');
    const [assignedUsers, setAssignedUsers] = useState(['User 1', 'User 2', 'User3']);

    const [permissions, setPermissions] = useState({
        catalog: { view: true, create: false, edit: true, delete: true },
        product: { view: true, create: false, edit: false, delete: true },
        order: { view: true, create: true, edit: true, delete: false }
    });

    const [privileges, setPrivileges] = useState({
        catalog: true,
        product: true,
        order: true
    });

    const togglePermission = (module, action) => {
        setPermissions(prev => ({
            ...prev,
            [module]: {
                ...prev[module],
                [action]: !prev[module][action]
            }
        }));
    };

    const togglePrivilege = (module) => {
        setPrivileges(prev => ({
            ...prev,
            [module]: !prev[module]
        }));
    };

    const ToggleSwitch = ({ checked, onChange, size = 'default' }) => {
        const sizeClasses = size === 'small' ? 'w-9 h-5' : 'w-11 h-6';
        const thumbClasses = size === 'small' ? 'w-4 h-4' : 'w-5 h-5';

        return (
            <button
                type="button"
                onClick={onChange}
                className={`${sizeClasses} ${checked ? 'bg-[#2FB4FF]' : 'bg-gray-300'
                    } relative inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:ring-offset-2`}
            >
                <span
                    className={`${thumbClasses} ${checked ? (size === 'small' ? 'translate-x-4' : 'translate-x-5') : 'translate-x-0.5'
                        } inline-block transform rounded-full bg-white shadow-lg ring-0 transition-transform`}
                />
            </button>
        );
    };

    return (
        <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 bg-white min-h-screen">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Edit Role</h1>
                <div className="flex gap-3 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-initial px-4 sm:px-6 py-2 bg-[#2FB4FF] text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base">
                        Save
                    </button>
                    <button className="p-2 bg-[#2FB4FF] text-white rounded-lg  transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Role Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Role name
                    </label>
                    <input
                        type="text"
                        value={roleName}
                        onChange={(e) => setRoleName(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 border -[#CFD2D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent text-sm sm:text-base"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                    </label>
                    <div className="relative">
                        <select
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-3 sm:px-4 py-2 border -[#CFD2D4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2FB4FF] focus:border-transparent appearance-none bg-white pr-10 text-sm sm:text-base"
                        >
                            <option>Manages product catalogs</option>
                            <option>User management</option>
                            <option>Order processing</option>
                        </select>
                        <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Assigned Users */}
            <div className="mb-6 sm:mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assigned Users
                </label>
                <div className="w-full p-3 sm:p-4 border -[#CFD2D4] rounded-lg bg-gray-50 min-h-[60px] sm:min-h-[80px]">
                    <div className="flex flex-wrap gap-2">
                        {assignedUsers.map((user, index) => (
                            <span key={index} className="text-gray-600 text-sm">
                                {user}
                                {index < assignedUsers.length - 1 && ','}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Permissions */}
            <div className="mb-6 sm:mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Permissions</h2>

                {/* Desktop Table View */}
                <div className="hidden lg:block bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 border-b border-gray-200">
                        <div className="medium text-gray-700 text-sm">Module Name</div>
                        <div className="font-medium text-gray-700 text-center text-sm">View</div>
                        <div className="font-medium text-gray-700 text-center text-sm">Create</div>
                        <div className="font-medium text-gray-700 text-center text-sm">Edit</div>
                        <div className="font-medium text-gray-700 text-center text-sm">Delete</div>
                    </div>

                    {Object.entries(permissions).map(([module, perms]) => (
                        <div key={module} className="grid grid-cols-5 gap-4 p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                            <div className="font-medium text-gray-900 capitalize flex items-center text-sm">
                                {module}
                            </div>
                            <div className="flex justify-center items-center">
                                <ToggleSwitch
                                    checked={perms.view}
                                    onChange={() => togglePermission(module, 'view')}
                                    size="small"
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <ToggleSwitch
                                    checked={perms.create}
                                    onChange={() => togglePermission(module, 'create')}
                                    size="small"
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <ToggleSwitch
                                    checked={perms.edit}
                                    onChange={() => togglePermission(module, 'edit')}
                                    size="small"
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <ToggleSwitch
                                    checked={perms.delete}
                                    onChange={() => togglePermission(module, 'delete')}
                                    size="small"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Card View */}
                <div className="lg:hidden space-y-4">
                    {Object.entries(permissions).map(([module, perms]) => (
                        <div key={module} className="bg-white rounded-lg border border-gray-200 p-4">
                            <h3 className="font-medium text-gray-900 capitalize mb-3 text-base">{module}</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-700">View</span>
                                    <ToggleSwitch
                                        checked={perms.view}
                                        onChange={() => togglePermission(module, 'view')}
                                        size="small"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-700">Create</span>
                                    <ToggleSwitch
                                        checked={perms.create}
                                        onChange={() => togglePermission(module, 'create')}
                                        size="small"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-700">Edit</span>
                                    <ToggleSwitch
                                        checked={perms.edit}
                                        onChange={() => togglePermission(module, 'edit')}
                                        size="small"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-700">Delete</span>
                                    <ToggleSwitch
                                        checked={perms.delete}
                                        onChange={() => togglePermission(module, 'delete')}
                                        size="small"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Privileges */}
            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Privileges</h2>

                {/* Desktop View */}
                <div className="hidden sm:block bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 border-b border-gray-200">
                        <div className="font-medium text-gray-700 text-sm">Module Name</div>
                        <div className="font-medium text-gray-700 text-center text-sm">Access</div>
                    </div>

                    {Object.entries(privileges).map(([module, hasAccess]) => (
                        <div key={module} className="grid grid-cols-2 gap-4 p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50">
                            <div className="font-medium text-gray-900 capitalize flex items-center text-sm">
                                {module}
                            </div>
                            <div className="flex justify-center items-center">
                                <ToggleSwitch
                                    checked={hasAccess}
                                    onChange={() => togglePrivilege(module)}
                                    size="small"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View */}
                <div className="sm:hidden space-y-3">
                    {Object.entries(privileges).map(([module, hasAccess]) => (
                        <div key={module} className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between">
                            <span className="font-medium text-gray-900 capitalize text-sm">{module}</span>
                            <ToggleSwitch
                                checked={hasAccess}
                                onChange={() => togglePrivilege(module)}
                                size="small"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};