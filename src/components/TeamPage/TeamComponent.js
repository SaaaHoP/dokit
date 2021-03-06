import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import { address } from '../../variables';
import {
    TeamPageTemplate,
    TeamPageTitleWrapper,
    TeamPageTitle,
    TeamPageTeamIcon,
    TeamPageListWrapper,
    TeamPageListTitle,
    TeamPageSearchWrapper,
    TeamPageInputSearchName,
    TeamPageSearchIcon,
    TeamPageFavoriteTitleStar,
    TeamPageFavoriteTitle,
    TeamPageFavoriteWrapper,
    TeamPageListElement,
    TeamPageFavoriteStar,
    TeamPageFavoriteStarLine,
    TeamPageUserProfileCircle,
    TeamPageUserName,
    TeamPageUserComment,
    TeamPageRequestWrapper,
    TeamPageRequestListWrapper,
    TeamPageRequestTitle,
    TeamPageAcceptButton,
    TeamPageRejectButton
} from './StyledComponent';
import AddTeamButton from './AddTeamButton';

const TeamComponent = () => {

    const FavoriteTeamListElementCreator = ({user}) => {
        return(
            <Link to='/teamCalendar'>
            <TeamPageListElement>
                <TeamPageFavoriteStar/>
                <TeamPageUserProfileCircle src={user.profileUrl}/>
                <TeamPageUserName>{user.teamName}</TeamPageUserName>
                <TeamPageUserComment>{user.projectName}</TeamPageUserComment>
            </TeamPageListElement>
            </Link>
        );
    }

    const FavoriteTeamListCreator = ({users}) => {
        return(
            <>
            {users.map(user =>(
                <FavoriteTeamListElementCreator user={user} key={user.id}/>
            ))}
            </>
        );
    }

    const TeamListElementCreator = ({user}) => {
        return(
            <TeamPageListElement>
                <TeamPageFavoriteStarLine/>
                <TeamPageUserProfileCircle src={user.profileUrl}/>
                <TeamPageUserName>{user.teamName}</TeamPageUserName>
                <TeamPageUserComment>{user.projectName}</TeamPageUserComment>
            </TeamPageListElement>
        );
    }

    const TeamListCreator = ({users}) => {
        return(
            <>
            {users.map(user =>(
                <TeamListElementCreator user={user} key={user.id}/>
            ))}
            </>
        );
    }

    const TeamRequestElementCreator = ({user}) => {
        return(
            <TeamPageListElement>
                <TeamPageUserProfileCircle src={user.profileUrl}/>
                <TeamPageUserName>{user.teamName}</TeamPageUserName>
                <TeamPageAcceptButton onClick={(e) => acceptHandler(user.id, e)}>
                    Accept
                </TeamPageAcceptButton>
                <TeamPageRejectButton onClick={(e) => rejectHandler(user.id, e)}>
                    Reject
                </TeamPageRejectButton>
            </TeamPageListElement>
        );
    }

    const acceptHandler = async(id, e) => {
        e.preventDefault();
        await axios.patch(`${address}/teams/me/request`,{
           teamId: id
        });
        await axios.get(`${address}/teams/me/request`).then((res) => {
            ////setTeamRequestElements(res.data.teams);
        });
        await axios.get(`${address}/teams/me/normal`).then((res) => {
            //setTeamListElements(res.data.teams);
        });
    };

    const rejectHandler = async(id, e) => {
        e.preventDefault();
        await axios.delete(`${address}/teams/me/request`,{
            data: {
                teamId: id
            }
        });
        await axios.get(`${address}/teams/me/request`).then((res) => {
            //setTeamRequestElements(res.data.teams);
        });
        await axios.get(`${address}/teams/me/normal`).then((res) => {
                //setTeamListElements(res.data.teams);
            });
    };

    const TeamRequestCreator = ({users}) => {
        return(
            <>
            {users.map(user=>(
                <TeamRequestElementCreator user={user} key={user.id}/>
            ))}
            </>
        );
    }

    // var [FavoriteTeamListElements, //setFavoriteTeamListElements] = useState([]);
    // var [TeamListElements, //setTeamListElements] = useState([]);
    // var [TeamRequestElements, //setTeamRequestElements] = useState([]);

    // useEffect(() => {
    //     const axiosGet = async () => {
    //         let jwtToken = localStorage.getItem('Authorization');
    //         axios.defaults.headers.common['Authorization'] = jwtToken;

    //         await axios.get(`${address}/teams/me/favorite`).then((res) => {
    //             //setFavoriteTeamListElements(res.data.teams);
    //         });

    //         await axios.get(`${address}/teams/me/normal`).then((res) => {
    //             //setTeamListElements(res.data.teams);
    //         });

    //         await axios.get(`${address}/teams/me/request`).then((res) => {
    //             //setTeamRequestElements(res.data.teams);
    //         });
    //     };
    //     axiosGet();
    // },[]);
    const FavoriteTeamListElements = [
        {
            id: 1,
            teamName: '??????~???~!',
            projectName: 'DOKIT',
            favorite: 'true'
        },
        {
            id: 2,
            teamName: '19?????????',
            projectName: '???????????? 8???',
            favorite: 'true'
        },
    ];
    const TeamListElements = [
        {
            id: 1,
            teamName: '?????? 2???',
            projectName: 'Car Rental Service',
            favorite: 'false'
        },
        {
            id: 2,
            teamName: '?????? 9???',
            projectName: '??????',
            favorite: 'false'
        },
        {
            id: 2,
            teamName: '?????? 8???',
            projectName: 'Socket Programming',
            favorite: 'false'
        },
    ];
    const TeamRequestElements = [
        {
            id: 1,
            teamName: '??????????????? SP',
        },
        {
            id: 2,
            teamName: '?????? ????????? DOPOP',
        },
        {
            id: 2,
            teamName: '??????????????? ??????'
        },
    ];


    return (

        <>
            <TeamPageTemplate>
                <TeamPageTitleWrapper>
                    <TeamPageTeamIcon/>
                    <TeamPageTitle>Teams</TeamPageTitle>
                    <AddTeamButton/>
                </TeamPageTitleWrapper>
                <TeamPageListWrapper>
                    <TeamPageListTitle>
                        Team List
                        <TeamPageSearchWrapper>
                            <TeamPageInputSearchName/>
                            <TeamPageSearchIcon/>
                        </TeamPageSearchWrapper>
                    </TeamPageListTitle>
                    <TeamPageFavoriteTitle>
                        <TeamPageFavoriteTitleStar/>
                        Favorites
                    </TeamPageFavoriteTitle>
                    <TeamPageFavoriteWrapper>
                        <FavoriteTeamListCreator
                         users= {FavoriteTeamListElements}
                        />
                    </TeamPageFavoriteWrapper>
                    <TeamListCreator
                         users={TeamListElements}
                        />
                </TeamPageListWrapper>
                <TeamPageRequestWrapper>
                    <TeamPageRequestTitle>Team Request</TeamPageRequestTitle>
                    <TeamPageRequestListWrapper>
                        <TeamRequestCreator
                         users={TeamRequestElements}
                        />
                    </TeamPageRequestListWrapper>
                </TeamPageRequestWrapper>
            </TeamPageTemplate>
        </>
    );
};

export default TeamComponent;
