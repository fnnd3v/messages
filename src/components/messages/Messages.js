import React, { useContext } from "react";

import { MessagesContext } from "providers/messages-provider";
import MessagePanel from "./message-panel/message-panel";
import NewMessage from "./new-message/new-message";
import { user1 } from "data/users";

import { NoMessages, MessagesWrapper, Wrapper } from "./messages.styles";

const Messages = () => {
  const { messages } = useContext(MessagesContext);

  const showMessages = messages.length !== 0;
  const showNoContent = messages.length === 0;

  return (
    <Wrapper>
      <MessagesWrapper>
        {showMessages &&
          messages.map((message) => {
            return (
              <NewMessage
                key={message.id}
                isFirstUser={message.user.id === user1.id}
                message={message}
              />
            );
          })}
        {showNoContent && <NoMessages>Start conversation...</NoMessages>}
      </MessagesWrapper>
      <MessagePanel />
    </Wrapper>
  );
};

export default Messages;
