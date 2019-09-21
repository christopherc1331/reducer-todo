import React from "react";
import "./App.css";

// Components
import ToDoList from "./Components/ToDoList.js";

function App() {
  return (
    <div className="App">
      <em>From App.js</em>
      <ToDoList />
    </div>
  );
}

export default App;
