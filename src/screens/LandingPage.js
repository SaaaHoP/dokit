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
  LandingPageRightComponents,
  LandingPageSignUpButton,
  LandingPageSubText,
  LandingPageUpperBar,
} from '../components/LandingPage/styledComponent';

const LandingPage = () => {
  return (
    <>
      <LandingPageLeftBackground />
      <LandingPageImgBox>
        <LandingPageImg />
      </LandingPageImgBox>
      <LandingPageUpperBar>
        <LandingPageDokitIcon />
        <LandingPageButtons>
          <LandingPageLoginButton>Login</LandingPageLoginButton>
          <LandingPageSignUpButton>Sign Up</LandingPageSignUpButton>
        </LandingPageButtons>
      </LandingPageUpperBar>
      <LandingPageRightComponents>
        <LandingPageMainText>Use DokitList</LandingPageMainText>
        <LandingPageSubText>
          Our Todolist is easy to use, comfortable and free.
        </LandingPageSubText>
        <LandingPageGetStartedButton>Get Started</LandingPageGetStartedButton>
      </LandingPageRightComponents>
    </>
  );
};

export default LandingPage;
