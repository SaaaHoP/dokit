import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { address } from '../../variables';
import { LoginPageGoogleButton } from './StyledComponent';
import { FcGoogle } from 'react-icons/fc';

const GoogleLoginButton = ({ onSocial }) => {
  const clientId =
    '710698396358-gm4e3adqoum3vk6bopdornmv03bpbpak.apps.googleusercontent.com';

  const history = useHistory();

  const onSuccess = async (res) => {
    console.log(res.profileObj);
    await axios
      .post(`${address}/auth/google/login`, res.profileObj)
      .then((res) => {
        // console.log(res.data.data);
        const accessToken = 'Bearer ' + res.data.accessToken;
        axios.defaults.headers.common['Authorization'] = accessToken;
        localStorage.setItem('Authorization', accessToken);

        if (res.status === 200) history.push('/main');
        // if (res.status === 200) window.location = '/main';
      });
    // 명훈이가 profileObj만 넘겨주면 된다고 함
    // const {
    //   googleId,
    //   profileObj: { email, name },
    // } = response;

    // await onSocial({
    //   socialId: googleId,
    //   socialType: 'google',
    //   email,
    //   nickname: name,
    // });
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <>
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <LoginPageGoogleButton
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <FcGoogle
              style={{
                width: '20px',
                height: '20px',
                marginRight: '10px',
                paddingTop: '',
              }}
            />
            Sign in with Google
          </LoginPageGoogleButton>
        )}
        responseType={'id_token'}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </>
  );
};

export default GoogleLoginButton;
