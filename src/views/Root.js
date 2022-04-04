import React from "react";

import App from "./App";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import MessagesProvider from "providers/MessagesProvider";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MessagesProvider>
        <Wrapper>
          <App />
        </Wrapper>
      </MessagesProvider>
    </ThemeProvider>
  );
};

export default Root;
