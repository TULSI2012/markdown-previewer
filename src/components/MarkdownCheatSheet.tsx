import React from "react";
import styled from "styled-components";

const Guidcontainer = styled.div`
  background-color: #9cf7f6;
  padding: 10px;
  font-family: Copperplate, Papyrus, fantasy;
`;
const Heading = styled.h2`
  font-family: Copperplate, Papyrus, fantasy;
  color: #e43070;
`;

const MarkdownCheatSheet: React.FC = () => {
  return (
    <Guidcontainer>
      <Heading>Markdown Syntax Guide</Heading>
      <ul>
        <li>
          <code>#</code> - Heading 1
        </li>
        <li>
          <code>##</code> - Heading 2
        </li>
        <li>
          <code>###</code> - Heading 3
        </li>
        <li>
          <code>**text**</code> - Bold
        </li>
        <li>
          <code>*text*</code> - Italic
        </li>
        <li>
          <code>***</code> - Horizontal Ruler
        </li>
        <li>
          <code>[title](https://www.example.com)</code> - URL/Links
        </li>
        <li>
          <code>![alt text](image.jpg)</code> - Image
        </li>
      </ul>
    </Guidcontainer>
  );
};

export default MarkdownCheatSheet;
