import React from "react";

const Todo = ({ name, handleRemove, id }) => {
  const remove = () => handleRemove(id);
  return (
    <li>
      {name}
      <button onClick={remove}>X</button>
    </li>
  );
};

export default Todo;
