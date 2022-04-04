import React, { useState } from "react";

import { useMessage } from "hooks/useMessage";
import { MessagePanelWrapper } from "./MessagePanel.styles";

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
