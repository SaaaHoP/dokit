import React, { forwardRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  DateBox,
    CalendarPageAddModalInputDate,
    SelectDateText,
} from './StyledComponent';


// const DateSelectComponent = ({ startDate, setStartDate, endDate, setEndDate }) => {
//     const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
//     <SelectDateText onClick={onClick} ref={ref}>
//       {value}
//     </SelectDateText>
//   ));

const DateSelectComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate]=useState(new Date());
    const ExampleCustomInput = forwardRef(({value, onClick},ref) => (
        <button 
            onClick = {onClick} ref={ref} 
            style = {{marginLeft : "5px", marginRight : "5px"}}>
            {value}
        </button>
    ));

    


  // let date = startDate.toISOString().substring(0, 10);

    return (
        <>
            <CalendarPageAddModalInputDate>
                <ReactDatePicker
                selected = {startDate}
                onChange={(date) => setStartDate(date)}
                customInput = {<ExampleCustomInput />}
                dateFormat="yyyy. MM. dd"
                />
                 ~ 
                <ReactDatePicker
                selected = {endDate}
                onChange={(date) => setEndDate(date)}
                customInput = {<ExampleCustomInput />}
                dateFormat="yyyy. MM. dd"
                />
            </CalendarPageAddModalInputDate>
        </>
    );
};
export default DateSelectComponent;
