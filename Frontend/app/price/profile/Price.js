"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Price() {
  const router = useRouter();
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const [priceData, setPriceData] = useState([
    {
      id: "#302012",
      profilename: "Standard Pricing",
      Description: "ABC",
      pricetype: "EDK",
      excludevendore: "3",
      pricerule: "1",
    },
    {
      id: "#302011",
      profilename: "Premium Pricing",
      Description: "ABC",
      pricetype: "EDH",
      excludevendore: "2",
      pricerule: "4",
    },
    {
      id: "#302002",
      profilename: "Basic Pricing",
      Description: "def",
      pricetype: "FED",
      excludevendore: "4",
      pricerule: "3",
    },
    {
      id: "#301901",
      profilename: "Enterprise Pricing",
      Description: "ghi",
      pricetype: "LOC",
      excludevendore: "5",
      pricerule: "2",
    },
    {
      id: "#301900",
      profilename: "Student Pricing",
      Description: "jkl",
      pricetype: "STA",
      excludevendore: "7",
      pricerule: "5",
    },
    {
      id: "#301800",
      profilename: "Family Plan",
      Description: "mno",
      pricetype: "REG",
      excludevendore: "5",
      pricerule: "8",
    },
    {
      id: "#301701",
      profilename: "Seasonal Discount",
      Description: "pqr",
      pricetype: "EDK",
      excludevendore: "3",
      pricerule: "6",
    },
    {
      id: "#301600",
      profilename: "Loyalty Program",
      Description: "stu",
      pricetype: "LOC",
      excludevendore: "5",
      pricerule: "7",
    },
    {
      id: "#301500",
      profilename: "Referral Pricing",
      Description: "vwx",
      pricetype: "EDK",
      excludevendore: "4",
      pricerule: "8",
    },
    {
      id: "#301400",
      profilename: "Trial Offer",
      Description: "yz",
      pricetype: "FED",
      excludevendore: "6",
      pricerule: "9",
    },
  ]);

  const handlePriceRule = () => {
    router.push("/price/profile/add");
  };

  const handleEditRule = () => {
    router.push("/price/profile/edit");
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto h-[120%] text-[#686f83]">
      {/* Header */}
      <div className="flex justify-between items-center mb-1 bg-white text-[#727a90] rounded-t-lg px-4 py-4 shadow-md overflow-hidden flex-col md:flex-row gap-3 md:gap-0">
        <h2 className="text-xl font-semibold text-[#24282e] text-left w-full md:w-auto">
          Price Profile
        </h2>

        <div className="relative w-full md:w-64 h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-[#575757] pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search Profile Name"
            className="w-full h-full px-6 pl-10 border border-[#d5d5d5] rounded-lg text-sm text-[#575757] text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          className="flex items-center gap-2 px-4 bg-[#2fb4ff] text-white border-none rounded-lg cursor-pointer h-11 text-sm font-medium w-full md:w-auto justify-center hover:bg-[#1e9ce6] transition-colors"
          onClick={handlePriceRule}
        >
          <span className="font-medium text-2xl select-none">+</span>
          Add Price Profile
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-white shadow-sm">
        <div className="w-full overflow-x-auto bg-white shadow-sm">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="h-14">
                <th className="w-10 text-center px-0 py-2 text-left border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm">
                  <input type="checkbox" />
                </th>
                <th className="w-15 px-1 py-4 text-left border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm">
                  ID
                </th>
                <th className="px-2 pr-6 py-4 text-left border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm">
                  Profile Name
                </th>
                <th className="px-7 py-4 text-left border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm">
                  Description
                </th>
                <th className="px-7 py-4 text-left border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm">
                  Price Type
                </th>
                <th className="px-7 py-4 text-left border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm">
                  Exclude Vendor
                </th>
                <th className="px-7 py-4 text-left pr-6 border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm">
                  Price Rule
                </th>
                <th className="px-7 py-4 text-left border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm"></th>
              </tr>
            </thead>
            <tbody>
              {priceData.map((item, index) => (
                <tr key={index}>
                  <td className="text-center px-0 py-2 border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm">
                    <input type="checkbox" />
                  </td>
                  <td className="w-15 px-1 py-4 border-b border-[#e9eaea] align-middle text-[#24282e] font-semibold bg-transparent text-sm">
                    {item.id}
                  </td>
                  <td className="px-2 pr-6 py-4 border-b border-[#e9eaea] align-middle text-[#727a90] font-medium bg-transparent text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.profilename}
                  </td>
                  <td className="px-7 py-4 border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm min-w-32">
                    {item.Description}
                  </td>
                  <td className="px-7 py-4 border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm min-w-32">
                    {item.pricetype}
                  </td>
                  <td className="px-7 py-4 border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm min-w-32">
                    {item.excludevendore}
                  </td>
                  <td className="px-7 py-4 border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm min-w-32">
                    {item.pricerule}
                  </td>
                  <td className="relative text-right w-1 px-7 py-4 border-b border-[#e9eaea] align-middle text-[#686f83] font-medium bg-transparent text-sm">
                    <span
                      className="cursor-pointer text-2xl text-[#686f83] select-none"
                      onClick={() =>
                        setOpenMenuIndex(openMenuIndex === index ? null : index)
                      }
                    >
                      &#x22EE;
                    </span>
                    {openMenuIndex === index && (
                      <div className="absolute top-10 right-0 bg-white border border-[#e5e7eb] rounded-md shadow-lg z-10 flex flex-col min-w-30">
                        <button
                          className="px-4 py-2 border-none bg-transparent text-left cursor-pointer text-sm text-[#333] hover:bg-gray-100 transition-colors"
                          onClick={handleEditRule}
                        >
                          Edit
                        </button>
                        <button className="px-4 py-2 border-none bg-transparent text-left cursor-pointer text-sm text-[#333] hover:bg-gray-100 transition-colors">
                          Add
                        </button>
                        <button className="px-4 py-2 border-none bg-transparent text-left cursor-pointer text-sm text-[#333] hover:bg-gray-100 transition-colors">
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="relative flex justify-center bg-white items-center flex-nowrap gap-4">
        <div className="absolute right-6 flex items-center gap-2 text-sm text-[#727a90]">
          <span>Show</span>
          <div className="relative inline-block">
            <select className="appearance-none px-3 py-1.5 pr-8 rounded-md border border-[#d5d5d5] bg-white text-sm text-[#202224] cursor-pointer min-w-18">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span className="pointer-events-none absolute top-1/2 right-2.5 transform -translate-y-1/2 flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.27337 8H13.7267C13.8586 8.00055 13.9873 8.04019 14.0966 8.1139C14.2059 8.18761 14.2909 8.29208 14.3409 8.4141C14.3908 8.53612 14.4035 8.67021 14.3772 8.79942C14.351 8.92863 14.287 8.04715 14.1934 9.14L10.4734 12.86C10.4114 12.9225 10.3377 12.9721 10.2564 13.0059C10.1752 13.0398 10.088 13.0572 10 13.0572C9.91203 13.0572 9.82489 13.0398 9.74365 13.0059C9.66241 12.9721 9.58868 12.9225 9.5267 12.86L5.8067 9.14C5.71309 9.04715 5.64911 8.92863 5.62285 8.79942C5.59659 8.67021 5.60924 8.53612 5.65919 8.4141C5.70914 8.29208 5.79415 8.18761 5.90347 8.1139C6.0128 8.04019 6.14152 8.00055 6.27337 8Z"
                  fill="#727A90"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center my-5">
          <div className="flex justify-center items-center flex-1 pl-12 gap-1">
            <button className="bg-none border border-[#e0e0e0] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer mr-1 hover:bg-gray-100 hover:border-[#787676] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className="bg-none border border-[#e0e0e0] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gray-100 hover:border-[#787676] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            padding: 10px;
          }

          table {
            width: 1000px;
            min-width: 1000px;
          }

          .table-container {
            width: 100%;
            max-width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            box-sizing: border-box;
            border: 1px solid #e5e7eb;
          }

          th,
          td {
            font-size: 0.875rem;
            padding: 0.8rem 1rem;
          }

          th:first-child,
          td:first-child {
            padding: 0.8rem 0.5rem;
          }

          .id-cell {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }

          .name-cell {
            padding-left: 0.5rem;
            padding-right: 1rem;
          }

          .status-cell {
            padding: 0.8rem 1rem;
            min-width: 6rem;
          }

          .dropdown-menu {
            right: 5px;
            top: 2rem;
            min-width: 100px;
            font-size: 12px;
          }

          .dropdown-menu button {
            padding: 0.4rem 0.8rem;
            font-size: 12px;
          }

          .pagination-button {
            width: 36px;
            height: 36px;
          }

          .rows-per-page {
            font-size: 0.875rem;
          }

          .select {
            padding: 5px 25px 5px 8px;
            font-size: 0.75rem;
            min-width: 60px;
          }
        }

        @media (max-width: 480px) {
          th,
          td {
            font-size: 0.8125rem;
            padding: 0.6rem 0.8rem;
          }

          th:first-child,
          td:first-child {
            padding: 0.6rem 0.4rem;
          }

          .status-cell {
            min-width: 5rem;
          }

          .dropdown-menu {
            min-width: 90px;
          }

          .pagination-button {
            width: 32px;
            height: 32px;
          }

          .rows-per-page {
            font-size: 0.75rem;
          }

          .select {
            padding: 4px 20px 4px 6px;
            font-size: 0.6875rem;
            min-width: 50px;
          }
        }
      `}</style>
    </div>
  );
}
