import React, { useState } from "react";
import Nochat from "../Sidebar/Nochat";
import useConversation from "../../zustand/useConversation.js";
import useSendMessage from "../../hooks/useSendMessage.js";
import { useAuthContext } from "../../context/AuthContext.jsx";
import { BsSend } from "react-icons/bs";
import { extractTime } from "../../utils/extractTime.js";

const Message = ({ message }) => {
  const { selectedConversation } = useConversation();
  const { sendMessage } = useSendMessage(); // Use hook's sendMessage
  const { authUser } = useAuthContext();
  const formatedTime=extractTime(message.createdAt)
  const [messageText, setMessageText] = useState("");
  const shakeClass=message.shouldShake?"shake":"";

  if (!message || !message.senderId) {
    return null; // Prevent errors if message is undefined or missing required fields
  }

  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "fromMe" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-700";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!messageText) {
      alert("Please enter a message before sending.");
      return;
    }
    try {
      await sendMessage(messageText);
      setMessageText(""); // Clear the input after sending
    } catch (error) {
      alert("Failed to send the message. Please try again.");
    }
  };

  return (
    <div className={`flex flex-col min-h-screen ${chatClassName}`}>
      <div className="flex-1 overflow-auto pb-11">
        {selectedConversation ? (
          <div className="flex gap-2.5 mb-4">
            <img
              src={profilePic || "https://via.placeholder.com/40"} 
              alt="Profile image"
              className="w-10 h-10 rounded-full"
            />
            <div className="grid">
              <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">
                {selectedConversation?.name || "Unknown User"}
              </h5>
              <div className="w-max grid">
                <div className={`${bubbleBgColor} ${shakeClass} px-3.5 py-2 rounded-lg`}>
                  <h5 className="text-gray-100 text-sm font-normal leading-snug">
                    {message.message || "No message content"} 
                  </h5>
                </div>
                <div className="justify-end items-center inline-flex mb-2.5">
                  <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
                    {formatedTime} 
                  </h6>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Nochat />
        )}
      </div>

      {/* Message input form
      <form className="relative mt-auto" onSubmit={handleSubmit}>
        <div className="w-full flex">
          <input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-100 border-gray-600 text-white"
            placeholder="Send a message"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center pe-3"
          >
            <BsSend />
          </button>
        </div>
      </form> */}
    </div>
  );
};

export default Message;
