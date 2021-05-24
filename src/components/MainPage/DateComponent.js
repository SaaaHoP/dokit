import React, { forwardRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  DateBox,
  DateCenterText,
  DateIcon,
  DateLeftText,
} from './StyledComponent';

const DateComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <DateCenterText onClick={onClick} ref={ref}>
      {value}
    </DateCenterText>
  ));

  let date = `${startDate.getFullYear()}-${
    startDate.getUTCMonth() + 1
  }-${startDate.getUTCDate()}`;

  console.log(date);

  return (
    <>
      <DateBox>
        <DateLeftText>Date</DateLeftText>
        <ReactDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          customInput={<ExampleCustomInput />}
          popperModifiers={{ preventOverflow: { enabled: true } }}
          popperPlacement='bottom-start'
          dateFormat='yyyy. MM. dd. eee'
          fixedHeight={true}
        />
        <DateIcon />
      </DateBox>
    </>
  );
};

export default DateComponent;
