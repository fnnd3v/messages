import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  flex-direction: ${({ isFirstUser }) => (isFirstUser ? "row-reverse" : "row")};
  margin: 10px;
  align-self: ${({ isFirstUser }) => (isFirstUser ? "flex-end" : "flex-start")};
`;

export const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const ContentWrapper = styled.div``;

export const MessageBody = styled.div`
  background-color: ${({ isFirstUser, theme }) =>
    isFirstUser
      ? theme.colors.firstUserMessage
      : theme.colors.messageFontWhite};
  min-width: 140px;
  min-height: 40px;
  max-width: 300px;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: ${({ theme }) => theme.border.radius};
  word-wrap: break-word;
  color: ${({ isFirstUser, theme }) =>
    isFirstUser ? theme.colors.messageFontWhite : theme.colors.black};
  box-shadow: 0px -2px 36px -21px rgba(0, 0, 0, 1);
  h5 {
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
  }

  img {
    width: 100%;
  }
`;

export const ImageBody = styled.div`
  background-color: tomato;
  display: flex;
  width: auto;
  padding: 10px 20px;
  margin: 0 10px;
  width: 320px;
  height: 200px;
  border-radius: 6px;
  background-size: cover;
  background-image: url(${({ image }) => image});
`;
export const MessagePanel = styled.div`
  display: flex;
  padding: 7px 20px 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.messagePanel};
`;

export const DateP = styled.p`
  padding-right: 10px;
`;
export const StyledPanelButton = styled.button`
  padding-right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.messagePanel};
`;
