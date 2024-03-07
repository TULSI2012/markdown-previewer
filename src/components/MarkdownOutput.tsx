import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

// Define the styled component for the output container
const OutputContainer = styled.div`
  width: 50%;
  max-width: 767px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border: 2px solid white;
  height: 615px;
  padding: 20px;
  font-size: 16px;
  border: 2px solid white;
  border-radius: 5px;
  background-color: #1dc2e0;
`;

// Define the interface for props
interface MarkdownOutputProps {
  markdown: string;
}

// Define the MarkdownOutput component
const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;
