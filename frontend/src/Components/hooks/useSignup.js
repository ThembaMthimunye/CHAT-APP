import { useState } from "react";
import { toast } from "react-hot-toast"; 
import axios from "axios"; // Import axios
import React from "react";
import { useAuthContext } from "../../../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {authUser,setAuthUser}=useAuthContext()

  function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      toast.error("Please fill all the fields");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  }

  const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
    const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
    if (!success) return; 

    setLoading(true); 
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        fullName,
        username,
        password,
        confirmPassword,
        gender,
      });

      // Axios automatically parses the response as JSON
      console.log(response.data); 
      toast.success("Registration successful!"); 
      if(response.error){
        throw new Error(response.error);
       
      }
      localStorage.setItem("chat-user",JSON.stringify(data))
      setAuthUser(data)
    } catch (error) {
      console.error(error); // Log the full error for debugging
      const errorMessage = error?.response?.data?.message || error?.message || "Something went wrong!";
      toast.error(errorMessage); 
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;
