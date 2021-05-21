import React from 'react';
import {
    FriendTemplate,
    FriendTitleWrapper,
    FriendTitle,
    FriendIcon,
    ListWrapper,
    Search,
    InputSearchName,
    SearchIcon,
    Star,
    FavoriteTitle,
    Favorites,
    List,
    StarLine,
    Profile,
    Name,
    Comment,
    RequestWrapper,
    RequestListWrapper,
    AcceptButton,
    RejectButton
} from '../components/FriendPage/StyledComponent';

const FriendPage = () => {
    return (
        <>
            <FriendTemplate>
                <FriendTitleWrapper>
                    <FriendIcon/>
                    <FriendTitle>Friends</FriendTitle>
                </FriendTitleWrapper>
                <ListWrapper>
                    Friend List
                    <Search>
                        <InputSearchName/>
                        <SearchIcon/>
                    </Search>
                    <FavoriteTitle>
                        <Star/>
                        Favorites
                    </FavoriteTitle>
                    <Favorites>
                        <List>
                            <StarLine/>
                            <Profile/>
                            <Name>김지현</Name>
                            <Comment>으랏짜짯짜</Comment>
                        </List> 
                        <List>
                            <StarLine/>
                            <Profile/>
                            <Name>민지원</Name>
                            <Comment>화잉이티잉</Comment>
                        </List> 
                    </Favorites>
                    <List>
                        <StarLine/>
                        <Profile/>
                        <Name>김태형</Name>
                        <Comment>Butter</Comment>
                    </List> 
                </ListWrapper>
                <RequestWrapper>
                    Friend Request
                    <RequestListWrapper>
                        <List>
                            <Profile/>
                            <Name>곰돌이</Name>
                            <AcceptButton>Accept</AcceptButton>
                            <RejectButton>Reject</RejectButton>
                        </List>
                        <List>
                            <Profile/>
                            <Name>강아지</Name>
                            <AcceptButton>Accept</AcceptButton>
                            <RejectButton>Reject</RejectButton>
                        </List>
                    </RequestListWrapper>
                </RequestWrapper>
            </FriendTemplate>
        </>
    );
};

export default FriendPage;