import styled from 'styled-components';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BiCalendar, BiPencil } from 'react-icons/bi';
import {
  BsFillUnlockFill,
  BsFillLockFill,
  BsArrowReturnRight,
  BsCheck,
} from 'react-icons/bs';
import { IoAddCircleOutline } from 'react-icons/io5';
import { ImCancelCircle } from 'react-icons/im';

//DateComponent Styled Component
export const DateBox = styled.div`
  position: absolute;
  left: 40%;
  top: 10%;
  margin-top: 10px;
  display: flex;
  width: 480px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(172, 211, 220, 0.2);
`;

export const DateLeftText = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-left: 10px;
  margin-bottom: 30px;
`;
export const DateCenterText = styled.div`
  font-weight: bold;
  font-size: 24px;
  width: 390px;
  height: 50px;
  margin-top: 25px;
  text-align: center;
  cursor: pointer;
`;
export const DateIcon = styled(BiCalendar)`
  width: 24px;
  height: 24px;
  margin-right: 24px;
`;

//Todolist Styled Component
export const TodoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TodoTemplate = styled.div`
  position: absolute;
  left: 40%;
  top: 20%;
  width: 480px;
  height: 550px;
  background-color: rgba(172, 211, 220, 0.5);
  border-radius: 20px;
`;

export const TodoItemlist = styled.div``;

export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
`;

export const TodoItemIcon = styled.div`
  cursor: pointer;
`;

export const TodoItemBlankCheck = styled.div`
  width: 48px;
  height: 48px;
  background: white;
  border-radius: 24px;
  font-weight: lighter;
`;

export const TodoItemChecked = styled(BsCheck)`
  width: 48px;
  height: 48px;
  color: #888dfd;
  font-weight: lighter;
  background-color: white;
  border-radius: 24px;
`;

export const TodoItemTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TodoItemTitleBox = styled.div`
  width: 350px;
  height: 32px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000000;
  margin-left: 5px;
  margin-top: 15px;
`;

export const TodoItemTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  margin-left: 5px;
  cursor: pointer;
`;

export const TodoItemTitleCompleted = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #888dfd;
  text-decoration: line-through;
  margin-left: 5px;
`;

export const TodoItemDescriptionBox = styled.div`
  display: flex;
  margin-top: 5px;
  margin-left: 20px;
`;

export const TodoItemDescription = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  margin-left: 5px;
  color: rgba(0, 0, 0, 0.5);
`;

export const TodoItemDescriptionCompleted = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  margin-left: 5px;
  color: #888dfd;
  text-decoration: line-through;
`;

export const TodoItemDescriptionArrow = styled(BsArrowReturnRight)`
  width: 12px;
  height: 12px;
`;

export const TodoItemPencil = styled(BiPencil)`
  width: 24px;
  height: 24px;
  margin-left: 5px;
  cursor: pointer;
`;

export const TodoItemLockBox = styled.div`
  margin-left: 5px;
  cursor: pointer;
`;

export const TodoItemLock = styled(BsFillLockFill)`
  width: 24px;
  height: 24px;
`;

export const TodoItemUnlock = styled(BsFillUnlockFill)`
  width: 24px;
  height: 24px;
`;

export const TodoItemAddButton = styled(IoAddCircleOutline)`
  position: absolute;
  width: 60px;
  height: 60px;
  left: 410px;
  top: 480px;
  cursor: pointer;
  color: black;
  /* z-index: 2; */
`;

//TodoListItemAddComponent StyledComponent

export const TodoItemAddBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 5;
`;

export const TodoItemAddBox = styled.form`
  position: absolute;
  left: 735px;
  top: 290px;
  width: 300px;
  height: 360px;
  background-color: rgba(255, 255, 255);
  border-radius: 20px;
  z-index: 999;
`;

export const TodoItemAddToListBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 10px;
  margin-bottom: 30px;
`;

export const TodoItemAddToListText = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

export const TodoItemAddToListCancel = styled(ImCancelCircle)`
  margin-left: 270px;
  margin-top: 10px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const TodoItemAddTitleBox = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 30px;
  align-items: center;
`;

export const TodoItemAddTitleText = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const TodoItemAddTitleInput = styled.input`
  margin-left: 5px;
  border: none;
  border-bottom: 1px solid;
  background-color: rgba(172, 211, 220, 0);
  width: 180px;
`;

export const TodoItemAddMemoBox = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 30px;
  align-items: center;
`;

export const TodoItemAddMemoText = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const TodoItemAddMemoInput = styled.input`
  margin-left: 5px;
  border: none;
  border-bottom: 1px solid;
  background-color: rgba(172, 211, 220, 0);
`;

export const TodoItemAddLockBox = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 30px;
  align-items: center;
`;

export const TodoItemAddLockText = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const TodoItemAddLockUnlocked = styled(BsFillUnlockFill)`
  width: 36px;
  height: 36px;
  margin-left: 20px;
  cursor: pointer;
`;

export const TodoItemAddLockLocked = styled(BsFillLockFill)`
  width: 36px;
  height: 36px;
  margin-left: 20px;
  cursor: pointer;
`;

export const TodoItemAddButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  margin-top: 110px;
`;

export const TodoItemAddSaveButton = styled.button`
  width: 91px;
  height: 28px;
  background: rgba(172, 211, 220, 0.3);
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;

export const TodoItemAddDeleteButton = styled.button`
  margin-left: 10px;
  width: 91px;
  height: 28px;
  background: rgba(255, 0, 0, 0.3);
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;

export const TodoItemReviseBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 5;
`;

export const TodoItemReviseBox = styled.form`
  position: absolute;
  top: 240px;
  left: 750px;
  width: 300px;
  height: 360px;
  background-color: rgba(255, 255, 255);
  border-radius: 20px;
  z-index: 999;
`;

//서브 투두리스트 레이아웃

export const TodolistLeftBox = styled.div`
  position: absolute;
  left: 17%;
  top: 15%;
  width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TodolistLeftSubBox = styled.div`
  width: 300px;
  height: 400px;
  background-color: rgba(172, 211, 220, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TodolistLeftSubBoxText = styled.div`
  font-weight: bold;
  font-size: 27px;
  margin-bottom: 20px;
`;

export const TodolistLeftArrow = styled(AiOutlineArrowLeft)`
  width: 100px;
  height: 50px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const TodolistRightBox = styled.div`
  position: absolute;
  left: 75%;
  top: 15%;
  width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TodolistRightSubBox = styled.div`
  width: 300px;
  height: 400px;
  background-color: rgba(172, 211, 220, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TodolistRightSubBoxText = styled.div`
  font-weight: bold;
  font-size: 27px;
  margin-bottom: 20px;
`;

export const TodolistRightArrow = styled(AiOutlineArrowRight)`
  width: 100px;
  height: 50px;
  margin-bottom: 20px;
  cursor: pointer;
`;
