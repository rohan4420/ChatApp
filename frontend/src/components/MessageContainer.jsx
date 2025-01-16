import React from "react";
import { useSelector } from "react-redux";
import Messages from "./Messages";
import SendInput from "./SendInput";

const MessageContainer = () => {
  const { selectedUser, authUser } = useSelector((store) => store.user);
  const isOnline = true; // Replace this with actual online user status

  return (
    <div className="md:min-w-[550px] flex flex-col h-full bg-white rounded-lg shadow-lg border border-gray-200">
      {/* Header Section */}
      <div className="flex items-center gap-4 bg-indigo-600 text-white px-6 py-4 rounded-t-lg">
        <div className="relative">
          <div className={`avatar ${isOnline ? "bg-green-500" : "bg-gray-400"} w-12 h-12 rounded-full border-2 border-white`}>
            <img
              src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/394200/394270.6.jpg"
              alt="user-profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          {isOnline && (
            <span className="absolute bottom-0 right-0 bg-green-500 w-3 h-3 rounded-full border border-white"></span>
          )}
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold">Rohan Sardeshmukh</h2>
          <p className="text-sm text-gray-300">{isOnline ? "Online" : "Offline"}</p>
        </div>
      </div>

      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
        <Messages />
      </div>

      {/* Send Input Section */}
      <div className="border-t border-gray-300 bg-gray-100 p-4 rounded-b-lg">
        <SendInput />
      </div>
    </div>
  );
};

export default MessageContainer;
