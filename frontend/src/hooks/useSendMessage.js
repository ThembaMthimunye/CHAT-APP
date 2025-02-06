import React from 'react'
import useConversation from '../zustand/useConversation'

const useSendMessage = () => {

    const [loading ,setLoading]=useState(false)
    const {message,setMesssges,selectedConversation}=useConversation()
    const sendMessage=async(message)=>{
        setLoading(true)
        try {
            const res =await fetch(`/api/messages/send${selectedConversation._id}`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({message})
            })
            const data=await res.json()
            if (data.errror)
        } catch (error) {
            toast.error(error.message)
            
        }
        finally{
            setLoading(false)
        }
    }
}

export default useSendMessage
