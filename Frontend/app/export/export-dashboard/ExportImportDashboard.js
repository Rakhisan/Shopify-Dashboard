'use client';

import React from "react";
import amazonLogo from "../../images/logo_amazon.png";
import googleLogo from "../../images/logo_google.png";
import walmartLogo from "../../images/logo_walmart.png";
import shopifyLogo from "../../images/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ExportImportDashboard() {
  const router = useRouter();

  const handleViewLogs = () => {
    router.push("/export/import-from-channel/logs");
  };

  const handleExport = () => {
    router.push("/export/export-to-channel");
  };

  const handleVendor = () => {
    router.push("/catalogue/vendor-setup");
  };


  return (
    <div className="p-4 md:p-6 lg:p-8 m-0 bg-white min-h-screen">
      {/* Export Status Section */}
      <div className="mb-8 lg:mb-12">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
          <h2 className="text-xl sm:text-2xl font-normal text-[#101010] m-0">Export Status</h2>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <button className="border border-[#BFBFBF] rounded-lg px-3.5 py-2 text-sm text-[#727A90] cursor-pointer transition-colors">
              Configure Export
            </button>
            <button
              className="bg-[#2FB4FF] border-none rounded-lg px-3.5 py-2 text-sm text-white cursor-pointer hover:bg-[#0EA5E9] transition-colors"
              onClick={handleViewLogs}
            >
              View Logs
            </button>
          </div>
        </div>

        {/* Responsive Grid for Export Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-2">
          {/* Shopify Card */}
          <div
            className="bg-white rounded-xl w-[260px] h-[386px] p-5 flex flex-col justify-between relative transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 mx-auto"
            style={{ boxShadow: '4px 5px 4px -1px #0003, 6px 6px 5px #0000001A, 5px 4px 10px #00000017' }}
            onClick={handleExport}
          >
            <div className="h-20 flex items-center justify-center mb-4">
              <Image
                src={shopifyLogo}
                alt="Shopify"
                width={150}
                height={80}
                className="max-w-full max-h-full object-contain mt-12"
              />
            </div>

            <div className="flex-1 flex flex-col justify-end">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#727272] font-normal text-sm">Products Exported</span>
                  <span className="text-[#0F5A84] text-sm bg-[#D5F0FF] px-2 py-0.5 rounded whitespace-nowrap">5,000 SKUs</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Last Export</span>
                  <span className="text-[#0F5A84] text-sm bg-[#D5F0FF] px-2 py-0.5 rounded-lg whitespace-nowrap">
                    2025-05-14, 10:30 AM
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Status</span>
                  <span className="text-[#2FB4FF] px-2 py-0.5 rounded text-sm font-medium">
                    Success
                  </span>
                </div>
              </div>

              <button className="bg-[#2FB4FF] text-white border-none rounded-lg px-0 py-2 w-full text-center text-sm cursor-pointer hover:bg-[#0EA5E9] transition-colors">
                See more
              </button>
            </div>
          </div>

          {/* Google Card */}
          <div
            className="bg-white rounded-xl w-[260px] h-[386px] p-5 flex flex-col justify-between relative transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 mx-auto"
            style={{ boxShadow: '4px 5px 4px -1px #0003, 6px 6px 5px #0000001A, 5px 4px 10px #00000017' }}
            onClick={handleExport}
          >
            <div className="h-20 flex items-center justify-center mb-4">
              <Image
                src={googleLogo}
                alt="Google"
                width={150}
                height={80}
                className="max-w-full max-h-full object-contain mt-12"
              />
            </div>

            <div className="flex-1 flex flex-col justify-end">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Products Exported</span>
                  <span className="text-[#0F5A84] text-sm bg-[#D5F0FF] px-2 py-0.5 rounded whitespace-nowrap">2,000 SKUs</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Last Export</span>
                  <span className="text-[#0F5A84] text-sm bg-[#D5F0FF] px-2 py-0.5 rounded-lg whitespace-nowrap">
                    2025-05-14, 10:30 AM
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Status</span>
                  <span className="text-[#FFC300] px-2 py-0.5 rounded text-sm font-medium">
                    Pending
                  </span>
                </div>
              </div>

              <button className="bg-[#2FB4FF] text-white border-none rounded-lg px-0 py-2 w-full text-center text-sm cursor-pointer hover:bg-[#0EA5E9] transition-colors">
                See more
              </button>
            </div>
          </div>

          {/* Amazon Card */}
          <div
            className="bg-white rounded-xl w-[260px] h-[386px] p-5 flex flex-col justify-between relative transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 mx-auto"
            style={{ boxShadow: '4px 5px 4px -1px #0003, 6px 6px 5px #0000001A, 5px 4px 10px #00000017' }}
            onClick={handleExport}
          >
            <div className="h-20 flex items-center justify-center mb-4 ">
              <Image
                src={amazonLogo}
                alt="Amazon"
                width={150}
                height={80}
                className="max-w-full max-h-full object-contain mt-12"
              />
            </div>

            <div className="flex-1 flex flex-col justify-end">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Products Exported</span>
                  <span className="text-[#0F5A84] text-sm bg-[#D5F0FF] px-2 py-0.5 rounded whitespace-nowrap">300 SKUs</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Last Export</span>
                  <span className="text-[#0F5A84] text-sm bg-[#D5F0FF] px-2 py-0.5 rounded-lg whitespace-nowrap">
                    2025-05-14, 10:30 AM
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Status</span>
                  <span className="text-[#E80054] px-2 py-0.5 rounded text-sm font-medium">
                    Failed
                  </span>
                </div>
              </div>

              <button className="bg-[#2FB4FF] text-white border-none rounded-lg px-0 py-2 w-full text-center text-sm cursor-pointer hover:bg-[#0EA5E9] transition-colors">
                See more
              </button>
            </div>
          </div>

          {/* Walmart Card */}
          <div
            className="bg-white rounded-xl w-[260px] h-[386px] p-5 flex flex-col justify-between relative transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 mx-auto"
            style={{ boxShadow: '4px 5px 4px -1px #0003, 6px 6px 5px #0000001A, 5px 4px 10px #00000017' }}
            onClick={handleExport}
          >
            <div className="h-20 flex items-center justify-center mb-4">
              <Image
                src={walmartLogo}
                alt="Walmart"
                width={150}
                height={80}
                className="max-w-full max-h-full object-contain mt-12"
              />
            </div>

            <div className="flex-1 flex flex-col justify-end">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Products Exported</span>
                  <span className="text-[#0F5A84] text-sm bg-[#D5F0FF] px-2 py-0.5 rounded whitespace-nowrap">3,500 SKUs</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Last Export</span>
                  <span className="text-[#0F5A84] text-sm bg-[#D5F0FF] px-2 py-0.5 rounded-lg whitespace-nowrap">
                    2025-05-14, 10:30 AM
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Status</span>
                  <span className="text-[#00A656] px-2 py-0.5 rounded text-sm font-medium">
                    In Progress
                  </span>
                </div>
              </div>

              <button className="bg-[#2FB4FF] text-white border-none rounded-lg px-0 py-2 w-full text-center text-sm cursor-pointer hover:bg-[#0EA5E9] transition-colors">
                See more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Import Status Section */}
      <div className="mb-8 lg:mb-12">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
          <h2 className="text-xl sm:text-2xl font-normal text-[#101010] m-0">Import Status</h2>
          <div className="flex flex-col sm:flex-row gap-2.5">
            <button className="border border-[#BFBFBF] rounded-lg px-3.5 py-2 text-sm text-[#727A90] cursor-pointer hover:bg-gray-50 transition-colors">
              Configure Import
            </button>
            <button
              className="bg-[#2FB4FF] border-none rounded-lg px-3.5 py-2 text-sm text-white cursor-pointer hover:bg-[#0EA5E9] transition-colors"
              onClick={handleViewLogs}
            >
              View Logs
            </button>
          </div>
        </div>

        {/* Responsive Grid for Import Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {/* Acme Corp Card */}
          <div className="bg-white rounded-xl w-[260px] h-[386px] p-5 flex flex-col justify-between relative transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 mx-auto"
            style={{ boxShadow: '4px 5px 4px -1px #0003, 6px 6px 5px #0000001A, 5px 4px 10px #00000017' }}>
            <div className="h-20 flex items-center justify-center mb-4">
              <div className="text-xl font-medium text-[#686F83] text-center mt-12 " onClick={handleVendor}>Acme Corp</div>
            </div>

            <div className="flex-1 flex flex-col justify-end">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Products Exported</span>
                  <span className="text-[#0F5A84] text-sm bg-[#D5F0FF] px-2 py-0.5 rounded whitespace-nowrap">5,000 SKUs</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Last Export</span>
                  <span className="text-[#0F5A84] text-sm bg-[#D5F0FF] px-2 py-0.5 rounded-lg whitespace-nowrap">
                    2025-05-14, 10:30 AM
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Status</span>
                  <span className="text-[#2FB4FF] px-2 py-0.5 rounded text-sm font-medium">
                    Success
                  </span>
                </div>
              </div>

              <button className="bg-[#2FB4FF] text-white border-none rounded-lg px-0 py-2 w-full text-center text-sm cursor-pointer hover:bg-[#0EA5E9] transition-colors">
                See more
              </button>
            </div>
          </div>

          {/* Beta Innovations Card */}
          <div className="bg-white rounded-xl w-[260px] h-[386px] p-5 flex flex-col justify-between relative transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 mx-auto"
            style={{ boxShadow: '4px 5px 4px -1px #0003, 6px 6px 5px #0000001A, 5px 4px 10px #00000017' }}>
            <div className="h-20 flex items-center justify-center mb-4">
              <div className="text-xl font-medium text-[#686F83] text-center mt-12" onClick={handleVendor}>Beta Innovations</div>
            </div>

            <div className="flex-1 flex flex-col justify-end">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Products Imported</span>
                  <span className="text-[#0F5A84] text-sm bg-[#D5F0FF] px-2 py-0.5 rounded whitespace-nowrap">1,200 SKUs</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Review Process</span>
                  <span className="text-[#0F5A84] text-sm bg-[#D5F0FF] px-2 py-0.5 rounded whitespace-nowrap">2025-05-14, 10:30 AM</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Status</span>
                  <span className="text-[#FFC300] px-2 py-0.5 rounded text-sm font-medium">
                    Pending
                  </span>
                </div>
              </div>

              <button className="bg-[#2FB4FF] text-white border-none rounded-lg px-0 py-2 w-full text-center text-sm cursor-pointer hover:bg-[#0EA5E9] transition-colors">
                See more
              </button>
            </div>
          </div>

          {/* Gamma Solutions Card */}
          <div className="bg-white rounded-xl w-[260px] h-[386px] p-5 flex flex-col justify-between relative transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 mx-auto"
            style={{ boxShadow: '4px 5px 4px -1px #0003, 6px 6px 5px #0000001A, 5px 4px 10px #00000017' }}>
            <div className="h-20 flex items-center justify-center mb-4">
              <div className="text-xl font-medium text-[#686F83] text-center mt-12" onClick={handleVendor}>Gamma Solutions</div>
            </div>

            <div className="flex-1 flex flex-col justify-end">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Products Imported</span>
                  <span className="text-[#0F5A84] text-sm bg-[#D5F0FF] px-2 py-0.5 rounded whitespace-nowrap">300 SKUs</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Error Log</span>
                  <span className="text-[#0F5A84] text-sm bg-[#D5F0FF] px-2 py-0.5 rounded whitespace-nowrap">2025-05-12, 4:20 PM</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Status</span>
                  <span className="text-[#E80054] px-2 py-0.5 rounded text-sm font-medium">
                    Failed
                  </span>
                </div>
              </div>

              <button className="bg-[#2FB4FF] text-white border-none rounded-lg px-0 py-2 w-full text-center text-sm cursor-pointer hover:bg-[#0EA5E9] transition-colors">
                See more
              </button>
            </div>
          </div>

          {/* Delta Technologies Card */}
          <div className="bg-white rounded-xl w-[260px] h-[386px] p-5 flex flex-col justify-between relative transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 mx-auto"
            style={{ boxShadow: '4px 5px 4px -1px #0003, 6px 6px 5px #0000001A, 5px 4px 10px #00000017' }}>
            <div className="h-20 flex items-center justify-center mb-4">
              <div className="text-xl font-medium text-[#686F83] text-center mt-12" onClick={handleVendor}>Delta Technologies</div>
            </div>

            <div className="flex-1 flex flex-col justify-end">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Products Imported</span>
                  <span className="text-[#0F5A84] text-sm bg-[#D5F0FF] px-2 py-0.5 rounded whitespace-nowrap">2,500 SKUs</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Last Export</span>
                  <span className="text-[#0F5A84] text-sm bg-[#D5F0FF] px-2 py-0.5 rounded-lg whitespace-nowrap">
                    2025-05-14, 10:30 AM
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#727272] text-sm">Status</span>
                  <span className="text-[#00A656] px-2 py-0.5 rounded text-sm font-medium">
                    Completed
                  </span>
                </div>
              </div>

              <button className="bg-[#2FB4FF] text-white border-none rounded-lg px-0 py-2 w-full text-center text-sm cursor-pointer hover:bg-[#0EA5E9] transition-colors">
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}