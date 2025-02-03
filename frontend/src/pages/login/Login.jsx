import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto text-gray-700 ">
      <div className="isolate aspect-video w-96 rounded-xl bg-white/50 shadow-lg ring-1 ring-black/5 px-4">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Log In 
        </h1>
        <form className=" ">
        <div className="flex flex-col mb-4 ">
              <label className="p-2 font-semibold text-blue-800 ">Username</label>
              <input
                type="text"
                placeholder="Enter username "
                 className="w-full input input-bordered h-10 bg-gray-900 rounded-md p-2"
              />
            </div>
          <div className="flex flex-col mb-4 ">
              <label className="p-2 font-semibold text-blue-800 ">Password</label>
              <input
                type="Password"
                placeholder="Enter Password"
                 className="w-full input input-bordered h-10 bg-gray-900 rounded-md p-2"
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
