import React from "react";
import Messages from "./Messages";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        <div className="isolate aspect-video w-96 rounded-xl bg-white/50 shadow-lg ring-1 ring-black/5 px-4 px-4 py-2 mb-2">
          <div className=" py-4 rounded-sm flex justify center items-center font-semibold px-4">
            <span className=""> Themba Mthimunye</span>
          </div>
          <hr className="pb-4 text-gray-400" />
          <Messages />
        </div>
      </>
    </div>
  );
};

export default MessageContainer;
