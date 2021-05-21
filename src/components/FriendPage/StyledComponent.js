import styled from 'styled-components';
// import { DokitIcon } from '../commons/DokitIcon';
import { AiOutlineTeam } from "react-icons/ai"; // Friend 아이콘
//import { RiTeamLine } from "react-icons/ri"; // Team 아이콘
import { BiSearchAlt2 } from "react-icons/bi"; // 돋보기 아이콘
import { AiOutlineStar } from "react-icons/ai"; // 빈 별
import { BsPeopleCircle } from "react-icons/bs"; // 프사

export const FriendTemplate = styled.div`
    // position: absolute;
    background: white;
    width: 1200px;
    height: 800px;

    // 템플릿 그림자 + 중앙정렬 -> 상단바 좌측바 합칠 때 삭제
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); 
    margin: 0 auto; 
    margin-top: 4rem;
`;

export const FriendTitleWrapper = styled.div`
    width: 95%;
    text-align: left;
    border-bottom: 1px solid gray;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    margin: 0 auto; 
    display: flex;
`;

export const FriendTitle = styled.div`
    font-size: 32px;
    font-weight: 400;
    line-height: 46px;
    margin-left: 1rem;
`;

export const FriendIcon = styled(AiOutlineTeam)`
    height: 48px;
    width: 48px;
    color: #323232; 
    opacity: 0.8; 
`;

export const ListWrapper = styled.div`
    width: 50%;
    height: 680px;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    float: left;
    text-align: left;
    border-right: 1px solid gray;
    padding-left: 3rem;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const Search = styled.div`
    float: right;
    font-size: 15px;
    display: flex;
`;

export const InputSearchName= styled.input.attrs({
    placeholder: "input friend's name.."
})`
`;

export const SearchIcon = styled(BiSearchAlt2)`
    height: 24px;
    width: 24px;
    color: #323232;
    opacity: 0.8; 
    vertical-align: middle;
`;

export const Star = styled(AiOutlineStar)`
    height: 10px;
    width: 10px;
    color: #323232; 
    opacity: 0.8; 
    vertical-align: middle;
`;

export const FavoriteTitle = styled.div`
    margin-top: 1.5rem;
    font-size:10px;
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
`;

export const Favorites = styled.div`
    border-bottom: 1px solid gray;
    padding-bottom: 1rem;
`;

export const List = styled.div`
    padding-top: 1rem;
    text-align:left;
    font-size: 18px;
    color: black;
    display: flex;
`;

export const StarLine = styled(AiOutlineStar)`
    padding-top: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
    height: 12px;
    width: 12px; 
    color: #323232; 
    opacity: 0.8; 
    vertical-align: middle;
`;

export const Profile = styled(BsPeopleCircle)`
    height: 48px;
    width: 48px;
    color: #C4C4C4; 
    vertical-align: middle;
`;

export const Name = styled.div`
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    flex: 1;
`;

export const Comment = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 13px;
    width: 150px;
    height: 30px;
    background-color: rgba(172, 211, 220, 0.5);
    border-radius: 10px;
    text-align: center; 
`;

export const RequestWrapper = styled.div`
    width: 50%;
    height: 680px;
    float: left;
    font-size: 20px;
    text-align:left;
    padding-left: 1.5rem;
    padding-right: 3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const RequestListWrapper = styled.div`
    margin-top: 2rem;
`;

export const AcceptButton = styled.div`
    margin-top: 0.7rem;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
    width: 80px;
    height: 30px;
    font-size: 15px;
    background: rgba(172, 211, 220, 0.5);
    border-radius: 10px;
    text-align: center;
`; 

export const RejectButton = styled.div`
    margin-top: 0.7rem;
    margin-bottom: 0.5rem;
    width: 80px;
    height: 30px;
    font-size: 15px;
    background: rgba(255, 0, 0, 0.3);
    border-radius: 10px;
    align-items: center;
    text-align: center;
`;
