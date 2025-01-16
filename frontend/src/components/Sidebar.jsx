import React, { useState } from 'react';
import OtherUsers from './OtherUsers';
import { BiSearchAlt2 } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    // Handle search logic here
  };

  const logoutHandler = async () => {
    // Handle logout logic here
  };

  return (
    <div className="border-r border-gray-600 p-4 flex flex-col bg-gray-800 text-white">
      {/* Search bar */}
      <form onSubmit={searchSubmitHandler} className="flex items-center gap-2 mb-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 text-sm bg-gray-700 text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search..."
        />
        <button type="submit" className="bg-gray-600 text-white p-2 rounded-md hover:bg-gray-500 transition duration-300">
          <BiSearchAlt2 className="w-5 h-5" />
        </button>
      </form>
      
      <div className="divider my-2"></div>
      
      {/* Other Users List */}
      <OtherUsers />

      {/* Logout Button */}
      <div className="mt-6">
        <button
          onClick={logoutHandler}
          className="flex items-center gap-2 bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition-all duration-300"
        >
          <IoLogOutOutline className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
