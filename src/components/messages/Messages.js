import React, { useContext } from "react";

import styled from "styled-components";
import { MessagesContext } from "providers/MessagesProvider";
import MessagePanel from "components/messages/messagePanel/MessagePanel";
import NewMessage from "./newMessage/NewMessage";
import { user1 } from "data/users";

const Wrapper = styled.div`
  height: 90%;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.border.radius};
  overflow: hidden;
  align-items: center;
`;

const MessagesWrapper = styled.ul`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 5px;
  overflow-y: scroll;
`;

const EmptyP = styled.p`
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.messagePanel};
`;

const Messages = () => {
  const { messages } = useContext(MessagesContext);

  return (
    <Wrapper>
      <MessagesWrapper>
        {messages.length !== 0 ? (
          <>
            {messages.map((message) => {
              return (
                <NewMessage
                  key={message.id}
                  isFirstUser={message.user.id === user1.id ? true : false}
                  message={message}
                />
              );
            })}
          </>
        ) : (
          <EmptyP>Start conversation...</EmptyP>
        )}
      </MessagesWrapper>
      <MessagePanel />
    </Wrapper>
  );
};

export default Messages;
