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
                    <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
                  </CalendarPageCalendar>
            </CalendarPageBox>
        </>
    );
};
  
export default FriendCalendarComponent;
  