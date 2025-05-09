import React, { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };
  
  return (
    <ChatContext.Provider value={{ messages, addMessage, loading, setLoading }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);