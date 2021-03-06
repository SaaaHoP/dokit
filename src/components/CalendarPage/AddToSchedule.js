import React, { Component } from "react";
import {
  CalendarPageModalBackground,
  CalendarPageAddModal,
  ModalCloseButton,
  ModalContentsWrapper,
  CalendarPageAddModalMainTitle,
  CalendarPageAddModalElement,
  CalendarPageAddModalInputTitle,
  //CalendarPageAddModalInputDate,
  CalendarPageAddModalSelectLockButton,
  CalendarPageAddModalSelectLockButtonIcon,
  CalendarPageAddModalSelectUnLockButton,
  CalendarPageAddModalSelectUnLockButtonIcon,
  CalendarPageAddModalColorWrapper,
  CalendarPageAddModalSelectColor,
  CalendarPageAddModalButtonPosition,
  CalendarPageAddModalButton,
  changeToLock,
  changeToUnlock,

} from "./StyledComponent";

import PrivateCalendarComponent from './PrivateCalendarComponent';
import DateSelectComponent from './DateSelectComponent';
import { MdMicNone } from "react-icons/md";
import { FaBlackberry } from "react-icons/fa";
import { TitleChangeText } from "../MenuBar/StyledComponent";


const AddToSchedule = (props) => {

  // constructor(props) {
  //     super(props);

  //     this.state = {
  //       //opacity : 0.3,
  //       title : "Project",
  //       opened : true,
  //       color : "blue",
  //       background: "rgba(172,211,220,0.3)",
  //       border : "none",

  //     };
  //     this.changeToUnLock = this.changeToUnLock.bind(this);
  //     this.changeToLock = this.changeToLock.bind(this);
  //     this.InputTitle = this.InputTitle.bind(this);
  // }
  const isOpen = props.isOpen;
  const open = props.open;
  const close = props.close;


  const InputTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  // const changeToUnlock = (e) => {
  //     this.setState({
  //       //opacity : "0.7",
  //       opened : true,
  //       background: "rgba(172,211,220,0.7)",
  //       border : "Black",
  //     });
  //   };

  //   const changeToLock = (e) => {
  //     this.setState({
  //       //opacity : "0.7",
  //       opened : false,
  //       background: "rgba(172,211,220,0.7)",
  //       border : "Black",
  //     });
  //   };

  return (
    <>
      {isOpen ? (
        <CalendarPageModalBackground>
          <CalendarPageAddModal>
            <ModalCloseButton onClick={close}>
              &times;
            </ModalCloseButton>
            <ModalContentsWrapper onClick={isOpen}> {/* Modal?????? ???????????? isOpen true??? ????????? ????????? */}
              <CalendarPageAddModalMainTitle >
                Add To Schedule
              </ CalendarPageAddModalMainTitle>
              <CalendarPageAddModalElement
                type="text"
                name="title"
                onChange={InputTitle}>
                TITLE
                <CalendarPageAddModalInputTitle />
              </CalendarPageAddModalElement>
              <CalendarPageAddModalElement>
                DATE
                <DateSelectComponent />
              </CalendarPageAddModalElement>
              <CalendarPageAddModalElement>
                LOCK
                <CalendarPageAddModalSelectUnLockButton onChange={(e) => changeToUnlock(e)}>
                  <CalendarPageAddModalSelectUnLockButtonIcon />
                </CalendarPageAddModalSelectUnLockButton>
                <CalendarPageAddModalSelectLockButton onChange={(e) => changeToLock(e)}>
                  <CalendarPageAddModalSelectLockButtonIcon />
                </CalendarPageAddModalSelectLockButton>
              </CalendarPageAddModalElement>
              <CalendarPageAddModalElement>
                COLOR
                <CalendarPageAddModalColorWrapper>
                  <CalendarPageAddModalSelectColor style={{ background: "rgba(208,247,255,1.0)" }} />
                  <CalendarPageAddModalSelectColor style={{ background: "rgba(193,255,208,1.0)" }} />
                  <CalendarPageAddModalSelectColor style={{ background: "rgba(215,211,255,1.0)" }} />
                  <CalendarPageAddModalSelectColor style={{ background: "rgba(255,241,198,1.0)" }} />
                  <CalendarPageAddModalSelectColor style={{ background: "rgba(246,211,243,1.0)" }} />
                </CalendarPageAddModalColorWrapper>
              </CalendarPageAddModalElement>

            </ModalContentsWrapper>
            <CalendarPageAddModalButtonPosition>
              <CalendarPageAddModalButton onClick={close}>
                save
              </CalendarPageAddModalButton>
            </CalendarPageAddModalButtonPosition>
          </CalendarPageAddModal>
        </CalendarPageModalBackground>
      ) : null}





    </>
  );


  // return( {
  //     const { isOpen, close } = this.props;   // AddToScheduleButton?????? props??? ????????????

  //     <>
  //     {isOpen ? (  // ???????????????
  //       <CalendarPageModalBackground>
  //             <CalendarPageAddModal>
  //                 <ModalCloseButton onClick={close}>
  //                     &times;
  //                 </ModalCloseButton>
  //                 <ModalContentsWrapper onClick={isOpen}> {/* Modal?????? ???????????? isOpen true??? ????????? ????????? */}
  //                         <CalendarPageAddModalMainTitle >
  //                             Add To Schedule
  //                         </ CalendarPageAddModalMainTitle>
  //                         <CalendarPageAddModalElement                                
  //                             type = "text" 
  //                             name = "title" 
  //                             onChange = {InputTitle}>
  //                             TITLE
  //                             <CalendarPageAddModalInputTitle/>
  //                         </CalendarPageAddModalElement>
  //                         <CalendarPageAddModalElement>
  //                             DATE
  //                             <DateSelectComponent />
  //                         </CalendarPageAddModalElement>
  //                         <CalendarPageAddModalElement>
  //                             LOCK
  //                             <CalendarPageAddModalSelectUnLockButton onClick={this.changeToUnLock}>
  //                             <CalendarPageAddModalSelectUnLockButtonIcon />
  //                             </CalendarPageAddModalSelectUnLockButton>
  //                             <CalendarPageAddModalSelectLockButton onClick={this.changeToLock}>
  //                             <CalendarPageAddModalSelectLockButtonIcon />
  //                             </CalendarPageAddModalSelectLockButton>
  //                         </CalendarPageAddModalElement>
  //                         <CalendarPageAddModalElement>
  //                              COLOR
  //                              <CalendarPageAddModalColorWrapper>
  //                                 <CalendarPageAddModalSelectColor style={{background: "rgba(208,247,255,1.0)"}}/>
  //                                 <CalendarPageAddModalSelectColor style={{background: "rgba(193,255,208,1.0)"}}/>
  //                                 <CalendarPageAddModalSelectColor style={{background: "rgba(215,211,255,1.0)"}}/>
  //                                 <CalendarPageAddModalSelectColor style={{background: "rgba(255,241,198,1.0)"}}/>
  //                                 <CalendarPageAddModalSelectColor style={{background: "rgba(246,211,243,1.0)"}}/>
  //                              </CalendarPageAddModalColorWrapper>
  //                         </CalendarPageAddModalElement>

  //                 </ModalContentsWrapper>
  //                 <CalendarPageAddModalButtonPosition>
  //                     <CalendarPageAddModalButton onClick={close}> 
  //                     save                          
  //                     </CalendarPageAddModalButton>
  //                 </CalendarPageAddModalButtonPosition>

  //             </CalendarPageAddModal>
  //       </CalendarPageModalBackground>
  //     ) : null}
  //   </>
  // );
};

export default AddToSchedule;