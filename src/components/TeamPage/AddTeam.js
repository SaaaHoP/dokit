import React, { Component } from "react";
import { 
    TeamPageAddModalFriendListElement,
    TeamPageAddModalUserName,
    TeamPageAddModalUserCheckbox,
    TeamPageAddModalUserProfile,
    ModalBackground, 
    TeamPageAddModal, 
    ModalCloseButton, 
    ModalContentsWrapper,
    TeamPageAddModalSelectWrapper,
    TeamPageAddModalTitle,
    TeamPageAddModalSearchWrapper,
    TeamPageAddModalInputSearchName,
    TeamPageSearchIcon,
    TeamPageAddModalSelectListWrapper,
    TeamPageAddModalInformationWrapper,
    TeamPageAddModalThumbnail,
    TeamPageAddModalSelectThumbnail,
    TeamPageAddModalInputWrapper,
    TeamPageAddModalName,
    TeamPageAddModalProject,
    TeamPageAddModalInputName,
    TeamPageAddModalCreateButton
} from "./StyledComponent";

const FriendListElementCreator = ({user}) => {
    return(
        <TeamPageAddModalFriendListElement>
            <TeamPageAddModalUserCheckbox/>
            <TeamPageAddModalUserProfile/>
            <TeamPageAddModalUserName>{user.name}</TeamPageAddModalUserName>
        </TeamPageAddModalFriendListElement>
    )
}

const FriendListCreator = ({users}) =>{
    return(
        <>
        {users.map(user=>(
            <FriendListElementCreator user={user} key={user.id}/>
        ))}
        </>
    )
}

const FriendListElements = [
    {
        id: 1,
        name: '김지현'
    },
    {
        id: 2,
        name: '민지원'
    },
    {
        id: 3,
        name: '김몽'
    },
    {
        id: 4,
        name: '민루피'
    }
];

class AddTeam extends Component {

    render() {
        const { isOpen, close } = this.props;   // AddTeamButton에서 props로 가져온것
        return (
        <>
        {isOpen ? (  // 열려있으면
          <ModalBackground>
            {/* <div onClick={close}> 로그인창 말고 회색 바탕 누르면 close 효과  */}
                <TeamPageAddModal>
                    <ModalCloseButton onClick={close}> {/* x 버튼 누르면 close 효과 */} 
                     &times;
                    </ModalCloseButton>
                    <ModalContentsWrapper onClick={isOpen}> {/* Modal창은 들어오면 isOpen true인 상태라 안꺼짐 */}
                        <TeamPageAddModalSelectWrapper>
                            <TeamPageAddModalTitle>
                                Select Member
                            </TeamPageAddModalTitle>
                            <TeamPageAddModalSearchWrapper>
                                <TeamPageAddModalInputSearchName/>
                                <TeamPageSearchIcon/>
                            </TeamPageAddModalSearchWrapper>
                            <TeamPageAddModalSelectListWrapper>
                                <FriendListCreator
                                 users={FriendListElements}/>
                            </TeamPageAddModalSelectListWrapper>
                        </TeamPageAddModalSelectWrapper>
                        <TeamPageAddModalInformationWrapper>
                            <TeamPageAddModalTitle>
                                Information
                            </TeamPageAddModalTitle>
                            <TeamPageAddModalThumbnail>
                                Thumbnail
                                <TeamPageAddModalSelectThumbnail/>
                            </TeamPageAddModalThumbnail>
                            <TeamPageAddModalInputWrapper>
                                <TeamPageAddModalName>
                                    NAME :
                                    <TeamPageAddModalInputName/>
                                </TeamPageAddModalName>
                                <TeamPageAddModalProject>
                                    PROJECT :
                                    <TeamPageAddModalInputName/>
                                </TeamPageAddModalProject>
                                <TeamPageAddModalCreateButton>
                                    Create
                                </TeamPageAddModalCreateButton>
                            </TeamPageAddModalInputWrapper>
                        </TeamPageAddModalInformationWrapper>
                    </ModalContentsWrapper>
                </TeamPageAddModal>
            {/* </div> */}
          </ModalBackground>
        ) : null}
      </>
    );
  }
}

export default AddTeam;