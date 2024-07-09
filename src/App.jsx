import React, { useState } from "react";
import ShapeCanvas from "./components/ShapeCanvas";
import { shapes, colors } from "./Shapes/shape";
import "./App.css";

const App = () => {
  // State to hold the list of shapes
  const [shapesState, setShapes] = useState([]);

  const addShape = () => {
    const type = shapes[Math.floor(Math.random() * shapes.length)]; // Randomly select a shape type
    const color = colors[Math.floor(Math.random() * colors.length)]; // Randomly select a color
    const size = Math.random() * 50; // Random size
    const x = Math.random() * 400; // Random x-coordinate
    const y = Math.random() * 400; // Random y-coordinate

    // Add the new shape to the state
    setShapes([...shapesState, { id: shapesState.length, type, color, size, x, y }]);
  };

  // Function to print the shapes state as JSON to the console
  const printJSON = () => {
    const json = JSON.stringify(shapesState);
    console.log(json);
  };

  return (
    <div className="container">
      <div className="editor-header">
        <h1>Mini Shape Editor</h1>
        <div className="Button">
          <button onClick={addShape}>Add Shape</button>
          <button onClick={printJSON}>Print JSON</button>
        </div>
      </div>
      <ShapeCanvas shapes={shapesState} setShapes={setShapes} />
    </div>
  );
};

export default App;
