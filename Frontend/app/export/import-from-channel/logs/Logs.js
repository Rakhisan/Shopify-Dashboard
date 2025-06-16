'use client';

import React from 'react';

export default function LogsTable() {
    const logsData = [
        {
            channelName: 'Shopify',
            noOfProducts: 1200,
            lastImport: '2025-06-03 10:21:45'
        },
        {
            channelName: 'Google',
            noOfProducts: 500,
            lastImport: '2025-06-02 11:23:30'
        },
        {
            channelName: 'Amazon',
            noOfProducts: 1800,
            lastImport: '2025-06-01 08:27:50'
        },
        {
            channelName: 'Walmart',
            noOfProducts: 800,
            lastImport: '2025-06-05 02:15:14'
        }
    ];

    return (
        <div className="p-2 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-tl-lg p-3 mb-1">
                    <h2 className="text-3xl text-gray-800">
                        Logs
                    </h2>
                </div>

                <div className="bg-white  overflow-hidden">
                    <table className="w-full">
                        <thead>
                            <tr className=" border-b border-gray-200">
                                <th className="text-left py-4 px-6 font-semibold text-gray-700">
                                    Channel Name
                                </th>
                                <th className="text-left py-4 px-6 font-semibold text-gray-700">
                                    No of Product
                                </th>
                                <th className="text-left py-4 px-6 font-semibold text-gray-700">
                                    Last Import
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {logsData.map((row, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-200 transition-colors duration-200"
                                >
                                    <td className="py-4 px-6 text-gray-800">
                                        {row.channelName}
                                    </td>
                                    <td className="py-4 px-6 text-gray-600">
                                        {row.noOfProducts.toLocaleString()}
                                    </td>
                                    <td className="py-4 px-6 text-gray-600">
                                        {row.lastImport}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}