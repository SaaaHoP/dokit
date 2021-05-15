//기본으로 적용되어 있는 스타일을 리셋하고, 공통적으로 적용할 스타일을 선언한다.
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    a{
         text-decoration:none;
     }
     *{
         box-sizing:border-box;
     }
     body{
         font-family: 'Roboto', sans-serif;
         font-size: 14px;
     }
 `;

export default GlobalStyle;
