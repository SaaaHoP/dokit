import React, {useState} from 'react';
import MenuBar from '../components/commons/MenuBar';
//import DateComponent from '../components/MainPage/DateComponent';
//import TodayTodolistComponent from '../components/MainPage/TodayTodolistComponent';
import PasswordCheckComponent from '../components/PasswordCheck/PasswordCheckComponent';

const PasswordCheckPage = () => {
  return (
    <>
      <MenuBar />
      <PasswordCheckComponent />
      {/*<DateComponent />
      <TodayTodolistComponent />*/}
    </>
  );
};

export default PasswordCheckPage;
