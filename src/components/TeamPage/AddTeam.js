import React, { useEffect, useState, Component } from 'react';
import axios from 'axios';
import { address } from '../../variables';
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

const AddTeam = (props) => {
    var [FriendListElements, setFriendListElements] = useState([]);
    const isOpen = props.isOpen;
    const close = props.close;

    const FriendListElementCreator = ({user}) => {
        return(
            <TeamPageAddModalFriendListElement>
                <TeamPageAddModalUserCheckbox/>
                <TeamPageAddModalUserProfile src={user.profileUrl}/>
                <TeamPageAddModalUserName>{user.username}</TeamPageAddModalUserName>
            </TeamPageAddModalFriendListElement>
        );
    }
    
    const FriendListCreator = ({users}) =>{
        return(
            <>
            {users.map(user=>(
                <FriendListElementCreator user={user} key={user.id}/>
            ))}
            </>
        );
    }

    useEffect(() => {
        const axiosGet = async () => {
            await axios.get(`${address}/friends/me/for_team`).then((res) => {
                setFriendListElements(res.data.friends);
            });   
        };
        axiosGet();
    },[]);

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
};

export default AddTeam;