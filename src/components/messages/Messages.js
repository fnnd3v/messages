import React, { useContext } from "react";

import MessagePanel from "components/messages/messagePanel/MessagePanel";
import NewMessage from "./newMessage/NewMessage";
import { user1 } from "data/users";
import { MessagesContext } from "providers/MessagesProvider";

import { EmptyP, MessagesWrapper, Wrapper } from "./Messages.styles";

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
