//기본으로 적용되어 있는 스타일을 리셋하고, 공통적으로 적용할 스타일을 선언한다.
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
         text-decoration:none;
     }
     *{
         box-sizing:border-box;
     }
     html, body{
         font-family: 'Roboto', 'Noto Sans KR' sans-serif;
         font-weight: 500;
         font-size: 14px;
     }
 `;

export default GlobalStyles;
