import styled from 'styled-components';

export const PasswordCheckConfirmBox = styled.div`
  position: fixed;
  width:100%;
  height:100%;
  left: 192px;
  top: 84px;
  `;

export const PasswordCheckConfirmPasswordText = styled.div`
font-family:'Roboto';
  position: absolute;
  font-size:18px;
  left: 35%;
  top: 200px;
`;

export const PasswordCheckConfirmPasswordInput = styled.input`
  position: absolute;
  left: 35%;
  top: 240px;
  width: 300px;
  height: 40px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
`;

export const PasswordCheckConfirmButtonBox = styled.div`
  position: absolute;
  width:300px;
  height:100px;
  left: 35%;
  top: 340px;
  padding:20px;
  background-color:white;
  z-index:10;
`;

export const PasswordCheckConfirmButton1 = styled.button`
  position: absolute;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  mix-blend-mode: multiply;//?
  border-radius: 8px;
  border: none;
  width: 100px;
  height: 40px;
  text-align: center;
  margin-left: 10px;
  font-weight: bold;
  cursor: pointer;//가져다 대면 눌러지는 모양
`;

export const PasswordCheckConfirmButton2 = styled.button`
  position: absolute;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  mix-blend-mode: multiply;//?
  border-radius: 8px;
  border: none;
  width: 100px;
  height: 40px;
  text-align: center;
  margin-left: 150px;
  font-weight: bold;
  cursor: pointer;//가져다 대면 눌러지는 모양
  z-index:100;
`;
