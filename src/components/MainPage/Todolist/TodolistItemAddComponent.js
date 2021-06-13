import React, { useCallback, useState } from 'react';
import {
  TodoItemAddBackground,
  TodoItemAddBlur,
  TodoItemAddBox,
  TodoItemAddButtonBox,
  TodoItemAddDeleteButton,
  TodoItemAddIconText,
  TodoItemAddLockBox,
  TodoItemAddLockLocked,
  TodoItemAddLockText,
  TodoItemAddLockUnlocked,
  TodoItemAddLockUnlockedBox,
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
  TodoItemAddIconBox,
  TodoItemAddIconBoxText,
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

const TodolistItemAddComponent = ({ onInsert, onBackground }) => {
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const [lock, setLock] = useState(true);
  const [icon, setIcon] = useState('null');

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

  const onClickIcon = useCallback((i) => {
    setIcon(i);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(content, description, lock, icon);
      setContent('');
      setDescription('');
      e.preventDefault();
      onBackground();
    },
    [onInsert, content, description, lock, onBackground, icon]
  );

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
