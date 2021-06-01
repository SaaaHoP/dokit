import React, { Component } from "react";
import { 
    ModalBackground, 
    FriendPageAddModal, 
    ModalCloseButton, 
    ModalContentsWrapper,
    FriendPageAddModalInputEmail,
    FriendPageAddModalUserProfileCircle,
    FriendPageAddModalUserName,
    FriendPageAddModalUserComment,
    FriendPageAddModalAddButton
} from "./StyledComponent";

class AddFriend extends Component {

  render() {
    const { isOpen, close } = this.props;   // AddFriendButton에서 props로 가져온것
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
                        <FriendPageAddModalInputEmail/>
                        <FriendPageAddModalUserProfileCircle/>
                        <FriendPageAddModalUserName>민지원</FriendPageAddModalUserName>
                        <FriendPageAddModalUserComment>한줄소개입니다</FriendPageAddModalUserComment>
                        <FriendPageAddModalAddButton>Add</FriendPageAddModalAddButton>
                    </ModalContentsWrapper>
                </FriendPageAddModal>
            {/* </div> */}
          </ModalBackground>
        ) : null}
      </>
    );
  }
}

export default AddFriend;