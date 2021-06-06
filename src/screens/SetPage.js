import React, {useState} from 'react';
import MenuBar from '../components/commons/MenuBar';
//import DateComponent from '../components/MainPage/DateComponent';
//import TodayTodolistComponent from '../components/MainPage/TodayTodolistComponent';
import SetComponent from '../components/SetPage/SetComponent';

const SetPage = () => {
  return (
    <>
      <MenuBar />
      <SetComponent />
      {/*<DateComponent />
      <TodayTodolistComponent />*/}
    </>
  );
};

export default SetPage;
