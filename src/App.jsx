import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue" message="お元気ですか？">
        元気元気
      </ColorfulMessage>
      <ColorfulMessage color="pink" message="元気です" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
