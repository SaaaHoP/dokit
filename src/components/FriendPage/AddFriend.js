import axios from 'axios';
import { address } from '../../variables';
import React, { Component, useEffect, useState } from 'react';
import { 
    ModalBackground, 
    FriendPageAddModal, 
    ModalCloseButton, 
    ModalContentsWrapper,
    FriendPageAddModalInputEmail,
    FriendPageAddModalUserProfileCircle,
    FriendPageAddModalUserName,
    FriendPageAddModalAddButton,
} from "./StyledComponent";

const AddFriend = (props) => {

  var [User,setUser] = useState([]);
  const isOpen = props.isOpen;
  const close = props.close;

  const inputHandler = (e) => {
    axios.get(`${address}/friends`, {
      params: {
        email: e.target.value
      }
    })
    .then((res) => {
      setUser(res.data);
    });
  };

  // WIP
  const addHandler = (e) => {
    // console.log("111111");
    // e.preventDefault();
    axios.post(`${address}/friends/me`, {
      friendID: User.id
    });
  };

  
  return (
    <>
        {isOpen ? (  // 열려있으면
          <ModalBackground>
            {/* <div onClick={close}> 로그인창 말고 회색 바탕 누르면 close 효과  */}
                <FriendPageAddModal>
                    <ModalCloseButton onClick={close}> {/* x 버튼 누르면 close 효과 */} 
                     &times;
                    </ModalCloseButton>
                    <ModalContentsWrapper onClick={isOpen}> {/* Modal창은 들어오면 isOpen true인 상태라 안꺼짐 */}
                        <FriendPageAddModalInputEmail onChange={inputHandler}/>
                        <FriendPageAddModalUserProfileCircle src={User.profileUrl}/>
                        <FriendPageAddModalUserName> {User.username} </FriendPageAddModalUserName>
                        <FriendPageAddModalAddButton onClick={(e) => this.addHandler(e)}>Add</FriendPageAddModalAddButton>
                    </ModalContentsWrapper>
                </FriendPageAddModal>
            {/* </div> */}
          </ModalBackground>
        ) : null}
      </>
  );
};


export default AddFriend;