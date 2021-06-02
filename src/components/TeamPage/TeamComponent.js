import React, { useState } from 'react';
import axios from 'axios';
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

const TeamListElementCreator = ({user}) => {
    return(
        <TeamPageListElement>
            {
                user.isFavorite === 'true'
                ? <TeamPageFavoriteStar/>
                : <TeamPageFavoriteStarLine/>
            }
            <TeamPageUserProfileCircle/>
            <TeamPageUserName>{user.name}</TeamPageUserName>
            <TeamPageUserComment>{user.comment}</TeamPageUserComment>
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
            <TeamPageUserProfileCircle/>
            <TeamPageUserName>{user.name}</TeamPageUserName>
            <TeamPageAcceptButton>Accept</TeamPageAcceptButton>
            <TeamPageRejectButton>Reject</TeamPageRejectButton>
        </TeamPageListElement>
    );
}

const TeamRequestCreator = ({users}) => {
    return(
        <>
        {users.map(user=>(
            <TeamRequestElementCreator user={user} key={user.id}/>
        ))}
        </>
    );
}

// const FavoriteTeamListElementsGetter = () => {
//     axios.get(`teams/me/favorite`).then((res) => {
//         const FavoriteTeamListElements = res.data;
//     });
// }

// const TeamListElementsGetter = () => {
//     axios.get(`teams/me/normal`).then((res) => {
//         const TeamListElements = res.data;
//     });
// }

// const TeamRequestElementsGetter = () => {
//     axios.get(`teams/me/request`).then((res) => {
//         const TeamRequestElements = res.data;
//     });
// }

const TeamComponent = () => {

    const FavoriteTeamListElements = [ 
        {
            id: 1,
            name: '두야~호~!',
            comment: 'Dokit List 성공한당',
            isFavorite: 'true'
        },
        {
            id: 2,
            name: '기본스터디카페',
            comment: null,
            isFavorite: 'true'
        }
    ];

    const TeamListElements = [
        {
            id: 1,
            name: '플밍3조',
            comment: '교수님ㅠㅠ넘어져라',
            isFavorite: 'false'
        },
        {
            id: 2,
            name: '19쿼드라',
            comment: '인공지능이 무에유?',
            isFavorite: 'false'
        },
        {
            id: 3,
            name: 'ABCDEFG',
            comment: '영어영어영어',
            isFavorite: 'false'
        }
    ];

    const TeamRequestElements = [
        {
            id: 1,
            name: '캡스톤토로톤톤톤톤톤',
        },
        {
            id: 2,
            name: '나무나무'
        }
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
                        <TeamListCreator
                         users= {FavoriteTeamListElements}
                        //  {FavoriteTeamListElementsGetter}
                        />
                    </TeamPageFavoriteWrapper>
                    <TeamListCreator
                         users={TeamListElements}
                        // {TeamListElementsGetter}
                        />
                </TeamPageListWrapper>
                <TeamPageRequestWrapper>
                    <TeamPageRequestTitle>Team Request</TeamPageRequestTitle>
                    <TeamPageRequestListWrapper>
                        <TeamRequestCreator
                         users={TeamRequestElements}
                         // {TeamRequestElementsGetter}
                        />
                    </TeamPageRequestListWrapper>
                </TeamPageRequestWrapper>
            </TeamPageTemplate>
        </>
    );
};

export default TeamComponent;
