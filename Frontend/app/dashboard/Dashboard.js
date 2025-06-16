"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Import images - Next.js recommended way
import amazonLogo from "../images/logo_amazon.png";
import googleLogo from "../images/logo_google.png";
import walmartLogo from "../images/logo_walmart.png";
import ebayLogo from "../images/logo_ebay.png";
import shopifyLogo from "../images/logo.png";

export default function ProductDashboard() {
  // State for all sliders
  const [amazonPercentage, setAmazonPercentage] = useState(50);
  const [googlePercentage, setGooglePercentage] = useState(30);
  const [walmartPercentage, setWalmartPercentage] = useState(20);
  const [ebayPercentage, setEbayPercentage] = useState(15);
  const [acmePercentage, setAcmePercentage] = useState(50);
  const [betaPercentage, setBetaPercentage] = useState(30);
  const [gammaPercentage, setGammaPercentage] = useState(20);

  const router = useRouter();
  // Image size configuration - You can easily change these values
  const imageConfig = {
    amazon: { width: 120, height: 48 },
    google: { width: 100, height: 48 },
    walmart: { width: 110, height: 48 },
    ebay: { width: 90, height: 48 },
  };

  const handleExport = () => {
    router.push("/export/export-to-channel");
  };

  return (
    <div className="flex gap-8 w-full max-w-[1175px] min-h-[60vh]  mb-8 flex-col xl:flex-row xl:gap-8 lg:flex-col lg:gap-6  md:flex-col md:gap-4 sm:gap-2">
      {/* Export to Channels Container - 60% width */}
      <div className="bg-[#f1f1f1] p-8 rounded-lg font-[Helvetica] flex flex-col gap-6 w-[70%] xl:p-8 xl:w-[70%] lg:p-6 lg:w-full md:p-4 md:w-full sm:p-3 sm:w-full">
        <div className="flex justify-start items-center">
          <h2 className="text-2xl font-normal text-[#101010] xl:text-2xl lg:text-xl md:text-lg sm:text-base">
            Export to Channels
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 xl:grid-cols-2 xl:gap-6 lg:grid-cols-2 lg:gap-4 md:grid-cols-1 md:gap-3 sm:grid-cols-1 sm:gap-3 overflow-y-auto scrollbar-thin scrollbar-thumb-sky-400 scrollbar-track-gray-100 hover:scrollbar-thumb-sky-500 pr-4 max-h-[405px]">
          {/* Amazon Card */}
          <div
            onClick={handleExport}
            className="bg-white rounded-lg p-4 shadow-sm relative transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-0.5 hover:shadow-[#ff9a001a] xl:p-4 lg:p-3 md:p-3 sm:p-2"
          >
            <div className="flex justify-between items-center mb-6 xl:mb-6 lg:mb-4 md:mb-4 sm:mb-3">
              <div className="flex items-center justify-start min-h-[40px]">
                <Image
                  src={shopifyLogo}
                  alt="Amazon logo"
                  className="object-contain"
                  width={imageConfig.amazon.width}
                  height={imageConfig.amazon.height}
                  style={{
                    width: `${imageConfig.amazon.width}px`,
                    height: `${imageConfig.amazon.height}px`,
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
              <button className="text-2xl font-bold text-gray-600 bg-none border-none cursor-pointer transition-colors duration-300 hover:text-red-500 xl:text-2xl lg:text-xl md:text-lg sm:text-base">
                ...
              </button>
            </div>

            <div className="mt-8 xl:mt-8 lg:mt-6 md:mt-6 sm:mt-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-600 mb-2 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs">
                  Total Product Sent
                </p>
                <p className="text-gray-600 mb-2 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs">
                  {Math.round((amazonPercentage / 100) * 1200)}
                </p>
              </div>
              <div className="relative pt-2">
                <div className="h-2 bg-[#89d5ff] rounded-full xl:h-2 lg:h-2 md:h-1.5 sm:h-1">
                  <div
                    className="h-2 bg-[#2fb4ff] rounded-full transition-all duration-300 xl:h-2 lg:h-2 md:h-1.5 sm:h-1"
                    style={{ width: `${amazonPercentage}%` }}
                  ></div>
                </div>
                <div
                  className="absolute top-0 -translate-x-1/2 transition-all duration-300"
                  style={{ left: `${amazonPercentage}%` }}
                >
                  <div className="w-5 h-5 bg-blue-400 rounded-full border-2 border-white shadow-sm transition-all duration-300 hover:shadow-md hover:scale-110 xl:w-5 xl:h-5 lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-3 sm:h-3"></div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={amazonPercentage}
                  onChange={(e) =>
                    setAmazonPercentage(parseInt(e.target.value))
                  }
                  className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer"
                  style={{
                    background: "transparent",
                    WebkitAppearance: "none",
                    appearance: "none",
                  }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <p className="text-gray-600 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs"></p>
                <p className="text-gray-600 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs">
                  {amazonPercentage}%
                </p>
              </div>
            </div>
          </div>

          {/* Google Card */}
          <div
            onClick={handleExport}
            className="bg-white rounded-lg p-4 shadow-sm relative transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-0.5 hover:shadow-[#ff9a001a] xl:p-4 lg:p-3 md:p-3 sm:p-2"
          >
            <div className="flex justify-between items-center mb-6 xl:mb-6 lg:mb-4 md:mb-4 sm:mb-3">
              <div className="flex items-center justify-start min-h-[40px]">
                <Image
                  src={googleLogo}
                  alt="Google logo"
                  className="object-contain"
                  width={imageConfig.google.width}
                  height={imageConfig.google.height}
                  style={{
                    width: `${imageConfig.google.width}px`,
                    height: `${imageConfig.google.height}px`,
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
              <button className="text-2xl font-bold text-gray-600 bg-none border-none cursor-pointer transition-colors duration-300 hover:text-red-500 xl:text-2xl lg:text-xl md:text-lg sm:text-base">
                ...
              </button>
            </div>

            <div className="mt-8 xl:mt-8 lg:mt-6 md:mt-6 sm:mt-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-600 mb-2 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs">
                  Total Product Sent
                </p>
                <p className="text-gray-600 mb-2 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs">
                  {Math.round((googlePercentage / 100) * 800)}
                </p>
              </div>
              <div className="relative pt-2">
                <div className="h-2 bg-[#fdc7c6] rounded-full xl:h-2 lg:h-2 md:h-1.5 sm:h-1">
                  <div
                    className="h-2 bg-[#ff302f] rounded-full transition-all duration-300 xl:h-2 lg:h-2 md:h-1.5 sm:h-1"
                    style={{ width: `${googlePercentage}%` }}
                  ></div>
                </div>
                <div
                  className="absolute top-0 -translate-x-1/2 transition-all duration-300"
                  style={{ left: `${googlePercentage}%` }}
                >
                  <div className="w-5 h-5 bg-red-500 rounded-full border-2 border-white shadow-sm transition-all duration-300 hover:shadow-md hover:scale-110 xl:w-5 xl:h-5 lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-3 sm:h-3"></div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={googlePercentage}
                  onChange={(e) =>
                    setGooglePercentage(parseInt(e.target.value))
                  }
                  className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer"
                  style={{
                    background: "transparent",
                    WebkitAppearance: "none",
                    appearance: "none",
                  }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <p className="text-gray-600 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs"></p>
                <p className="text-gray-600 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs">
                  {googlePercentage}%
                </p>
              </div>
            </div>
          </div>

          {/* Walmart Card */}
          <div
            onClick={handleExport}
            className="bg-white rounded-lg p-4 shadow-sm relative transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-0.5 hover:shadow-[#ff9a001a] xl:p-4 lg:p-3 md:p-3 sm:p-2"
          >
            <div className="flex justify-between items-center mb-6 xl:mb-6 lg:mb-4 md:mb-4 sm:mb-3">
              <div className="flex items-center justify-start min-h-[40px]">
                <Image
                  src={walmartLogo}
                  alt="Walmart logo"
                  className="object-contain"
                  width={imageConfig.walmart.width}
                  height={imageConfig.walmart.height}
                  style={{
                    width: `${imageConfig.walmart.width}px`,
                    height: `${imageConfig.walmart.height}px`,
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
              <button className="text-2xl font-bold text-gray-600 bg-none border-none cursor-pointer transition-colors duration-300 hover:text-red-500 xl:text-2xl lg:text-xl md:text-lg sm:text-base">
                ...
              </button>
            </div>

            <div className="mt-8 xl:mt-8 lg:mt-6 md:mt-6 sm:mt-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-600 mb-2 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs">
                  Total Product Sent
                </p>
                <p className="text-gray-600 mb-2 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs">
                  {Math.round((walmartPercentage / 100) * 400)}
                </p>
              </div>
              <div className="relative pt-2">
                <div className="h-2 bg-[#fdc7c6] rounded-full xl:h-2 lg:h-2 md:h-1.5 sm:h-1">
                  <div
                    className="h-2 bg-[#ff302f] rounded-full transition-all duration-300 xl:h-2 lg:h-2 md:h-1.5 sm:h-1"
                    style={{ width: `${walmartPercentage}%` }}
                  ></div>
                </div>
                <div
                  className="absolute top-0 -translate-x-1/2 transition-all duration-300"
                  style={{ left: `${walmartPercentage}%` }}
                >
                  <div className="w-5 h-5 bg-red-500 rounded-full border-2 border-white shadow-sm transition-all duration-300 hover:shadow-md hover:scale-110 xl:w-5 xl:h-5 lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-3 sm:h-3"></div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={walmartPercentage}
                  onChange={(e) =>
                    setWalmartPercentage(parseInt(e.target.value))
                  }
                  className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer"
                  style={{
                    background: "transparent",
                    WebkitAppearance: "none",
                    appearance: "none",
                  }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <p className="text-gray-600 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs"></p>
                <p className="text-gray-600 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs">
                  {walmartPercentage}%
                </p>
              </div>
            </div>
          </div>

          {/* eBay Card */}
          <div
            onClick={handleExport}
            className="bg-white rounded-lg p-4 shadow-sm relative transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-0.5 hover:shadow-[#ff9a001a] xl:p-4 lg:p-3 md:p-3 sm:p-2"
          >
            <div className="flex justify-between items-center mb-6 xl:mb-6 lg:mb-4 md:mb-4 sm:mb-3">
              <div className="flex items-center justify-start min-h-[40px]">
                <Image
                  src={ebayLogo}
                  alt="eBay logo"
                  className="object-contain"
                  width={imageConfig.ebay.width}
                  height={imageConfig.ebay.height}
                  style={{
                    width: `${imageConfig.ebay.width}px`,
                    height: `${imageConfig.ebay.height}px`,
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
              <button className="text-2xl font-bold text-gray-600 bg-none border-none cursor-pointer transition-colors duration-300 hover:text-red-500 xl:text-2xl lg:text-xl md:text-lg sm:text-base">
                ...
              </button>
            </div>

            <div className="mt-8 xl:mt-8 lg:mt-6 md:mt-6 sm:mt-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-600 mb-2 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs">
                  Overall Items Delivered
                </p>
                <p className="text-gray-600 mb-2 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs">
                  {Math.round((ebayPercentage / 100) * 350)}
                </p>
              </div>
              <div className="relative pt-2">
                <div className="h-2 bg-[#89d5ff] rounded-full xl:h-2 lg:h-2 md:h-1.5 sm:h-1">
                  <div
                    className="h-2 bg-[#2fb4ff] rounded-full transition-all duration-300 xl:h-2 lg:h-2 md:h-1.5 sm:h-1"
                    style={{ width: `${ebayPercentage}%` }}
                  ></div>
                </div>
                <div
                  className="absolute top-0 -translate-x-1/2 transition-all duration-300"
                  style={{ left: `${ebayPercentage}%` }}
                >
                  <div className="w-5 h-5 bg-blue-400 rounded-full border-2 border-white shadow-sm transition-all duration-300 hover:shadow-md hover:scale-110 xl:w-5 xl:h-5 lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-3 sm:h-3"></div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={ebayPercentage}
                  onChange={(e) => setEbayPercentage(parseInt(e.target.value))}
                  className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer"
                  style={{
                    background: "transparent",
                    WebkitAppearance: "none",
                    appearance: "none",
                  }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <p className="text-gray-600 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs"></p>
                <p className="text-gray-600 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs">
                  {ebayPercentage}%
                </p>
              </div>
            </div>
          </div>

          {/* Amazon Card */}
          <div
            onClick={handleExport}
            className="bg-white rounded-lg p-4 shadow-sm relative transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-0.5 hover:shadow-[#ff9a001a] xl:p-4 lg:p-3 md:p-3 sm:p-2"
          >
            <div className="flex justify-between items-center mb-6 xl:mb-6 lg:mb-4 md:mb-4 sm:mb-3">
              <div className="flex items-center justify-start min-h-[40px]">
                <Image
                  src={amazonLogo}
                  alt="eBay logo"
                  className="object-contain"
                  width={imageConfig.ebay.width}
                  height={imageConfig.ebay.height}
                  style={{
                    width: `${imageConfig.ebay.width}px`,
                    height: `${imageConfig.ebay.height}px`,
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
              <button className="text-2xl font-bold text-gray-600 bg-none border-none cursor-pointer transition-colors duration-300 hover:text-red-500 xl:text-2xl lg:text-xl md:text-lg sm:text-base">
                ...
              </button>
            </div>

            <div className="mt-8 xl:mt-8 lg:mt-6 md:mt-6 sm:mt-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-600 mb-2 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs">
                  Overall Items Delivered
                </p>
                <p className="text-gray-600 mb-2 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs">
                  {Math.round((ebayPercentage / 100) * 350)}
                </p>
              </div>
              <div className="relative pt-2">
                <div className="h-2 bg-[#89d5ff] rounded-full xl:h-2 lg:h-2 md:h-1.5 sm:h-1">
                  <div
                    className="h-2 bg-[#2fb4ff] rounded-full transition-all duration-300 xl:h-2 lg:h-2 md:h-1.5 sm:h-1"
                    style={{ width: `${ebayPercentage}%` }}
                  ></div>
                </div>
                <div
                  className="absolute top-0 -translate-x-1/2 transition-all duration-300"
                  style={{ left: `${ebayPercentage}%` }}
                >
                  <div className="w-5 h-5 bg-blue-400 rounded-full border-2 border-white shadow-sm transition-all duration-300 hover:shadow-md hover:scale-110 xl:w-5 xl:h-5 lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-3 sm:h-3"></div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={ebayPercentage}
                  onChange={(e) => setEbayPercentage(parseInt(e.target.value))}
                  className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer"
                  style={{
                    background: "transparent",
                    WebkitAppearance: "none",
                    appearance: "none",
                  }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <p className="text-gray-600 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs"></p>
                <p className="text-gray-600 text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs">
                  {ebayPercentage}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vendor Feed Status Container - 40% width */}
      <div className="bg-[#f1f1f1] p-8 rounded-lg font-[Helvetica] flex flex-col gap-6 w-[30%] xl:p-8 xl:w-[30%] lg:p-6 lg:w-full md:p-4 md:w-full sm:p-3 sm:w-full">
        <div className="flex justify-start items-center">
          <h2 className="text-2xl font-normal text-[#101010] xl:text-2xl lg:text-xl md:text-lg sm:text-base">
            Vendor Feed Status
          </h2>
        </div>

        <div className="flex flex-col gap-4 xl:gap-4 lg:gap-4 md:gap-3 sm:gap-3">
          {/* Acme Corp */}
          <div
            onClick={handleExport}
            className="bg-white rounded-lg p-3 h-35 shadow-sm relative transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-0.5 hover:shadow-[#ff9a001a] xl:p-3 xl:h-35 lg:p-3 lg:h-38 md:p-3 md:h-42 sm:p-2 sm:h-35"
          >
            <h3 className="text-lg font-medium text-blue-500 mb-2 xl:text-lg lg:text-base md:text-base sm:text-sm xl:mb-2 lg:mb-2 md:mb-3 sm:mb-2">
              Acme Corp
            </h3>
            <p className="text-gray-600 mb-1 text-xs xl:text-xs lg:text-xs md:text-xs sm:text-xs">
              Total Product Imported%
            </p>
            <div className="relative pt-1">
              <div className="h-1.5 bg-[#89d5ff] rounded-full xl:h-1.5 lg:h-1.5 md:h-1.5 sm:h-1">
                <div
                  className="h-1.5 bg-[#2fb4ff] rounded-full transition-all duration-300 xl:h-1.5 lg:h-1.5 md:h-1.5 sm:h-1"
                  style={{ width: `${acmePercentage}%` }}
                ></div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={acmePercentage}
                onChange={(e) => setAcmePercentage(parseInt(e.target.value))}
                className="absolute top-0 left-0 w-full h-1.5 opacity-0 cursor-pointer"
                style={{
                  background: "transparent",
                  WebkitAppearance: "none",
                  appearance: "none",
                }}
              />
            </div>
            <div className="flex justify-between mt-3">
              <p className="text-gray-600 text-xs xl:text-xs lg:text-xs md:text-xs sm:text-xs">
                {acmePercentage}%
              </p>
              <p className="text-gray-600 text-xs xl:text-xs lg:text-xs md:text-xs sm:text-xs">
                {Math.round((acmePercentage / 100) * 1200)}
              </p>
            </div>
          </div>

          {/* Beta Inc */}
          <div
            onClick={handleExport}
            className="bg-white rounded-lg p-3 h-35 shadow-sm relative transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-0.5 hover:shadow-[#ff9a001a] xl:p-3 xl:h-35 lg:p-3 lg:h-38 md:p-3 md:h-42 sm:p-2 sm:h-35"
          >
            <h3 className="text-lg font-medium text-red-500 mb-2 xl:text-lg lg:text-base md:text-base sm:text-sm xl:mb-2 lg:mb-2 md:mb-3 sm:mb-2">
              Beta Inc
            </h3>
            <p className="text-gray-600 mb-1 text-xs xl:text-xs lg:text-xs md:text-xs sm:text-xs">
              Total Product Imported%
            </p>
            <div className="relative pt-1">
              <div className="h-1.5 bg-[#fdc7c6] rounded-full xl:h-1.5 lg:h-1.5 md:h-1.5 sm:h-1">
                <div
                  className="h-1.5 bg-[#ff302f] rounded-full transition-all duration-300 xl:h-1.5 lg:h-1.5 md:h-1.5 sm:h-1"
                  style={{ width: `${betaPercentage}%` }}
                ></div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={betaPercentage}
                onChange={(e) => setBetaPercentage(parseInt(e.target.value))}
                className="absolute top-0 left-0 w-full h-1.5 opacity-0 cursor-pointer"
                style={{
                  background: "transparent",
                  WebkitAppearance: "none",
                  appearance: "none",
                }}
              />
            </div>
            <div className="flex justify-between mt-3">
              <p className="text-gray-600 text-xs xl:text-xs lg:text-xs md:text-xs sm:text-xs">
                {betaPercentage}%
              </p>
              <p className="text-gray-600 text-xs xl:text-xs lg:text-xs md:text-xs sm:text-xs">
                {Math.round((betaPercentage / 100) * 800)}
              </p>
            </div>
          </div>

          {/* Gamma LLC */}
          <div
            onClick={handleExport}
            className="bg-white rounded-lg p-3 h-35 shadow-sm relative transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-0.5 hover:shadow-[#ff9a001a] xl:p-3 xl:h-35 lg:p-3 lg:h-38 md:p-3 md:h-42 sm:p-2 sm:h-35"
          >
            <h3 className="text-lg font-medium text-blue-500 mb-2 xl:text-lg lg:text-base md:text-base sm:text-sm xl:mb-2 lg:mb-2 md:mb-3 sm:mb-2">
              Gamma LLC
            </h3>
            <p className="text-gray-600 mb-1 text-xs xl:text-xs lg:text-xs md:text-xs sm:text-xs">
              Total Product Imported%
            </p>
            <div className="relative pt-1">
              <div className="h-1.5 bg-[#89d5ff] rounded-full xl:h-1.5 lg:h-1.5 md:h-1.5 sm:h-1">
                <div
                  className="h-1.5 bg-[#2fb4ff] rounded-full transition-all duration-300 xl:h-1.5 lg:h-1.5 md:h-1.5 sm:h-1"
                  style={{ width: `${gammaPercentage}%` }}
                ></div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={gammaPercentage}
                onChange={(e) => setGammaPercentage(parseInt(e.target.value))}
                className="absolute top-0 left-0 w-full h-1.5 opacity-0 cursor-pointer"
                style={{
                  background: "transparent",
                  WebkitAppearance: "none",
                  appearance: "none",
                }}
              />
            </div>
            <div className="flex justify-between mt-3">
              <p className="text-gray-600 text-xs xl:text-xs lg:text-xs md:text-xs sm:text-xs">
                {gammaPercentage}%
              </p>
              <p className="text-gray-600 text-xs xl:text-xs lg:text-xs md:text-xs sm:text-xs">
                {Math.round((gammaPercentage / 100) * 600)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
