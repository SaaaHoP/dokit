import styled from 'styled-components';
import { DokitIcon } from '../commons/DokitIcon';
import {
  UpperBoxAlarmIcon,
  UpperBoxMeIcon,
  SideBoxHomeIcon,
  SideBoxCalendarIcon,
  SideBoxFriendsIcon,
  SideBoxTeamIcon,
  SideBoxTimerIcon,
  SideBoxTimerStartIcon,
  SideBoxStopwatchStartIcon,
  SideBoxStopwatchResetIcon,
  SideBoxIncompledtedListIcon,
  SideBoxGuestBookIcon,
  SideBoxFavoriteIcon,
  UpperBoxMe_SettingIcon,
  UpperBoxMe_LogoutIcon,
  SideBoxPlusIcon,
  SideBoxCheckIcon,
} from '../commons/MenuBarIcon';
import MenuPost from '../../icons/MenuPost.png';
import TimerPost from '../../icons/TimerPost.png';
import IncompletedPost from '../../icons/IncompletedPost.png';
import GuestbookPost from '../../icons/GuestbookPost.png';
import FavoritePost from '../../icons/FavoritePost.png';

export const MenuBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuBoxDokitIcon = styled(DokitIcon)`
  position: absolute;
  margin-top: -60px;
  width: 120px;
  height: 120px;
  left: 35px;
  cursor: pointer;
`;

export const UpperBox = styled.div`
  background: rgb(172, 211, 220, 0.6);
  position: fixed;
  width: 100%;
  padding: 36px;
  font-weight: 600;
  font-size: 20px;
  z-index: 3;
`;

export const UpperBoxTitle = styled.span`
  font-family: 'Roboto';
  text-shadow: 2px 2px 5px gray;
  text-align: center;
  position: fixed;
  font-size: 28px;
  left: 45%;
  top: 28px;
  z-index: 3;
`;

export const UpperBoxIcon1 = styled(UpperBoxAlarmIcon)`
  position: absolute;
  width: 36px;
  height: 36px;
  right: 100px;
  top: 20px;
  cursor: pointer;
  z-index: 3;
`;

export const UpperBoxIcon2 = styled(UpperBoxMeIcon)`
  position: absolute;
  width: 36px;
  height: 36px;
  right: 35px;
  top: 20px;
  cursor: pointer;
  z-index: 3;
`;

export const SideBox = styled.div`
  position: fixed;
  width: 208px;
  height: 960px;
  top: 75px;
`;

export const SideBoxDetail1 = styled.div`
  background-image: url(${MenuPost});
  background-size: 200px 160px;
  background-repeat: no-repeat;
  position: relative;
  width: 200px;
  height: 140px;
  padding: 10px;
  margin-left: 4px;
`;

export const SideBoxDetail2 = styled.div`
  background-image: url(${TimerPost});
  background-size: 200px 135px;
  background-repeat: no-repeat;
  position: relative;
  width: 200px;
  height: 125px;
  padding: 10px;
  margin-left: 4px;
`;

export const SideBoxContent = styled.div`
  background: white;
  position: relative;
  width: 190px;
  height: 80px;
  left: -10px;
  top: 20px;
  padding: 10px;
  margin: 4px;
`;
export const SideBoxDetailBox = styled.div`
  background: gray;
  position: relative;
  width: 180px;
  height: 30px;
  top: -5px;
  left: -10px;
  padding: 10px;
  margin: 5px;
`;

export const SideBoxTimerTemp = styled.span`
  position: relative;
  top: 40px;
  left: 7px;
  width: 30px;
  height: 20px;
  font-size: 30px;
  font-weight: 600;
`;

export const SideBoxTimerHours = styled.input`
  position: relative;
  top: -5px;
  left: -10px;
  width: 30px;
  height: 20px;
`;
export const SideBoxTimerMinutes = styled.input`
  position: relative;
  top: -5px;
  left: 0px;
  width: 30px;
  height: 20px;
`;
export const SideBoxTimerSeconds = styled.input`
  position: relative;
  top: -5px;
  left: 10px;
  width: 30px;
  height: 20px;
`;

export const SideBoxTimerButton = styled(SideBoxTimerStartIcon)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 5px;
  left: 137.5px;
  cursor: pointer;
`;

export const SideBoxStopwatchHours = styled.span`
  position: relative;
  top: -5px;
  left: 10px;
  width: 30px;
  height: 20px;
