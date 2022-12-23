import styled from "styled-components";

const TodoInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;
const Todoform = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const TodoButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const TodoForm = ({ handleSubmit, newTodo, handleChange }) => {
  return (
    <Todoform onSubmit={handleSubmit}>
      <TodoInput
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={handleChange}
      />
      <TodoButton type="submit">Add</TodoButton>
    </Todoform>
  );
};

export default TodoForm;
