import React from 'react';
import {
    CalendarPageBox,
    CalendarPageCalendar,
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
import AddToScheduleButton from './AddToScheduleButton';
import TeamInfoButton from './TeamInfoButton';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { RiArrowGoBackFill } from 'react-icons/ri';


const TeamMemberElementCreator = ({ user }) => {
    return (
        <TeamCalendarPageMember>
            <TeamCalendarPageUserProfileCircle />
            <TeamCalendarPageUserName>{user.name}</TeamCalendarPageUserName>
        </TeamCalendarPageMember>
    );
}

const TeamMemberListCreator = ({ users }) => {
    return (
        <>
            {users.map(user => (
                <TeamMemberElementCreator user={user} key={user.id} />
            ))}
        </>
    );
}

const TeamCalendarComponent = () => {

    const TeamMemberListElements = [
        {
            id: 1,
            name: '박성호',
        },
        {
            id: 2,
            name: '민지원',
        },
        {
            id: 3,
            name: '정명훈',
        },
        {
            id: 4,
            name: '이상민',
        },
        {
            id: 5,
            name: '김지현',
        },
    ];

    const TeamCalendarItems = [
        {
            id: 1,
            title: '##회의##',
            start: '2021-06-12',
            end: '2021-06-14',
            color: 'rgba(246,211,243,1.0)',
            opened: 'true'  //아직 캘린더상에서 구현x
        },
        {
            id: 2,
            title: '제출 마감 두야~~호~!',
            start: '2021-06-14',
            end: '2021-06-14',
            color: 'rgba(193,255,208,1.0)',
            opened: 'true'
        },
        {
            id: 3,
            title: '발표',
            date: '2021-06-14',
            color: 'rgba(215,211,255,1.0)',
            opened: 'true'
        },
        {
            id: 4,
            title: '!!!!!~~~~~~종강~~~~~~!!!!!',
            start: '2021-06-15',
            end: '2021-06-20',
            color: 'rgba(255,241,198,1.0',
            opened: 'true'
        },
        {
            id: 5,
            title: '##테스트##',
            start: '2021-06-09',
            end: '2021-06-14',
            color: 'rgba(208,247,255,1.0)',
            opened: 'false'
        }
    ]



    return (
        <>
            <CalendarPageBox>
                <TeamCalendarPageUpperPart>
                    <TeamCalendarPageProjectTitle>
                        두야호~!의 Dokit 프로젝트
                    </TeamCalendarPageProjectTitle>
                    <TeamCalendarPageButtonPosition>
                        <AddToScheduleButton />
                        <TeamInfoButton />
                    </TeamCalendarPageButtonPosition>
                </TeamCalendarPageUpperPart>
                <hr style={{
                    width: '100%',
                    marginTop: 0,
                    marginBottom: 13,
                    borderRightWidth: 0,
                    borderLeftWidth: 0,
                    opacity: 0.15
                }}
                />
                <TeamCalendarPageLowerPart>
                    <TeamCalendarPageMemberListBox>
                        <TeamMemberListCreator
                            users={TeamMemberListElements}
                        />
                    </TeamCalendarPageMemberListBox>
                    <TeamCalendarPageCalendarPosition>
                        <CalendarPageCalendar>
                            {/* <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}/> */}
                            <FullCalendar
                                defaultView="dayGridMonth"
                                navLinks={true} //날짜 클릭 가능하게
                                aspectRatio='2.3'
                                eventTextColor="black"
                                plugins={[dayGridPlugin]}
                                weekends={true}
                                events={TeamCalendarItems}
                            />
                        </CalendarPageCalendar>
                    </TeamCalendarPageCalendarPosition>
                </TeamCalendarPageLowerPart>
            </CalendarPageBox>
        </>
    );
};

export default TeamCalendarComponent;
