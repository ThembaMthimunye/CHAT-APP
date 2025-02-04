import React from "react";
import { TiMessages } from "react-icons/ti";

const Nochat = () => {
  return (
    <div className="">
      <div className="flex flex-col flex items-center h-full ">
        <p className="text-white font-bold text-2xl my-30">
          Hey Themba 😇 Select A Chat To Start Messaging 👣
        </p>
        <TiMessages className="text-7xl text-white font-bold" />
      </div>
    </div>
  );
};

export default Nochat;
