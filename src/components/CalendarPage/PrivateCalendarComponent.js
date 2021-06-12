import React from 'react';
import {
    CalendarPageBox,
    CalendarPageCalendar,
    PrivateCalendarPageUpperPart,
    PrivateCalendarPageCalendarPosition,
} from './StyledComponent';
import AddToScheduleButton from './AddToScheduleButton';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const PrivateCalendarComponent = () => {
    const PrivateCalendarItems = [
        {
            id: 1,
            title: '**월급**',
            start: '2021-06-25',
            end: '2021-06-25',
            color: 'rgba(246,211,243,1.0)',
            opened: 'true'  //아직 캘린더상에서 구현x
        },
        {
            id: 2,
            title: '소프제출',
            start: '2021-06-14',
            end: '2021-06-14',
            color: 'rgba(193,255,208,1.0)',
            opened: 'true'
        },
        {
            id: 3,
            title: '인공지능#3',
            date: '2021-06-14',
            color: 'rgba(215,211,255,1.0)',
            opened: 'true'
        },
        {
            id: 4,
            title: '!!!!!종강!!!!!',
            start: '2021-06-15',
            end: '2021-06-20',
            color: 'rgba(255,241,198,1.0',
            opened: 'true'
        },
        {
            id: 5,
            title: '~~~여행~~~',
            start: '2021-06-19',
            end: '2021-06-21',
            color: 'rgba(208,247,255,1.0)',
            opened: 'false'
        }

        // {
        //     "calendarItems": [
        //         {
        //             "color": "string",
        //             "content": "string",
        //             "endDate": "string",
        //             "id": 0,
        //             "opened": true,
        //             "startDate": "string"
        //         }
        //     ]
        // }
    ];

    return (
        <>
            <CalendarPageBox>
                <PrivateCalendarPageUpperPart>
                    <AddToScheduleButton />
                </PrivateCalendarPageUpperPart>
                <PrivateCalendarPageCalendarPosition>
                    <CalendarPageCalendar>
                        <FullCalendar
                            defaultView="dayGridMonth"
                            navLinks={true} //날짜 클릭 가능하게
                            aspectRatio='2.5'
                            eventTextColor="black"
                            plugins={[dayGridPlugin]}
                            weekends={true}
                            events={PrivateCalendarItems}
                        />
                    </CalendarPageCalendar>
                </PrivateCalendarPageCalendarPosition>
            </CalendarPageBox>
        </>
    );
};

export default PrivateCalendarComponent;
