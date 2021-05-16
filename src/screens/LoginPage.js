import React from 'react';
import {
  LoginPageBox,
  LoginPageDokitIcon,
  LoginPageEmailInput,
  LoginPageEmailText,
  LoginPageGoogleButton,
  LoginPageLoginButton,
  LoginPageMainText,
  LoginPagePasswordInput,
  LoginPagePasswordText,
  LoginPageRegisterButton,
  LoginPageRemeberBox,
  LoginPageRememberCheckbox,
  LoginPageRememberCheckboxText,
  LoginPageSubText,
  LoginPageTextBox,
} from '../components/LoginPage/StyledComponent';

const LoginPage = () => {
  return (
    <>
      <LoginPageBox>
        <LoginPageDokitIcon />
        <LoginPageTextBox>
          <LoginPageMainText>Welcome Back</LoginPageMainText>
          <LoginPageSubText>Login to your account</LoginPageSubText>
          <LoginPageEmailText>Email</LoginPageEmailText>
          <LoginPageEmailInput type='text' placeholder='Email' />
          <LoginPagePasswordText>Password</LoginPagePasswordText>
          <LoginPagePasswordInput type='password' placeholder='Password' />
        </LoginPageTextBox>
        <LoginPageRemeberBox>
          <LoginPageRememberCheckbox type='checkbox' />
          <LoginPageRememberCheckboxText>
            Remember me
          </LoginPageRememberCheckboxText>
        </LoginPageRemeberBox>
        <LoginPageLoginButton>Login now</LoginPageLoginButton>
        <LoginPageRegisterButton>Register now</LoginPageRegisterButton>
        <LoginPageGoogleButton>Sign in with Google</LoginPageGoogleButton>
      </LoginPageBox>
    </>
  );
};

export default LoginPage;
