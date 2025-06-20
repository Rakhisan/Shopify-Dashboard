'use client';
import React, { useState } from 'react';

import shopifyLogo from "../../../images/logo.png";
import Image from "next/image";

const VendorStatusDashboard = () => {
    const [exportData, setExportData] = useState([
        {
            id: 1,
            savedSearch: 'Shreyash',
            priceProfile: 'Britways +10%',
            frequency: 10,
            noOfProduct: 100,
            lastExport: '2025-05-12, 8:15 PM',
            status: true
        },
        {
            id: 2,
            savedSearch: 'TJ',
            priceProfile: 'ABC +10%',
            frequency: 50,
            noOfProduct: 150,
            lastExport: '2025-05-16, 8:15 PM',
            status: false
        },
        {
            id: 3,
            savedSearch: 'Shreyash',
            priceProfile: 'ERF +10%',
            frequency: 8,
            noOfProduct: 40,
            lastExport: '2025-05-18, 8:15 PM',
            status: true
        }
    ]);

    const toggleStatus = (id) => {
        setExportData(prev =>
            prev.map(item =>
                item.id === id ? { ...item, status: !item.status } : item
            )
        );
    };

    const ToggleSwitch = ({ isOn, onToggle }) => (
        <div
            className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors ${isOn ? 'bg-[#2FB4FF]' : 'bg-[#BFBFBF]'
                }`}
            onClick={onToggle}
        >
            <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isOn ? 'translate-x-6' : 'translate-x-1'
                    }`}
            />
        </div>
    );



    return (
        <div className="mx-auto p-6 min-h-screen">

            <div className="bg-white mb-0.5">
                <div className="flex items-center justify-between p-6 border-b border-[#E9EAEA] rounded-tl-lg">
                    <h2 className="text-xl font-semibold text-[#24282E]">Vendor Status</h2>

                </div>
            </div>

            {/*  Table Card */}
            <div className="bg-white  mb-1">
                <div className="overflow-x-auto p-6">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-sm text-[#727A90] border-b border-[#E9EAEA]">
                                <th className="pb-4 font-bold border-[#E9EAEA] pr-4">Icon</th>
                                <th className="pb-4 font-bold border-[#E9EAEA] px-4">FTP</th>
                                <th className="pb-4 font-bold border-[#E9EAEA] px-4">Password</th>
                                <th className="pb-4 font-bold pl-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-100">
                                <td className="py-4 border-[#E9EAEA] pr-4">
                                    <div className="flex items-center">
                                        <div className="flex items-center justify-center mr-3">
                                            <Image
                                                src={shopifyLogo}
                                                alt="Shopify"
                                                width={90}
                                                height={90}

                                            />

                                        </div>

                                    </div>
                                </td>
                                <td className="py-4 text-[#686F83] text-sm border-[#E9EAEA] px-4">Electronics In-Stock</td>
                                <td className="py-4 text-[#686F83] text-sm border-[#E9EAEA] px-4">
                                    ABCerAWEFSXCXVFDEFWEGFRGVFSZASWdsaweff
                                </td>
                                <td className="py-4 pl-4">
                                    <span className="px-3 py-1 bg-[#EAFFC3]  border border-[#66914A] text-[#4B6E07] rounded-full text-sm font-bold">
                                        Connected
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



            {/* Currently exporting to channel Section */}
            {/* Heading Card */}
            <div className="bg-white  p-6 mb-0.5">
                <h2 className="text-xl font-semibold text-[#24282E]">Currently exporting to channel</h2>
            </div>

            {/* Table Card */}
            <table className="min-w-full divide-y divide-[#E9EAEA] border-t border-b">
                <thead className="bg-white">
                    <tr>
                        <th scope="col" className="px-4 py-3  border-r text-left text-sm font-bold text-[#727A90]">Saved Search</th>
                        <th scope="col" className="px-4 py-3 text-left text-sm border-r  font-bold text-[#727A90]">Price Profile</th>
                        <th scope="col" className="px-4 py-3 text-left text-sm border-r  font-bold text-[#727A90]">Frequency</th>
                        <th scope="col" className="px-4 py-3 text-left text-sm border-r  font-bold text-[#727A90]">No. of Products</th>
                        <th scope="col" className="px-4 py-3 text-left text-sm border-r  font-bold text-[#727A90]">Last Export</th>
                        <th scope="col" className="px-4 py-3 text-left text-sm  border-r font-bold text-[#727A90]">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 text-sm text-[#686F83]">
                    {exportData.map((item) => (
                        <tr key={item.id}>
                            <td className="px-7  py-3 border-r  font-medium text-gray-800">{item.savedSearch}</td>
                            <td className="px-7  py-3 border-r  text-[#686F83]">{item.priceProfile}</td>
                            <td className="px-4 py-3  border-r text-[#686F83]">{item.frequency}</td>
                            <td className="px-4 py-3 border-r  text-[#686F83]">{item.noOfProduct}</td>
                            <td className="px-4 py-3  border-r text-[#686F83]">{item.lastExport}</td>
                            <td className="px-4 py-3">
                                <ToggleSwitch
                                    isOn={item.status}
                                    onToggle={() => toggleStatus(item.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
};

export default VendorStatusDashboard;