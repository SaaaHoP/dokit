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
  TodoItemAddIconBox,
  TodoItemAddIconText,
  TodoItemAddIconListBox,
  TodoItemAddIconNone,
  TodoItemAddIcon1,
  TodoItemAddIcon2,
  TodoItemAddIcon3,
  TodoItemAddIcon4,
  TodoItemAddIcon5,
  TodoItemAddIcon6,
  TodoItemAddIcon7,
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
  const [icon, setIcon] = useState(emoticon);

  const revisedTodo = {
    completed: completed,
    content: todoContent,
    date: selectDate,
    description: todoDescription,
    emoticon: icon,
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

  const onClickIcon = useCallback((i) => {
    setIcon(i);
  }, []);

  //수정할때 객체에 date가 undefined로 되어있음 state 넘겨줄때 먼가 이상한듯 확인 하자...
  const onSaveSubmit = useCallback(async () => {
    onRevise(sequence, todoContent, todoDescription, lock, icon);
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
    icon,
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

  const checkStyle = {
    color: '#888dfd',
    fontWeight: 'bold',
  };

  const styleNone = () => {
    if (icon === 'null') return checkStyle;
    else return null;
  };

  const style1 = () => {
    if (icon === '1') return checkStyle;
    else return null;
  };

  const style2 = () => {
    if (icon === '2') return checkStyle;
    else return null;
  };

  const style3 = () => {
    if (icon === '3') return checkStyle;
    else return null;
  };

  const style4 = () => {
    if (icon === '4') return checkStyle;
    else return null;
  };

  const style5 = () => {
    if (icon === '5') return checkStyle;
    else return null;
  };

  const style6 = () => {
    if (icon === '6') return checkStyle;
    else return null;
  };

  const style7 = () => {
    if (icon === '7') return checkStyle;
    else return null;
  };

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
          <TodoItemAddIconBox>
            <TodoItemAddIconText>Icon</TodoItemAddIconText>
            <TodoItemAddIconListBox>
              <TodoItemAddIconNone
                style={styleNone()}
                onClick={() => onClickIcon('null')}
              >
                (None)
              </TodoItemAddIconNone>
              <TodoItemAddIcon1
                style={style1()}
                onClick={() => onClickIcon('1')}
              />
              <TodoItemAddIcon2
                style={style2()}
                onClick={() => onClickIcon('2')}
              />
              <TodoItemAddIcon3
                style={style3()}
                onClick={() => onClickIcon('3')}
              />
              <TodoItemAddIcon4
                style={style4()}
                onClick={() => onClickIcon('4')}
              />
              <TodoItemAddIcon5
                style={style5()}
                onClick={() => onClickIcon('5')}
              />
              <TodoItemAddIcon6
                style={style6()}
                onClick={() => onClickIcon('6')}
              />
              <TodoItemAddIcon7
                style={style7()}
                onClick={() => onClickIcon('7')}
              />
            </TodoItemAddIconListBox>
          </TodoItemAddIconBox>
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
