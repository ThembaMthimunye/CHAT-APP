import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import React from "react";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversations] = useState([]);
  useEffect(() => {
    const GetConversation = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.error) {
          throw Error(data.error);
        }

        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    GetConversation()
  },[]);

  return {loading,conversation}
};

export default useGetConversation;
