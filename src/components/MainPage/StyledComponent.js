import styled from 'styled-components';
import { BiCalendar } from 'react-icons/bi';

export const DateBox = styled.div`
  position: absolute;
  left: 45%;
  top: 10%;
  margin-top: 10px;
  display: flex;
  width: 480px;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(172, 211, 220, 0.2);
`;

export const DateLeftText = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-left: 20px;
  margin-bottom: 30px;
`;
export const DateCenterText = styled.div`
  font-weight: bold;
  font-size: 28px;
`;
export const DateIcon = styled(BiCalendar)`
  width: 24px;
  height: 24px;
  margin-right: 24px;
`;
