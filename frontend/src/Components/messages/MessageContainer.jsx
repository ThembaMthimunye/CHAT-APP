import React from "react";
import Messages from "./Messages";
import useConversation from "../../zustand/useConversation.js";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  return (
    <div className="md:min-w-[450px] flex flex-col">
      <div className="aspect-video w-96 rounded-xl bg-white/50 shadow-lg ring-1 ring-black/5 px-4 py-2 mb-2 w-200 ">
        <div className="py-4 rounded-sm flex justify-center items-center font-semibold">
           <span className="font-bold text-xl flex justify-center items-center">{selectedConversation?selectedConversation.fullname:""}</span> 
        </div>
        <hr className="pb-4 text-gray-400" />
        <Messages />
      </div>
    </div>
  );
};

export default MessageContainer;
