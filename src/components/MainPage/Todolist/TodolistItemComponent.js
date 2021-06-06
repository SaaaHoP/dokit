import React, { useState } from 'react';
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
  // console.log(todo);
  const onBackground = () => {
    setBackground(!background);
  };


  return (
    <>
      <TodoItem>
        <TodoItemIcon onClick={() => onToggle(sequence)}>
          {completed ? <TodoItemChecked /> : <TodoItemBlankCheck />}
        </TodoItemIcon>
        <TodoItemTextBox>
          <TodoItemTitleBox>
            <TodoItemTitle onClick={() => onToggle(sequence)}>
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
        <TodoItemLockBox onClick={() => onLock(sequence)}>
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
