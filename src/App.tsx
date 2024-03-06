import { useState } from "react";
import Header from "./components/Header";
import MarkdownCheatSheet from "./components/MarkdownCheatSheet";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOutput from "./components/MarkdownOutput";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const App = () => {
  const [showCheatSheet, setShowCheatSheet] = useState<boolean>(false);
  const [markdownText, setMarkdownText] = useState<string>("# Hello World");

  const handleMarkdownInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(e.target.value);
  };
  const handleToggleGuide = () => {
    setShowCheatSheet(!showCheatSheet);
  };
  return (
    <div>
      <Header onToggleGuide={handleToggleGuide} />
      {showCheatSheet && <MarkdownCheatSheet />}
      <Container>
        <MarkdownInput value={markdownText} onChange={handleMarkdownInput} />
        <MarkdownOutput markdown={markdownText} />
      </Container>
    </div>
  );
};

export default App;
