import React from 'react';
import {
  RegisterPageBox,
  RegisterPageDokitIcon,
  RegisterPageEmailInput,
  RegisterPageEmailText,
  RegisterPageMainText,
  RegisterPagePasswordCreateInput,
  RegisterPagePasswordCreateText,
  RegisterPagePasswordRepeatInput,
  RegisterPagePasswordRepeatText,
  RegisterPageRegisterButton,
  RegisterPageTextBox,
  RegisterPageUsernameInput,
  RegisterPageUsernameText,
} from '../components/RegisterPage/StyledComponent';

const RegisterPage = () => {
  return (
    <>
      <RegisterPageBox>
        <RegisterPageDokitIcon />
        <RegisterPageMainText>Register to Dokit</RegisterPageMainText>
        <RegisterPageTextBox>
          <RegisterPageEmailText>Email address*</RegisterPageEmailText>
          <RegisterPageEmailInput
            type='text'
            placeholder='Enter email address'
          />
          <RegisterPageUsernameText>Username*</RegisterPageUsernameText>
          <RegisterPageUsernameInput type='text' placeholder='Username' />
          <RegisterPagePasswordCreateText>
            Create Password*
          </RegisterPagePasswordCreateText>
          <RegisterPagePasswordCreateInput
            type='password'
            placeholder='Password'
          />
          <RegisterPagePasswordRepeatText>
            Repeat Password*
          </RegisterPagePasswordRepeatText>
          <RegisterPagePasswordRepeatInput
            type='password'
            placeholder='Repeat password'
          />
        </RegisterPageTextBox>
        <RegisterPageRegisterButton>
          Register Account
        </RegisterPageRegisterButton>
      </RegisterPageBox>
    </>
  );
};

export default RegisterPage;