`;
export const SideBoxStopwatchMinutes = styled.span`
  position: relative;
  top: -5px;
  left: 30px;
  width: 30px;
  height: 20px;
`;
export const SideBoxStopwatchSeconds = styled.span`
  position: relative;
  top: -5px;
  left: 50px;
  width: 30px;
  height: 20px;
`;
export const SideBoxStopwatchButton1 = styled(SideBoxStopwatchStartIcon)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 5px;
  left: 125px;
  cursor: pointer;
`;
export const SideBoxStopwatchButton2 = styled(SideBoxStopwatchResetIcon)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 5px;
  left: 150px;
  cursor: pointer;
`;

export const SideBoxDetail3 = styled.div`
  background-image: url(${IncompletedPost});
  background-size: 200px 135px;
  background-repeat: no-repeat;
  position: relative;
  width: 200px;
  height: 125px;
  padding: 10px;
  margin-left: 4px;
`;

export const SideBoxDetail4 = styled.div`
  background-image: url(${GuestbookPost});
  background-size: 200px 135px;
  background-repeat: no-repeat;
  position: relative;
  width: 200px;
  height: 125px;
  padding: 10px;
  margin-left: 4px;
`;

export const SideBoxDetail5 = styled.div`
  background-image: url(${FavoritePost});
  background-size: 200px 135px;
  background-repeat: no-repeat;
  position: relative;
  width: 200px;
  height: 125px;
  padding: 10px;
  margin-left: 4px;
`;

export const SideBoxIcon1 = styled(SideBoxHomeIcon)`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 10px;
  top: 8%;
  color: black;
  cursor: pointer;
`;

export const SideBoxIcon2 = styled(SideBoxCalendarIcon)`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 10px;
  top: 32%;
  color: black;
  cursor: pointer;
`;

export const SideBoxIcon3 = styled(SideBoxFriendsIcon)`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 10px;
  top: 56%;
  color: black;
  cursor: pointer;
`;

export const SideBoxIcon4 = styled(SideBoxTeamIcon)`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 10px;
  top: 80%;
  color: black;
  cursor: pointer;
`;

export const SideBoxIcon5 = styled(SideBoxTimerIcon)`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 10px;
  top: 10px;
`;

export const SideBoxIcon6 = styled(SideBoxIncompledtedListIcon)`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 10px;
  top: 10px;
`;

export const SideBoxIcon7 = styled(SideBoxGuestBookIcon)`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 10px;
  top: 10px;
`;

export const SideBoxIcon8 = styled(SideBoxFavoriteIcon)`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 10px;
  top: 10px;
`;

//
export const UpperBoxInnerIcon1 = styled(UpperBoxMe_SettingIcon)`
  position: absolute;
  color: black;
  width: 24px;
  height: 24px;
  left: 50px;
  top: 260px;
  z-index: 500;
`;

export const UpperBoxInnerIcon2 = styled(UpperBoxMe_LogoutIcon)`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 50px;
  top: 300px;
  z-index: 500;
`;

export const SideBoxTitle1 = styled.span`
  font-family: 'Roboto';
  position: absolute;
  color: black;
  font-size: 14px;
  font-weight: 600;
  left: 45px;
  top: 8%;
`;

export const SideBoxTitle2 = styled.span`
  font-family: 'Roboto';
  position: absolute;
  color: black;
  font-size: 14px;
  font-weight: 600;
  left: 45px;
  top: 32%;
`;

export const SideBoxTitle3 = styled.span`
  font-family: 'Roboto';
  position: absolute;
  color: black;
  font-size: 14px;
  font-weight: 600;
  left: 45px;
  top: 56%;
`;

export const SideBoxTitle4 = styled.span`
  font-family: 'Roboto';
  position: absolute;
  color: black;
  font-size: 14px;
  font-weight: 600;
  left: 45px;
  top: 80%;
`;

export const SideBoxTitle5 = styled.span`
  font-family: 'Roboto';
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  left: 45px;
  top: 10px;
`;

export const SideBoxTitle6 = styled.span`
  font-family: 'Roboto';
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  left: 45px;
  top: 10px;
`;

export const SideBoxTitle7 = styled.span`
  font-family: 'Roboto';
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  left: 45px;
  top: 10px;
`;

export const SideBoxTitle8 = styled.span`
  font-family: 'Roboto';
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  left: 45px;
  top: 10px;
