import React, { useRef, useState } from "react";

const Shape = ({ shape, updateShapePosition }) => {
  const shapeRef = useRef(null); // Reference to the shape element
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // Handle mouse down event to start dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  // Handle mouse move event
  const handleMouseMove = (e) => {
    if (isDragging) {
      const canvasRect = shapeRef.current.parentNode.getBoundingClientRect();
      const x = e.clientX - canvasRect.left - dragOffset.x;
      const y = e.clientY - canvasRect.top - dragOffset.y;
      // Ensure the shape stays within the canvas boundaries
      if (x >= 0 && y >= 0 && x + shape.size <= canvasRect.width && y + shape.size <= canvasRect.height) {
        updateShapePosition(shape.id, x, y);
      }
    }
  };

  // Handle mouse up event to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Define the style for the shape element based on its type
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

  return (
    <div
      ref={shapeRef}
      style={style}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    ></div>
  );
};

export default Shape;
