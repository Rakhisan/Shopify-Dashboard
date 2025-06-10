"use client";
import React, { useState } from "react";
import { Search, Plus, MoreVertical } from "lucide-react";
import "../../globals.css";
import { useRouter } from "next/navigation";

const VendorSetup = () => {
  const [showActionMenu, setShowActionMenu] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  const vendors = [
    {
      id: 1,
      name: "Acme Corp",
      // initial: "A",
      connectionType: "FTP",
      progressValue: 1500,
      progressPercent: 70,
      progressColor: "bg-green-500",
      progressBg: "bg-green-100",
      lastSync: "2025-05-13, 8:00 AM",
      status: "Active",
      statusColor: "text-teal-600 bg-teal-50 border-teal-200",
    },
    {
      id: 2,
      name: "Beta Innovations",
      // initial: "B",
      connectionType: "SFTP",
      progressValue: 1200,
      progressPercent: 65,
      progressColor: "bg-red-500",
      progressBg: "bg-red-100",
      lastSync: "2025-05-15, 8:00 AM",
      status: "Active",
      statusColor: "text-teal-600 bg-teal-50 border-teal-200",
    },
    {
      id: 3,
      name: "Gamma Solutions",
      // initial: "G",
      connectionType: "FTP",
      progressValue: 200,
      progressPercent: 80,
      progressColor: "bg-orange-500",
      progressBg: "bg-gray-700",
      lastSync: "2025-05-18, 8:00 AM",
      status: "Inactive",
      statusColor: "text-red-600 bg-red-50 border-red-200",
    },
    {
      id: 4,
      name: "Delta Technologies",
      // initial: "D",
      connectionType: "FTP",
      progressValue: 1800,
      progressPercent: 30,
      progressColor: "bg-blue-600",
      progressBg: "bg-yellow-400",
      lastSync: "2025-05-10, 8:00 AM",
      status: "Inactive",
      statusColor: "text-red-600 bg-red-50 border-red-200",
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

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 w-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Vendor Setup</h2>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search Vendor Name"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-72 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Add Vendor Button */}
          <button
            onClick={handleAddVendor}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Vendor
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-12 px-4 py-3">
                <input
                  type="checkbox"
                  checked={selectedRows.length === vendors.length}
                  onChange={handleSelectAll}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">
                S.N.
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">
                Vendor Name
              </th>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">
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
              <th className="w-12 px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {vendors.map((vendor, index) => (
              <tr key={vendor.id} className="hover:bg-gray-50">
                {/* Checkbox */}
                <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(vendor.id)}
                    onChange={() => handleRowSelect(vendor.id)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                </td>

                {/* S.N. */}
                <td className="px-4 py-4 text-sm text-gray-600">{vendor.id}</td>

                {/* Vendor Name */}
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    {/* <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {vendor.initial}
                    </div> */}
                    <span className="text-sm text-gray-900 font-medium">
                      {vendor.name}
                    </span>
                  </div>
                </td>

                {/* Connection Type */}
                <td className="px-4 py-4 text-sm text-gray-600">
                  {vendor.connectionType}
                </td>

                {/* Progress */}
                <td className="px-4 py-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Total Product Imported</span>
                      <span className="font-semibold text-gray-700">
                        {vendor.progressValue}
                      </span>
                    </div>
                    <div
                      className={`h-2 rounded-full ${vendor.progressBg} overflow-hidden`}
                    >
                      <div
                        className={`h-full ${vendor.progressColor} rounded-full transition-all duration-300`}
                        style={{ width: `${vendor.progressPercent}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-600 text-right font-semibold">
                      {vendor.progressPercent}%
                    </div>
                  </div>
                </td>

                {/* Last Sync */}
                <td className="px-4 py-4 text-sm text-gray-600">
                  {vendor.lastSync}
                </td>

                {/* Status */}
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex px-5 py-1.5 rounded-half text-xs font-medium border rounded-[4px] ${vendor.statusColor}`}
                  >
                    {vendor.status}
                  </span>
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
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          {vendor.status === "Active" ? "Inactive" : "Active"}
                        </button>
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
