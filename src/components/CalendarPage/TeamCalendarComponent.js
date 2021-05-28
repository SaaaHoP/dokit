import React from 'react';
import {
    CalendarPageBox,
    CalendarPageCalendar,
    CalendarPageScheduleAddButton,
    CalendarPageScheduleAddButtonIcon,
    TeamCalendarPageInfoButton,
    TeamCalendarPageInfoButtonIcon,
    TeamCalendarPageUpperPart,
    TeamCalendarPageButtonPosition,
    TeamCalendarPageProjectTitle,
    TeamCalendarPageLowerPart,
    TeamCalendarPageMemberListBox,
    TeamCalendarPageMember,
    TeamCalendarPageUserProfileCircle,
    TeamCalendarPageUserName,
    TeamCalendarPageCalendarPosition,

} from './StyledComponent';


import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { RiArrowGoBackFill } from 'react-icons/ri';

const TeamCalendarComponent = () => {
    return (
      <>

        <CalendarPageBox>
            <TeamCalendarPageUpperPart>
                <TeamCalendarPageProjectTitle>
                    두야호~!의 Dokit 프로젝트
                </TeamCalendarPageProjectTitle>
                <TeamCalendarPageButtonPosition>
                    <CalendarPageScheduleAddButton>
                        <CalendarPageScheduleAddButtonIcon />
                    </CalendarPageScheduleAddButton>
                    <TeamCalendarPageInfoButton>
                        <TeamCalendarPageInfoButtonIcon />
                    </TeamCalendarPageInfoButton>
                </TeamCalendarPageButtonPosition>
            </TeamCalendarPageUpperPart>
            <hr style={{
                width:'100%', 
                marginTop:0, 
                marginBottom:13, 
                borderRightWidth : 0, 
                borderLeftWidth : 0, 
                opacity : 0.15}}
            />
            <TeamCalendarPageLowerPart>
                <TeamCalendarPageMemberListBox>
                    <TeamCalendarPageMember>
                        <TeamCalendarPageUserProfileCircle/>
                        <TeamCalendarPageUserName>민지원</TeamCalendarPageUserName>
                    </TeamCalendarPageMember>
                    <TeamCalendarPageMember>
                        <TeamCalendarPageUserProfileCircle/>
                        <TeamCalendarPageUserName>김지현</TeamCalendarPageUserName>
                    </TeamCalendarPageMember>
                </TeamCalendarPageMemberListBox>
                <TeamCalendarPageCalendarPosition>
                    <CalendarPageCalendar>
                    <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
                    </CalendarPageCalendar>
                </TeamCalendarPageCalendarPosition>
            </TeamCalendarPageLowerPart>
        </CalendarPageBox>
      </>
    );
};
  
export default TeamCalendarComponent;
  