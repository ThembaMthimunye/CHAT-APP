import {React,useState} from 'react'
import useConversation from '../zustand/useConversation';
import useGetConversation from "../hooks/useGetConversation.js"
import toast from 'react-hot-toast';

const SearchInput = () => {
  const[search,setSearch]=useState('');
  const {setSelectedConversation}=useConversation()
  const {conversation}=useGetConversation()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search must be at least 3 characters long");
    }
  
    const foundConversation = conversation.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
  
    if (foundConversation) {
      setSelectedConversation(foundConversation);
      setSearch('');
    } else {
      toast.error("No such user found");
    }
  };
  
  

  return (
    <div>
      <form onSubmit={handleSubmit} action="" className='flex items-center justify-center gap-2 px-4 '>
        <input
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        type="text" placeholder='Search...'  className='bg-gray-900 w-full h-9 rounded-full mt-2 text-gray-300 px-8 mt-10'/>
        <button type='submit' className='text-3xl hover:bg-sky-300 rounded-full p-2 mt-8'>🔍 </button>
      </form>
    </div>
  )
}

export default SearchInput
