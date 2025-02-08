import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emogies";

const Conversations = () => {
  const {loading,conversation}=useGetConversation()
  // console.log("Conversations",conversation)
  return (
    <div className="px-4 flex flex-col overflow-auto">
      {conversation.map((conversation)=>(
          <Conversation key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          />
      ))}
      
    </div>
  );
};

export default Conversations;
