import React, { useState } from 'react';
import MenuBar from '../components/commons/MenuBar';
import DateComponent from '../components/MainPage/DateComponent';
import TodayTodolistComponent from '../components/MainPage/TodayTodolistComponent';

const MainPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const previousDay = new Date(startDate);
  const nextDay = new Date(startDate);
  let selectDate = startDate.toISOString().substring(0, 10);

  const onClickPreviousday = () => {
    previousDay.setDate(previousDay.getDate() - 1);
    setStartDate(previousDay);
  };

  const onClickNextday = () => {
    nextDay.setDate(nextDay.getDate() + 1);
    setStartDate(nextDay);
  };

  return (
    <>
      <MenuBar />
      <DateComponent startDate={startDate} setStartDate={setStartDate} />
      <TodayTodolistComponent
        selectDate={selectDate}
        onClickPreviousday={onClickPreviousday}
        onClickNextday={onClickNextday}
      />
    </>
  );
};

export default MainPage;
