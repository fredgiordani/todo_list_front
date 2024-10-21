import React from 'react';
import TodoItem from './TodoItems';

const TodoList = ({ todos, onDelete }) => {
  return (
    <ul className="list-group mt-3">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
