import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import React from "react";
import axios from 'axios';

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/messages/${selectedConversation._id}`);
        
        // Check if there's any data
        if (res.data && res.data.error) {
          throw new Error(res.data.error);
        }

        if (!res.data || Object.keys(res.data).length === 0) {
          toast.error("No messages found.");
          return;
        }

        setMessages(res.data);
      } catch (error) {
        // More detailed error handling
        if (error.response) {
          // Server responded with an error
          toast.error(`Error: ${error.response.status} - ${error.response.data.message || error.response.statusText}`);
        } else {
          // General error or network issue
          toast.error(error.message || "An error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) {
      fetchMessages();
    }
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
