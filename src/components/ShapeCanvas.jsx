import React from "react";
import Shape from "../components/Shape";

const ShapeCanvas = ({ shapes, setShapes }) => {
  // Function to update the position of a shape
  const updateShapePosition = (id, x, y) => {
    const updatedShapes = shapes.map((shape) => (shape.id === id ? { ...shape, x, y } : shape));
    setShapes(updatedShapes);
  };

  return (
    <div className="canvas" style={{ position: "relative", width: "500px", height: "500px", border: "1px solid #000" }}>
      {shapes.map((shape) => (
        <Shape key={shape.id} shape={shape} updateShapePosition={updateShapePosition} />
      ))}
    </div>
  );
};

export default ShapeCanvas;
