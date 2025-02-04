import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useSignup from "../../Components/hooks/useSignup";
const SignUp = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const {loading,signUp}=useSignup()

  const [input,SetInput]=useState({
    fullname:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  })

  const handleCheckbox=(gender)=>{
    SetInput({...input,gender})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await signUp(inputs)
    console.log(input);
  }

  return (
    <div className=" text-gray-700  flex flex-col items0centre justify-center min-w-96 mx-auto">
      <div className="isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 p-4">
        <h1 className="text-3xl  text-center text-gray-200">Sign Up</h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <div className="flex flex-col mb-4 ">
              <label className="p-2 font-semibold text-blue-800 ">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full input input-bordered h-10 bg-gray-900 rounded-md p-2"
                value={input.fullname}
                onChange={(e)=>SetInput({...input,fullname:e.target.value})}
              />
            </div>
            <div className="flex flex-col mb-4 ">
              <label className="p-2 font-semibold text-blue-800 ">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter username "
                className="w-full input input-bordered h-10 bg-gray-900 rounded-md p-2"
                value={input.username}
                onChange={(e)=>SetInput({...input,username:e.target.value})}
              />
            </div>
            <div className="flex flex-col mb-4 ">
              <label className="p-2 font-semibold text-blue-800 ">
                Password
              </label>
              <input
                type="Password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10 bg-gray-900 rounded-md p-2"
                value={input.password}
                onChange={(e)=>SetInput({...input,password:e.target.value})}
              />
            </div>
            <div className="flex flex-col mb-4 ">
              <label className="p-2 font-semibold text-blue-800 ">
                Confirm Password
              </label>
              <input
                type="Password"
                placeholder="Confirm Password"
                className="w-full input input-bordered h-10 bg-gray-900 rounded-md p-2"
                value={input.confirmPassword}
                onChange={(e)=>SetInput({...input,confirmPassword:e.target.value})}
              />
            </div>
            <GenderCheckbox onCheckboxChange={handleCheckbox} selectedGender={input.gender}/>
            <a
              onClick={goToLogin}
              className="text-sm text-black hover:underline hover:text-blue-600 mt-4 inline-block cursor-pointer"
            >
              Already have an account ? Log in
            </a>
            <div className="flex items-cennter justify-center">
              <button className="font-semibold text-blue-800  my-4 border border-slate-700 px-2 w-100 py-2 rounded-md bg-transparent">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
