import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/signup");
  };
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState('');
  const {login,loading}=useLogin()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await login(username,password)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto text-gray-700 ">
      <div className="isolate aspect-video w-96 rounded-xl bg-white/50 shadow-lg ring-1 ring-black/5 px-4">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Log In
        </h1>
        <form onSubmit={handleSubmit} className=" ">
          <div className="flex flex-col mb-4 ">
            <label className="p-2 font-semibold text-blue-800 ">Username</label>
            <input
              type="text"
              placeholder="Enter username "
              className="w-full input input-bordered h-10 bg-gray-900 rounded-md p-2"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4 ">
            <label className="p-2 font-semibold text-blue-800 ">Password</label>
            <input
              type="Password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 bg-gray-900 rounded-md p-2"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <a
            onClick={goToSignUp}
            className="text-sm hover:text-blue-500 inline-block mt-2 cursor-pointer"
          >
            Don't have an account?
          </a>
          <div className="flex items-cennter justify-center">
            <button 
            disabled={loading}
            className="font-semibold text-blue-800 bg-transparent my-4 border border-slate-700 px-2 w-100 py-2 rounded-md hover:cursor-pointer">
              {loading?"Logging In":"Log In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
