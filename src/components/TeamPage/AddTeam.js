import React, { useEffect, useState } from 'react';
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

    // const [FriendListElements, setFriendListElements] = useState([]);
    const isOpen = props.isOpen;
    const open = props.open;
    const close = props.close;

    const [friends, setFriends] = useState([]);
    const [projectName, setProjectName] = useState('');
    const [teamName, setTeamName] = useState('');

    const FriendListElementCreator = ({user}) => {
        return(
            <TeamPageAddModalFriendListElement>
                <TeamPageAddModalUserCheckbox 
                 onClick={(e) => chkHandler(user.id, e)}
                />
                <TeamPageAddModalUserProfile src={user.profileUrl}/>
                <TeamPageAddModalUserName>{user.username}</TeamPageAddModalUserName>
            </TeamPageAddModalFriendListElement>
        );
    }

    const chkHandler = (id, e) => {
        e.stopPropagation();
        const found = friends.findIndex(element => element === id);
        if(found > -1){
            friends.splice(found);
            console.log(friends);
        } else {
            friends.push(id);
            console.log(friends);
        }
    };

    const teamHandler = async(e) => {
        // setTeamName(e.target.value);
    };

    const projectHandler = async(e) => {
        // setProjectName(e.target.value);
    };

    const FriendListCreator = ({users}) =>{
        return(
            <>
            {users.map(user=>(
                <FriendListElementCreator user={user} key={user.id}/>
            ))}
            </>
        );
    }

    const submitHandler = async (e) => {

        e.preventDefault();
    
        let team = {
            friends: friends,
            image: null,
            projectName: projectName,
            teamName: teamName
        };
        console.log(team);

        e.target.value=team;

    };

    const FriendListElements = [
        {
            id: 1,
            username: '민지원',
        },
        {
            id: 2,
            username: '김지현',
        },
        {
            id: 3,
            username: '박성호',
        },
        {
            id: 4,
            username: '정명훈',
        },
        {
            id: 5,
            username: '이상민',
        },
    ];

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
        {isOpen ? (  
          <ModalBackground>
                <TeamPageAddModal
                 onSubmit={submitHandler}
                 action={`${address}/teams`}
                 method="post"
                >
                    <ModalCloseButton onClick={close}> 
                     &times;
                    </ModalCloseButton>
                    <ModalContentsWrapper onClick={open}>
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
                                    <TeamPageAddModalInputName
                                     onChange={(e) => teamHandler(e)}
                                    />
                                </TeamPageAddModalName>
                                <TeamPageAddModalProject>
                                    PROJECT :
                                    <TeamPageAddModalInputName
                                     onChange={(e) => projectHandler(e)}
                                    />
                                </TeamPageAddModalProject>
                            </TeamPageAddModalInputWrapper>
                        </TeamPageAddModalInformationWrapper>
                    </ModalContentsWrapper>
                    <TeamPageAddModalCreateButton
                     type="submit"
                    >
                        Create
                    </TeamPageAddModalCreateButton>
                </TeamPageAddModal>
          </ModalBackground>
        ) : null}
      </>
    );
};

export default AddTeam;