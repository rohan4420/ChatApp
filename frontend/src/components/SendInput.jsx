import { IoSend } from "react-icons/io5";
import React, { useState } from 'react';

const SendInput = () => {
  const [message, setMessage] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Handle send message logic here
    setMessage(""); // Clear message after sending
  };

  return (
    <form onSubmit={onSubmitHandler} className="px-4 py-3">
      <div className="w-full relative">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Type a message..."
          className="w-full py-2 px-4 text-sm bg-gray-700 text-white border border-gray-500 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="absolute right-2 inset-y-0 flex items-center justify-center p-2 text-blue-500 hover:text-blue-600"
        >
          <IoSend size={20} />
        </button>
      </div>
    </form>
  );
};

export default SendInput;
