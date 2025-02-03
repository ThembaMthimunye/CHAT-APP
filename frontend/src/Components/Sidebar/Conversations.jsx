import React from "react";
import Conversation from "./Conversation";

const Conversations = () => {
  return (
    <div className="px-4 flex flex-col overflow-auto">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};

export default Conversations;
