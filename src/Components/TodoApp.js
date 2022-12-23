import React, { useState } from "react";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  overflow: auto;
`;

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTodo) return;
    setTodos((todos) => [...todos, { id: Date.now(), text: newTodo }]);
    setNewTodo("");
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleDelete = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContainer>
      <h1>Todo App</h1>
      <TodoForm
        handleSubmit={handleSubmit}
        newTodo={newTodo}
        handleChange={handleChange}
      />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </TodoContainer>
  );
};

export default TodoApp;
