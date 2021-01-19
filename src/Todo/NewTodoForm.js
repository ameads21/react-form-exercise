import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = {
    name: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Todo</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Todo"
        value={formData.name}
        onChange={handleChange}
      />
      <button>Create Todo</button>
    </form>
  );
};

export default NewTodoForm;
