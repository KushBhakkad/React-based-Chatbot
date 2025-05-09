import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPaperPlane } from 'react-icons/fa';
import { generateResponse } from '../services/geminiAPI';
import { useChat } from '../context/ChatContext';
import { formatTimestamp, generateMessageId } from '../services/utils';

const InputContainer = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  position: sticky;
  bottom: 0;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 16px;
  outline: none;
  transition: border 0.2s ease;
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.2);
  }
`;

const SendButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}dd;
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.border};
    cursor: not-allowed;
  }
`;

const ChatInput = () => {
  const [input, setInput] = useState('');
  const { addMessage, setLoading } = useChat();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      id: generateMessageId(),
      content: input.trim(),
      timestamp: formatTimestamp(),
      isUser: true,
    };
    addMessage(userMessage);
    setInput('');
    
    // Show loading state
    setLoading(true);
    
    try {
      // Get response from Gemini API
      const response = await generateResponse(input.trim());
      
      // Add bot message
      const botMessage = {
        id: generateMessageId(),
        content: response,
        timestamp: formatTimestamp(),
        isUser: false,
      };
      addMessage(botMessage);
    } catch (error) {
      // Handle error
      const errorMessage = {
        id: generateMessageId(),
        content: "Sorry, I couldn't generate a response. Please try again.",
        timestamp: formatTimestamp(),
        isUser: false,
      };
      addMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <InputContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          aria-label="Message input"
        />
        <SendButton type="submit" disabled={!input.trim()}>
          <FaPaperPlane size={18} />
        </SendButton>
      </StyledForm>
    </InputContainer>
  );
};

export default ChatInput;