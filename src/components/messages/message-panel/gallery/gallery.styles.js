import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 250px;
  z-index: 9999999999;
  background-color: ${({ theme }) => theme.colors.appBackground};
  position: absolute;
  top: -250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 0;
  flex-wrap: wrap;
  padding: 20px;
  overflow-y: scroll;

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #0ae;

    background-image: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      color-stop(0.5, rgba(255, 255, 255, 0.2)),
      color-stop(0.5, transparent),
      to(transparent)
    );
  }

  img {
    width: 45%;
    cursor: pointer;
    margin: 10px 0;
  }
`;
