import styled from 'styled-components';
import { BiCalendar, BiPencil } from 'react-icons/bi';
import {
  BsFillUnlockFill,
  BsFillLockFill,
  BsArrowReturnRight,
  BsCheck,
} from 'react-icons/bs';

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

export const TodoItemAddButton = styled.div``;
