import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (newtodo) => {
    setTodos((todos) => [...todos, { ...newtodo, id: uuid() }]);
  };
  const remove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const todoComponents = todos.map((todo) => (
    <Todo id={todo.id} name={todo.name} key={todo.id} handleRemove={remove} />
  ));

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        <NewTodoForm addTodo={addTodo} />
      </ul>
      {todoComponents}
    </div>
  );
};

export default TodoList;
