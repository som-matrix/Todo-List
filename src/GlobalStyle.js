import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
 *{
     padding:0;
     margin:0;
     box-sizing:border-box;
 }
 html{
     font-size:62.5%;
     font-family: 'Roboto', sans-serif;
 }
 h1{
     font-size:3.5rem;
     font-family: 'Montserrat', sans-serif;
 }
 h2{
     font-size:2.5rem;
    
     
 }
 h3{
     font-size:1.5rem;
 }
 a{
     text-decoration:none;
     font-size:1.5rem;
 }

`

export default GlobalStyle;