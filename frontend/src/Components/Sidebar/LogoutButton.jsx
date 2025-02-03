import React from 'react'
import { IoIosLogOut } from "react-icons/io";

const LogoutButton = () => {
  return (
    <div className='mt-auto py-4'>
      <IoIosLogOut className='text-5xl mx-4 text-white cursor-pointer my-4  hover:bg-sky-300 hover:rounded-full p-1' />
    </div>
  )
}

export default LogoutButton
