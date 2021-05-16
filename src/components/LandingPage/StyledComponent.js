import styled from 'styled-components';
import LandingPage_Img from '../../icons/LandingPage_Img.png';
import { DokitIcon } from '../commons/DokitIcon';

export const LandingPageLeftBackground = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  background: #acd3dc;
  opacity: 0.3;
`;

export const LandingPageImgBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

export const LandingPageImg = styled.div`
  background-image: url(${LandingPage_Img});
  background-size: 420px 590px;
  position: absolute;
  width: 420px;
  height: 590px;
  margin-top: 50px;
`;

export const LandingPageUpperBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LandingPageDokitIcon = styled(DokitIcon)`
  margin-left: 30px;
  margin-top: -15px;
`;

export const LandingPageButtons = styled.div`
  margin: 30px;
`;

export const LandingPageLoginButton = styled.button`
  background: rgba(172, 211, 220, 0.3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  mix-blend-mode: multiply;
  border-radius: 8px;
  border: none;
  width: 100px;
  height: 40px;
  text-align: center;
  margin-right: 30px;
  font-weight: bold;
`;

export const LandingPageSignUpButton = styled.button`
  background: #acd3dc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  width: 100px;
  height: 40px;
  text-align: center;
  font-weight: bold;
`;

export const LandingPageRightBackground = styled.div`
  margin-left: 50%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LandingPageRightComponents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const LandingPageMainText = styled.div`
  font-weight: 900;
  font-size: 72px;
  line-height: 98px;
  font-feature-settings: 'liga' off;
`;

export const LandingPageSubText = styled.div`
  font-size: 18px;
  line-height: 32px;
  font-feature-settings: 'liga' off;
  margin-top: 15px;
`;

export const LandingPageGetStartedButton = styled.button`
  background: #acd3dc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  width: 180px;
  height: 60px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 30px;
`;
