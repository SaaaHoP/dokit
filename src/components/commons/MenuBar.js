import React, { useEffect, useCallback, useState, Component } from 'react';

import {
  MenuBox,
  MenuBoxDokitIcon,
  UpperBox,
  UpperBoxTitle,
  UpperBoxIcon1,
  UpperBoxIcon2,
  SideBox,
  SideBoxDetail1,
  SideBoxDetail2,
  SideBoxDetail3,
  SideBoxDetail4,
  SideBoxDetail5,
  SideBoxIcon1,
  SideBoxIcon2,
  SideBoxIcon3,
  SideBoxIcon4,
  SideBoxIcon5,
  SideBoxIcon6,
  SideBoxIcon7,
  SideBoxIcon8,
  SideBoxTitle1,
  SideBoxTitle2,
  SideBoxTitle3,
  SideBoxTitle4,
  SideBoxTitle5,
  SideBoxTitle6,
  SideBoxTitle7,
  SideBoxTitle8,
  UpperBoxInnerIcon1,
  UpperBoxInnerIcon2,
  UpperBoxInnerText1,
  UpperBoxInnerText2,
  SideBoxContent,
  SideBoxDetailBox,
  SideBoxTimerHours,
  SideBoxTimerMinutes,
  SideBoxTimerSeconds,
  SideBoxTimerButton,
  SideBoxStopwatchHours,
  SideBoxStopwatchMinutes,
  SideBoxStopwatchSeconds,
  SideBoxStopwatchButton1,
  SideBoxStopwatchButton2,
  InformationDialog,
  InformationDialogUsername,
  InformationDialogProfile,
  NotificationDialog,
  NotificationTitle,
  NotificationToSetIcon,
  NotificationLine,
  NotificationContentBox,
  NotificationContent1,
  NotificationContent2,
  NotificationContent3,
  NotificationContent4,
  NotificationContent5,
  NotificationContent6,
  TitleChange,
  TitleChangeText,
  TitleChangeButton,
  MainBlur,
  IncompletedList1,
  IncompletedList2,
  IncompletedList3,
  IncompletedListIcon1,
  IncompletedListIcon2,
  IncompletedListIcon3,
  IncompletedListIcon4,
  IncompletedListIcon5,
  IncompletedListIcon6,
  GuestBookList1,
  GuestBookList2,
  GuestBookList3,
  GuestBookList4,
  GuestBookList5,
  FavoriteSmallTitle,
  FavoriteSmallTitle2,
  FavoriteFriendList1,
  FavoriteFriendList2,
  FavoriteFriendList3,
  FavoriteTeamList1,
  FavoriteTeamList2,
  FavoriteTeamList3,
  SideBoxTimerTemp,
} from '../MenuBar/StyledComponent';
import TitleButton from '@material-ui/core/Button';
import TitleTextField from '@material-ui/core/TextField';
import TitleDialog from '@material-ui/core/Dialog';
import TitleDialogActions from '@material-ui/core/DialogActions';
import TitleDialogContent from '@material-ui/core/DialogContent';
import TitleDialogContentText from '@material-ui/core/DialogContentText';
import TitleDialogTitle from '@material-ui/core/DialogTitle';
import { address } from '../../variables';
import { Link, useHistory, Route } from 'react-router-dom';
import axios from 'axios';
import {
  SetPageNotificationLine1,
  SetPageNotificationText1,
} from '../SetPage/StyledComponent';

