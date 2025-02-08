import { createContext } from "react";
import { useState, useEffect,useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client';

export const SocketContext = createContext();

export const useSocketContext=()=>{
    return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const newSocket = io('http://localhost:5000',{ // renamed to avoid conflict
            query:{
                userId:authUser._id,
            }
            });
            setSocket(newSocket);
            socket.on('getOnlineUsers',(users)=>{
                setOnlineUsers(users);
            })
            return () => newSocket.close(); // cleanup on unmount or authUser change
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]); // use authUser as a dependency

    return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};
