
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --fondo: #ededed;
    --back: #000;
    --withTheme: #fff;

    --text1: rgba(0, 166, 80, 1);
    --text2: rgba(0, 0, 0, 0.45);
    --text3: #666;

    --green: #00a650;
    --blue1: #3483fa;
    --blue2: #4189e6;
    --yellow: #ffe600,
    

    --border: --#ddd;

    --panel: 0 1px 3 px 0 rgba(0, 0, 0, .3);

    --reputacion1: #ffe7e6;
    --reputacion2: #fff4e7;
    --reputacion3: #fffde5;
    --reputacion4: #f3fee0;
    --reputacion5: #00a650;

    --family: "Proxima Nova", -apple-system, Roboto, Arial, sans-serif, sans-serif;
  }

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
   
  }

`;

export default GlobalStyle;