import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import React from "react";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
   
        const res = await fetch(`/api/messages/${selectedConversation._id}`);

        if (!res.ok) {
          throw new Error(`Failed to fetch messages. Status: ${res.status}`);
        }

        const data = await res.json();

        if (data && data.error) {
          throw new Error(data.error);
        }

        if (!data || !Array.isArray(data)) {
          toast.error("No messages found.");
          setMessages([]);
          return;
        }

        // Set the messages state with the fetched data
        setMessages(data);
      } catch (error) {
        // Handle any errors, including network or server issues
        toast.error(`Error: ${error.message || "An error occurred"}`);
      } finally {
        setLoading(false);
      }
    };

    // Make sure the selected conversation exists before making the request
    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessages]);

  return { messages: messages || [], loading };  
};

export default useGetMessages;
