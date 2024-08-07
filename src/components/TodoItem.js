import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, index, toggleComplete, removeTodo }) => {
  return (
    <li className="todo-item">
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleComplete(index)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
