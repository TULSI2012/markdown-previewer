import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  width: 50%;
  max-width: 767px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 615px;
  padding: 20px;
  font-size: 16px;
  border: 2px solid white;
  border-radius: 5px;
  background-color: #1dc2e0;
`;

interface MarkdownInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={onChange} />
    </InputContainer>
  );
};

export default MarkdownInput;
