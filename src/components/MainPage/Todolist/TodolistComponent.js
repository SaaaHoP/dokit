import React from 'react';
import { TodoItemlist } from '../StyledComponent';
import TodolistItemComponent from './TodolistItemComponent';

const TodolistComponent = ({ todos, onToggle, onLock }) => {
  return (
    <>
      <TodoItemlist>
        {todos.map((todo) => (
          <TodolistItemComponent
            todo={todo}
            key={todo.sequence}
            onToggle={onToggle}
            onLock={onLock}
          ></TodolistItemComponent>
        ))}
      </TodoItemlist>
    </>
  );
};

export default TodolistComponent;
