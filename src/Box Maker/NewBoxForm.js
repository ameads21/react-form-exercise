import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    color: "",
    height: 0,
    width: 0,
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
    addBox({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color</label>
      <input
        id="color"
        type="text"
        name="color"
        placeholder="Color Name"
        value={formData.color}
        onChange={handleChange}
      />

      <label htmlFor="width">Width</label>
      <input
        id="width"
        type="number"
        name="width"
        value={formData.width}
        onChange={handleChange}
        min={0}
      />

      <label htmlFor="height">Height</label>
      <input
        id="height"
        type="number"
        name="height"
        value={formData.height}
        onChange={handleChange}
        min={0}
      />
      <button>Create Box</button>
    </form>
  );
};

export default NewBoxForm;
