import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    body{
        margin : 0px;
    }
    
    *{
        
        box-sizing : border-box;
        font-family: 'Gothic A1', sans-serif;
    }

    button{
        font-size : 20px;
        width : 150px;
        height : 50px;
        background-color : transparent;
        cursor : pointer;
        border : 3px solid;
        border-radius : 15px;
    }
`

export default GlobalStyle;