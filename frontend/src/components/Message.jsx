import { use, useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ message}) => {
  const {selectedUser,authUser} = useSelector((store) => store.user);  
  const scroll = useRef()
  // to view current message div on the screen
  useEffect(() => {
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
<div
  ref={scroll}
  className={`chat ${
    message?.senderId === authUser?._id ? 'chat-end' : 'chat-start'
  }`}
>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="User Profile"
        src={
          message?.senderId === authUser?._id
            ? authUser?.profilePhoto
            : selectedUser?.profilePhoto
        }
      />
    </div>
  </div>
  <div className="chat-header">
    <time className="text-xs opacity-50 text-white">
      {/* Dynamically display the timestamp */}
      {new Date(message?.createdAt).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })}
    </time>
  </div>
  <div
    className={`chat-bubble ${
      message?.senderId !== authUser?._id ? 'bg-gray-200 text-black' : ''
    }`}
  >
    {message?.message}
  </div>
</div>

  );
};

export default Message;
