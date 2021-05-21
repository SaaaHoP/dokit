import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import GoogleLoginButton from './GoogleLoginButton';
import { address } from '../../variables';
import {
  LoginPageBox,
  LoginPageDokitIcon,
  LoginPageEmailInput,
  LoginPageEmailText,
  // LoginPageGoogleButton,
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
} from './StyledComponent';
import { useCookies } from 'react-cookie';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['rememberEmail']);
  const history = useHistory();

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (cookies.rememberEmail !== undefined) {
      setEmail(cookies.rememberEmail);
      setIsRemember(true);
    }
  }, [cookies.rememberEmail]);

  const rememberHandler = (e) => {
    setIsRemember(e.target.checked);
    if (e.target.checked) {
      setCookie('rememberEmail', email, { maxAge: 2000 });
    } else {
      removeCookie('rememberEmail');
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let body = {
      email: email,
      password: password,
    };

    await axios.post(`${address}/auth/login`, body).then((res) => {
      const accessToken = res.data.token;
      axios.defaults.headers.common['Authorization'] = accessToken;
      if (res.status === 200) history.push('/main');
      // if (res.status === 200) window.location = '/about';
    });
  };

  return (
    <>
      <LoginPageBox onSubmit={submitHandler}>
        <Link to='/'>
          <LoginPageDokitIcon />
        </Link>
        <LoginPageTextBox>
          <LoginPageMainText>Welcome Back</LoginPageMainText>
          <LoginPageSubText>Login to your account</LoginPageSubText>
          <LoginPageEmailText>Email</LoginPageEmailText>
          <LoginPageEmailInput
            type='email'
            value={email}
            name='email'
            placeholder='Email'
            onChange={emailHandler}
            required
          />
          <LoginPagePasswordText>Password</LoginPagePasswordText>
          <LoginPagePasswordInput
            type='password'
            value={password}
            name='password'
            placeholder='Password'
            onChange={passwordHandler}
            required
          />
        </LoginPageTextBox>
        <LoginPageRemeberBox>
          <LoginPageRememberCheckbox
            type='checkbox'
            onChange={rememberHandler}
            checked={isRemember}
          />
          <LoginPageRememberCheckboxText>
            Remember me
          </LoginPageRememberCheckboxText>
        </LoginPageRemeberBox>
        <LoginPageLoginButton type='submit'>Login now</LoginPageLoginButton>
        <Link to='/register'>
          <LoginPageRegisterButton>Register now</LoginPageRegisterButton>
        </Link>
        <GoogleLoginButton />
        {/* <LoginPageGoogleButton></LoginPageGoogleButton> */}
      </LoginPageBox>
    </>
  );
};

export default LoginComponent;
