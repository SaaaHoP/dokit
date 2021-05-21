import styled from 'styled-components';
import { DokitIcon } from '../commons/DokitIcon';

export const LoginPageBox = styled.form`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginPageDokitIcon = styled(DokitIcon)`
  width: 200px;
  height: 200px;
  background-size: 200px;
  margin-top: -100px;
`;

export const LoginPageTextBox = styled.div`
  margin-left: 20px;
`;

export const LoginPageMainText = styled.div`
  font-size: 16px;
`;

export const LoginPageSubText = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 5px;
`;

export const LoginPageEmailText = styled.div`
  font-size: 16px;
  margin-top: 30px;
`;

export const LoginPageEmailInput = styled.input`
  margin-top: 15px;
  width: 300px;
  height: 40px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  &::-webkit-input-placeholder {
    padding-left: 10px;
  }
`;

export const LoginPagePasswordText = styled.div`
  font-size: 16px;
  margin-top: 15px;
`;

export const LoginPagePasswordInput = styled.input`
  margin-top: 15px;
  width: 300px;
  height: 40px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  &::-webkit-input-placeholder {
    padding-left: 10px;
  }
`;

export const LoginPageRemeberBox = styled.div`
  display: flex;
  margin-right: 185px;
`;

export const LoginPageRememberCheckbox = styled.input`
  margin-top: 15px;
  border-radius: 10px;
`;

export const LoginPageRememberCheckboxText = styled.div`
  margin-top: 15px;
  margin-left: 5px;
`;

export const LoginPageLoginButton = styled.button`
  margin-top: 15px;
  width: 300px;
  height: 40px;
  background: #acd3dc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

export const LoginPageRegisterButton = styled.button`
  margin-top: 15px;
  width: 300px;
  height: 40px;
  background: #acd3dc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

export const LoginPageGoogleButton = styled.button`
  margin-top: 15px;
  width: 300px;
  height: 40px;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
