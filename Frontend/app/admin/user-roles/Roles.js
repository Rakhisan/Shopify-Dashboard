'use client';


import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Roles() {
    const router = useRouter();
    const [roles, setRoles] = useState([
        { id: 1, name: 'Catalog Manager', users: 1, description: 'Manages product catalogs' },
        { id: 2, name: 'Admin', users: 2, description: 'Full system access' },
        { id: 3, name: 'Executive', users: 5, description: 'Full system access' },
        { id: 4, name: 'Catalog Manager', users: 4, description: 'Manages product catalogs' }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingRole, setEditingRole] = useState(null);
    const [showDropdown, setShowDropdown] = useState(null);
    const [newRole, setNewRole] = useState({ name: '', description: '' });

    const filteredRoles = roles.filter(role =>
        role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        role.description.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const handleAddRoles = () => {
        router.push("/admin/user-roles/add");
    };

    const handleEditRole = (role) => {
        setEditingRole(role);
        setNewRole({ name: role.name, description: role.description });
        setShowAddModal(true);
        setShowDropdown(null);
    };



    const handleDeleteRole = (roleId) => {
        setRoles(roles.filter(role => role.id !== roleId));
        setShowDropdown(null);
    };

    const toggleDropdown = (roleId) => {
        setShowDropdown(showDropdown === roleId ? null : roleId);
    };

    return (
        <div className="min-h-screen p-2">
            <div className="max-w-7xl mx-auto">
                {/* Header Card */}
                <div className="bg-white rounded-tl-lg border border-gray-200 p-2 sm:p-4 mb-0">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center space-x-4">
                            <h2 className="text-xl sm:text-2xl text-gray-900">Roles</h2>
                        </div>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                            <div className="relative">
                                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full sm:w-64 pl-10 pr-4 py-2 border border-[#D5D5D5] rounded-lg focus:border-2 focus:border-[#2FB4FF] focus:outline-none"
                                />
                            </div>
                            <button
                                onClick={handleAddRoles}
                                className="bg-[#2FB4FF] text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                <span>Add Role</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Roles Table - Desktop View */}
                <div className="bg-white border border-gray-200 overflow-hidden hidden md:block">
                    <div className="grid grid-cols-12 px-4 py-4 border-b border-gray-200 text-sm font-medium text-gray-700">
                        <div className="col-span-3">Role Name</div>
                        <div className="col-span-2">No Of Users</div>
                        <div className="col-span-6">Description</div>
                        <div className="col-span-1"></div>
                    </div>

                    {filteredRoles.map((role) => (
                        <div key={role.id} className="grid grid-cols-12 gap-2 px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <div className="col-span-3 text-gray-900">{role.name}</div>
                            <div className="col-span-2 text-gray-600">{role.users}</div>
                            <div className="col-span-6 text-gray-600">{role.description}</div>
                            <div className="col-span-1 relative">
                                <button
                                    onClick={() => toggleDropdown(role.id)}
                                    className="p-1 hover:bg-gray-200 rounded transition-colors"
                                >
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                </button>

                                {showDropdown === role.id && (
                                    <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[120px]">
                                        <button
                                            onClick={() => handleEditRole(role)}
                                            className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            <span>Edit</span>
                                        </button>
                                        <button
                                            onClick={() => handleDeleteRole(role.id)}
                                            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    {filteredRoles.length === 0 && (
                        <div className="px-6 py-12 text-center text-gray-500">
                            No roles found matching your search.
                        </div>
                    )}
                </div>

                {/* Roles Cards - Mobile View */}
                <div className="bg-white border border-gray-200 md:hidden">
                    {filteredRoles.map((role) => (
                        <div key={role.id} className="p-4 border-b border-gray-100 last:border-b-0">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-medium text-gray-900">{role.name}</h3>
                                <div className="relative">
                                    <button
                                        onClick={() => toggleDropdown(role.id)}
                                        className="p-1 hover:bg-gray-200 rounded transition-colors"
                                    >
                                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                        </svg>
                                    </button>

                                    {showDropdown === role.id && (
                                        <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[120px]">
                                            <button
                                                onClick={() => handleEditRole(role)}
                                                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                                <span>Edit</span>
                                            </button>
                                            <button
                                                onClick={() => handleDeleteRole(role.id)}
                                                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                                <span>Delete</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <span className="text-sm font-medium text-gray-500 w-20">Users:</span>
                                    <span className="text-sm text-gray-900">{role.users}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-sm font-medium text-gray-500 w-20 flex-shrink-0">Description:</span>
                                    <span className="text-sm text-gray-900">{role.description}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {filteredRoles.length === 0 && (
                        <div className="px-6 py-12 text-center text-gray-500">
                            No roles found matching your search.
                        </div>
                    )}
                </div>

                {/* Click outside to close dropdown */}
                {showDropdown && (
                    <div
                        className="fixed inset-0 z-0"
                        onClick={() => setShowDropdown(null)}
                    />
                )}
            </div>
        </div>
    );
}