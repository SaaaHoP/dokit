import React from 'react';
import {
    CalendarPageBox,
    CalendarPageCalendar,
    PrivateCalendarPageUpperPart,
    CalendarPageScheduleAddButton,
    CalendarPageScheduleAddButtonIcon,
    PrivateCalendarPageCalendarPosition,
} from './StyledComponent';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
const PrivateCalendarComponent = () => {
    return (
      <>
        <CalendarPageBox>
            <PrivateCalendarPageUpperPart>
                <CalendarPageScheduleAddButton>
                    <CalendarPageScheduleAddButtonIcon />
                </CalendarPageScheduleAddButton>
            </PrivateCalendarPageUpperPart>
            <PrivateCalendarPageCalendarPosition>
                <CalendarPageCalendar>
                <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
                </CalendarPageCalendar>
            </PrivateCalendarPageCalendarPosition>
        </CalendarPageBox>
      </>
    );
};
  
export default PrivateCalendarComponent;
  