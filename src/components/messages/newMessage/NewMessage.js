import { useMessage } from "hooks/useMessage";
import { MessagesContext } from "providers/MessagesProvider";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import EditMessagePanel from "./EditMessagePanel/EditMessagePanel";

const Wrapper = styled.li`
  display: flex;
  flex-direction: ${({ isFirstUser }) => (isFirstUser ? "row-reverse" : "row")};
  margin: 10px;
  align-self: ${({ isFirstUser }) => (isFirstUser ? "flex-end" : "flex-start")};
`;

const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const ContentWrapper = styled.div``;

const MessageBody = styled.div`
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
`;
const MessagePanel = styled.div`
  display: flex;
  padding: 7px 20px 0;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.messagePanel};
`;

const DateP = styled.p`
  padding-right: 10px;
`;
const StyledPanelButton = styled.button`
  padding-right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.messagePanel};
`;

const NewMessage = ({
  isFirstUser,
  message,
  message: {
    content,
    date,
    img,
    id,
    user: { name, surname, profilePhoto, id: userID },
  },
}) => {
  const { deleteMessage } = useMessage();
  const { activeUser } = useContext(MessagesContext);
  const [isEdit, setIsEdit] = useState(false);

  const handleEditMessage = () => {
    setIsEdit((prevState) => !prevState);
  };

  return (
    <Wrapper isFirstUser={isFirstUser}>
      <ProfilePicture src={profilePhoto} />
      <ContentWrapper>
        <MessageBody isFirstUser={isFirstUser}>
          <h5>
            {name} {surname}
          </h5>
          {isEdit ? (
            <EditMessagePanel message={message} setIsEdit={setIsEdit} />
          ) : (
            <p> {content}</p>
          )}
        </MessageBody>

        <MessagePanel>
          <DateP> {date} </DateP>
          {activeUser.id === userID ? (
            <>
              <StyledPanelButton onClick={handleEditMessage}>
                edit
              </StyledPanelButton>
              <StyledPanelButton onClick={() => deleteMessage(id)}>
                delete
              </StyledPanelButton>
            </>
          ) : null}
        </MessagePanel>
      </ContentWrapper>
    </Wrapper>
  );
};

export default NewMessage;
