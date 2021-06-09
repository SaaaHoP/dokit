import styled from 'styled-components';
import { FaPlus } from "react-icons/fa"
import { BsThreeDotsVertical } from "react-icons/bs"
import {BsPeopleCircle} from 'react-icons/bs'
import {FiLock} from 'react-icons/fi'
import {FiUnlock} from 'react-icons/fi'



export const CalendarPageModalBackground = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2;
    
`;

export const CalendarPageAddModal = styled.div`
    position:absolute;
    width: 360px;
    height: 440px;
    top: 20%; //팝업창 test하려고 top 없앰

    right : 13px;
    background-color: white;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    background: white;
    z-index: 999;
`;

export const ModalCloseButton = styled.span`
    float: right;
    margin-right: 10px;
    margin-top: 5px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
`;

export const ModalContentsWrapper = styled.div`
    // margin: 0 auto;
    width: 100%;
    position: relative;
    padding: 0 20px 32px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 24px;
    font-weight: 600;
    z-index:999;
`;

export const CalendarPageAddModalMainTitle = styled.div`
    margin: 15px;
    font-size: 30px;
    font-weight: 600;
    margin-bottom : 30px;
`;

export const CalendarPageAddModalElement = styled.div`
    margin: 13px;
    font-size: 20px;
    font-weight: 600;
    display: flex;
`;

export const CalendarPageAddModalInputTitle = styled.input.attrs({
})`
    margin-left : 15px;
    width: 160px;
    border: none;
    border-bottom: 1px solid gray;
`;

export const CalendarPageAddModalInputDate = styled.div`

    margin-left : 10px;
`;

export const SelectDateText = styled.div`
    font-size = 15px;
`;

export const CalendarPageAddModalSelectLockButton = styled.button`
width:48px;
height:48px;
background: rgba(172,211,220,0.3);
border-radius: 50px;
border: none;
color : rgba(0,0,0,0.5);

display:flex;
justify-content: center;
align-items: center;
//아이콘 가운데정렬

margin-left : 15px;
cursor: pointer;
`;

export const CalendarPageAddModalSelectLockButtonIcon = styled(FiLock)`
width: 24px;
height: 24px;
`;

export const CalendarPageAddModalSelectUnLockButton = styled.button`
width:48px;
height:48px;
background: rgba(172,211,220,0.3);
border-radius: 50px;
border: none;
color : rgba(0,0,0,0.5);

display:flex;
justify-content: center;
align-items: center;
//아이콘 가운데정렬

margin-left : 15px;
cursor: pointer;
`;

export const CalendarPageAddModalSelectUnLockButtonIcon = styled(FiUnlock)`
width: 24px;
height: 24px;
`;

export const CalendarPageAddModalSelectColor = styled.button`
height: 24px;
width: 24px;
border-radius: 50px;
border: none;
margin-left : 10px;
cursor: pointer;
`;

export const CalendarPageAddModalColorWrapper = styled.div`
border-radius: 10px;
border: none;
background: rgba(0,0,0,1.0);
margin-left : 15px;
padding-top:8px;
padding-bottom:8px;
padding-right:20px;
padding-left:10px;
`;

export const CalendarPageAddModalButtonPosition = styled.div`
width: 100%;
position: relative;
box-sizing: border-box;
display: flex;
bottom :-13px;
`;

export const CalendarPageAddModalButton=styled.button`
height: 40px;
width: 100px;
border-radius: 8px;
border: none;
background: rgba(172,211,220,0.3);
font-size: 17px;
font-weight: 600;
cursor: pointer;
margin-right : 10px;
margin-left : auto;

`;










export const CalendarPageBox = styled.div`
position: absolute;
top : 10%;
left : 13%;
right : 13px;
display: flex;
flex-direction: column;

//border: solid 5px blue;
z-index: 1;

`;

export const CalendarPageCalendar = styled.div`
width:100%;
height:100%;
//background: rgba(172,211,220,0.2);
`;  //라이브러리에서 캘린더 받아와서 넣어줄때 쓰는 태그

export const TeamCalendarPageUpperPart = styled.div`
width:100%;
padding : 13px;
display: flex;
justify-content: space-between;
align-items: center;

//border: solid 3px skyblue;
`;

export const TeamCalendarPageLowerPart = styled.div`
width:100%;
height:520px;
display: flex;
justify-content: space-between;
//memberlist랑 calendar 항상 lowerpart side에 붙음

//border: solid 3px red;
`;

export const TeamCalendarPageProjectTitle = styled.span`
font-family:'Noto Sans KR';
font-size:35px;
font-weight:600;
left:24px;
`;

export const TeamCalendarPageButtonPosition = styled.div`
display : flex;
`;

export const TeamCalendarPageMemberListBox = styled.div`
width:12%;
height:200px;
margin-right : 15px;
margin-left:10px;
padding : 10px;
display: flex;
flex-direction:column;
align-items: center;
border: solid 1px rgba(0,0,0,0.15);
border-radius: 20px;
`;

export const TeamCalendarPageMember = styled.div`
width : 100%;
height : 24px;
margin-top : 8px;

display: flex;
align-items : center;
justify-content : center;
`;

export const TeamCalendarPageUserProfileCircle = styled(BsPeopleCircle)`
height: 24px;
width: 24px;
color: #C4C4C4;
margin-right : 6px;
`;

export const TeamCalendarPageUserName = styled.div`
font-family:'Noto Sans KR';
font-size:15px;
`;



export const TeamCalendarPageCalendarPosition = styled.div`
//position : absolute;

width:88%;
height:100%;
margin-right:13px;
dispaly : flex;
//border: solid 3px green;
//z-index: 1;

`;

export const PrivateCalendarPageUpperPart = styled.div`
// width:100%;
// height:48px;
// margin-bottom : 13px;
// display : flex;

width:100%;
padding : 13px;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const PrivateCalendarPageCalendarPosition = styled.div`
width:100%;
height:560px;
//border: solid 3px red;
`;

export const CalendarPageScheduleAddButton = styled.button`
width:48px;
height:48px;
background: rgba(172,211,220,0.3);
border-radius: 50px;
border: none;
color : rgba(0,0,0,0.5);

display:flex;
justify-content: center;
align-items: center;
//아이콘 가운데정렬

margin-left : auto;
cursor: pointer;
`;

export const CalendarPageScheduleAddButtonIcon = styled(FaPlus)`
width: 24px;
height: 24px;
`;

export const TeamCalendarPageInfoButton = styled.button`
width:48px;
height:48px;
background: rgba(172,211,220,0.3);
border-radius: 50px;
border: none;
color : rgba(0,0,0,0.5);

display:flex;
justify-content: center;
align-items: center;
margin-left : 13px;
cursor: pointer;
`;

export const TeamCalendarPageInfoButtonIcon = styled(BsThreeDotsVertical)`
width: 24px;
height: 24px;
`;