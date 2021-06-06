import React, { useState } from 'react';
import MenuBar from '../components/commons/MenuBar';
import DateComponent from '../components/MainPage/DateComponent';
import TodayTodolistComponent from '../components/MainPage/TodayTodolistComponent';

const MainPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  let selectDate = startDate.toISOString().substring(0, 10);
  console.log(selectDate);
  return (
    <>
      <MenuBar />
      <DateComponent startDate={startDate} setStartDate={setStartDate} />
      <TodayTodolistComponent selectDate={selectDate} />
    </>
  );
};

export default MainPage;
