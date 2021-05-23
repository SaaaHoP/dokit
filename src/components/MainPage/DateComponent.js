import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  DateBox,
  DateCenterText,
  DateIcon,
  DateLeftText,
} from './StyledComponent';

const DateComponent = () => {
  return (
    <>
      <DateBox>
        <DateLeftText>Date</DateLeftText>
        <DateCenterText>2021. 03. 31. Wed</DateCenterText>
        <DateIcon></DateIcon>
      </DateBox>
      {/* <ReactDatePicker /> */}
    </>
  );
};

export default DateComponent;
