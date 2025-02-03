import React from 'react'
import SearchInput from '../SearchInput'
// import Conversations from './Conversation'
import Conversations from './Conversations'
const Sidebar = () => {
  return (
    <div className="isolate aspect-video w-96 rounded-xl bg-white/40 shadow-lg ring-1 ring-black/5 h-200">
        <SearchInput/>
        
     <Conversations/>
        {/* <LogoutButton/>  */}
    </div>
  )
}

export default Sidebar
