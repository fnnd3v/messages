import React from "react";

import App from "./App";
import MessagesProvider from "providers/messages-provider";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";

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
