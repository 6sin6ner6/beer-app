import { createGlobalStyle } from "styled-components";
import font2 from "../../fonts/patrickhand-regular-webfont.woff";

export const GlobalStyle = createGlobalStyle` 


@font-face {
  font-family: 'Patrickhand';  
  src: url('../fonts/patrickhand-regular-webfont.eot?#iefix') format('embedded-opentype'),        
        url(${font2}) format('woff'),
        url('../fonts/patrickhand-regular-webfont.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
    outline: none;
    font-family: Patrickhand;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    html{
      scroll-behavior: smooth;
      background-color: #ddd;
    }

  
  
`;
