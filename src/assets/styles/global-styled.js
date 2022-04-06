import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colors.black};
  }
`;
