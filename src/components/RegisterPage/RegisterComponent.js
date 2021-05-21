import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { address } from '../../variables';
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
} from './StyledComponent';

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPasswordLengthError(e.target.value.length < 5);
    setPassword(e.target.value);
  };

  const repasswordHandler = (e) => {
    e.preventDefault();
    setPasswordError(e.target.value !== password);
    setRepassword(e.target.value);
  };

  const usernameHandler = (e) => {
    e.preventDefault();
    setUsernameError(e.target.value.length < 2);
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (username.length < 2) {
      return setUsernameError(true);
    }

    if (password.length < 5) {
      return setPasswordLengthError(true);
    }

    if (password !== repassword) {
      return setPasswordError(true);
    }

    let body = {
      email: email,
      password: password,
      username: username,
    };

    await axios.post(`${address}/auth/join`, body).then((res) => {
      console.log(res.status);
      if (res.status === 201) history.push('/login');
      // if (res.status === 200) window.location = '/about';
    });
  };

  return (
    <>
      <RegisterPageBox onSubmit={submitHandler}>
        <Link to='/'>
          <RegisterPageDokitIcon />
        </Link>
        <RegisterPageMainText>Register to Dokit</RegisterPageMainText>
        <RegisterPageTextBox>
          <RegisterPageEmailText>Email address*</RegisterPageEmailText>
          <RegisterPageEmailInput
            required
            type='email'
            value={email}
            placeholder='Enter email address'
            onChange={emailHandler}
          />
          <RegisterPageUsernameText>Username*</RegisterPageUsernameText>
          <RegisterPageUsernameInput
            required
            type='username'
            value={username}
            placeholder='Username'
            onChange={usernameHandler}
          />
          {usernameError && (
            <div
              style={{ color: 'red', marginTop: '5px', marginBottom: '-20px' }}
            >
              유저네임은 2자 이상이어야 합니다.
            </div>
          )}
          <RegisterPagePasswordCreateText>
            Create Password*
          </RegisterPagePasswordCreateText>
          <RegisterPagePasswordCreateInput
            required
            type='password'
            value={password}
            placeholder='Password'
            onChange={passwordHandler}
          />
          {passwordLengthError && (
            <div
              style={{ color: 'red', marginTop: '5px', marginBottom: '-20px' }}
            >
              비밀번호는 5자 이상이어야 합니다.
            </div>
          )}
          <RegisterPagePasswordRepeatText>
            Repeat Password*
          </RegisterPagePasswordRepeatText>
          <RegisterPagePasswordRepeatInput
            required
            type='password'
            value={repassword}
            placeholder='Repeat password'
            onChange={repasswordHandler}
          />
          {passwordError && (
            <div
              style={{ color: 'red', marginTop: '5px', marginBottom: '-20px' }}
            >
              비밀번호가 일치하지 않습니다.
            </div>
          )}
        </RegisterPageTextBox>
        <RegisterPageRegisterButton type='submit'>
          Register Account
        </RegisterPageRegisterButton>
      </RegisterPageBox>
    </>
  );
};

export default Register;
