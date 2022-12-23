import styled from "styled-components";

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Todolist = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const TodoText = styled.span``;

const TodoDeleteButton = styled.button`
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const TodoList = ({ todos, handleDelete }) => {
  return (
    <Todolist>
      {todos.map((todo) => (
        <TodoItem key={todo.id}>
          <TodoText>{todo.text}</TodoText>
          <TodoDeleteButton onClick={() => handleDelete(todo.id)}>
            Delete
          </TodoDeleteButton>
        </TodoItem>
      ))}
    </Todolist>
  );
};

export default TodoList;
