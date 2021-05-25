import React from 'react';
import {
    FriendPageTemplate,
    FriendPageTitleWrapper,
    FriendPageTitle,
    FriendPageFriendIcon,
    FriendPageAddButton,
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
    FriendPageRejectButton
} from './StyledComponent';

const FriendComponent = () => {
    return (
        <>
            <FriendPageTemplate>
                <FriendPageTitleWrapper>
                    <FriendPageFriendIcon/>
                    <FriendPageTitle>Friends</FriendPageTitle>
                    <FriendPageAddButton></FriendPageAddButton>
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
                        <FriendPageListElement>
                            <FriendPageFavoriteStar/>
                            <FriendPageUserProfileCircle/>
                            <FriendPageUserName>김지현</FriendPageUserName>
                            <FriendPageUserComment>으랏짜짯짜</FriendPageUserComment>
                        </FriendPageListElement>
                        <FriendPageListElement>
                            <FriendPageFavoriteStar/>
                            <FriendPageUserProfileCircle/>
                            <FriendPageUserName>민지원</FriendPageUserName>
                            <FriendPageUserComment>화잇팅이잉잉잉!!이!!!!</FriendPageUserComment>
                        </FriendPageListElement>
                    </FriendPageFavoriteWrapper>
                    <FriendPageListElement>
                            <FriendPageFavoriteStarLine/>
                            <FriendPageUserProfileCircle/>
                            <FriendPageUserName>김태형</FriendPageUserName>
                            <FriendPageUserComment>Butter</FriendPageUserComment>
                        </FriendPageListElement>
                </FriendPageListWrapper>
                <FriendPageRequestWrapper>
                    <FriendPageRequestTitle>Friend Request</FriendPageRequestTitle>
                    <FriendPageRequestListWrapper>
                        <FriendPageListElement>
                            <FriendPageUserProfileCircle/>
                            <FriendPageUserName>곰돌이</FriendPageUserName>
                            <FriendPageAcceptButton>Accept</FriendPageAcceptButton>
                            <FriendPageRejectButton>Reject</FriendPageRejectButton>
                        </FriendPageListElement>
                        <FriendPageListElement>
                            <FriendPageUserProfileCircle/>
                            <FriendPageUserName>강아지</FriendPageUserName>
                            <FriendPageAcceptButton>Accept</FriendPageAcceptButton>
                            <FriendPageRejectButton>Reject</FriendPageRejectButton>
                        </FriendPageListElement>
                    </FriendPageRequestListWrapper>
                </FriendPageRequestWrapper>
            </FriendPageTemplate>
        </>
    );
};

export default FriendComponent;
