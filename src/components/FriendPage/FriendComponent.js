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
  const FavoriteFriendListElementCreator = ({ user }) => {
    return (
      <FriendPageListElement>
        <FriendPageFavoriteStar
          onClick={(e) => deleteFavoriteHandler(user.id, e)}
        />
        <FriendPageUserProfileCircle />
        <FriendPageUserName>{user.username}</FriendPageUserName>
        <FriendPageUserComment>{user.conversation}</FriendPageUserComment>
      </FriendPageListElement>
    );
  };

  const deleteFavoriteHandler = async (friendId, e) => {
    e.preventDefault();
    await axios.delete(`${address}/favorite/me/friends`, {
      data: {
        id: friendId,
      },
    });
    await axios.get(`${address}/friends/me/favorite`).then((res) => {
      setFavoriteFriendListElements(res.data.friends);
    });
    await axios.get(`${address}/friends/me/normal`).then((res) => {
      setFriendListElements(res.data.friends);
    });
  };

  const FavoriteFriendListCreator = ({ users }) => {
    return (
      <>
        {users.map((user) => (
          <FavoriteFriendListElementCreator user={user} key={user.id} />
        ))}
      </>
    );
  };

  const FriendListElementCreator = ({ user }) => {
    return (
      <FriendPageListElement>
        <FriendPageFavoriteStarLine
          onClick={(e) => favoriteHandler(user.id, e)}
        />
        <FriendPageUserProfileCircle />
        <FriendPageUserName>{user.username}</FriendPageUserName>
        <FriendPageUserComment>{user.conversation}</FriendPageUserComment>
      </FriendPageListElement>
    );
  };

  const favoriteHandler = async (friendId, e) => {
    e.preventDefault();
    await axios.patch(`${address}/favorite/me/friends`, {
      id: friendId,
    });
    await axios.get(`${address}/friends/me/favorite`).then((res) => {
      setFavoriteFriendListElements(res.data.friends);
    });
    await axios.get(`${address}/friends/me/normal`).then((res) => {
      setFriendListElements(res.data.friends);
    });
  };

  const FriendListCreator = ({ users }) => {
    return (
      <>
        {users.map((user) => (
          <FriendListElementCreator user={user} key={user.id} />
        ))}
      </>
    );
  };

  const FriendRequestElementCreator = ({ user }) => {
    return (
      <FriendPageListElement>
        <FriendPageUserProfileCircle />
        <FriendPageUserName>{user.username}</FriendPageUserName>
        <FriendPageAcceptButton onClick={(e) => acceptHandler(user.id, e)}>
          Accept
        </FriendPageAcceptButton>
        <FriendPageRejectButton onClick={(e) => rejectHandler(user.id, e)}>
          Reject
        </FriendPageRejectButton>
      </FriendPageListElement>
    );
  };

  const acceptHandler = async (id, e) => {
    e.preventDefault();
    await axios.patch(`${address}/friends/me`, {
      friendId: id,
    });
    await axios.get(`${address}/friends/me/from_request`).then((res) => {
      setFriendRequestElements(res.data.friends);
    });
    await axios.get(`${address}/friends/me/normal`).then((res) => {
      setFriendListElements(res.data.friends);
    });
  };

  const rejectHandler = async (id, e) => {
    e.preventDefault();
    await axios.delete(`${address}/friends/me/from_request`, {
      data: {
        friendId: id,
      },
    });
    await axios.get(`${address}/friends/me/from_request`).then((res) => {
      setFriendRequestElements(res.data.friends);
    });
    await axios.get(`${address}/friends/me/normal`).then((res) => {
      setFriendListElements(res.data.friends);
    });
  };

  const FriendRequestCreator = ({ users }) => {
    return (
      <>
        {users.map((user) => (
          <FriendRequestElementCreator user={user} key={user.id} />
        ))}
      </>
    );
  };

  const deleteHandler = async (id, e) => {
    e.preventDefault();
    await axios.delete(`${address}/friends/me/to_request`, {
      data: {
        friendId: id,
      },
    });
    await axios.get(`${address}/friends/me/to_request`).then((res) => {
      setMyFriendRequestElements(res.data.friends);
    });
  };

  const MyFriendRequestElementCreator = ({ user }) => {
    return (
      <FriendPageListElement>
        <FriendPageUserProfileCircle />
        <FriendPageUserName>{user.username}</FriendPageUserName>
        <FriendPageRejectButton onClick={(e) => deleteHandler(user.id, e)}>
          Delete
        </FriendPageRejectButton>
      </FriendPageListElement>
    );
  };

  const FriendMyRequestCreator = ({ users }) => {
    return (
      <>
        {users.map((user) => (
          <MyFriendRequestElementCreator user={user} key={user.id} />
        ))}
      </>
    );
  };

  var [FriendListElements, setFriendListElements] = useState([]);
  var [FavoriteFriendListElements, setFavoriteFriendListElements] = useState(
    []
  );
  var [FriendRequestElements, setFriendRequestElements] = useState([]);
  var [MyFriendRequestElements, setMyFriendRequestElements] = useState([]);

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
  }, []);
  // const FavoriteFriendListElements = [
  //     {
  //         id: 1,
  //         username: '민지원',
  //         conversation: '으랏짜짯짜',
  //         favorite: 'true'
  //     },
  // ];

  // const FriendListElements = [
  //     {
  //         id: 1,
  //         username: '김지현',
  //         conversation: '플젝 홧팅~!',
  //         favorite: 'false'
  //     },
  //     {
  //         id: 2,
  //         username: '박성호',
  //         conversation: '안녕하세용가리',
  //         favorite: 'false'
  //     },
  //     {
  //         id: 3,
  //         username: '정명훈',
  //         conversation: '월요일 좋아~',
  //         favorite: 'false'
  //     },
  // ];

  // const FriendRequestElements = [
  //     {
  //         id: 1,
  //         username: '차인표',
  //     },
  //     {
  //         id: 2,
  //         username: '최동욱'
  //     },
  //     {
  //         id: 3,
  //         username: '박근한'
  //     },
  //     {
  //         id: 4,
  //         username: '안하주'
  //     },
  //     {
  //         id: 6,
  //         username: '강병도'
  //     },

  // ];

  // const MyFriendRequestElements = [
  //     {
  //         id: 1,
  //         username: '민루피',
  //     },
  //     {
  //         id: 2,
  //         username: '은지원'
  //     },
  // ];

  return (
    <>
      <FriendPageTemplate>
        <FriendPageTitleWrapper>
          <FriendPageFriendIcon />
          <FriendPageTitle>Friends</FriendPageTitle>
          <AddFriendButton />
        </FriendPageTitleWrapper>
        <FriendPageListWrapper>
          <FriendPageListTitle>
            Friend List
            <FriendPageSearchWrapper>
              <FriendPageInputSearchName />
              <FriendPageSearchIcon />
            </FriendPageSearchWrapper>
          </FriendPageListTitle>
          <FriendPageFavoriteTitle>
            <FriendPageFavoriteTitleStar />
            Favorites
          </FriendPageFavoriteTitle>
          <FriendPageFavoriteWrapper>
            <FavoriteFriendListCreator users={FavoriteFriendListElements} />
          </FriendPageFavoriteWrapper>
          <FriendListCreator users={FriendListElements} />
        </FriendPageListWrapper>
        <FriendPageRequestWrapper>
          <FriendPageRequestTitle>Friend Request</FriendPageRequestTitle>
          <FriendPageRequestListWrapper>
            <FriendRequestCreator users={FriendRequestElements} />
          </FriendPageRequestListWrapper>
          <FriendPageMyRequestWrapper>
            <FriendPageRequestTitle>My Request</FriendPageRequestTitle>
            <FriendPageRequestListWrapper>
              <FriendMyRequestCreator users={MyFriendRequestElements} />
            </FriendPageRequestListWrapper>
          </FriendPageMyRequestWrapper>
        </FriendPageRequestWrapper>
      </FriendPageTemplate>
    </>
  );
};

export default FriendComponent;
