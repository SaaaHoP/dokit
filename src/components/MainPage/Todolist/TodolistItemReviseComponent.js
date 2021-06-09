import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BsChevronDoubleLeft } from 'react-icons/bs';
import { address } from '../../../variables';
import {
  TodoItemAddBackground,
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
  TodoItemReviseBackground,
  TodoItemReviseBox,
} from '../StyledComponent';

function TodolistItemReviseComponent({
  todo,
  onRemove,
  onBackground,
  selectDate,
  onRevise,
}) {
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

  const [todoContent, setTodoContent] = useState(content);
  const [todoDescription, setTodoDescription] = useState(description);
  const [lock, setLock] = useState(opened);

  const revisedTodo = {
    completed: completed,
    content: todoContent,
    date: selectDate,
    description: todoDescription,
    emoticon: emoticon,
    emphasized: emphasized,
    id: id,
    opened: lock,
    sequence: sequence,
  };

  const onChangeContent = useCallback((e) => {
    setTodoContent(e.target.value);
  }, []);

  const onChangeDescription = useCallback((e) => {
    setTodoDescription(e.target.value);
  }, []);

  const onClickLock = useCallback(
    (e) => {
      setLock(!lock);
    },
    [lock]
  );

  //수정할때 객체에 date가 undefined로 되어있음 state 넘겨줄때 먼가 이상한듯 확인 하자...
  const onSaveSubmit = useCallback(async () => {
    onRevise(sequence, todoContent, todoDescription, lock);
    console.log(revisedTodo);
    await axios.put(`${address}/todolist/me`, revisedTodo).then((res) => {
      console.log(res.data.error);
    });
    onBackground();
  }, [
    onBackground,
    onRevise,
    sequence,
    todoContent,
    todoDescription,
    lock,
    revisedTodo,
  ]);

  const onRemoveSubmit = useCallback(async () => {
    onRemove(sequence);
    const deleteData = {
      id: id,
    };
    await axios.delete(`${address}/todolist/me`, {
      data: deleteData,
    });

    onBackground();
  }, [onBackground, onRemove, id, sequence]);

  return (
    <>
      <TodoItemReviseBackground>
        <TodoItemReviseBox onSubmit={onSaveSubmit}>
          <TodoItemAddToListCancel onClick={onBackground} />
          <TodoItemAddToListBox>
            <TodoItemAddToListText>Revise List</TodoItemAddToListText>
          </TodoItemAddToListBox>
          <TodoItemAddTitleBox>
            <TodoItemAddTitleText>Title : </TodoItemAddTitleText>
            <TodoItemAddTitleInput
              onChange={onChangeContent}
              value={todoContent}
            />
          </TodoItemAddTitleBox>
          <TodoItemAddMemoBox>
            <TodoItemAddMemoText>Memo : </TodoItemAddMemoText>
            <TodoItemAddMemoInput
              onChange={onChangeDescription}
              value={todoDescription}
            />
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
            <TodoItemAddSaveButton type='button' onClick={onSaveSubmit}>
              Save
            </TodoItemAddSaveButton>
            <TodoItemAddDeleteButton type='button' onClick={onRemoveSubmit}>
              Delete
            </TodoItemAddDeleteButton>
          </TodoItemAddButtonBox>
        </TodoItemReviseBox>
      </TodoItemReviseBackground>
    </>
  );
}

export default TodolistItemReviseComponent;
