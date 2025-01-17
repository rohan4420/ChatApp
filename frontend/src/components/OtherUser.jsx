import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const OtherUser = ({ user }) => {
  const dispatch = useDispatch();
  const {selectedUser} = useSelector(store=>store.user)

  const selectedUserHandler = (user) => {
    // console.log(user)
    dispatch(setSelectedUser(user));
  };
  return (
    <>
      <div
        onClick={() => selectedUserHandler(user)}
        className={`${selectedUser?._id === user?._id ? 'bg-gray-100' :""}flex items-center gap-4 p-3 rounded-lg cursor-pointer group 
                  hover:bg-gray-100 transition-all duration-200 ease-in-out`}
      >
        {/* Avatar */}
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300 shadow-sm">
            <img
              src={user?.profilePhoto}
              alt="user-profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-white"></span>
        </div>

        {/* User Info */}
        <div className="flex-1">
          <p className="text-white group-hover:text-black font-medium">
            {user?.firstName}
          </p>
          <p className="text-sm text-gray-500 group-hover:text-black">online</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mx-4"></div>
    </>
  );
};

export default OtherUser;
