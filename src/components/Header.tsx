import styled from "styled-components";
import React from "react";

const HeaderContainer = styled.div`
  background-color: #1dc2e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: white;
`;

const Title = styled.h1`
  color: #e43070;
  font-family: Copperplate, Papyrus, fantasy;
  font-size: 30px;
  text-decoration: bold;
`;

const Button = styled.button`
  background-color: #e23270;
  border: 2px solid;
  padding: 10px;
  border-radius: 10px;
  color: white;
  font-family: Copperplate, Papyrus, fantasy;
  font-size: 20px;

  &:hover {
    background-color: black;
  }
`;

interface HeaderProps {
  onToggleGuide: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleGuide }) => {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Markdown Cheet Sheet</Button>
    </HeaderContainer>
  );
};

export default Header;
