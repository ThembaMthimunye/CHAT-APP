import React from "react";
import SearchInput from "../SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import MessageContainer from "../messages/MessageContainer";
const Sidebar = () => {
  return (
    <div className="flex gap-2">
      <div className="isolate aspect-video w-96 rounded-xl bg-white/40 shadow-lg ring-1 ring-black/5 h-auto">
        <div>
          <SearchInput />
          <Conversations />
          <LogoutButton />
        </div>
        
      </div>
      <MessageContainer/>
    </div>
  );
};

export default Sidebar;
