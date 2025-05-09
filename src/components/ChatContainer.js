import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ChatMessage from './ChatMessage';
import Loader from './Loader';
import { useChat } from '../context/ChatContext';

const Container = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.md} 0;
  scroll-behavior: smooth;
  background-color: ${({ theme }) => theme.colors.surface};
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const EmptyStateTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 500;
`;

const EmptyStateDescription = styled.p`
  max-width: 600px;
  line-height: 1.6;
`;

const ChatContainer = () => {
  const { messages, loading } = useChat();
  const endOfMessagesRef = useRef();
  
  // Scroll to bottom when new messages are added
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  return (
    <Container>
      {messages.length === 0 ? (
        <EmptyState>
          <EmptyStateTitle>Welcome to your personalized Chatbot!</EmptyStateTitle>
          <EmptyStateDescription>
            Ask me anything and I'll do my best to help you. I can answer questions,
            generate text, have conversations, and more.
          </EmptyStateDescription>
        </EmptyState>
      ) : (
        messages.map((message) => (
          <ChatMessage 
            key={message.id} 
            message={message} 
            isUser={message.isUser} 
          />
        ))
      )}
      
      {loading && <Loader />}
      <div ref={endOfMessagesRef} />
    </Container>
  );
};

export default ChatContainer;