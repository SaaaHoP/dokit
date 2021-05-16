import styled from 'styled-components';
import { DokitIcon } from '../commons/DokitIcon';

export const RegisterPageBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RegisterPageDokitIcon = styled(DokitIcon)`
  width: 200px;
  height: 200px;
  background-size: 200px;
  margin-top: -200px;
`;

export const RegisterPageTextBox = styled.div``;

export const RegisterPageMainText = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: -25px;
`;

export const RegisterPageEmailText = styled.div`
  font-size: 16px;
  margin-top: 30px;
`;

export const RegisterPageEmailInput = styled.input`
  margin-top: 15px;
  width: 300px;
  height: 40px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  &::-webkit-input-placeholder {
    padding-left: 10px;
  }
`;

export const RegisterPageUsernameText = styled.div`
  font-size: 16px;
  margin-top: 30px;
`;

export const RegisterPageUsernameInput = styled.input`
  margin-top: 15px;
  width: 300px;
  height: 40px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  &::-webkit-input-placeholder {
    padding-left: 10px;
  }
`;

export const RegisterPagePasswordCreateText = styled.div`
  font-size: 16px;
  margin-top: 30px;
`;

export const RegisterPagePasswordCreateInput = styled.input`
  margin-top: 15px;
  width: 300px;
  height: 40px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  &::-webkit-input-placeholder {
    padding-left: 10px;
  }
`;

export const RegisterPagePasswordRepeatText = styled.div`
  font-size: 16px;
  margin-top: 30px;
`;

export const RegisterPagePasswordRepeatInput = styled.input`
  margin-top: 15px;
  width: 300px;
  height: 40px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  &::-webkit-input-placeholder {
    padding-left: 10px;
  }
`;

export const RegisterPageRegisterButton = styled.button`
  margin-top: 15px;
  width: 300px;
  height: 40px;
  background: #acd3dc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  font-weight: bold;
`;
