import styled from "styled-components";

export const Wrapper = styled.div`
  height: 90%;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.border.radius};
  align-items: center;
  justify-content: space-between;
  overflow-y: hidden;
`;

export const MessagesWrapper = styled.ul`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  overflow-y: scroll;

  #style-3::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #000000;
  }
`;

export const NoMessages = styled.p`
  margin: 40px auto;
  color: ${({ theme }) => theme.colors.messagePanel};
`;
