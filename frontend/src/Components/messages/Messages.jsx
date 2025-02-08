import React from 'react';
import Message from "./Message";
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../../skeletons/MessageSkeletons';

const Messages = () => {
  const {  messages = [], loading } = useGetMessages();
  console.log("messages", messages);

  return (
    <div className="flex-1 ">
      
      {loading ? (
        [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)
      ) : (
        <>
          
          {messages.length === 0 ? (
            <p className="text-center">Send a message to start a conversation</p>
          ) : (
            messages.map((message, idx) => (
              <Message key={idx} message={message} />
            ))
          )}
        </>
      )}
    </div>
  );
};

export default Messages;
