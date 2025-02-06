import React, { useState } from 'react'
import useConversation from '../zustand/useConversation'
import toast from 'react-hot-toast'

const useSendMessage = () => {
    const [loading, setLoading] = useState(false)
    const { message, setMessages, selectedConversation } = useConversation()

    const sendMessage = async (message) => {
        setLoading(true)
        try {
            // Ensure selectedConversation is valid and has _id
            if (!selectedConversation || !selectedConversation._id) {
                throw new Error('No valid conversation selected.')
            }

            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            })

            const data = await res.json()

            // Correct error handling (fixing typo)
            if (data.error) {
                throw new Error(data.error)
            }

            // Assuming `data` returned contains the new message or conversation data
            setMessages(prevMessages => [...prevMessages, data]) // Update with the new message(s)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { sendMessage, loading }
}

export default useSendMessage
