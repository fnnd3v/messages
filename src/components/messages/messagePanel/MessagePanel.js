import React, { useContext, useState } from "react";

import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import Arrow from "assets/icons/arrow.png";
import { MessagesContext } from "providers/MessagesProvider";
import { useMessage } from "hooks/useMessage";

const MessagePanelWrapper = styled.form`
  height: 10%;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.appBackground};
  padding: 20px;

  input {
    width: 85%;
    height: 50px;
    border-radius: ${({ theme }) => theme.border.radius};
    border: none;
    padding: 5px 15px;

    :focus {
      outline: none;
    }
  }

  button {
    width: 40px;
    height: 40px;
    background-image: url(${Arrow});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    border-radius: 50%;
  }
`;

const MessagePanel = () => {
  const { addNewMessage } = useMessage();
  const [newMessage, setNewMessage] = useState("");

  const handleAddNewMessage = (e) => {
    e.preventDefault();
    if (newMessage === "") return;

    addNewMessage(newMessage);
    setNewMessage("");
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  return (
    <MessagePanelWrapper onSubmit={handleAddNewMessage}>
      <input
        placeholder="message..."
        onChange={handleInputChange}
        value={newMessage}
      />
      <button type="submit" />
    </MessagePanelWrapper>
  );
};

export default MessagePanel;
