import React, { useState } from "react";

const Todoapp2 = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {

    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

 
  return (
    <div>
      <h1>Todo List</h1>
    <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick= {addTodo  } >Todo</button>
      </div>
      <p>Number of todos: {todos.length}</p>
   
    </div>
  );
};

export default Todoapp2;
