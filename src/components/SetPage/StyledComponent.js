import styled from 'styled-components';

//
export const SetPageBox = styled.div`
  position: fixed;
  width:100%;
  height:100%;
  left: 192px;
  top: 84px;
`;

//
export const SetPageProfileBox = styled.div`
  position: absolute;
  left: 35%;
  margin-top: 10px;
  display: flex;
  width: 480px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;

export const SetPageProfile = styled.div`
position: absolute;
top: 24px;
width: 120px;
height: 120px;
left: 84px;
margin: 20px;
background:gray;
border-radius:50%;
justify-content: center; //
align-items: center; //
`;
    
export const SetPageProfileChangeButton = styled.button`
  position: absolute;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  mix-blend-mode: multiply;//?
  border-radius: 8px;
  border: none;
  width: 100px;
  height: 40px;
  text-align: center;
  margin-left: 36px;
  margin-top : 360px;
  font-weight: bold;
  cursor: pointer;//?
`;

export const SetPageProfileDeleteButton = styled.button`
  position: absolute;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  mix-blend-mode: multiply;
  border-radius: 8px;
  border: none;
  width: 100px;
  height: 40px;
  text-align: center;
  margin-left: 192px;
  margin-top : 360px;
  font-weight: bold;
  cursor: pointer;
`;

//
export const SetPageTextBox = styled.div`
  position: absolute;
  left: 35%;
  top: 240px;
  padding:20px;
`;

export const SetPageUsernameText = styled.div`
//이하 동일 변수에대해 글씨크기,글씨체만 조정 
  margin-top: 5px;
`;

export const SetPageUsernameInput = styled.input`
  margin-top: 10px;
  width: 300px;
  height: 40px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
`;

export const SetPagePasswordText = styled.div`
  margin-top: 10px;
`;

export const SetPagePasswordInput1 = styled.input`
  margin-top: 10px;
  width: 300px;
  height: 40px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
`;

export const SetPagePasswordConfirmText = styled.div`
  margin-top: 10px;
`;

export const SetPagePasswordInput2 = styled.input`
  margin-top: 10px;
  width: 300px;
  height: 40px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
`;

export const SetPageNotificationSettingText = styled.div`
  margin-top: 10px;
`;

export const SetPageNotificationSettingBox = styled.div`
  margin-top: 10px;
  background-color : white;
  height: 120px;
  width: 300px;
  border-radius:10px;
`;

export const SetPageNotificationLine1 = styled.div`
`;

export const SetPageNotificationLine2 = styled.div`
`;

export const SetPageNotificationLine3 = styled.div`
`;

export const SetPageNotificationLine4 = styled.div`
`;

export const SetPageNotificationLine5 = styled.div`
`;

export const SetPageNotificationLine6 = styled.div`
`;

export const SetPageNotificationText1 = styled.span`
`;

export const SetPageNotificationText2 = styled.span`
`;

export const SetPageNotificationText3 = styled.span`
`;

export const SetPageNotificationText4 = styled.span`
`;

export const SetPageNotificationText5 = styled.span`
`;

export const SetPageNotificationText6 = styled.span`
`;

//
export const SetPageApplyBox = styled.div`
  position: absolute;
  left: 35%;
  top: 640px;
  padding:20px;
`;

export const SetPageApplyButton = styled.button`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  mix-blend-mode: multiply;
  border-radius: 8px;
  border: none;
  width: 100px;
  height: 40px;
  right: 100px;
  text-align: center;
  margin-left: 12px;
  margin-right: 60px;
  font-weight: bold;
  cursor: pointer;
`;

export const SetPageCancleButton = styled.button`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  mix-blend-mode: multiply;
  border-radius: 8px;
  border: none;
  width: 100px;
  height: 40px;
  right: 100px;
  text-align: center;
  margin-right: 12px;
  font-weight: bold;
  cursor: pointer;
`;