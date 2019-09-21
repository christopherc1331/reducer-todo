import React, { useState, useReducer } from "react";

import { initialState, todoReducer } from "../Reducers/TodoReducer.js";

const ToDoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newToDoItemText, setNewToDoItemText] = useState("");

  const handleChanges = event => {
    setNewToDoItemText(event.target.value);
  };

  return (
    <div>
      <div>
        <h1 className="emTitle">To Do List</h1>
        <div>
          <form>
            <input value={newToDoItemText} onChange={handleChanges} />
            <button
              onClick={event => {
                event.preventDefault();
                dispatch({ type: "ADD_TODO", payload: newToDoItemText });
                setNewToDoItemText("");
              }}
              className="toDoButton"
            >
              Add New To Do
            </button>
          </form>
        </div>
        <button
          onClick={event => {
            event.preventDefault();
            dispatch({ type: "CLEAR_COMPLETED" });
          }}
        >
          Clear Completed
        </button>
        <div className="toDoListContainer notCompleted">
          {state.map(item => (
            <div key={item.id} className="toDoItem">
              <h3>{item.item}</h3>
              <input
                type="checkbox"
                value={item.completed}
                onClick={() => {
                  dispatch({
                    type: "TOGGLE_COMPLETED",
                    payload: {
                      item: item.item,
                      completed: item.completed,
                      id: item.id
                    }
                  });
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