`;

/////
export const InformationDialog = styled.div`
  position: absolute;
  box-shadow: 0px 0px 50px rgba(50, 50, 50);
  right: 60px;
  width: 300px;
  height: 360px;
  padding: 36px;
  border-radius: 10px;
  border: 2px solid rgb(196, 196, 196);
  background-color: white;
  margin-top: 20px;
  z-index: 10;
`;

//?????? ?????????
export const MainBlur = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300vh;
  height: 300vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 5;
`;

export const DialogActions = styled.button``;

export const InformationDialogProfile = styled.div`
  position: absolute;
  box-shadow: 1px 1px 1px gray;
  top: 24px;
  width: 120px;
  height: 120px;
  left: 75px;
  margin: 20px;
  background: gray;
  border-radius: 50%;
  z-index: 500;
`;

export const InformationDialogUsername = styled.div`
  position: absolute;
  font-family: 'Roboto';
  text-align: center;
  top: 200px;
  margin-bottom: 15px;
  z-index: 500;
`;

export const UpperBoxInnerText1 = styled.span`
  font-family: 'Roboto';
  position: absolute;
  color: black;
  font-size: 24px;
  left: 120px;
  top: 258px;
  z-index: 500;
  /* text-shadow: 2px 2px 2px gray; */
`;

export const UpperBoxInnerText2 = styled.span`
  font-family: 'Roboto';
  position: absolute;
  color: black;
  font-size: 24px;
  left: 120px;
  top: 298px;
  z-index: 500;
  /* text-shadow: 2px 2px 2px gray; */
`;

//
export const NotificationDialog = styled.div`
  position: absolute;
  box-shadow: 0px 0px 50px rgba(50, 50, 50);
  right: 120px;
  width: 420px;
  height: 440px;
  padding: 36px;
  border-radius: 10px;
  border: 2px solid rgb(196, 196, 196);
  background-color: white;
  margin-top: 20px;
  z-index: 10;
`;
export const NotificationTitle = styled.div`
  position: absolute;
  font: 'roboto';
  top: 8px;
  left: 35%;
`;
export const NotificationToSetIcon = styled(UpperBoxMe_SettingIcon)`
  position: absolute;
  right: 8px;
  top: 8px;
  color: gray;
  width: 24px;
  height: 24px;
`;
export const NotificationLine = styled.div`
  position: absolute;
  width: 410px;
  height: 1px;
  left: 3px;
  background-color: gray;
`;
export const NotificationContentBox = styled.div`
  background-color: red;
`;
export const NotificationContent1 = styled.div`
  position: absolute;
  color: black;
  font-size: 16px;
  left: 20px;
  top: 50px;
`;
export const NotificationContent2 = styled.div`
  position: absolute;
  color: black;
  font-size: 16px;
  left: 20px;
  top: 75px;
`;
export const NotificationContent3 = styled.div`
  position: absolute;
  color: black;
  font-size: 16px;
  left: 20px;
  top: 100px;
`;
export const NotificationContent4 = styled.div`
  position: absolute;
  color: black;
  font-size: 16px;
  left: 20px;
  top: 125px;
`;
export const NotificationContent5 = styled.div`
  position: absolute;
  color: black;
  font-size: 16px;
  left: 20px;
  top: 150px;
`;
export const NotificationContent6 = styled.div`
  position: absolute;
  color: black;
  font-size: 16px;
  left: 20px;
  top: 175px;
`;

export const TitleDialog = styled.div``;

export const TitleChange = styled.span``;

export const TitleChangeText = styled.span``;

export const TitleChangeButton = styled.span``;

export const IncompletedList1 = styled.span`
  font-family: 'Noto Sans KR';

  position: absolute;
  color: black;
  font-size: 13px;
  font-weight: 500;
  left: 5px;
  top: 35px;
  margin-top: 2px;
  margin-left: 5px;
`;

export const IncompletedList2 = styled.span`
  font-family: 'Noto Sans KR';

  position: absolute;
  color: black;
  font-size: 13px;
  font-weight: 500;
  left: 5px;
  top: 60px;
  margin-top: 2px;
  margin-left: 5px;
`;

export const IncompletedList3 = styled.span`
  font-family: 'Noto Sans KR';

  position: absolute;
  color: black;
  font-size: 13px;
  font-weight: 500;
  left: 5px;
  top: 85px;
  margin-top: 2px;
  margin-left: 5px;
`;

