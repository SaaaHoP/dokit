import styled from 'styled-components';
import { AiOutlineTeam } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi"; 
import { AiOutlineStar } from "react-icons/ai"; 
import { AiFillStar } from "react-icons/ai"; 
import { FaPlus } from "react-icons/fa"

export const FriendPageTemplate = styled.div`
    position: fixed;
    background: white;
    height: 700px;
    top: 85px;
    left: 200px;
    right: 10px;
`;

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.7);
`;

export const FriendPageAddModal = styled.div`
    width: 370px;
    height: 320px;
    top: 140px;
    right: 70px;
    float: right;
    background-color: white;
    position: relative;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    background: white;       
`;

export const ModalCloseButton = styled.span`
    float: right;
    margin-right: 10px;
    margin-top: 5px;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
`;

export const ModalContentsWrapper = styled.div`
    margin: 0 auto;
    width: 100%;
    position: relative;
    padding: 0 20px 32px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const FriendPageAddModalInputEmail = styled.input.attrs({
    placeholder: "input friend's email.."
})`
    margin-left: 10px;
    width: 300px;
    border: none;
    border-bottom: 1px solid #000000;
`;

export const FriendPageAddModalUserProfileCircle = styled.img`
    height: 120px;
    width: 120px;
    border-radius: 50%;
    color: #C4C4C4;
    margin: 0 auto;
    margin-top: 30px;
`;

export const FriendPageAddModalUserName = styled.div`
    font-size: 18px;
    height: 20px;
    margin: 0 auto;
    margin-top: 20px;
`;

export const FriendPageButtonWrapper = styled.div`
    display: flex;
`;

export const FriendPageAddModalSearchButton = styled.button`
    border: none;
    margin-left: 190px;
    font-size: 18px;
    width: 75px;
    height: 36px;
    padding-top: 0.5rem;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 22px;
    text-align: center;
    cursor: pointer;
    float: left;
`;

export const FriendPageAddModalAddButton = styled.button`
    border: none;
    margin-left: 10px;
    font-size: 18px;
    width: 75px;
    height: 36px;
    padding-top: 0.5rem;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 22px;
    text-align: center;
    cursor: pointer;
    float: left;
`;

export const FriendPageTitleWrapper = styled.div`
    width: 95%;
    text-align: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
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
    width:48px;
    height:48px;
    background: rgba(172,211,220,0.3);
    border-radius: 50px;
    border: none;
    color : rgba(0,0,0,0.5);
    display:flex;
    justify-content: center;
    align-items: center;
    margin-left : auto;
    cursor: pointer;
`;

export const FriendPageAddButtonIcon = styled(FaPlus)`
    width: 24px;
    height: 24px;
`;

export const FriendPageListWrapper = styled.div`
    overflow: auto;
    &::-webkit-scrollbar {
        width: 15px;
        border-radius: 7px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 7px;
      }
    width: 50%;
    height: 520px;
    float: left;
    text-align: left;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    padding-left: 2rem;
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
    margin-left: 1rem;
    font-size:10px;
    display: flex;
    flex: 1;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
`;

export const FriendPageFavoriteWrapper = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 1rem;
`;

export const FriendPageListElement = styled.div`
    padding-top: 1rem;
    text-align:left;
    font-size: 18px;
    color: black;
    display: flex;
    align-items: center;
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

export const FriendPageUserProfileCircle = styled.img`
    height: 48px;
    width: 48px;
    color: #C4C4C4;
    border-radius: 50%;
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
    height: 520px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 15px;
        border-radius: 7px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 7px;
      }
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
    margin-top: 1.5rem;
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

export const FriendPageMyRequestWrapper = styled.div`
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 1rem;
    padding-top: 1rem;
`;
