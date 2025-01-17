import React from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import { useSelector } from "react-redux";

const Messages = () => {
  useGetMessages();
  const { messages } = useSelector((store) => store.message);

  if (!messages) return <div>No messages available</div>;

  return (
    <div className="flex-1 overflow-y-auto px-6 py-4 bg-gray-50 space-y-4 rounded-t-lg">
      {messages.map((message1) => {
        console.log("Rendering message:", message1);
        return <Message key={message1._id} message={message1} />;
      })}
    </div>
  );
};

export default Messages;
