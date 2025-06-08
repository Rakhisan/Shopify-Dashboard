"use client";
import { FaSearch } from "react-icons/fa";
import { MdTune } from "react-icons/md";
import { useState } from "react";

export default function CatalogueFilter() {
  const [filters, setFilters] = useState([
    {
      id: "#302012",
      name: "My Catalog",
      createdBy: "Alex Johnson",
      productCount: "1900",
      rule: "Britways+10%",
      selected: false,
    },
    {
      id: "#302011",
      name: "GadgetHub",
      createdBy: "Emily Davis",
      productCount: "1600",
      rule: "Moduline +12%",
      selected: false,
    },
    {
      id: "#302002",
      name: "GizmoNest",
      createdBy: "Michael Brown",
      productCount: "1700",
      rule: "RackSpace +15%",
      selected: false,
    },
    {
      id: "#301901",
      name: "DeviceSphere",
      createdBy: "Sarah Wilson",
      productCount: "1800",
      rule: "UrbanGrid +18%",
      selected: false,
    },
    {
      id: "#301900",
      name: "TechHaven",
      createdBy: "David Lee",
      productCount: "1900",
      rule: "StoreCraft +20%",
      selected: false,
    },
    {
      id: "#301800",
      name: "GadgetNest",
      createdBy: "Jessica Taylor",
      productCount: "2000",
      rule: "ChillCore +16%",
      selected: false,
    },
    {
      id: "#301701",
      name: "SmartGadget",
      createdBy: "Daniel Martinez",
      productCount: "2100",
      rule: "DisplayNest +14%",
      selected: false,
    },
    {
      id: "#301600",
      name: "TechSphere",
      createdBy: "Laura Anderson",
      productCount: "2200",
      rule: "Shelvix +20%",
      selected: false,
    },
    {
      id: "#301500",
      name: "GizmoHub",
      createdBy: "James Thomas",
      productCount: "2300",
      rule: "Structura +14%",
      selected: false,
    },
    {
      id: "#301400",
      name: "DeviceNest",
      createdBy: "Sophia White",
      productCount: "2400",
      rule: "SpaceWell +12%",
      selected: false,
    },
  ]);

  const [activeMenu, setActiveMenu] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleFilter = () => {
    // router.push("/catalogue/your-catalog/filter");
  };

  const handleCheckboxChange = (id) => {
    setFilters(
      filters.map((filter) =>
        filter.id === id ? { ...filter, selected: !filter.selected } : filter
      )
    );
  };

  const toggleMenu = (id) => {
    if (activeMenu === id) {
      setActiveMenu(null);
    } else {
      setActiveMenu(id);
    }
  };

  const handleMenuAction = (action, id) => {
    console.log(`${action} action for filter ${id}`);
    setActiveMenu(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate pagination
  const totalPages = Math.ceil(filters.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filters.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="w-full font-sans max-w-[1200px] mx-auto text-[#686f83] ">
      {/* Header */}
      <div className="flex justify-between items-center mb-1 bg-white text-[#727a90] rounded-t-lg px-4 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.1)] overflow-hidden font-sans">
        <h2 className="text-[#24282e] m-0 text-xl font-semibold">
          Export Filters
        </h2>
        <div className="flex flex-nowrap gap-[350px] items-center">
          <div className="relative w-full">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#aaa] pointer-events-none" />
            <input
              type="text"
              placeholder="Search by Created By..."
              className="w-full py-2 px-3 pl-[66px] border border-[#ccc] rounded-[10px] text-sm"
            />
          </div>

          <button
            className="flex items-center gap-1.5 bg-[#2fb4ff] text-white border-none rounded-lg py-3 px-4 text-sm cursor-pointer transition-colors duration-200 hover:bg-[#32a5fd]"
            onClick={handleFilter}
          >
            <MdTune />
            Filter
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="w-full overflow-x-auto bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="w-10 py-[17px] px-4 border-b border-[#f0f0f0] text-sm font-medium text-[#686f83] whitespace-nowrap">
                <input
                  type="checkbox"
                  onChange={() => {
                    const allSelected = filters.every(
                      (filter) => filter.selected
                    );
                    setFilters(
                      filters.map((filter) => ({
                        ...filter,
                        selected: !allSelected,
                      }))
                    );
                  }}
                  checked={
                    filters.length > 0 &&
                    filters.every((filter) => filter.selected)
                  }
                />
              </th>
              <th className="w-[100px] text-[#24282e] py-[17px] px-4 border-b border-[#f0f0f0] text-sm font-medium text-[#686f83] whitespace-nowrap">
                ID
              </th>
              <th className="min-w-[180px] py-[17px] px-4 border-b border-[#f0f0f0] text-sm font-medium text-[#686f83] whitespace-nowrap">
                Saved Search Name
              </th>
              <th className="min-w-[150px] py-[17px] px-4 border-b border-[#f0f0f0] text-sm font-medium text-[#686f83] whitespace-nowrap">
                Created By
              </th>
              <th className="py-[17px] px-4 border-b border-[#f0f0f0] text-sm font-medium text-[#686f83] whitespace-nowrap">
                No. of Product
              </th>
              <th className="min-w-[150px] py-[17px] px-4 border-b border-[#f0f0f0] text-sm font-medium text-[#686f83] whitespace-nowrap">
                Rule
              </th>
              <th className="w-10 text-center relative py-[17px] px-4 border-b border-[#f0f0f0] text-sm font-medium text-[#686f83] whitespace-nowrap"></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((filter) => (
              <tr
                key={filter.id}
                className={filter.selected ? "bg-[#f0f7ff]" : ""}
              >
                <td className="w-10 py-[17px] px-4 border-b border-[#f0f0f0] text-sm">
                  <input
                    type="checkbox"
                    checked={filter.selected}
                    onChange={() => handleCheckboxChange(filter.id)}
                  />
                </td>
                <td className="w-[100px] text-[#24282e] py-[17px] px-4 border-b border-[#f0f0f0] text-sm">
                  {filter.id}
                </td>
                <td className="min-w-[180px] py-[17px] px-4 border-b border-[#f0f0f0] text-sm">
                  {filter.name}
                </td>
                <td className="min-w-[150px] py-[17px] px-4 border-b border-[#f0f0f0] text-sm">
                  {filter.createdBy}
                </td>
                <td className="py-[17px] px-4 border-b border-[#f0f0f0] text-sm">
                  {filter.productCount}
                </td>
                <td className="min-w-[150px] py-[17px] px-4 border-b border-[#f0f0f0] text-sm">
                  {filter.rule}
                </td>
                <td className="w-10 text-center relative py-[17px] px-4 border-b border-[#f0f0f0] text-sm">
                  <button
                    className="bg-transparent border-none cursor-pointer text-lg p-0 w-6 h-6 flex items-center justify-center text-[#374957]"
                    onClick={() => toggleMenu(filter.id)}
                  >
                    <span className="font-bold leading-none text-[#374957]">
                      ⋮
                    </span>
                  </button>
                  {activeMenu === filter.id && (
                    <div className="absolute right-5 bg-white border border-[#ddd] rounded shadow-[0_2px_5px_rgba(0,0,0,0.15)] z-10 flex flex-col min-w-[120px] overflow-hidden">
                      <button
                        className="bg-transparent border-none text-left py-2 px-3 text-sm cursor-pointer hover:bg-[#f5f5f5]"
                        onClick={() => handleMenuAction("edit", filter.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-transparent border-none text-left py-2 px-3 text-sm cursor-pointer hover:bg-[#f5f5f5]"
                        onClick={() => handleMenuAction("update", filter.id)}
                      >
                        Update
                      </button>
                      <button
                        className="bg-transparent border-none text-left py-2 px-3 text-sm cursor-pointer hover:bg-[#f5f5f5]"
                        onClick={() => handleMenuAction("delete", filter.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-center items-center m-5">
          <div className="flex justify-center items-center flex-1 pl-[50px]">
            <button className="bg-transparent border border-[#e0e0e0] rounded-[30px] w-[50px] h-[50px] flex items-center justify-center cursor-pointer mr-1 hover:bg-[#f5f5f5] hover:border-[#787676]">
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
            <button className="bg-transparent border border-[#e0e0e0] rounded-[30px] w-[50px] h-[50px] flex items-center justify-center cursor-pointer mr-1 hover:bg-[#f5f5f5] hover:border-[#787676]">
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
    </div>
  );
}
