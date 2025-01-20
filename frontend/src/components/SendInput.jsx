import { IoSend } from "react-icons/io5";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setMessages } from '../redux/messageSlice'

const SendInput = () => {
  const { selectedUser } = useSelector((store) => store.user);
  const {messages } = useSelector((store) => store.message)
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try {
      // console.log("Sending message to:", selectedUser._id);
      
      const response = await axios.post(`http://localhost:8080/api/v1/message/send/${selectedUser._id}`, {message}, {withCredentials: true});
      dispatch(setMessages([...messages, response.data.data]));
      // console.log("Message sent:", response.data);
    } catch (error) {
      console.log(error);
    }
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
