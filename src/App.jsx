import React, { useState } from "react";
import Cube from "./Cube";
import Input from "./Input";

function App() {
  const [color, setColor] = useState("");
  const [hex, setHex] = useState("");
  const [isDark, setIsDark] = useState(true);

  return (
    <>
      <div className="container">
        <h1>COLOR CUBE</h1>
        <Cube color={color} hex={hex} isDark={isDark} />
        <Input
          color={color}
          setColor={setColor}
          setHex={setHex}
          isDark={isDark}
          setIsDark={setIsDark}
        />
      </div>
    </>
  );
}

export default App;
