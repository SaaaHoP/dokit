import axios from 'axios';
import React, { useState, useCallback, useEffect } from 'react';
import {
  TodoItemAddButton,
  TodolistLeftArrow,
  TodolistLeftBox,
  TodolistLeftSubBox,
  TodolistLeftSubBoxText,
  TodolistRightSubBox,
  TodolistRightSubBoxText,
  TodolistRightBox,
  TodolistRightArrow,
} from './StyledComponent';
import { address } from '../../variables';
import TodolistComponent from './Todolist/TodolistComponent';
import TodolistTemplateComponent from './Todolist/TodolistTemplateComponent';
import TodolistItemAddComponent from './Todolist/TodolistItemAddComponent';

const TodayTodolistComponent = ({
  selectDate,
  onClickPreviousday,
  onClickNextday,
}) => {
  const [todos, setTodos] = useState([]);
  const [yesterdayTodos, setYesterdayTodos] = useState([]);
  const [tomorrowTodos, setTomorrowTodos] = useState([]);
  const [background, setBackground] = useState(false);

  // useEffect(() => {
  //   axios.get(`${address}/todolist/me`).then((res) => {
  //     const data = res.data.lists[1];
  //     if (data.numberOfItems === 0) {
  //       setTodos(data.listItems);
  //     } else {
  //       setTodos(data.listItems);
  //       setSequence(data.listItems[data.listItems.length - 1].sequence + 1);
  //       // console.log(sequence);
  //     }
  //   });
  // }, [sequence]);

  useEffect(() => {
    const axiosGet = async () => {
      let jwtToken = localStorage.getItem('Authorization');
      axios.defaults.headers.common['Authorization'] = jwtToken;
      await axios
        .get(`${address}/todolist/me`, { params: { date: selectDate } })
        .then((res) => {
          const todayData = res.data.lists[1];
          const yesterdayData = res.data.lists[0];
          const tomorrowData = res.data.lists[2];
          setTodos(todayData.listItems);
          setYesterdayTodos(yesterdayData);
          setTomorrowTodos(tomorrowData);
        });
    };
    axiosGet();
  }, [selectDate]);

  // console.log(sequence);
  // const nextSequence = useRef();
  // nextSequence.current = sequence + 1;
  // console.log(nextSequence.current);

  // const onBackground = useCallback(() => {
  //   setBackground(!background);
  // }, [background]);

  const onBackground = () => {
    setBackground(!background);
  };

  const onInsert = useCallback(
    async (content, description, lock, icon) => {
      let todo = {
        completed: false,
        content: content,
        date: selectDate,
        description: description,
        emoticon: icon,
        emphasized: null,
        id: null,
        opened: lock,
        sequence: null,
      };
      await axios.put(`${address}/todolist/me`, todo).then((res) => {
        if (res.status === 201) {
          todo = {
            ...todo,
            id: res.data.id,
            sequence: res.data.sequence,
          };
        }
      });
      setTodos(todos.concat(todo));
    },
    [todos, selectDate]
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

  const onRevise = useCallback(
    (sequence, todoContent, todoDescription, lock, icon) => {
      setTodos(
        todos.map((todo) =>
          todo.sequence === sequence
            ? {
                ...todo,
                content: todoContent,
                description: todoDescription,
                opened: lock,
                emoticon: icon,
              }
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
      {background ? (
        <TodolistItemAddComponent
          onInsert={onInsert}
          onBackground={onBackground}
        />
      ) : null}
      <TodolistLeftBox>
        <TodolistLeftArrow onClick={onClickPreviousday}></TodolistLeftArrow>
        <TodolistLeftSubBox>
          <TodolistLeftSubBoxText>어제</TodolistLeftSubBoxText>
          <TodolistLeftSubBoxText>
            완료{' '}
            {yesterdayTodos.numberOfItems - yesterdayTodos.numberOfIncomplete}건
            미완료 {yesterdayTodos.numberOfIncomplete}건
          </TodolistLeftSubBoxText>
        </TodolistLeftSubBox>
      </TodolistLeftBox>
      <TodolistTemplateComponent>
        <TodolistComponent
          todos={todos}
          onRemove={onRemove}
          onToggle={onToggle}
          onLock={onLock}
          selectDate={selectDate}
          onRevise={onRevise}
        ></TodolistComponent>
        <TodoItemAddButton onClick={onBackground}></TodoItemAddButton>
      </TodolistTemplateComponent>
      <TodolistRightBox>
        <TodolistRightArrow onClick={onClickNextday}></TodolistRightArrow>
        <TodolistRightSubBox>
          <TodolistRightSubBoxText>내일</TodolistRightSubBoxText>
          <TodolistRightSubBoxText>
            예정 할 일 {tomorrowTodos.numberOfIncomplete}건
          </TodolistRightSubBoxText>
        </TodolistRightSubBox>
      </TodolistRightBox>
    </>
  );
};

export default TodayTodolistComponent;
