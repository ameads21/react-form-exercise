import React from "react";

const Box = ({ color, width, height, handleRemove, id }) => {
  const remove = () => handleRemove(id);
  return (
    <div
      style={{
        backgroundColor: color,
        width: `${width}em`,
        height: `${height}em`,
      }}
    >
      <button onClick={remove}>Remove The Box!</button>
    </div>
  );
};

export default Box;
