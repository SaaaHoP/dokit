import axios from 'axios';
import React, { useState } from 'react';
import { address } from '../../../variables';
import {
  TodoItem,
  TodoItemIcon,
  TodoItemTitle,
  TodoItemDescription,
  TodoItemPencil,
  TodoItemLock,
  TodoItemUnlock,
  TodoItemLockBox,
  TodoItemChecked,
  TodoItemBlankCheck,
  TodoItemTitleCompleted,
  TodoItemTitleBox,
  TodoItemDescriptionArrow,
  TodoItemDescriptionBox,
  TodoItemTextBox,
  TodoItemDescriptionCompleted,
} from '../StyledComponent';
import TodolistItemReviseComponent from './TodolistItemReviseComponent';

const TodolistItemComponent = ({
  todo,
  onToggle,
  onLock,
  onRemove,
  selectDate,
  onRevise,
}) => {
  const {
    completed,
    content,
    date,
    description,
    emoticon,
    emphasized,
    id,
    opened,
    sequence,
  } = todo;

  const [background, setBackground] = useState(false);
  const onBackground = () => {
    setBackground(!background);
  };

  const onClickComplete = async (sequence) => {
    onToggle(sequence);
    let jwtToken = localStorage.getItem('Authorization');
    axios.defaults.headers.common['Authorization'] = jwtToken;
    await axios.patch(`${address}/todolist/me/completed`, {
      completed: !completed,
      id: id,
    });
  };

  const onClickLock = async (sequence) => {
    onLock(sequence);
    let jwtToken = localStorage.getItem('Authorization');
    axios.defaults.headers.common['Authorization'] = jwtToken;
    await axios.patch(`${address}/todolist/me/opened`, {
      id: id,
      opened: !opened,
    });
  };

  return (
    <>
      <TodoItem>
        <TodoItemIcon onClick={() => onClickComplete(sequence)}>
          {completed ? <TodoItemChecked /> : <TodoItemBlankCheck />}
        </TodoItemIcon>
        <TodoItemTextBox>
          <TodoItemTitleBox>
            <TodoItemTitle onClick={() => onClickComplete(sequence)}>
              {completed ? (
                <TodoItemTitleCompleted>{content}</TodoItemTitleCompleted>
              ) : (
                <TodoItemTitle>{content}</TodoItemTitle>
              )}
            </TodoItemTitle>
          </TodoItemTitleBox>
          <TodoItemDescriptionBox>
            <TodoItemDescriptionArrow />
            {completed ? (
              <TodoItemDescriptionCompleted>
                {description}
              </TodoItemDescriptionCompleted>
            ) : (
              <TodoItemDescription>{description}</TodoItemDescription>
            )}
          </TodoItemDescriptionBox>
        </TodoItemTextBox>
        <TodoItemPencil onClick={onBackground}></TodoItemPencil>
        <TodoItemLockBox onClick={() => onClickLock(sequence)}>
          {opened ? <TodoItemUnlock /> : <TodoItemLock />}
        </TodoItemLockBox>
      </TodoItem>
      {background ? (
        <TodolistItemReviseComponent
          todo={todo}
          onRemove={onRemove}
          selectDate={selectDate}
          onBackground={onBackground}
          onRevise={onRevise}
        />
      ) : null}
    </>
  );
};

export default TodolistItemComponent;
