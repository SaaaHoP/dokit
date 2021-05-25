import styled from 'styled-components';
// import { DokitIcon } from '../commons/DokitIcon';
import { AiOutlineTeam } from "react-icons/ai"; // Friend 아이콘
//import { RiTeamLine } from "react-icons/ri"; // Team 아이콘
import { BiSearchAlt2 } from "react-icons/bi"; // 돋보기 아이콘
import { AiOutlineStar } from "react-icons/ai"; // 빈 별
import { AiFillStar } from "react-icons/ai"; // 찬 별
import { BsPeopleCircle } from "react-icons/bs"; // 프사

export const FriendPageTemplate = styled.div`
    // position: absolute;
    background: white;
    width: 1200px;
    height: 800px;

    // 템플릿 그림자 + 중앙정렬 -> 상단바 좌측바 합칠 때 삭제
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    margin: 0 auto;
    margin-top: 4rem;
`;

export const FriendPageTitleWrapper = styled.div`
    width: 95%;
    text-align: left;
    border-bottom: 1px solid gray;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    margin: 0 auto;
    display: flex;
`;

export const FriendPageFriendIcon = styled(AiOutlineTeam)`
    height: 48px;
    width: 48px;
    color: #323232;
    opacity: 0.8;
`;

export const FriendPageTitle = styled.div`
    font-size: 32px;
    line-height: 46px;
    margin-left: 1rem;
    flex: 1;
`;

export const FriendPageAddButton = styled.button`
    height: 48px;
    width: 48px;
    border-radius: 24px;
    border: none;
    color: #C4C4C4;
    margin-right: 1rem;
    cursor: pointer;
`;

export const FriendPageListWrapper = styled.div`
    width: 50%;
    height: 680px;
    float: left;
    text-align: left;
    border-right: 1px solid gray;
    padding-left: 3rem;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const FriendPageListTitle = styled.div`
    font-size: 20px;
    line-height: 23px;
    text-align: left;
    margin-left: 1.5rem;
    margin-bottom: 2rem;
`;

export const FriendPageSearchWrapper = styled.div`
    float: right;
    font-size: 15px;
`;

export const FriendPageInputSearchName= styled.input.attrs({
    placeholder: "input friend's name.."
})`
    width: 150px;
    border: none;
`;

export const FriendPageSearchIcon = styled(BiSearchAlt2)`
    height: 24px;
    width: 24px;
    color: #323232;
    opacity: 0.8;
    vertical-align: middle;
`;

export const FriendPageFavoriteTitleStar = styled(AiOutlineStar)`
    height: 10px;
    width: 10px;
    color: #323232;
    opacity: 0.8;
    vertical-align: middle;
`;

export const FriendPageFavoriteTitle = styled.div`
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    font-size:10px;
    display: flex;
    flex: 1;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
`;

export const FriendPageFavoriteWrapper = styled.div`
    border-bottom: 1px solid gray;
    padding-bottom: 1rem;
`;

export const FriendPageListElement = styled.div`
    padding-top: 1rem;
    text-align:left;
    font-size: 18px;
    color: black;
    display: flex;
    align-items: center
`;

export const FriendPageFavoriteStar = styled(AiFillStar)`
    margin-right: 0.7rem;
    height: 12px;
    width: 12px;
    color: #FCD84B;
    cursor: pointer;
`;

export const FriendPageFavoriteStarLine = styled(AiOutlineStar)`
    margin-right: 0.7rem;
    height: 12px;
    width: 12px;
    color: #323232;
    opacity: 0.8;
    cursor: pointer;
`;

export const FriendPageUserProfileCircle = styled(BsPeopleCircle)`
    height: 48px;
    width: 48px;
    color: #C4C4C4;
`;

export const FriendPageUserName = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    cursor: pointer;
    flex: 1;
`;

export const FriendPageUserComment = styled.div`
    font-size: 13px;
    padding-top: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    height: 30px;
    background: rgba(172, 211, 220, 0.5);
    border-radius: 10px;
    border: none;
    text-align: center;
`;

export const FriendPageRequestWrapper = styled.div`
    width: 50%;
    height: 680px;
    float: left;
    text-align:left;
    padding-left: 1.5rem;
    padding-right: 3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const FriendPageRequestTitle = styled.div`
    font-size: 20px;
    text-align:left;
`;

export const FriendPageRequestListWrapper = styled.div`
    margin-top: 3rem;
`;

export const FriendPageAcceptButton = styled.button`
    margin-top: 1rem;
    margin-right: 0.5rem;
    width: 80px;
    height: 30px;
    font-size: 13px;
    background: rgba(172, 211, 220, 0.5);
    border-radius: 10px;
    border: none;
    text-align: center;
    font-weight: 500;
    cursor: pointer;
`;

export const FriendPageRejectButton = styled.button`
    margin-top: 1rem;
    width: 80px;
    height: 30px;
    font-size: 13px;
    background: rgba(255, 0, 0, 0.3);
    border-radius: 10px;
    border: none;
    text-align: center;
    font-weight: 500;
    cursor: pointer;
`;
