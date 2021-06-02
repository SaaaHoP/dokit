import React from 'react';
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

const FriendListElementCreator = ({user}) => {
    return(
        <FriendPageListElement>
            {
                user.isFavorite === 'true'
                ? <FriendPageFavoriteStar/>
                : <FriendPageFavoriteStarLine/>
            }
            <FriendPageUserProfileCircle/>
            <FriendPageUserName>{user.name}</FriendPageUserName>
            <FriendPageUserComment>{user.comment}</FriendPageUserComment>
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
            <FriendPageUserProfileCircle/>
            <FriendPageUserName>{user.name}</FriendPageUserName>
            <FriendPageAcceptButton>Accept</FriendPageAcceptButton>
            <FriendPageRejectButton>Reject</FriendPageRejectButton>
        </FriendPageListElement>
    );
}

const FriendRequestCreator = ({users}) => {
    return(
        <>
        {users.map(user=>(
            <FriendRequestElementCreator user={user} key={user.id}/>
        ))}
        </>
    );
}

const MyFriendRequestElementCreator = ({user}) => {
    return(
        <FriendPageListElement>
            <FriendPageUserProfileCircle/>
            <FriendPageUserName>{user.name}</FriendPageUserName>
            <FriendPageRejectButton>Reject</FriendPageRejectButton>
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



const FriendComponent = () => {

    const FavoriteFriendListElements = [
        {
            id: 1,
            name: '김지현',
            comment: '일이삼사오육칠팔구심일이삼사오',
            isFavorite: 'true'
        },
        {
            id: 2,
            name: '민지원',
            comment: '화잇팅이잉잉잉!!이!!!!',
            isFavorite: 'true'
        },
        {
            id: 3,
            name: '김지현',
            comment: '으랏짜짯짜',
            isFavorite: 'true'
        },
        {
            id: 4,
            name: '민지원',
            comment: '화잇팅이잉잉잉!!이!!!!',
            isFavorite: 'true'
        }
    ];

    const FriendListElements = [
        {
            id: 1,
            name: '김태형',
            comment: 'Butter',
            isFavorite: 'false'
        },
        {
            id: 2,
            name: '김태형',
            comment: 'Butter',
            isFavorite: 'false'
        },
        {
            id: 3,
            name: '김태형',
            comment: 'Butter',
            isFavorite: 'false'
        },
        {
            id: 4,
            name: '김태형',
            comment: 'Butter',
            isFavorite: 'false'
        },
        {
            id: 5,
            name: '김태형',
            comment: 'Butter',
            isFavorite: 'false'
        },
        {
            id: 6,
            name: '김태형',
            comment: 'Butter',
            isFavorite: 'false'
        },
    ];

    const FriendRequestElements = [
        {
            id: 1,
            name: '곰돌이',
        },
        {
            id: 2,
            name: '강아지'
        }
    ];

    const MyFriendRequestElements = [
        {
            id: 1,
            name: '커피온리',
        },
        {
            id: 2,
            name: '맘모스'
        }
    ];

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
                        <FriendListCreator
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
