import React from 'react';
import styled from 'styled-components';
import { FaRobot } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  box-shadow: ${({ theme }) => theme.shadows.small};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-weight: bold;
  font-size: 1.2rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <FaRobot size={24} />
        <span>Personalized Chatbot</span>
      </Logo>
    </HeaderContainer>
  );
};

export default Header;