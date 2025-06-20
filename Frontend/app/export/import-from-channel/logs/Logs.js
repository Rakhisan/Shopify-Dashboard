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
        <div className="p-2 w-full  min-h-screen">
            <div className="w-full mx-auto">
                <div className="bg-white rounded-tl-lg p-3 mb-1">
                    <h2 className="text-3xl font-semibold text-[#24282E]">
                        Logs
                    </h2>
                </div>

                <div className="bg-white  overflow-hidden">
                    <table className="w-full">
                        <thead>
                            <tr className=" border-b border-[#E9EAEA]">
                                <th className="text-left py-4 px-6 font-bold text-[#727A90]">
                                    Channel Name
                                </th>
                                <th className="text-left py-4 px-6 font-bold text-[#727A90]">
                                    No of Product
                                </th>
                                <th className="text-left py-4 px-6 font-bold text-[#727A90]">
                                    Last Import
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {logsData.map((row, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-[#E9EAEA] transition-colors duration-200"
                                >
                                    <td className="py-4 px-6 text-[#686F83]">
                                        {row.channelName}
                                    </td>
                                    <td className="py-4 px-6 text-[#686F83]">
                                        {row.noOfProducts.toLocaleString()}
                                    </td>
                                    <td className="py-4 px-6 text-[#686F83]">
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