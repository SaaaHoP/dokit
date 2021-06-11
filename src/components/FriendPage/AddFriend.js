import axios from 'axios';
import { address } from '../../variables';
import React, { useState } from 'react';
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
  
  let id = {
    friendId: User.id
  };

  const addHandler = async(e) => {
    e.preventDefault();
    await axios.post(`${address}/friends/me`, id);
    setUser([]);
  };
  
  return (
    <>  
      {isOpen ? (  
        <ModalBackground>
          <FriendPageAddModal>
            <ModalCloseButton onClick={close}>
              &times;
            </ModalCloseButton>
            <ModalContentsWrapper onClick={isOpen}> 
              <FriendPageAddModalInputEmail onChange={inputHandler}/>
              <FriendPageAddModalUserProfileCircle src={User.profileUrl}/>
              <FriendPageAddModalUserName> {User.username} </FriendPageAddModalUserName>
            </ModalContentsWrapper>
            <FriendPageAddModalAddButton onClick={(e) => addHandler(e)}>Add</FriendPageAddModalAddButton>
          </FriendPageAddModal>
        </ModalBackground>
        ) : null}
      </>
  );
};


export default AddFriend;