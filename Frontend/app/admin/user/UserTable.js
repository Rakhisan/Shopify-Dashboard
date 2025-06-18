
'use client';
import React, { useState } from 'react';
import {
  Plus,
  Filter,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Search,
  X
} from 'lucide-react';

export default function UserManagement() {
  const [showCount, setShowCount] = useState(10);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const users = [
    { name: 'John Doe', email: 'john@company.com', role: 'Abc', status: 'Active' },
    { name: 'Alice Smith', email: 'jane@company.com', role: 'Def', status: 'Active' },
    { name: 'Bob Johnson', email: 'mike@company.com', role: 'Ghi', status: 'Inactive' },
    { name: 'Carol Williams', email: 'sara@company.com', role: 'Jkl', status: 'Inactive' },
    { name: 'David Brown', email: 'david@company.com', role: 'Mno', status: 'Active' },
    { name: 'Eve Davis', email: 'emma@company.com', role: 'Pqr', status: 'Active' },
    { name: 'Frank Miller', email: 'chris@company.com', role: 'Stu', status: 'Active' },
    { name: 'Grace Wilson', email: 'lisa@company.com', role: 'Vwx', status: 'Inactive' },
    { name: 'Hannah Moore', email: 'tom@company.com', role: 'Yz', status: 'Inactive' },
    { name: 'Ian Taylor', email: 'nina@company.com', role: 'ABC', status: 'Active' }
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFilterClick = () => {
    setShowSearchBar(!showSearchBar);
    if (showSearchBar) {
      setSearchQuery('');
    }
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <div className="flex justify-between  bg-white p-6 items-center mb-6">
        <h1 className="text-xl font-medium text-gray-900">Users</h1>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
            <Plus size={16} />
            Add User
          </button>
          <button
            onClick={handleFilterClick}
            className="flex items-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
          >
            <Filter size={16} />
            Filters
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {showSearchBar && (
        <div className="mb-4 bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search users by name, email, or role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => {
                setShowSearchBar(false);
                setSearchQuery('');
              }}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Table Card */}
      <div className="bg-white rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-3 px-6 font-medium text-gray-700 text-sm">Name</th>
              <th className="text-left py-3 px-6 font-medium text-gray-700 text-sm">Email</th>
              <th className="text-left py-3 px-6 font-medium text-gray-700 text-sm">Role Name</th>
              <th className="text-left py-3 px-6 font-medium text-gray-700 text-sm">Status</th>
              <th className="py-3 px-6 w-12"></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 text-gray-900 font-medium text-sm">
                  {user.name}
                </td>
                <td className="py-4 px-6 text-gray-600 text-sm">
                  {user.email}
                </td>
                <td className="py-4 px-6 text-gray-600 text-sm">
                  {user.role}
                </td>
                <td className="py-4 px-6">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border ${user.status === 'Active'
                    ? 'bg-green-50 border-green-200 text-green-700'
                    : 'bg-red-50 border-red-200 text-red-700'
                    }`}>
                    {user.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <button className="text-gray-400 hover:text-gray-600 p-1 transition-colors">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination inside card */}
        <div className="flex justify-between items-center p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Show</span>
            <select
              value={showCount}
              onChange={(e) => setShowCount(Number(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Results info */}
      {showSearchBar && searchQuery && (
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredUsers.length} of {users.length} users
        </div>
      )}
    </div>
  );
}