import React from "react";
import useConversation from "../../zustand/useConversation.js";
import {useEffect} from 'react'

const Conversation = ({ conversation, emoji }) => {
  // const [selectedConversation, setSelectedConversation] = useConversation();
  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  useEffect(()=>{
    return ()=>setSelectedConversation(null)
  },[setSelectedConversation])
  return (
    <div>
    <div className={`flex flex-col justify-center ${isSelected ? "bg-sky-300":""}`}>
      <div 
      className={`flex items-center hover:bg-sky-300 rounded p-2 py-1 cursor-pointer`}
      onClick={()=>setSelectedConversation(conversation)}
      >
        <div className="avatar py-2">
          <div className="ring-primary ring-offset-base-100 w-12  rounded-full ring ring-offset-2">
            <img
              className="rounded-full"
              src={conversation.profilePic}
              alt="User avatar"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1 px-4">
          <div className="flex justify-between font-bold text-white gap-3 ">
            <p>{conversation.fullName}</p>
            <span>
              {emoji}
              {emoji}
            </span>
          </div>
        </div>
      </div>
      
    </div>
    <hr className="text-gray-400 w-80 my-2" />
    </div>
  );
};

export default Conversation;
