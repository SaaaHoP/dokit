import React from 'react';
import {
    CalendarPageBox,
    CalendarPageCalendar,
} from './StyledComponent';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const FriendCalendarComponent = () => {
    return (
        <>
            <CalendarPageBox>
                  <CalendarPageCalendar>
                    <FullCalendar                     
                        defaultView="dayGridMonth"
                        navLinks={true} //날짜 클릭 가능하게
                        aspectRatio= '2.3'
                        plugins={[dayGridPlugin]}
                        weekends={true}
                    />
                  </CalendarPageCalendar>
            </CalendarPageBox>
        </>
    );
};
export default FriendCalendarComponent;
  