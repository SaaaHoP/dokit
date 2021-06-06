import React, { useState } from 'react';
//import axios from 'axios';
//import { Link, useHistory } from 'react-router-dom';
//import { address } from '../../variables';
import {
    SetPageBox,
    SetPageProfileBox,
    SetPageProfile,
    SetPageProfileChangeButton,
    SetPageProfileDeleteButton,
    SetPageTextBox,
    SetPageUsernameText,
    SetPageUsernameInput,
    SetPagePasswordText,
    SetPagePasswordInput1,
    SetPagePasswordConfirmText,
    SetPagePasswordInput2,
    SetPageNotificationSettingText,
    SetPageNotificationSettingBox,
    SetPageNotificationLine1,
    SetPageNotificationLine2,
    SetPageNotificationLine3,
    SetPageNotificationLine4,
    SetPageNotificationLine5,
    SetPageNotificationLine6,
    SetPageNotificationText1,
    SetPageNotificationText2,
    SetPageNotificationText3,
    SetPageNotificationText4,
    SetPageNotificationText5,
    SetPageNotificationText6,
    SetPageApplyBox,
    SetPageApplyButton,
    SetPageCancleButton,
  } from './StyledComponent';

const SetPage = () => {




     return (
        <>
            <SetPageBox>
	            <SetPageProfileBox>
		            <SetPageProfile />
	            	<SetPageProfileChangeButton>Change</SetPageProfileChangeButton>
		            <SetPageProfileDeleteButton>Delete</SetPageProfileDeleteButton>
	            </SetPageProfileBox>
	            <SetPageTextBox>
		            <SetPageUsernameText>Username</SetPageUsernameText>
            		<SetPageUsernameInput />
	            	<SetPagePasswordText>Password</SetPagePasswordText>
            		<SetPagePasswordInput1 />
	            	<SetPagePasswordConfirmText>Password Confirm</SetPagePasswordConfirmText>
	            	<SetPagePasswordInput2 />
	            	<SetPageNotificationSettingText>Notification Setting</SetPageNotificationSettingText>
	            	<SetPageNotificationSettingBox>
            			<SetPageNotificationLine1>
                            <input type="checkbox" />
	            		    <SetPageNotificationText1>Schedule</SetPageNotificationText1>
                        </SetPageNotificationLine1>
	            		<SetPageNotificationLine2>
                            <input type="checkbox" />
	            		    <SetPageNotificationText2>Friends</SetPageNotificationText2>
                        </ SetPageNotificationLine2>
	            		<SetPageNotificationLine3>
                            <input type="checkbox" />
	            		    <SetPageNotificationText3>Team</SetPageNotificationText3>
                        </ SetPageNotificationLine3>
	            		<SetPageNotificationLine4>
                            <input type="checkbox" />
	            		    <SetPageNotificationText4>Timer</SetPageNotificationText4>
                        </ SetPageNotificationLine4>
	            		<SetPageNotificationLine5>
                            <input type="checkbox" />
	            		    <SetPageNotificationText5>Incompleted List</SetPageNotificationText5>
                        </ SetPageNotificationLine5>
	            		<SetPageNotificationLine6>
                            <input type="checkbox" />
	            		    <SetPageNotificationText6>Guest Book</SetPageNotificationText6>
                        </ SetPageNotificationLine6>
	            	</SetPageNotificationSettingBox>
	            </SetPageTextBox>
	            <SetPageApplyBox>
	            	<SetPageApplyButton>Apply</SetPageApplyButton>
	            	<SetPageCancleButton>Cancle</SetPageCancleButton>
            	</SetPageApplyBox>
            </SetPageBox>
        </> 
    );
};

export default SetPage;