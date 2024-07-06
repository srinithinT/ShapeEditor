import React, { useState } from "react";
import ShapeCanvas from "./ShapeCanvas";
import { shapes, colors } from "../src/Shapes/shape";
import "./App.css";

const App = () => {
  const [shapesState, setShapes] = useState([]);

  const addShape = () => {
    const type = shapes[Math.floor(Math.random() * shapes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 50;
    const x = Math.random() * 400;
    const y = Math.random() * 400;

    setShapes([...shapesState, { id: shapesState.length, type, color, size, x, y }]);
  };
  console.log(shapesState, "shapesState");
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
