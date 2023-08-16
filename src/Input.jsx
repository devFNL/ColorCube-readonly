import React from "react";
import colorNames from "colornames";

const Input = ({ color, setColor, setHex, isDark, setIsDark }) => {
  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor=""></label>
      <input
        type="text"
        autoFocus
        placeholder="Add a color"
        required
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHex(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDark(!isDark)}>
        Text Color
      </button>
    </form>
  );
};

export default Input;
