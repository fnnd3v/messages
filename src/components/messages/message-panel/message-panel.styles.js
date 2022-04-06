import styled from "styled-components";

import Arrow from "assets/icons/arrow.png";
import GalleryIcon from "assets/icons/image-gallery.png";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.appBackground};
  height: 10%;
  position: relative;
`;

export const MessagePanelWrapper = styled.form`
  padding: 0 20px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

export const StyledInput = styled.input`
  width: 85%;
  height: 50px;
  border-radius: ${({ theme }) => theme.border.radius};
  border: ${({ noMessageError }) =>
    noMessageError ? "1px solid red" : "none"};
  padding: 5px 15px;

  :focus {
    outline: none;
  }
`;

export const GalleryButton = styled.button`
  background-image: url(${GalleryIcon});
  width: 40px;
  height: 40px;
  background-size: contain;
  border: none;
  cursor: pointer;
`;
