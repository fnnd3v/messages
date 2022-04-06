import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { MessagesContext } from "providers/messages-provider";
import { getTime } from "helpers/get-time";

export const useMessage = () => {
  const { activeUser, messages, setMessages } = useContext(MessagesContext);

  const messagesContext = useContext(MessagesContext);

  if (!messagesContext) console.error("You have to use hook inside provider");

  const addNewMessage = ({ content = null, img = null }) => {
    const newMessage = {
      content,
      img,
      date: getTime(),
      id: uuidv4(),
      user: activeUser,
    };

    setMessages([...messages, newMessage]);
  };

  const editMessage = (newContent, messageToEditID) => {
    const editedMessages = [...messages];

    const index = messages.findIndex((message) => {
      return message.id === messageToEditID;
    });

    editedMessages[index].content = newContent;

    setMessages(editedMessages);
  };

  const deleteMessage = (id) => {
    const filtratedMessages = messages.filter((message) => message.id !== id);

    setMessages(filtratedMessages);
  };

  return {
    addNewMessage,
    editMessage,
    deleteMessage,
  };
};
