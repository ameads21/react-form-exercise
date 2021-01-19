import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };
  const remove = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  const boxComponents = boxes.map((box) => (
    <Box
      id={box.id}
      color={box.color}
      width={box.width}
      height={box.height}
      key={box.id}
      handleRemove={remove}
    />
  ));

  return (
    <div>
      <h1>Color Box Maker</h1>
      <NewBoxForm addBox={addBox} />
      {boxComponents}
    </div>
  );
};

export default BoxList;
