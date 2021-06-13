import React, { useEffect, useState, Component } from 'react';
// import axios from 'axios';
// import { address } from '../../variables';
import {
    CalendarPageModalBackground,
    TeamPageAddModal,
    ModalCloseButton,
    TeamCalendarPageInfoModalCreateButton,
    TeamCalendarPageInfoModalCompleteButton,
    TeamCalendarPageInfoModalDeleteButton,
    CalendarPageInfoModalButtonPosition,
    TeamCalendarPageInfoModalLeftButtons,
} from './StyledComponent';

import { 
    TeamPageAddModalFriendListElement,
    TeamPageAddModalUserName,
    TeamPageAddModalUserCheckbox,
    TeamPageAddModalUserProfile,
    //TeamPageAddModal, 
    // ModalCloseButton, 
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
    // TeamPageAddModalCreateButton
} from "../TeamPage/StyledComponent";

const TeamInfo = (props) => {
    // var [FriendListElements, setFriendListElements] = useState([]);
    const isOpen = props.isOpen;
    const close = props.close;
    const open = props.open;

    const TeamMemberListElements = [
        {
            id: 1,
            name: '박성호',
        },
        {
            id: 2,
            name: '민지원',
        },
        {
            id: 3,
            name: '정명훈',
        },
        {
            id: 4,
            name: '이상민',
        },
        {
            id: 5,
            name: '김지현',
        },
    ];

    const TeamMemberElementCreator = ({ user }) => {
        return (
            <TeamPageAddModalFriendListElement>
                <TeamPageAddModalUserCheckbox/>
                {/* <TeamPageAddModalUserCheckbox onClick={() => chkHandler(user.id)}/> */}
                <TeamPageAddModalUserProfile src={user.profileUrl}/>
                <TeamPageAddModalUserName>{user.name}</TeamPageAddModalUserName>
            </TeamPageAddModalFriendListElement>
        );
    }
    
    const TeamMemberListCreator = ({ users }) => {
        return (
            <>
                {users.map(user => (
                    <TeamMemberElementCreator user={user} key={user.id} />
                ))}
            </>
        );
    }

    // const chkHandler = async(id) => {
    //     friends.push(id);
    //     console.log(friends);
    // };

    // const teamHandler = async(e) => {
    //     setTeamName(e.target.value);
    // };

    // const projectHandler = async(e) => {
    //     setProjectName(e.target.value);
    // };

    // let team = {
    //     friends: friends,
    //     image: null,
    //     projectName: projectName,
    //     teamName: teamName
    // };

    // const createHandler = async(e) => {
    //     e.preventDefault();
    //     await axios.post(`${address}/teams`, team);
    // };

    // useEffect(() => {
    //     const axiosGet = async () => {
    //         await axios.get(`${address}/friends/me/for_team`).then((res) => {
    //             setFriendListElements(res.data.friends);
    //         });   
    //     };
    //     axiosGet();
    // },[]);

    return (
        <>
        {isOpen ? (  // 열려있으면
          <CalendarPageModalBackground>
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
                                <TeamMemberListCreator
                                    users={TeamMemberListElements}/>
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
                                    <TeamPageAddModalInputName 
                                    // onChange={(e) => teamHandler(e)}
                                    />
                                </TeamPageAddModalName>
                                <TeamPageAddModalProject>
                                    PROJECT :
                                    <TeamPageAddModalInputName
                                    // onChange={(e) => projectHandler(e)}
                                    />
                                </TeamPageAddModalProject>
                                
                            </TeamPageAddModalInputWrapper>
                        </TeamPageAddModalInformationWrapper>
                    </ModalContentsWrapper>
                    <CalendarPageInfoModalButtonPosition>
                        <TeamCalendarPageInfoModalLeftButtons>
                            <TeamCalendarPageInfoModalCompleteButton 
                            // onChange={(e) => createHandler(e)}
                            onClick={close}
                            >
                            Complete
                            </TeamCalendarPageInfoModalCompleteButton>
                            <TeamCalendarPageInfoModalDeleteButton 
                            // onChange={(e) => createHandler(e)}
                            onClick={close}
                            >
                            Delete
                            </TeamCalendarPageInfoModalDeleteButton>
                        </TeamCalendarPageInfoModalLeftButtons>

                        <TeamCalendarPageInfoModalCreateButton 
                        // onChange={(e) => createHandler(e)}
                        onClick={close}
                        >
                        Create
                        </TeamCalendarPageInfoModalCreateButton>                        
                    </CalendarPageInfoModalButtonPosition>
                </TeamPageAddModal>
            {/* </div> */}
          </CalendarPageModalBackground>
        ) : null}
      </>
    );
};

export default TeamInfo;