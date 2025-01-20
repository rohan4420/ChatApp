import React, { useEffect } from "react";
import Messages from "./Messages";
import SendInput from "./SendInput";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const MessageContainer = () => {
  const { selectedUser, authUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const isOnline = true; // Replace this with actual online user status
  
  useEffect(() => {
    return () => dispatch(setSelectedUser(null));
  }, []);

  return (
    <div className="flex justify-center items-center h-full bg-gray-100">
      {selectedUser !== null? (
        <div className="md:min-w-[550px] flex flex-col h-full bg-white rounded-lg shadow-lg border border-gray-200">
          {/* Header Section */}
          <div className="flex items-center gap-4 bg-indigo-600 text-white px-6 py-4 rounded-t-lg">
            <div className="relative">
              <div
                className={`avatar ${
                  isOnline ? "bg-green-500" : "bg-gray-400"
                } w-12 h-12 rounded-full border-2 border-white`}
              >
                <img
                  src={selectedUser?.profilePhoto}
                  alt="user-profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {isOnline && (
                <span className="absolute bottom-0 right-0 bg-green-500 w-3 h-3 rounded-full border border-white"></span>
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold">
                {selectedUser?.firstName}
              </h2>
              <p className="text-sm text-gray-300">
                {isOnline ? "Online" : "Offline"}
              </p>
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
      ) : (
        <div className="text-center">
          <h1 className="text-xl font-semibold text-gray-600">
            Let's start a conversation!
          </h1>
          <p className="text-gray-500 mt-2">
            Hi {authUser?.firstName}
          </p>
        </div>
      )}
    </div>
  );
};

export default MessageContainer;
