import React from 'react';
import MenuBar from '../components/commons/MenuBar';
import DateComponent from '../components/MainPage/DateComponent';
import TodayTodolistComponent from '../components/MainPage/TodayTodolistComponent';

const MainPage = () => {
  return (
    <>
      <MenuBar />
      <DateComponent />
      <TodayTodolistComponent />
    </>
  );
};

export default MainPage;
