import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1.0); }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.xs};
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, index }) => {
    const colors = [theme.colors.primary, theme.colors.secondary, theme.colors.accent];
    return colors[index % colors.length];
  }};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  animation: ${bounce} 1.4s infinite ease-in-out both;
  animation-delay: ${({ index }) => index * 0.16}s;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <Dot index={0} />
      <Dot index={1} />
      <Dot index={2} />
    </LoaderContainer>
  );
};

export default Loader;