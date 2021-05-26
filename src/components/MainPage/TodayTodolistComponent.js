import axios from 'axios';
import React, { useState, useRef, useCallback } from 'react';
import { TodoTemplate } from './StyledComponent';
import { address } from '../../variables';
import TodolistComponent from './Todolist/TodolistComponent';
import TodolistTemplateComponent from './Todolist/TodolistTemplateComponent';

const TodayTodolistComponent = () => {
  const [todos, setTodos] = useState([
    {
      completed: false,
      content: '인공지능 5주차 강의',
      description: '오늘까지 꼭 듣고 정리하기',
      emoticon: '',
      emphasized: null,
      id: 1,
      opened: false,
      sequence: 1,
    },
  ]);

  //   setTodos(await axios.get(`${address}/todolist/me`));

  const nextSequence = useRef(2);

  const onInsert = useCallback(
    (content) => {
      const todo = {
        sequence: nextSequence.current,
        content,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextSequence.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (sequence) => {
      setTodos(todos.filter((todo) => todo.sequence !== sequence));
    },
    [todos]
  );

  const onToggle = useCallback(
    (sequence) => {
      setTodos(
        todos.map((todo) =>
          todo.sequence === sequence
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      );
    },
    [todos]
  );

  const onLock = useCallback(
    (sequence) => {
      setTodos(
        todos.map((todo) =>
          todo.sequence === sequence ? { ...todo, opened: !todo.opened } : todo
        )
      );
    },
    [todos]
  );

  return (
    <>
      <TodolistTemplateComponent>
        <TodolistComponent
          todos={todos}
          onRemove={onRemove}
          onToggle={onToggle}
          onLock={onLock}
        ></TodolistComponent>
      </TodolistTemplateComponent>
    </>
  );
};

export default TodayTodolistComponent;
