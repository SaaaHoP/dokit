import React from 'react';
import { TodoItemlist } from '../StyledComponent';
import TodolistItemComponent from './TodolistItemComponent';

const TodolistComponent = ({
  todos,
  onToggle,
  onLock,
  onRemove,
  selectDate,
  onRevise,
}) => {

  return (
    <>
      <TodoItemlist>
        {todos.map((todo) => (
          <TodolistItemComponent
            todo={todo}
            key={todo.sequence}
            onToggle={onToggle}
            onLock={onLock}
            onRemove={onRemove}
            selectDate={selectDate}
            onRevise={onRevise}
          ></TodolistItemComponent>
        ))}
      </TodoItemlist>
    </>
  );
};

export default TodolistComponent;
