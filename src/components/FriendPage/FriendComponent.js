import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { address } from '../../variables';
import {
    FriendPageTemplate,
    FriendPageTitleWrapper,
    FriendPageTitle,
    FriendPageFriendIcon,
    FriendPageListWrapper,
    FriendPageListTitle,
    FriendPageSearchWrapper,
    FriendPageInputSearchName,
    FriendPageSearchIcon,
    FriendPageFavoriteTitleStar,
    FriendPageFavoriteTitle,
    FriendPageFavoriteWrapper,
    FriendPageListElement,
    FriendPageFavoriteStar,
    FriendPageFavoriteStarLine,
    FriendPageUserProfileCircle,
    FriendPageUserName,
    FriendPageUserComment,
    FriendPageRequestWrapper,
    FriendPageRequestListWrapper,
    FriendPageRequestTitle,
    FriendPageAcceptButton,
    FriendPageRejectButton,
    FriendPageMyRequestWrapper,
} from './StyledComponent';
import AddFriendButton from './AddFriendButton';

const FriendComponent = () => {

    const FavoriteFriendListElementCreator = ({user}) => {
        return(
            <FriendPageListElement>
                <FriendPageFavoriteStar/>
                <FriendPageUserProfileCircle src={user.profileUrl}/>
                <FriendPageUserName>{user.username}</FriendPageUserName>
                <FriendPageUserComment>{user.conversation}</FriendPageUserComment>
            </FriendPageListElement>
        );
    }
    
    const FavoriteFriendListCreator = ({users}) => {
        return(
            <>
            {users.map(user =>(
                <FavoriteFriendListElementCreator user={user} key={user.id}/>
            ))}
            </>
        );
    }
    
    const FriendListElementCreator = ({user}) => {
        return(
            <FriendPageListElement>
                <FriendPageFavoriteStarLine/>
                <FriendPageUserProfileCircle src={user.profileUrl}/>
                <FriendPageUserName>{user.username}</FriendPageUserName>
                <FriendPageUserComment>{user.conversation}</FriendPageUserComment>
            </FriendPageListElement>
        );
    }
    
    const FriendListCreator = ({users}) => {
        return(
            <>
            {users.map(user =>(
                <FriendListElementCreator user={user} key={user.id}/>
            ))}
            </>
        );
    }
    
    const FriendRequestElementCreator = ({user}) => {
        return(
            <FriendPageListElement>
                <FriendPageUserProfileCircle src={user.profileUrl}/>
                <FriendPageUserName>{user.username}</FriendPageUserName>
                <FriendPageAcceptButton onClick={(e) => acceptHandler(user.id, e)}>
                    Accept
                </FriendPageAcceptButton>
                <FriendPageRejectButton onClick={(e) => rejectHandler(user.id, e)}>Reject</FriendPageRejectButton>
            </FriendPageListElement>
        );
    }
    
    const acceptHandler = async(id, e) => {
        e.preventDefault();
        await axios.patch(`${address}/friends/me`,{
           friendId: id
        });
        await axios.get(`${address}/friends/me/from_request`).then((res) => {
            setFriendRequestElements(res.data.friends);
        });
        await axios.get(`${address}/friends/me/normal`).then((res) => {
            setFriendListElements(res.data.friends);
        });
    };
    
    const rejectHandler = async(id, e) => {
        e.preventDefault();
        await axios.delete(`${address}/friends/me/from_request`,{
            data: {
                friendId: id
            }
        });
        await axios.get(`${address}/friends/me/from_request`).then((res) => {
            setFriendRequestElements(res.data.friends);
        });
        await axios.get(`${address}/friends/me/normal`).then((res) => {
                setFriendListElements(res.data.friends);
            });
    };
    
    const FriendRequestCreator = ({users}) => {
        return(
            <>
            {users.map(user=>(
                <FriendRequestElementCreator user={user} key={user.id}/>
            ))}
            </>
        );
    }

    const deleteHandler = async(id, e) => {
        e.preventDefault();
        await axios.delete(`${address}/friends/me/to_request`,{
            data: {
                friendId: id
            }
        });
        await axios.get(`${address}/friends/me/to_request`).then((res) => {
            setMyFriendRequestElements(res.data.friends);
        });
    };
    
    const MyFriendRequestElementCreator = ({user}) => {
        return(
            <FriendPageListElement>
                <FriendPageUserProfileCircle src={user.profileUrl}/>
                <FriendPageUserName>{user.username}</FriendPageUserName>
                <FriendPageRejectButton onClick={(e) => deleteHandler(user.id, e)}>Delete</FriendPageRejectButton>
            </FriendPageListElement>
        );
    }

    
    const FriendMyRequestCreator = ({users}) => {
        return(
            <>
            {users.map(user=>(
                <MyFriendRequestElementCreator user={user} key={user.id}/>
            ))}
            </>
        );
    }

    var [FriendListElements, setFriendListElements] = useState([]);
    var [FavoriteFriendListElements, setFavoriteFriendListElements] = useState([]);
    var [FriendRequestElements, setFriendRequestElements] = useState([]);
    var [MyFriendRequestElements, setMyFriendRequestElements] = useState([]);

    // 로그인 대신 //
    const accessToken = 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX01FTUJFUiJdLCJlbWFpbCI6Imp3MUBuYXZlci5jb20iLCJpYXQiOjE2MjMyOTg2MzgsImV4cCI6MTYyMzMwMDQzOH0.kB4SFbRLt0J5YrRnynKaYgy1_aLOnTOHSgZ6wwuQgBA";
    axios.defaults.headers.common['Authorization'] = accessToken;
    localStorage.setItem('Authorization', accessToken);
    ////////////////

    useEffect(() => {
        const axiosGet = async () => {
            let jwtToken = localStorage.getItem('Authorization');
            axios.defaults.headers.common['Authorization'] = jwtToken;

            await axios.get(`${address}/friends/me/normal`).then((res) => {
                setFriendListElements(res.data.friends);
            });
            
            await axios.get(`${address}/friends/me/favorite`).then((res) => {
                setFavoriteFriendListElements(res.data.friends);
            });
            
            await axios.get(`${address}/friends/me/from_request`).then((res) => {
                setFriendRequestElements(res.data.friends);
            });
            
            await axios.get(`${address}/friends/me/to_request`).then((res) => {
                setMyFriendRequestElements(res.data.friends);
            });
        };
        axiosGet();
    },[]);

    return (
        <>
            <FriendPageTemplate>
                <FriendPageTitleWrapper>
                    <FriendPageFriendIcon/>
                    <FriendPageTitle>Friends</FriendPageTitle>
                    <AddFriendButton/>
                </FriendPageTitleWrapper>
                <FriendPageListWrapper>
                    <FriendPageListTitle>
                        Friend List
                        <FriendPageSearchWrapper>
                            <FriendPageInputSearchName/>
                            <FriendPageSearchIcon/>
                        </FriendPageSearchWrapper>
                    </FriendPageListTitle>
                    <FriendPageFavoriteTitle>
                        <FriendPageFavoriteTitleStar/>
                        Favorites
                    </FriendPageFavoriteTitle>
                    <FriendPageFavoriteWrapper>
                        <FavoriteFriendListCreator
                         users={FavoriteFriendListElements}
                        />
                    </FriendPageFavoriteWrapper>
                    <FriendListCreator
                         users={FriendListElements}
                        />
                </FriendPageListWrapper>
                <FriendPageRequestWrapper>
                    <FriendPageRequestTitle>Friend Request</FriendPageRequestTitle>
                    <FriendPageRequestListWrapper>
                        <FriendRequestCreator
                         users={FriendRequestElements}
                        />
                    </FriendPageRequestListWrapper>
                    <FriendPageMyRequestWrapper>
                    <FriendPageRequestTitle>My Request</FriendPageRequestTitle>
                    <FriendPageRequestListWrapper>
                        <FriendMyRequestCreator
                         users={MyFriendRequestElements}
                        />
                    </FriendPageRequestListWrapper>
                </FriendPageMyRequestWrapper>
                </FriendPageRequestWrapper>
            </FriendPageTemplate>
        </>
    );
};

export default FriendComponent;