const MenuBar = () => {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [username, setUsername] = useState('');

  ///////////////////////////
  //for title useState
  const [title, setTitle] = useState('');
  const [title2, setTitle2] = useState('wrong');

  useEffect(() => {
    let jwtToken = localStorage.getItem('Authorization');
    axios.defaults.headers.common['Authorization'] = jwtToken;
    axios.get(`${address}/members/me/conversation`).then((res) => {
      setTitle(res.data.conversation);
    });
    console.log('useEffect');
  }, [setTitle]);

  // useCallback(() => {
  //   let jwtToken = localStorage.getItem('Authorization');
  //   axios.defaults.headers.common['Authorization'] = jwtToken;
  //   axios.get(`${address}/members/me/converstaion`).then((res) => {
  //     setTitle(res.data.conversation);
  //   });
  //   console.log("usecallback");
  // },[setTitle]);

  //input title fuction
  const onChangeTitle = useCallback((e) => {
    e.preventDefault();
    setTitle(e.target.value);
  }, []);

  let bufferTitle = {
    conversation: title,
  };

  //change title fuction
  const submitHandler = async (e) => {
    e.preventDefault();
    let jwtToken = localStorage.getItem('Authorization');
    axios.defaults.headers.common['Authorization'] = jwtToken;

    //주소 이런식으로 발생시킴
    axios.patch(`${address}/members/me/conversation`, bufferTitle);
    handleClose3();
  };

  //apply title function
  // const applyHandler =  () => {
  //   // e.preventDefault();
  //   const axiosGet = async () => {
  //     let jwtToken = localStorage.getItem('Authorization');
  //     axios.defaults.headers.common['Authorization'] = jwtToken;
  //     await axios.get(`${address}/members/me/conversation`).then((res) => {
  //     setTitle(res.data.conversation);
  //   });
  //   }
  //   axiosGet();
  // }

  //   const applyHandler = (e) => {
  //     useEffect(()=> {
  //     e.preventDefault();
  //     const axiosGet = () => {
  //       let jwtToken = localStorage.getItem('Authorization');
  //     axios.defaults.headers.common['Authorization'] = jwtToken;
  //      axios.get(`${address}/members/me/conversation`).then((res) => {
  //       setTitle(res.data.conversation);
  //     });
  //     }
  //     axiosGet();
  //   }, [setTitle])
  // }

  const openTitle = () => {
    setTitle2(title);
    handleClickOpen3();
  };

  const cancleTitle = () => {
    setTitle(title2);
    handleClose3();
  };

  //console.log(bufferTitle);

  ///////////////////////////// Timer in frontend

  /*
    const cx = classNames.bind(styled);

    const TimerForm = ({ onChange, hour, min, sec, contents }) => (
      <div className={cx('form-wrapper')}>
        <input
          value={hour}
          onChange={onChange}
          type="number"
          placeholder="00"
          name="hour"
          className={cx('inputs')}
          readOnly={!contents}
        />{' '}
          :
        <input
          value={min}
          onChange={onChange}
          type="number"
          placeholder="00"
          name="min"
          className={cx('inputs')}
          readOnly={!contents}
        />{' '}
          :
        <input
          value={sec}
          onChange={onChange}
          type="number"
          placeholder="00"
          name="sec"
          className={cx('inputs')}
          readOnly={!contents}
        />
      </div>
      );
    
    TimerForm.propTypes = {
      onChange: PropTypes.func,
      hour: PropTypes.number,
      min: PropTypes.number,
      sec: PropTypes.number,
      contents: PropTypes.bool,
    };
    
    TimerForm.defaultProps = {
      onChange: () => console.warn('no onChange'),
      hour: 0,
      min: 0,
      sec: 0,
      contents: true,
    };

    ////
    const cx = classNames.bind(styled);

const TimerButton = ({ onClick, handleClear, handleSave, contents }) => (
  <div className={cx('Button-wrapper')}>
    <div
      className={cx('Button')}
      onClick={onClick}
      onKeyDown={null}
      role="Button"
      tabIndex="0"
    >
      {contents ? '시작' : '정지'}
    </div>
    <div
      className={cx('clear', 'Button', { visibility: !contents })}
      onClick={handleClear}
      onKeyPress={null}
      role="Button"
      tabIndex="0"
    >
      초기화
    </div>
    <div
      className={cx('Button', { visibility: contents })}
      onClick={handleSave}
      onKeyDown={null}
      role="Button"
      tabIndex="0"
    >
      저장
    </div>
  </div>
);

TimerButton.propTypes = {
  onClick: PropTypes.func,
  handleClear: PropTypes.func,
  handleSave: PropTypes.func,
  contents: PropTypes.bool,
};

TimerButton.defaultProps = {
  onClick: () => console.warn('No handleAction!'),
  handleClear: () => console.log('No handleClear!'),
  handleSave: () => console.log('No hanaleSave!'),
  contents: true,
};
*/

  /////////////////////////////

  //Me아이콘
  const handleClickOpen1 = () => {
    setOpen(!open);
  };

  const handleClose1 = () => {
    setOpen(false);
  };

  //알람 아이콘
  const handleClickOpen2 = () => {
    setOpen2(!open2);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  //제목 바꾸기
  //material-ui를 이용해 보았음
  const handleClickOpen3 = () => {
    setOpen3(!open3);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleClickLogout = () => {
    localStorage.removeItem('Authorization');
  };

  //let_state관리로 값 조정 및 값에따라 창 띄우기를 성공시켜야 한다.
  //zindex == 맨 앞으로 혹은 맨뒤로 보낼 수 있는 기능입니다.
  return (
    <>
      <MenuBox>
        <UpperBox>
          <Link to='/main'>
            <MenuBoxDokitIcon />
          </Link>
          <UpperBoxTitle onClick={openTitle}>{title}</UpperBoxTitle>
          {open3 ? (
            <TitleDialog
              open={open3}
              onClose={cancleTitle}
              aria-labelledby='form-dialog3-title'
            >
              <TitleDialogTitle id='form-dialog3-title'>
                Change Your Title
              </TitleDialogTitle>
              <TitleDialogContent>
                <TitleDialogContentText>
                  Write your own motto and create a unique title 😊
                </TitleDialogContentText>
                <TitleTextField
                  autoFocus
                  margin='dense'
                  id='name'
                  label='Title'
                  type='title'
                  name='title'
                  fullWidth
                  //이 아래 input기능 함수 작성.
                  value={title}
                  onChange={onChangeTitle}
                />
              </TitleDialogContent>
              <TitleDialogActions>
                <TitleButton onClick={submitHandler} color='primary'>
                  Change
                </TitleButton>
                <TitleButton onClick={cancleTitle} color='primary'>
                  Cancel
                </TitleButton>
              </TitleDialogActions>
            </TitleDialog>
          ) : null}

          <UpperBoxIcon1 onClick={handleClickOpen2} />
          {open2 ? (
            <NotificationDialog
              open={open2}
              onClose={handleClose2}
              aria-labelledby='form-Notidialog-title'
            >
              <NotificationTitle id='form-Notidialog-title'>
                Notification
              </NotificationTitle>
              <Link to='/PasswordCheck'>
                <NotificationToSetIcon />
              </Link>
              <NotificationLine />
              <NotificationContentBox>
                <NotificationContent1>
                  민지원 님이 친구 요청 하였습니다
                </NotificationContent1>
                <NotificationContent2>
                  박성호 님이 그룹에 초대하였습니다
                </NotificationContent2>
                <NotificationContent3>
                  3/30 미완료 리스트 3건 있습니다
                </NotificationContent3>
                <NotificationContent4>
                  이상민 님이 방명록을 남기셨습니다
                </NotificationContent4>
                <NotificationContent5>
                  오늘의 리스트를 작성해주세요
                </NotificationContent5>
                <NotificationContent6>
                  잠깐! 타이머를 종료 하셨나요?
                </NotificationContent6>
              </NotificationContentBox>
            </NotificationDialog>
          ) : null}
          {open2 ? <MainBlur onClick={handleClose2} /> : null}

          <UpperBoxIcon2 onClick={handleClickOpen1} />
          {open ? (
            <InformationDialog
              open={open}
              onClose={handleClose1}
              aria-labelledby='form-dialog-title'
            >
              <InformationDialogProfile id='form-dialog-title'></InformationDialogProfile>
              <InformationDialogUsername>{username}</InformationDialogUsername>
              <Link to='/PasswordCheck'>
                <UpperBoxInnerIcon1 />
                <UpperBoxInnerText1>Setting</UpperBoxInnerText1>
              </Link>
              <Link to='/login'>
                <UpperBoxInnerIcon2 />
                <UpperBoxInnerText2 onClick={handleClickLogout}>
                  Logout
                </UpperBoxInnerText2>
              </Link>
            </InformationDialog>
          ) : null}
          {open ? <MainBlur onClick={handleClose1} /> : null}
        </UpperBox>

        <SideBox>
          <SideBoxDetail1>
            <Link to='/main'>
              <SideBoxIcon1 />
              <SideBoxTitle1>Dokit List</SideBoxTitle1>
            </Link>
            <Link to='/calendar'>
              <SideBoxIcon2 />
              <SideBoxTitle2>Calendar</SideBoxTitle2>
            </Link>
            <Link to='/friend'>
              <SideBoxIcon3 />
              <SideBoxTitle3>Friends</SideBoxTitle3>
            </Link>
            <Link to='/team'>
              <SideBoxIcon4 />
              <SideBoxTitle4>Team</SideBoxTitle4>
            </Link>
          </SideBoxDetail1>
          <SideBoxDetail2>
            <SideBoxIcon5 />
            <SideBoxTitle5>Timer</SideBoxTitle5>
            <SideBoxTimerTemp>03 : 15 : 29</SideBoxTimerTemp>
          </SideBoxDetail2>
          <SideBoxDetail3>
            <SideBoxIcon6 />
            <SideBoxTitle6>Incompleted List</SideBoxTitle6>
            <div>
              <IncompletedList1>인공지능 3주차 강의</IncompletedList1>
              <IncompletedListIcon1 />
              <IncompletedListIcon2 />
              <IncompletedList2>알고리즘 2주차 강의</IncompletedList2>
              <IncompletedListIcon3 />
              <IncompletedListIcon4 />
              <IncompletedList3>프로젝트 자료제출</IncompletedList3>
              <IncompletedListIcon5 />
              <IncompletedListIcon6 />
            </div>
          </SideBoxDetail3>
          <SideBoxDetail4>
            <SideBoxIcon7 />
            <SideBoxTitle7>Guest Book</SideBoxTitle7>
            <div>
              <GuestBookList1>박성호 : 소통해요~</GuestBookList1>
              <GuestBookList2>이상민 : 안녕하세요^^</GuestBookList2>
              <GuestBookList3></GuestBookList3>
              <GuestBookList4></GuestBookList4>
              <GuestBookList5></GuestBookList5>
            </div>
          </SideBoxDetail4>
          <SideBoxDetail5>
            <SideBoxIcon8 />
            <SideBoxTitle8>Favorite</SideBoxTitle8>
            <div>
              <FavoriteSmallTitle>Friends</FavoriteSmallTitle>
              <FavoriteFriendList1>김지현</FavoriteFriendList1>
              <FavoriteFriendList2>민지원</FavoriteFriendList2>
              <FavoriteFriendList3></FavoriteFriendList3>
            </div>
            <div
              style={{
                position: 'absolute',
                width: '175px',
                left: '10px',
                top: '72px',
                border: '1px solid rgba(0,0,0,0.3)',
              }}
            />
            <div>
              <FavoriteSmallTitle2>Team</FavoriteSmallTitle2>
              <FavoriteTeamList1>두야호</FavoriteTeamList1>
              <FavoriteTeamList2></FavoriteTeamList2>
              <FavoriteTeamList3></FavoriteTeamList3>
            </div>
          </SideBoxDetail5>
        </SideBox>
      </MenuBox>
    </>
  );
};

export default MenuBar;
