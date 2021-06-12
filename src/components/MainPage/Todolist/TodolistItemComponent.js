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
  TodoItemAddIcon1,
  TodoItemAddIconNone,
  TodoItemAddIcon2,
  TodoItemAddIcon3,
  TodoItemAddIcon4,
  TodoItemAddIcon5,
  TodoItemAddIcon6,
  TodoItemAddIcon7,
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

  const iconReturn = () => {
    if (emoticon === 'null')
      return <TodoItemAddIconNone style={{ marginLeft: '0' }} />;
    else if (emoticon === '1')
      return <TodoItemAddIcon1 style={{ marginLeft: '0' }} />;
    else if (emoticon === '2')
      return <TodoItemAddIcon2 style={{ marginLeft: '0' }} />;
    else if (emoticon === '3')
      return <TodoItemAddIcon3 style={{ marginLeft: '0' }} />;
    else if (emoticon === '4')
      return <TodoItemAddIcon4 style={{ marginLeft: '0' }} />;
    else if (emoticon === '5')
      return <TodoItemAddIcon5 style={{ marginLeft: '0' }} />;
    else if (emoticon === '6')
      return <TodoItemAddIcon6 style={{ marginLeft: '0' }} />;
    else if (emoticon === '7')
      return <TodoItemAddIcon7 style={{ marginLeft: '0' }} />;
  };

  return (
    <>
      <TodoItem>
        <TodoItemIcon onClick={() => onClickComplete(sequence)}>
          {completed ? (
            <TodoItemChecked>{iconReturn()}</TodoItemChecked>
          ) : (
            <TodoItemBlankCheck>{iconReturn()}</TodoItemBlankCheck>
          )}
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