export const IncompletedListIcon1 = styled(SideBoxPlusIcon)`
  position: absolute;
  right: 30px;
  top: 35px;
  color: gray;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const IncompletedListIcon2 = styled(SideBoxCheckIcon)`
  position: absolute;
  right: 10px;
  top: 35px;
  color: gray;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const IncompletedListIcon3 = styled(SideBoxPlusIcon)`
  position: absolute;
  right: 30px;
  top: 60px;
  color: gray;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const IncompletedListIcon4 = styled(SideBoxCheckIcon)`
  position: absolute;
  right: 10px;
  top: 60px;
  color: gray;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const IncompletedListIcon5 = styled(SideBoxPlusIcon)`
  position: absolute;
  right: 30px;
  top: 85px;
  color: gray;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const IncompletedListIcon6 = styled(SideBoxCheckIcon)`
  position: absolute;
  right: 10px;
  top: 85px;
  color: gray;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
//
export const GuestBookList1 = styled.span`
  font-family: 'Noto Sans KR';

  position: absolute;
  color: black;
  font-size: 13px;
  font-weight: 500;
  left: 5px;
  top: 30px;
  margin-top: 5px;
  margin-left: 5px;
`;
export const GuestBookList2 = styled.span`
  font-family: 'Noto Sans KR';

  position: absolute;
  color: black;
  font-size: 13px;
  font-weight: 500;
  left: 5px;
  top: 45px;
  margin-top: 5px;
  margin-left: 5px;
`;
export const GuestBookList3 = styled.span`
  position: absolute;
  color: black;
  font-size: 14px;
  font-weight: 400;
  left: 5px;
  top: 60px;
  margin-top: 2px;
  margin-left: 5px;
`;
export const GuestBookList4 = styled.span`
  position: absolute;
  color: black;
  font-size: 14px;
  font-weight: 400;
  left: 5px;
  top: 75px;
  margin-top: 2px;
  margin-left: 5px;
`;
export const GuestBookList5 = styled.span`
  position: absolute;
  color: black;
  font-size: 14px;
  font-weight: 400;
  left: 5px;
  top: 90px;
  margin-top: 2px;
  margin-left: 5px;
`;
//
export const FavoriteSmallTitle = styled.span`
  font-family: 'Roboto';
  position: absolute;
  color: black;
  font-size: 14px;
  font-weight: 600;
  left: 5px;
  top: 30px;
  cursor: pointer;
  margin-top: 2px;
  margin-left: 5px;
`;

export const FavoriteSmallTitle2 = styled.span`
  font-family: 'Roboto';
  position: absolute;
  color: black;
  font-size: 14px;
  font-weight: 600;
  left: 5px;
  top: 75px;
  cursor: pointer;
  margin-top: 2px;
  margin-left: 5px;
`;

export const FavoriteFriendList1 = styled.span`
  font-family: 'Noto Sans KR';

  position: absolute;
  color: black;
  font-size: 13px;
  font-weight: 500;
  left: 5px;
  top: 50px;
  margin-top: 2px;
  margin-left: 10px;
`;
export const FavoriteFriendList2 = styled.span`
  font-family: 'Noto Sans KR';

  position: absolute;
  color: black;
  font-size: 13px;
  font-weight: 500;
  left: 55px;
  top: 50px;
  margin-top: 2px;
  margin-left: 10px;
`;
export const FavoriteFriendList3 = styled.span`
  font-family: 'Roboto';
  position: absolute;
  color: black;
  font-size: 14px;
  font-weight: 400;
  left: 105px;
  top: 50px;
`;

export const FavoriteTeamList1 = styled.span`
  font-family: 'Noto Sans KR';
  position: absolute;
  color: black;
  font-size: 13px;
  font-weight: 500;
  left: 5px;
  top: 95px;
  margin-top: 2px;
  margin-left: 10px;
`;
export const FavoriteTeamList2 = styled.span`
  font-family: 'Roboto';
  position: absolute;
  color: black;
  font-size: 14px;
  font-weight: 400;
  left: 5px;
  top: 90px;
`;
export const FavoriteTeamList3 = styled.span`
  font-family: 'Roboto';
  position: absolute;
  color: black;
  font-size: 14px;
  font-weight: 400;
  left: 5px;
  top: 90px;
`;
