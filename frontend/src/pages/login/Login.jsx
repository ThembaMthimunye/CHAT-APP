import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="isolate aspect-video w-96 rounded-xl bg-white/50 shadow-lg ring-1 ring-black/5">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Login to <span className="text-blue-500">ChatApp</span>
        </h1>
        <form className="text-xl text-blue-800"> 
          <div className="flex flex-col mb-4 ">
            <label className="p-2 ">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="p-2 ">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a href="#" className="text-sm hover:text-blue-500 inline-block mt-2">
            Don't have an account?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
