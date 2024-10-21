import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>{todo.task}</span>
      <button className="btn btn-danger btn-sm" onClick={() => onDelete(todo._id)}>
        Supprimer
      </button>
    </li>
  );
};

export default TodoItem;
