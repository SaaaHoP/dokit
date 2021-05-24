import React from 'react';
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

const TodolistItemComponent = ({ todo, onToggle, onLock }) => {
  const {
    completed,
    content,
    description,
    emoticon,
    emphasized,
    id,
    opened,
    sequence,
  } = todo;
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
        <TodoItemPencil onClick></TodoItemPencil>
        <TodoItemLockBox onClick={() => onLock(sequence)}>
          {opened ? <TodoItemUnlock /> : <TodoItemLock />}
        </TodoItemLockBox>
      </TodoItem>
    </>
  );
};

export default TodolistItemComponent;
