import styled from 'styled-components';
import { RiTeamLine } from "react-icons/ri"; // Team 아이콘
import { BiSearchAlt2 } from "react-icons/bi"; // 돋보기 아이콘
import { AiOutlineStar } from "react-icons/ai"; // 빈 별
import { AiFillStar } from "react-icons/ai"; // 찬 별
import { BsPeopleCircle } from "react-icons/bs"; // 프사
import { FaPlus } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";


export const TeamPageTemplate = styled.div`
    position: fixed;
    background: white;
    width: 1300px;
    height: 600px;
    top: 90px;
    left: 200px;
`;

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
`;

export const TeamPageAddModal = styled.div`
    width: 600px;
    height: 500px;
    top: 150px;
    left: 850px;
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
    // margin: 0 auto;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`;

export const TeamPageAddModalSelectWrapper = styled.div`
    float: left;
    width: 50%;
    height: 450px;
    border-right: 1px solid rgba(0, 0, 0, 0.15);
`;

export const TeamPageAddModalTitle = styled.div`
    margin-top: 15px;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
`;

export const TeamPageAddModalSearchWrapper = styled.div`
    float: right;
    margin-top: 15px;
    margin-right: 10px;
`;

export const TeamPageAddModalInputSearchName = styled.input.attrs({
    placeholder: "input friend's name.."
})` 
    font-size: 12px;
    width: 130px;
    border: none;
`;

export const TeamPageAddModalSelectListWrapper = styled.div`
    margin-top: 50px;
`;

export const TeamPageAddModalFriendListElement = styled.div`
    display: flex;
    margin-left: 20px;
    margin-bottom: 10px;
`;

export const TeamPageAddModalUserCheckbox = styled.input.attrs({
    type: "checkbox"
})`
    margin-top: 10px;
    margin-right: 10px;
`;

export const TeamPageAddModalUserProfile = styled(BsPeopleCircle)`
    height: 36px;
    width: 36px;
    color: #C4C4C4;
`;

export const TeamPageAddModalUserName = styled.div`
    flex: 1;
    font-size: 18px;
    margin-left: 10px;
    margin-top: 0.5rem;
`;

export const TeamPageAddModalInformationWrapper = styled.div`
    float: left;
    width: 50%;
    height: 450px;
`;

export const TeamPageAddModalThumbnail = styled.div`
    margin-top: 50px;
    margin-left: 70px;
    width: 150px;
    height: 150px;
    background: rgba(196, 196, 196, 0.6);
    border-radius: 75px;
    font-size: 20px;
    text-align: center; 
    color: rgba(0, 0, 0, 0.5);
    padding-top: 60px;
`;

export const TeamPageAddModalSelectThumbnail = styled(TiPlus)`
    color: #97D7E6; 
    width: 48px;
    height: 48px;
    margin-top: 30px;
    margin-left: 110px;
    // float: right;
    cursor: pointer;
`; 

export const TeamPageAddModalInputWrapper = styled.div`
    margin-top: 35px;
`;

export const TeamPageAddModalName = styled.div`
    font-size: 16px;
    margin-bottom: 20px;
    margin-left: 40px;
`;

export const TeamPageAddModalProject = styled.div`
    font-size: 16px;
    margin-bottom: 10px;
    margin-left: 22px;
`;

export const TeamPageAddModalInputName = styled.input.attrs({
    
})`
    margin-left: 10px;
    width: 140px;
    border: none;
    border-bottom: 1px solid gray;
`;

export const TeamPageAddModalCreateButton = styled.div`
    font-size: 18px;
    font-weight: 700;
    width: 100px;
    height: 30px;
    margin-left: 180px;
    margin-top: 80px;
    padding-top: 5px;
    background: rgba(172, 211, 220, 0.5);
    border-radius: 22px;
    text-align: center;
    cursor: pointer;
`;

export const TeamPageTitleWrapper = styled.div`
    width: 95%;
    text-align: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    margin: 0 auto;
    display: flex;
`;

export const TeamPageTeamIcon = styled(RiTeamLine)`
    height: 48px;
    width: 48px;
    color: #000000;
    opacity: 0.8;
    margin-left: 10px;
`;

export const TeamPageTitle = styled.div`
    font-size: 32px;
    line-height: 46px;
    margin-left: 1rem;
    flex: 1;
`;

export const TeamPageAddButton = styled.button`
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

export const TeamPageAddButtonIcon = styled(FaPlus)`
    width: 24px;
    height: 24px;
`;

export const TeamPageListWrapper = styled.div`
    width: 50%;
    height: 500px;
    float: left;
    text-align: left;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    padding-left: 2rem;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const TeamPageListTitle = styled.div`
    font-size: 20px;
    line-height: 23px;
    text-align: left;
    margin-left: 1.5rem;
    margin-bottom: 2rem;
`;

export const TeamPageSearchWrapper = styled.div`
    float: right;
    font-size: 15px;
`;

export const TeamPageInputSearchName= styled.input.attrs({
    placeholder: "input team's name.."
})`
    width: 150px;
    border: none;
`;

export const TeamPageSearchIcon = styled(BiSearchAlt2)`
    height: 24px;
    width: 24px;
    color: #323232;
    opacity: 0.8;
    vertical-align: middle;
`;

export const TeamPageFavoriteTitleStar = styled(AiOutlineStar)`
    height: 10px;
    width: 10px;
    color: #323232;
    opacity: 0.8;
    vertical-align: middle;
`;

export const TeamPageFavoriteTitle = styled.div`
    margin-top: 1.5rem;
    margin-left: 1rem;
    font-size:10px;
    display: flex;
    flex: 1;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
`;

export const TeamPageFavoriteWrapper = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 1rem;
`;

export const TeamPageListElement = styled.div`
    padding-top: 1rem;
    text-align:left;
    font-size: 18px;
    color: black;
    display: flex;
    align-items: center
`;

export const TeamPageFavoriteStar = styled(AiFillStar)`
    margin-right: 0.7rem;
    height: 12px;
    width: 12px;
    color: #FCD84B;
    cursor: pointer;
`;

export const TeamPageFavoriteStarLine = styled(AiOutlineStar)`
    margin-right: 0.7rem;
    height: 12px;
    width: 12px;
    color: #323232;
    opacity: 0.8;
    cursor: pointer;
`;

export const TeamPageUserProfileCircle = styled(BsPeopleCircle)`
    height: 48px;
    width: 48px;
    color: #C4C4C4;
`;

export const TeamPageUserName = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    cursor: pointer;
    flex: 1;
`;

export const TeamPageUserComment = styled.div`
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

export const TeamPageRequestWrapper = styled.div`
    width: 50%;
    height: 500px;
    float: left;
    text-align:left;
    padding-left: 1.5rem;
    padding-right: 3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const TeamPageRequestTitle = styled.div`
    font-size: 20px;
    text-align:left;
`;

export const TeamPageRequestListWrapper = styled.div`
    margin-top: 3rem;
`;

export const TeamPageAcceptButton = styled.button`
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

export const TeamPageRejectButton = styled.button`
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
