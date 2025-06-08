"use client";
import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function Users() {
  const [users, setUsers] = useState([
    {
      id: "#302012",
      name: "John Doe",
      email: "john@company.com",
      role: "1",
      status: "Active",
    },
    {
      id: "#302011",
      name: "Alice Smith",
      email: "jane@company.com",
      role: "3",
      status: "Active",
    },
    {
      id: "#302002",
      name: "Bob Johnson",
      email: "mike@company.com",
      role: "4",
      status: "Inactive",
    },
    {
      id: "#301901",
      name: "Carol Williams",
      email: "sara@company.com",
      role: "2",
      status: "Inactive",
    },
    {
      id: "#301900",
      name: "David Brown",
      email: "david@company.com",
      role: "5",
      status: "Active",
    },
    {
      id: "#301800",
      name: "Eve Davis",
      email: "emma@company.com",
      role: "6",
      status: "Active",
    },
    {
      id: "#301701",
      name: "Frank Miller",
      email: "chris@company.com",
      role: "1",
      status: "Active",
    },
    {
      id: "#301600",
      name: "Grace Wilson",
      email: "lisa@company.com",
      role: "2",
      status: "Inactive",
    },
    {
      id: "#301500",
      name: "Hannah Moore",
      email: "tom@company.com",
      role: "4",
      status: "Inactive",
    },
    {
      id: "#301400",
      name: "Ian Taylor",
      email: "nina@company.com",
      role: "6",
      status: "Active",
    },
  ]);

  const router = useRouter();

  const [showActionMenu, setShowActionMenu] = useState(null);
  const [showPageSizeDropdown, setShowPageSizeDropdown] = useState(false);
  const [selectedPageSize, setSelectedPageSize] = useState(10);

  const pageSizeOptions = [10, 20, 50];

  const handleAddUser = () => {
    router.push("/admin/user/add");
  };

  const handleEditUser = () => {
    router.push("/admin/user/edit");
  };

  const toggleActionMenu = (index) => {
    setShowActionMenu(showActionMenu === index ? null : index);
  };

  const togglePageSizeDropdown = () => {
    setShowPageSizeDropdown(!showPageSizeDropdown);
  };

  const handlePageSizeSelect = (size) => {
    setSelectedPageSize(size);
    setShowPageSizeDropdown(false);
  };

  const handleStatusToggle = (userId) => {
    setUsers(
      users.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );
    setShowActionMenu(null);
  };

  return (
    <div className="w-full font-sans max-w-[1200px] mx-auto text-[#686f83] min-h-[770px] px-2 sm:px-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 bg-white text-[#24282e] rounded-t-lg px-2 sm:px-4 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.1)] overflow-hidden font-sans gap-4 sm:gap-0">
        <h2 className="m-0 text-lg font-semibold">Users</h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[350px] w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="py-2 px-3 pl-[65px] border border-[#e0e0e0] rounded-lg text-sm w-full sm:w-[280px] placeholder:text-[#aaa]"
            />
            <span className="absolute left-[25px] top-[55%] transform -translate-y-1/2 text-[#999]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
          </div>
          <button
            className="flex items-center justify-center gap-1.5 bg-[#2fb4ff] text-white border-none rounded-lg py-2 px-4 text-sm cursor-pointer transition-colors duration-200 hover:bg-[#32a5fd] w-full sm:w-auto"
            onClick={handleAddUser}
          >
            <span className="text-lg font-bold">+</span> Add User
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] overflow-x-auto mb-5">
        <table className="w-full border-collapse text-sm min-w-[800px]">
          <thead>
            <tr>
              <th className="w-5 font-medium p-4 text-left border-b border-[#e5e7eb] h-14 align-middle relative text-sm">
                <input type="checkbox" />
              </th>
              <th className="w-[170px] mr-5 text-[#24282e] font-medium p-4 text-left border-b border-[#e5e7eb] h-14 align-middle relative text-sm">
                Company ID
              </th>
              <th className="relative w-[200px] font-medium p-4 text-left border-b border-[#e5e7eb] h-14 align-middle relative text-sm">
                Name
              </th>
              <th className="w-[250px] font-medium p-4 text-left border-b border-[#e5e7eb] h-14 align-middle relative text-sm">
                Email
              </th>
              <th className="w-[200px] p-2 font-medium p-4 text-left border-b border-[#e5e7eb] h-14 align-middle relative text-sm">
                Role-id
              </th>
              <th className="font-medium p-4 text-left border-b border-[#e5e7eb] h-14 align-middle relative text-sm">
                Status
              </th>
              <th className="font-medium p-4 text-left border-b border-[#e5e7eb] h-14 align-middle relative text-sm"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td className="w-5 py-2.5 pr-0 pl-4 border-b border-[#e0e0e0]">
                  <input type="checkbox" />
                </td>
                <td className="w-[170px] mr-5 text-[#24282e] py-2.5 pr-0 pl-4 border-b border-[#e0e0e0]">
                  {user.id}
                </td>
                <td className="relative w-[200px] py-2.5 pr-0 pl-4 border-b border-[#e0e0e0]">
                  {user.name}
                </td>
                <td className="w-5 py-2.5 pr-0 pl-4 border-b border-[#e0e0e0]">
                  {user.email}
                </td>
                <td className="w-5 py-2.5 pr-0 pl-4 border-b border-[#e0e0e0]">
                  {user.role}
                </td>
                <td className="py-2.5 pr-0 pl-4 border-b border-[#e0e0e0]">
                  <span
                    className={`inline-block py-1.5 px-2.5 rounded-lg text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-[rgba(13,157,227,0.1)] text-[#29b1ba] border border-[#009499] py-1.5 px-7.5"
                        : "bg-[rgba(255,87,87,0.1)] text-[#ff6365] border border-[#ff6365] py-1.5 px-6.5"
                    }`}
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="relative py-2.5 pr-0 pl-4 border-b border-[#e0e0e0]">
                  <button
                    className="bg-transparent border-none cursor-pointer text-[#374957] w-7 h-7 rounded-lg flex items-center justify-center hover:bg-[#f5f5f5]"
                    onClick={() => toggleActionMenu(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="12" cy="6" r="1" />
                      <circle cx="12" cy="18" r="1" />
                    </svg>
                  </button>

                  {showActionMenu === index && (
                    <div className="absolute right-4 sm:right-20 top-[42px] bg-white border border-[#ddd] shadow-[0_2px_8px_rgba(0,0,0,0.15)] rounded-lg z-10 w-[120px] flex flex-col py-1.5">
                      <div
                        className="py-2 px-3 text-sm cursor-pointer text-[#333] transition-colors duration-200 hover:bg-[#f0f0f0]"
                        onClick={handleEditUser}
                      >
                        Edit
                      </div>
                      <div
                        className="py-2 px-3 text-sm cursor-pointer text-[#333] transition-colors duration-200 hover:bg-[#f0f0f0]"
                        onClick={() => handleStatusToggle(user.id)}
                      >
                        {user.status === "Active" ? "Inactive" : "Active"}
                      </div>
                      <div className="py-2 px-3 text-sm cursor-pointer text-red-500 transition-colors duration-200 hover:bg-[#f0f0f0]">
                        Delete
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center m-2 sm:m-5 gap-4 sm:gap-0">
          <div className="flex justify-center items-center flex-1 pl-0 sm:pl-[50px] order-2 sm:order-1">
            <button className="bg-transparent border border-[#e0e0e0] rounded-[30px] w-[50px] h-[50px] flex items-center justify-center cursor-pointer mr-1 hover:bg-[#f5f5f5] hover:border-[#5f5e5e]">
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
            <button className="bg-transparent border border-[#e0e0e0] rounded-[30px] w-[50px] h-[50px] flex items-center justify-center cursor-pointer mr-1 hover:bg-[#f5f5f5] hover:border-[#5f5e5e]">
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
          <div className="flex items-center gap-2 text-sm text-[#666] order-1 sm:order-2">
            <span>Show</span>
            <div className="relative inline-block">
              <button
                className="flex items-center gap-2 py-2 px-3 border border-[#ddd] rounded-xl bg-white cursor-pointer text-sm text-[#333] transition-all duration-200 ease-in-out min-w-[60px] justify-between hover:border-[#999] hover:bg-[#f9f9f9] focus:outline-none focus:border-[#007bff] focus:shadow-[0_0_0_2px_rgba(0,123,255,0.25)]"
                onClick={togglePageSizeDropdown}
              >
                {selectedPageSize}
                <AiOutlineCaretDown
                  className={`text-sm transition-transform duration-200 ease-in-out text-[#666] ${
                    showPageSizeDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showPageSizeDropdown && (
                <div className="absolute top-full left-0 right-0 bg-white border border-[#ddd] rounded shadow-[0_2px_8px_rgba(0,0,0,0.15)] z-[1000] mt-0.5">
                  {pageSizeOptions.map((option) => (
                    <div
                      key={option}
                      className={`py-2.5 px-3 cursor-pointer text-sm text-[#333] transition-colors duration-200 ease-in-out border-b border-[#f0f0f0] last:border-b-0 hover:bg-[#f8f9fa] ${
                        selectedPageSize === option
                          ? "bg-[#e3f2fd] text-[#1976d2] font-medium"
                          : ""
                      }`}
                      onClick={() => handlePageSizeSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
