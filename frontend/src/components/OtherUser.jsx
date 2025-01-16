import React from "react";

const OtherUser = ({ name, avatarUrl, isOnline }) => {
  return (
    <>
   <div className="flex items-center gap-4 p-3 rounded-lg cursor-pointer group hover:bg-gray-100 transition-all duration-200 ease-in-out">
  {/* Avatar */}
  <div className="relative">
    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300 shadow-sm">
      <img
        src={avatarUrl || "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/394200/394270.6.jpg"}
        alt="user-profile"
        className="w-full h-full object-cover"
      />
    </div>
    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-white"></span>
  </div>

  {/* User Info */}
  <div className="flex-1">
    <p className="text-white group-hover:text-black font-medium">Rohan Sardeshmukh</p>
    <p className="text-sm text-gray-500 group-hover:text-black">online</p>
  </div>
</div>


      {/* Divider */}
      <div className="border-t border-gray-200 mx-4"></div>
    </>
  );
};

export default OtherUser;