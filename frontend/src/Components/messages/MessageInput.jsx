import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage.js";

const MessageInput = () => {
  const [messageText, setMessageText] = useState(""); 
  const { sendMessage } = useSendMessage();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!messageText) {
      alert("Please enter a message before sending.");
      return;
    }
    try {
      await sendMessage(messageText); 
      setMessageText(""); 
    } catch (error) {
      alert("Failed to send the message. Please try again.");
    }
  };

  return (
    <form className="relative mt-auto" onSubmit={handleSubmit}>
      <div className="w-full flex">
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)} 
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-100 border-gray-600 text-black"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pe-3"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
