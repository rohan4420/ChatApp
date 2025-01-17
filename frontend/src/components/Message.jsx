import { useSelector } from "react-redux";

const Message = ({ message}) => {
  console.log("Message:", message);
  const {selectedUser} = useSelector((store) => store.user);
  return (
    <div className="chat-start">
      {/* Avatar Section */}
      <div className="chat-image avatar">
        <div className="w-10 rounded-full border border-gray-300">
          <img
            alt="User Avatar"
            src={selectedUser?.profilePhoto}
          />
        </div>
      </div>

      {/* Message Bubble */}
      <div className="chat-bubble bg-indigo-600 text-white">
        {message.message || "You were the Chosen One!"}
      </div>

      {/* Timestamp */}
      <div className="chat-footer text-xs text-gray-500">
        <time>{"12:45 PM"}</time>
      </div>
    </div>
  );
};

export default Message;
