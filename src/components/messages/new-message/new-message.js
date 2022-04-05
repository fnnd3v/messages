import React, { useContext, useEffect, useRef, useState } from "react";

import { useMessage } from "hooks/use-message";
import { MessagesContext } from "providers/messages-provider";
import EditMessagePanel from "./edit-message-panel/edit-message-panel";

import {
  ContentWrapper,
  DateP,
  ImageBody,
  MessageBody,
  MessagePanel,
  ProfilePicture,
  StyledPanelButton,
  Wrapper,
} from "./new-message.styles";

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
  const wrapperRef = useRef(null);

  const handleEditMessage = () => {
    setIsEdit((prevState) => !prevState);
  };

  const updateScroll = () => {
    wrapperRef.current.scrollIntoView();
  };

  useEffect(() => {
    if (img) return;
    updateScroll();
  }, []);

  return (
    <Wrapper ref={wrapperRef} isFirstUser={isFirstUser}>
      <ProfilePicture src={profilePhoto} />
      <ContentWrapper>
        {img ? (
          <ImageBody src={img} onLoad={updateScroll} />
        ) : (
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
        )}

        <MessagePanel>
          <DateP> {date} </DateP>
          {activeUser.id === userID ? (
            <>
              {img ? null : (
                <StyledPanelButton onClick={handleEditMessage}>
                  edit
                </StyledPanelButton>
              )}
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
