import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
