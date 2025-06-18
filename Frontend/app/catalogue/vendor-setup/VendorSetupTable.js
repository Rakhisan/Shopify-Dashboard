"use client";
import React, { useState } from "react";
import { Search, Plus, MoreVertical } from "lucide-react";
import "../../globals.css";
import { useRouter } from "next/navigation";

const VendorSetup = () => {
  const [showActionMenu, setShowActionMenu] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const vendors = [
    {
      id: 1,
      name: "Acme Corp",
      // initial: "A",
      connectionType: "FTP",
      progressValue: 1500,
      progressPercent: 70,
      progressColor: "bg-[#66914A]",
      progressBg: "bg-[#98C050]",
      lastSync: "2025-05-13, 8:00 AM",
      status: "Active",
      priority: "1",
      statusColor: "text-teal-700 bg-[#E6F4F5] border border-[#009499] rounded-full",
    },
    {
      id: 2,
      name: "Beta Innovations",
      // initial: "B",
      connectionType: "SFTP",
      progressValue: 1200,
      progressPercent: 65,
      progressColor: "bg-[#FF302F]",
      progressBg: "bg-[#FF9C9C]",
      lastSync: "2025-05-15, 8:00 AM",
      status: "Active",
      priority: "2",

      statusColor: "text-teal-600  bg-[#E6F4F5] border border-[#009499] rounded-full",
    },
    {
      id: 3,
      name: "Gamma Solutions",
      // initial: "G",
      connectionType: "FTP",
      progressValue: 200,
      progressPercent: 80,
      progressColor: "bg-[#FF9A00]",
      progressBg: "bg-[#292929]",
      lastSync: "2025-05-18, 8:00 AM",
      status: "Inactive",


      statusColor: "text-red-600 bg-[#FFD5D6] border-[#FF6365] rounded-full",
    },
    {
      id: 4,
      name: "Delta Technologies",
      // initial: "D",
      connectionType: "FTP",
      progressValue: 1800,
      progressPercent: 30,
      progressColor: "bg-[#0073D5]",
      progressBg: "bg-[#FFB200]",
      lastSync: "2025-05-10, 8:00 AM",
      status: "Inactive",

      statusColor: "text-red-600 bg-[#FFD5D6] border-[#FF6365] rounded-full",
    },
  ];

  const router = useRouter();

  const handleAddVendor = () => {
    router.push("/catalogue/vendor-setup/add");
  };

  const handleEditVendor = () => {
    router.push("/catalogue/vendor-setup/edit");
  };

  const toggleActionMenu = (index) => {
    setShowActionMenu(showActionMenu === index ? null : index);
  };

  const handleRowSelect = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === vendors.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(vendors.map((vendor) => vendor.id));
    }
  };

  // You'll also need to add this handler function to your component
  const handlePriorityChange = (vendorId, newPriority) => {
    // Update the vendor's priority in your state/data
    setVendors(
      vendors.map((vendor) =>
        vendor.id === vendorId ? { ...vendor, priority: newPriority } : vendor
      )
    );
  };

  return (
    <div className="bg-white rounded-lg  border border-gray-200 w-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Vendor Setup</h2>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-50 pl-10 pr-4 py-2 border border-[#D5D5D5] rounded-lg focus:border-2 focus:border-[#2FB4FF] focus:outline-none"
            />
          </div>

          {/* Add Vendor Button */}
          <button
            onClick={handleAddVendor}
            className="flex items-center gap-2 bg-[#2FB4FF] text-white px-4 py-2 rounded-lg text-sm font-medium  transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Vendor
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b">
            <tr>
              {/* <th className="w-12 px-4 py-3">
                <input
                  type="checkbox"
                  checked={selectedRows.length === vendors.length}
                  onChange={handleSelectAll}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
              </th> */}
              {/* <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">
                S.N.
              </th> */}

              <th className="text-left px-4 py-4 text-sm font-medium text-gray-700">
                Vendor Name
              </th>
              <th className="text-left px-4 py-4 text-sm font-medium text-gray-700">
                Connection Type
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">
                Progress
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">
                Last Sync
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">
                Status
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">
                Priority
              </th>
              <th className="w-12 px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {vendors.map((vendor, index) => (
              <tr key={vendor.id}>
                {/* Checkbox */}
                {/* <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(vendor.id)}
                    onChange={() => handleRowSelect(vendor.id)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                </td> */}

                {/* S.N. */}
                {/* <td className="px-4 py-4 text-sm text-gray-600">{vendor.id}</td> */}

                {/* Vendor Name */}
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    {/* <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {vendor.initial}
                    </div> */}
                    <span className="text-sm font-medium  text-[#686F83]">
                      {vendor.name}
                    </span>
                  </div>
                </td>

                {/* Connection Type */}
                <td className="px-4 py-4 text-sm font-medium  text-[#686F83]">
                  {vendor.connectionType}
                </td>

                {/* Progress */}
                <td className="px-4 py-4">
                  <div className="space-y-2">
                    <div className="flex justify-between font-medium text-xs text-[#686F83]">
                      <span>Total Product Imported</span>
                      <span className="font-semibold text-gray-700">
                        {vendor.progressValue}
                      </span>
                    </div>
                    <div
                      className={`h-3 rounded-full ${vendor.progressBg} overflow-hidden`}
                    >
                      <div
                        className={`h-full ${vendor.progressColor} rounded-full  font-medium  transition-all duration-300`}
                        style={{ width: `${vendor.progressPercent}%` }}
                      ></div>
                    </div>
                    <div className="text-xs  font-medium  text-[#686F83] text-right font-semibold">
                      {vendor.progressPercent}%
                    </div>
                  </div>
                </td>

                {/* Last Sync */}
                <td className="px-4 py-4 font-medium  text-sm text-[#686F83]">
                  {vendor.lastSync}
                </td>

                {/* Status */}
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex px-5 py-1.5 text-xs font-medium border  ${vendor.statusColor}`}
                  >
                    {vendor.status}
                  </span>
                </td>

                {/* Priority */}
                <td className="px-4 py-4 text-sm text-[#686F83]">
                  {vendor.status === "Active" ? (
                    <select
                      value={vendor.priority}
                      onChange={(e) =>
                        handlePriorityChange(vendor.id, e.target.value)
                      }
                      className="w-full px-2 py-1 text-sm font-medium  rounded-md focus:outline-none  focus:transparent"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  ) : (
                    <span className="text-gray-400">{vendor.priority}</span>
                  )}
                </td>

                {/* Actions */}
                <td className="px-4 py-4 relative">
                  <button
                    onClick={() => toggleActionMenu(index)}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <MoreVertical className="w-4 h-4 text-gray-500" />
                  </button>

                  {showActionMenu === index && (
                    <div className="absolute right-8 top-8 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-32">
                      <div className="py-1">

                        <button
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          onClick={handleEditVendor}
                        >
                          Edit
                        </button>
                        <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorSetup;
