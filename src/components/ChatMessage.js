import React from 'react';
import styled from 'styled-components';
import { FaRobot, FaUser } from 'react-icons/fa';

const MessageContainer = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding: 0 ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  background-color: ${({ theme, isUser }) => 
    isUser ? theme.colors.secondary : theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 4px;
`;

const BubbleContainer = styled.div`
  margin-left: ${({ isUser }) => (isUser ? '0' : '12px')};
  margin-right: ${({ isUser }) => (isUser ? '12px' : '0')};
  display: flex;
  flex-direction: column;
  max-width: 80%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 85%;
  }
`;

const Bubble = styled.div`
  background-color: ${({ theme, isUser }) => 
    isUser ? theme.colors.surface : theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.small};
  white-space: pre-wrap;
  word-break: break-word;
`;

const MessageContent = styled.div`
  font-size: 15px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
`;

const Timestamp = styled.div`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 12px;
  margin-top: 4px;
  align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
`;

const ChatMessage = ({ message, isUser }) => {
  const { content, timestamp } = message;
  
  return (
    <MessageContainer style={{ justifyContent: isUser ? 'flex-end' : 'flex-start' }}>
      {!isUser && (
        <Avatar isUser={isUser}>
          <FaRobot size={16} />
        </Avatar>
      )}
      
      <BubbleContainer isUser={isUser}>
        <Bubble isUser={isUser}>
          <MessageContent>{content}</MessageContent>
        </Bubble>
        <Timestamp isUser={isUser}>{timestamp}</Timestamp>
      </BubbleContainer>
      
      {isUser && (
        <Avatar isUser={isUser}>
          <FaUser size={16} />
        </Avatar>
      )}
    </MessageContainer>
  );
};

export default ChatMessage;