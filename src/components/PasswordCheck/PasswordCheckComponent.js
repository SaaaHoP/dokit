import React, { useCallback, useState } from 'react';
import axios from 'axios';

import {
    PasswordCheckConfirmBox,
    PasswordCheckConfirmPasswordText,
    PasswordCheckConfirmPasswordInput,
    PasswordCheckConfirmButtonBox,
    PasswordCheckConfirmButton1,
    PasswordCheckConfirmButton2
} from './StyledComponent';

import { Link, useHistory } from 'react-router-dom'
import { address } from '../../variables';



const PasswordCheck = () => {
    //state 비워놓고 시작
    const [password, setPassword] = useState('');
    const history = useHistory();

    //input에 넣을 function
    const onChangePassword = useCallback((e) => {
        //html에서의 false .. 작성시 자동적 실행 방지
        e.preventDefault();
        //입력받는 값으로 state 변경
        setPassword(e.target.value);
    },[])

    let postPassword = {
        password: password,
    };

    const wrongHandler = () => {
    }

    //async&await
    //Confirm버튼 누를시 발생시킬 fuction
    const submitHandler = async (e) => {
        console.log(postPassword);
        e.preventDefault();
        //주소 이런식으로 발생시킴
        await axios.post(`${address}/members/profile/me/password/valid`, postPassword).then((res)=> {
            if(res.status === 200) history.push('/setting')
            else {wrongHandler()}
        });
    };

    console.log(postPassword);
return (
    <>
        <PasswordCheckConfirmBox>
            <PasswordCheckConfirmPasswordText>Input your password</PasswordCheckConfirmPasswordText>
            <PasswordCheckConfirmPasswordInput type='password' name='password' value={password} onChange={onChangePassword}/>
            <PasswordCheckConfirmButtonBox>
                <Link to='/setting'>
                <PasswordCheckConfirmButton1 onClick={submitHandler}>Confirm</PasswordCheckConfirmButton1>
                </Link>
                <PasswordCheckConfirmButton2 onClick={history.goBack}>Cancle</PasswordCheckConfirmButton2>
            </PasswordCheckConfirmButtonBox>

        </PasswordCheckConfirmBox>
    </> 
    );
};

export default PasswordCheck;