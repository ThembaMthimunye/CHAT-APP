import React from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages.js";
import MessageSkeleton from "../../skeletons/MessageSkeletons";

const Messages = () => {
  const { messages, loading } = useGetMessages();  
  console.log("messages", messages);

  return (
    <div className="flex-1 flex flex-col justify-start"> 
     
      {loading ? (
        [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)
      ) : (
        <>
        
          {Array.isArray(messages) && messages.length === 0 ? (
            <p className="text-center text-gray-500 mt-4">
              Send a message to start a conversation
            </p>
          ) : (
            <div className="overflow-auto max-h-[80vh] space-y-2 py-0"> 
            
              {Array.isArray(messages) &&
                messages.map((message) => (
                  <Message key={message._id} message={message} />
                ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Messages;
