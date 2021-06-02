import styled from 'styled-components';
import { FaPlus } from "react-icons/fa"
import { BsThreeDotsVertical } from "react-icons/bs"
import {BsPeopleCircle} from 'react-icons/bs'

export const CalendarPageBox = styled.div`
position: absolute;
top : 10%;
left : 13%;
right : 13px;
display: flex;
flex-direction: column;

//border: solid 5px blue;
`;

export const CalendarPageCalendar = styled.div`
width:100%;
height:100%;
background: rgba(172,211,220,0.2);
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
margin-top : 5px;

display: flex;
align-items : center;
justify-content : center;
`;

export const TeamCalendarPageUserProfileCircle = styled(BsPeopleCircle)`
height: 24px;
width: 24px;
color: #C4C4C4;
margin-right : 5px;
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
`;

export const PrivateCalendarPageUpperPart = styled.div`
width:100%;
height:48px;
margin-bottom : 13px;
display : flex;
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