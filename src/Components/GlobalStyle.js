import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";

const GlobalStyle = createGlobalStyle`
body{
    background:url('https://i.ibb.co/vw5HN7J/Background.jpg');
    height:100vh;
    background-size:cover;
    background-repeat:no-repeat;
    background-attachment:fixed;
    font-family: "Poppins";
}


`;

export default GlobalStyle;
