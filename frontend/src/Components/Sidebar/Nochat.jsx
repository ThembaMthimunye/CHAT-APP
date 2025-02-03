import React from "react";
import { TiMessages } from "react-icons/ti";
const Nochat = () => {
  return (
    <div className="isolate aspect-video w-100 rounded-xl bg-white/50 shadow-lg ring-1 ring-black/5 px-4  h-182">
        <div className='flex flex-col justify-center items-center h-full '>
      <p className="text-white font-bold text-2xl">Hey Themba 😇 Select A Chat To Start Messaging 👣</p>
      <TiMessages className="text-5xl text-white mt-6" />
    </div>
    </div>
    
  );
};

export default Nochat;
