import React from 'react'
import Message from "./Message"
import useGetMessages from '../../hooks/useGetMessages'

const Messages = () => {
  const {messages,loading}=useGetMessages()
  console.log("messages",messages)
  return (
    <div className=' flex-1  '>
        <Message/>
        {/* <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/> */}
    </div>
  )
}

export default Messages
