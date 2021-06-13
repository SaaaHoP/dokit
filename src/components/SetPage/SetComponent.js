import React, { useState,Component } from 'react';
import axios from 'axios';
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
    SetPageApplyBox,
    SetPageApplyButton,
    SetPageCancleButton,
  } from './StyledComponent';

  import { address } from '../../variables';

const SetPage = () => {

    const [checkedItems1, setCheckedItems1] = useState(new Set());
    const [checkedItems2, setCheckedItems2] = useState(new Set());
    const [checkedItems3, setCheckedItems3] = useState(new Set());
    const [checkedItems4, setCheckedItems4] = useState(new Set());
    const [checkedItems5, setCheckedItems5] = useState(new Set());
    const [checkedItems6, setCheckedItems6] = useState(new Set());

    const [bChecked1, setChecked1] = useState(true);
    const [bChecked2, setChecked2] = useState(true);
    const [bChecked3, setChecked3] = useState(true);
    const [bChecked4, setChecked4] = useState(true);
    const [bChecked5, setChecked5] = useState(true);
    const [bChecked6, setChecked6] = useState(true);


    const checkboxHandler1 = (id, isChecked) => {
        if(isChecked){
            checkedItems1.add(id);
            setCheckedItems1(checkedItems1);
        }
        else if(!isChecked && checkedItems1.has(id)){
            checkedItems1.delete(id);
            setCheckedItems1(checkedItems1);
        }
    };
    const checkboxHandler2 = (id, isChecked) => {
        if(isChecked){
            checkedItems2.add(id);
            setCheckedItems2(checkedItems2);
        }
        else if(!isChecked && checkedItems2.has(id)){
            checkedItems2.delete(id);
            setCheckedItems2(checkedItems2);
        }
    };
    const checkboxHandler3 = (id, isChecked) => {
        if(isChecked){
            checkedItems3.add(id);
            setCheckedItems3(checkedItems3);
        }
        else if(!isChecked && checkedItems3.has(id)){
            checkedItems3.delete(id);
            setCheckedItems3(checkedItems3);
        }
    };
    const checkboxHandler4 = (id, isChecked) => {
        if(isChecked){
            checkedItems4.add(id);
            setCheckedItems4(checkedItems4);
        }
        else if(!isChecked && checkedItems4.has(id)){
            checkedItems4.delete(id);
            setCheckedItems4(checkedItems4);
        }
    };
    const checkboxHandler5 = (id, isChecked) => {
        if(isChecked){
            checkedItems5.add(id);
            setCheckedItems5(checkedItems5);
        }
        else if(!isChecked && checkedItems5.has(id)){
            checkedItems5.delete(id);
            setCheckedItems5(checkedItems5);
        }
    };
    const checkboxHandler6 = (id, isChecked) => {
        if(isChecked){
            checkedItems6.add(id);
            setCheckedItems6(checkedItems6);
        }
        else if(!isChecked && checkedItems6.has(id)){
            checkedItems6.delete(id);
            setCheckedItems6(checkedItems6);
        }
    };

    const checkHandler1 = ({target}) => {
        setChecked1(!bChecked1);
        checkboxHandler1(SetPage.id, target.checked);
        }
    const checkHandler2 = ({target}) => {
        setChecked2(!bChecked2);
        checkboxHandler2(SetPage.id, target.checked);
        }
    const checkHandler3 = ({target}) => {
        setChecked3(!bChecked3);
        checkboxHandler3(SetPage.id, target.checked);
        }    
    const checkHandler4 = ({target}) => {
        setChecked4(!bChecked4);
        checkboxHandler4(SetPage.id, target.checked);
        }
    const checkHandler5 = ({target}) => {
        setChecked5(!bChecked5);
        checkboxHandler5(SetPage.id, target.checked);
        }    
    const checkHandler6 = ({target}) => {
        setChecked6(!bChecked6);
        checkboxHandler6(SetPage.id, target.checked);
        }


    const [imgBase64, setImgBase64] = useState(""); //파일 base64
    const [imgFile, setImgFile] = useState(null);	//파일

    const handleChangeFile = (event) => {
        let reader = new FileReader();
    
        reader.onloadend = () => {
          // 2. 읽기가 완료되면 아래코드가 실행됩니다.
          const base64 = reader.result;
          if (base64) {
            setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
          }
        }
        if (event.target.files[0]) {
          reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
          setImgFile(event.target.files[0]); // 파일 상태 업데이트
        }
      }

    // //onChange
    // const handleFileInput = (e) => {
    //     e.preventDefault();

    //     const files = e.target.files;
    //     console.log(files);
    //     setImgFile(imgFile);
    // }
    
    // //onClick
    // const handlePost =  (e) => {
    //     const formData = new FormData();
    //     formData.append('file', imgFile);

    //     const config = {
    //         headers: {
    //             "content-type" : "multipart/form-data"
    //         }
    //     };
    //     return axios.post(`${address}/members/profile/me`, formData,config).then(res => {
    //       alert('성공')
    //     })
    // }
    

    return (
        <>
            <SetPageBox>
	            <SetPageProfileBox>
                    <div className ="SetPage">
                    <div style={{"backgroundColor": "#efefef", "width":"150px", "height" : "150px",
                    "margin-top" : "100px", "margin-left" : "75px"}}/>
                    <div style={{"margin-top":"0px", "margin-left" : "75px"}}>
                    <input type="file" name="imgFile" id="imgFile" onChange={handleChangeFile}/>
                    </div>
                    </div>
	            	<SetPageProfileChangeButton >Change</SetPageProfileChangeButton>
		            <SetPageProfileDeleteButton>Delete</SetPageProfileDeleteButton>
	            </SetPageProfileBox>
	            <SetPageTextBox>
		            <SetPageUsernameText>Username</SetPageUsernameText>
            		<SetPageUsernameInput/>
	            	<SetPagePasswordText>Password</SetPagePasswordText>
            		<SetPagePasswordInput1/>
	            	<SetPagePasswordConfirmText>Password Confirm</SetPagePasswordConfirmText>
	            	<SetPagePasswordInput2/>
	            	<SetPageNotificationSettingText>Notification Setting</SetPageNotificationSettingText>
	            	<SetPageNotificationSettingBox>
            			<SetPageNotificationLine1>
                            <label>
                            <input type="checkbox" checked={bChecked1} onChange={(e)=>checkHandler1(e)}/>
	            		    Schedule
                            </label>
                        </SetPageNotificationLine1>
	            		<SetPageNotificationLine2>
                            <label>
                            <input type="checkbox" checked={bChecked2} onChange={(e)=>checkHandler2(e)}/>
	            		    Friends
                            </label>
                        </ SetPageNotificationLine2>
	            		<SetPageNotificationLine3>
                            <label>
                            <input type="checkbox" checked={bChecked3} onChange={(e)=>checkHandler3(e)}/>
	            		    Team
                            </label>
                        </ SetPageNotificationLine3>
	            		<SetPageNotificationLine4>
                            <label>
                            <input type="checkbox" checked={bChecked4} onChange={(e)=>checkHandler4(e)}/>
	            		    Timer
                            </label>
                        </ SetPageNotificationLine4>
	            		<SetPageNotificationLine5>
                            <label>
                            <input type="checkbox" checked={bChecked5} onChange={(e)=>checkHandler5(e)}/>
	            		    Incompleted List
                            </label>
                        </ SetPageNotificationLine5>
	            		<SetPageNotificationLine6>
                            <label>
                            <input type="checkbox" checked={bChecked6} onChange={(e)=>checkHandler6(e)}/>
	            		    Guest Book
                            </label>
                        </ SetPageNotificationLine6>
	            	</SetPageNotificationSettingBox>
	            </SetPageTextBox>
	            <SetPageApplyBox>
	            	<SetPageApplyButton onChange={''}>Apply</SetPageApplyButton>
	            	<SetPageCancleButton>Cancle</SetPageCancleButton>
            	</SetPageApplyBox>
            </SetPageBox>
        </>
    );
};

export default SetPage;