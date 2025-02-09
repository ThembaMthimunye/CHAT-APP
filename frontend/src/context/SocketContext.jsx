import { createContext } from "react";
import { useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client';

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const newSocket = io('http://localhost:5000', {
                query: {
                    userId: authUser._id,
                }
            });
            setSocket(newSocket);
            
            // Move the event listener here and ensure cleanup
            newSocket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users);
            });

            // Clean up on unmount or when authUser changes
            return () => {
                newSocket.off('getOnlineUsers'); // Remove event listener
                newSocket.close(); // Close socket
            };
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]); // Dependency on authUser to handle login/logout

    return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};
