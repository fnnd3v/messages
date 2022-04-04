import styled from "styled-components";

import CheckedIcon from "assets/icons/checked.png";

export const StyledForm = styled.form`
  width: auto;
  display: flex;
  min-width: 100%;
  height: 16px;

  input {
    border-radius: ${({ theme }) => theme.border.radius};
    padding: 0 8px;
    min-width: 100px;
    border: none;
    margin-right: 8px;
  }

  button {
    background-image: url(${CheckedIcon});
    width: 20px;
    height: 20px;
    background-size: contain;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
`;
