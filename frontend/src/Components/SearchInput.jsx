import React from 'react'

const SearchInput = () => {
  return (
    <div>
      <form action="" className='flex items-center justify-center gap-2 px-4 '>
        <input type="text" placeholder='Search...'  className='bg-gray-900 w-full h-9 rounded-full mt-2 text-gray-300 px-8 mt-10'/>
        <button type='submit' className='text-3xl hover:bg-blue-400 rounded-full p-2 mt-8'>🔍 </button>

      </form>
    </div>
  )
}

export default SearchInput
