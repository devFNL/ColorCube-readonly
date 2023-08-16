import React from "react";

const Cube = ({ color, hex, isDark }) => {
  return (
    <section
      className="cube"
      style={{ backgroundColor: color, color: isDark ? "#000" : "#FFF" }}
    >
      <p>{color ? color : "Empty Value"}</p>
      <p>{hex ? hex : null}</p>
    </section>
  );
};

Cube.defaultProps = {
  color: "Empty Color Value",
};

export default Cube;
