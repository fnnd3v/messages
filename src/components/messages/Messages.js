import React, { useContext } from "react";

import { MessagesContext } from "providers/messages-provider";
import MessagePanel from "./message-panel/message-panel";
import NewMessage from "./new-message/new-message";
import { user1 } from "data/users";

import { EmptyP, MessagesWrapper, Wrapper } from "./messages.styles";

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
