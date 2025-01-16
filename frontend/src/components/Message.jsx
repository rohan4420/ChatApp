const Message = ({ message, isSentByUser, timestamp }) => {
  return (
    <div className={`chat ${isSentByUser ? "chat-end" : "chat-start"}`}>
      {/* Avatar Section */}
      <div className="chat-image avatar">
        <div className="w-10 rounded-full border border-gray-300">
          <img
            alt="User Avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>

      {/* Message Bubble */}
      <div className="chat-bubble bg-indigo-600 text-white">
        {message || "You were the Chosen One!"}
      </div>

      {/* Timestamp */}
      <div className="chat-footer text-xs text-gray-500">
        <time>{timestamp || "12:45 PM"}</time>
      </div>
    </div>
  );
};

export default Message;
