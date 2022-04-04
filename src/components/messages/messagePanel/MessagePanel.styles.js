import styled from "styled-components";

import Arrow from "assets/icons/arrow.png";

export const MessagePanelWrapper = styled.form`
  height: 10%;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.appBackground};
  padding: 20px;

  input {
    width: 85%;
    height: 50px;
    border-radius: ${({ theme }) => theme.border.radius};
    border: none;
    padding: 5px 15px;

    :focus {
      outline: none;
    }
  }

  button {
    width: 40px;
    height: 40px;
    background-image: url(${Arrow});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    border-radius: 50%;
  }
`;
