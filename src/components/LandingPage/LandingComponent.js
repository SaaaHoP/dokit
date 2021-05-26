import React from 'react';
import {
  LandingPageButtons,
  LandingPageDokitIcon,
  LandingPageGetStartedButton,
  LandingPageImg,
  LandingPageImgBox,
  LandingPageLeftBackground,
  LandingPageLoginButton,
  LandingPageMainText,
  LandingPageRightBackground,
  LandingPageRightComponents,
  LandingPageSignUpButton,
  LandingPageSubText,
  LandingPageUpperBar,
} from './StyledComponent';
import { Link } from 'react-router-dom';

const LandingComponent = () => {
  return (
    <>
      <LandingPageLeftBackground />
      <LandingPageImgBox>
        <LandingPageImg />
      </LandingPageImgBox>
      <LandingPageUpperBar>
        <LandingPageDokitIcon />
        <LandingPageButtons>
          <Link to='/login'>
            <LandingPageLoginButton>Login</LandingPageLoginButton>
          </Link>
          <Link to='/register'>
            <LandingPageSignUpButton>Sign Up</LandingPageSignUpButton>
          </Link>
        </LandingPageButtons>
      </LandingPageUpperBar>
      <LandingPageRightBackground>
        <LandingPageRightComponents>
          <LandingPageMainText>Use DokitList</LandingPageMainText>
          <LandingPageSubText>
            Our Todolist is easy to use, comfortable and free.
          </LandingPageSubText>
          <Link to='/login'>
            <LandingPageGetStartedButton>
              Get Started
            </LandingPageGetStartedButton>
          </Link>
        </LandingPageRightComponents>
      </LandingPageRightBackground>
    </>
  );
};

export default LandingComponent;
