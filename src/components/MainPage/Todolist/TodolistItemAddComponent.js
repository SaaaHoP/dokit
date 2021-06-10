import React, { useCallback, useState } from 'react';
import {
  TodoItemAddBackground,
  TodoItemAddBlur,
  TodoItemAddBox,
  TodoItemAddButtonBox,
  TodoItemAddDeleteButton,
  TodoItemAddLockBox,
  TodoItemAddLockLocked,
  TodoItemAddLockText,
  TodoItemAddLockUnlocked,
  TodoItemAddMemoBox,
  TodoItemAddMemoInput,
  TodoItemAddMemoText,
  TodoItemAddSaveButton,
  TodoItemAddTitleBox,
  TodoItemAddTitleInput,
  TodoItemAddTitleText,
  TodoItemAddToListBox,
  TodoItemAddToListCancel,
  TodoItemAddToListText,
} from '../StyledComponent';

const TodolistItemAddComponent = ({ onInsert, onBackground }) => {
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const [lock, setLock] = useState(true);

  const onChangeContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const onChangeDescription = useCallback((e) => {
    setDescription(e.target.value);
  }, []);

  const onClickLock = useCallback(
    (e) => {
      setLock(!lock);
    },
    [lock]
  );

  const onSubmit = useCallback(
    (e) => {
      onInsert(content, description, lock);
      setContent('');
      setDescription('');
      e.preventDefault();
      onBackground();
    },
    [onInsert, content, description, lock, onBackground]
  );

  return (
    <>
      <TodoItemAddBackground>
        <TodoItemAddBox onSubmit={onSubmit}>
          <TodoItemAddToListCancel onClick={onBackground} />
          <TodoItemAddToListBox>
            <TodoItemAddToListText>Add To List</TodoItemAddToListText>
          </TodoItemAddToListBox>
          <TodoItemAddTitleBox>
            <TodoItemAddTitleText>Title : </TodoItemAddTitleText>
            <TodoItemAddTitleInput onChange={onChangeContent} />
          </TodoItemAddTitleBox>
          <TodoItemAddMemoBox>
            <TodoItemAddMemoText>Memo : </TodoItemAddMemoText>
            <TodoItemAddMemoInput onChange={onChangeDescription} />
          </TodoItemAddMemoBox>
          <TodoItemAddLockBox>
            <TodoItemAddLockText>Lock : </TodoItemAddLockText>
            {lock ? (
              <TodoItemAddLockUnlocked onClick={onClickLock} />
            ) : (
              <TodoItemAddLockLocked onClick={onClickLock} />
            )}
          </TodoItemAddLockBox>
          <TodoItemAddButtonBox>
            <TodoItemAddSaveButton type='submit' onClick={onSubmit}>
              Save
            </TodoItemAddSaveButton>
          </TodoItemAddButtonBox>
        </TodoItemAddBox>
      </TodoItemAddBackground>
    </>
  );
};

export default TodolistItemAddComponent;
