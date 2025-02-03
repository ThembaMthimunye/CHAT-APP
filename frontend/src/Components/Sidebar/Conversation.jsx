import React from "react";

const Conversation = () => {
  return (
    <div className="flex flex-col justify-center">
        <div className="flex items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
      <div className="avatar py-2">
        <div className="ring-primary ring-offset-base-100 w-12  rounded-full ring ring-offset-2">
          <img
            className="rounded-full"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="User avatar"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 px-4">
        <div className="flex justify-between font-bold text-white gap-3 ">
          <p>Themba Mthimunye</p>
          <span>🤣🤣</span>
        </div>
      </div>
    </div>
    <hr className="text-gray-400 w-80 my-2"/>
    </div>
    
  );
};

export default Conversation;
