import React, { useRef } from "react";

const Shape = ({ shape, updateShapePosition }) => {
  const shapeRef = useRef(null);

  const handleDragStart = (e) => {
    const rect = e.target.getBoundingClientRect();
    e.dataTransfer.setData("text/plain", `${rect.left},${rect.top}`);
  };

  const handleDrag = (e) => {
    if (e.clientX === 0 && e.clientY === 0) return;
    const canvasRect = e.target.parentNode.getBoundingClientRect();
    const x = e.clientX - canvasRect.left;
    const y = e.clientY - canvasRect.top;
    console.log(e.target, x, y, shape, canvasRect.width, "target element");
    if (x >= 0 && y >= 0 && x + shape.size <= canvasRect.width && y + shape.size <= canvasRect.height) {
      updateShapePosition(shape.id, x, y);
    }
  };

  const style = {
    position: "absolute",
    left: shape.x,
    top: shape.y,
    width: shape.size,
    height: shape.size,
    backgroundColor: shape.color,
    cursor: "move",
    ...(shape.type === "circle" && { borderRadius: "50%" }),
    ...(shape.type === "ellipse" && { borderRadius: "50%", width: shape.size }),
    ...(shape.type === "triangle" && {
      width: 0,
      height: 0,
      borderLeft: `${shape.size}px solid transparent`,
      borderRight: `${shape.size}px solid transparent`,
      borderBottom: `${shape.size}px solid ${shape.color}`,
      backgroundColor: "transparent",
    }),
  };

  return <div ref={shapeRef} style={style} draggable onDragStart={handleDragStart} onDrag={handleDrag}></div>;
};

export default Shape;
