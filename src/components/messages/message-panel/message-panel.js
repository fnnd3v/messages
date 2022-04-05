import React, { useState } from "react";

import { useMessage } from "hooks/use-message";
import Gallery from "./gallery/gallery";

import {
  GalleryButton,
  MessagePanelWrapper,
  Wrapper,
} from "./message-panel.styles";

const MessagePanel = () => {
  const { addNewMessage } = useMessage();
  const [newMessage, setNewMessage] = useState("");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleAddNewMessage = (e) => {
    e.preventDefault();
    if (newMessage === "") return;

    addNewMessage({ content: newMessage });
    setNewMessage("");
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleToggleGallery = () => {
    setIsGalleryOpen((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <MessagePanelWrapper onSubmit={handleAddNewMessage}>
        <input
          placeholder="message..."
          onChange={handleInputChange}
          value={newMessage}
        />
        <button type="submit" />
      </MessagePanelWrapper>
      <GalleryButton onClick={handleToggleGallery} />
      {isGalleryOpen ? <Gallery setIsGalleryOpen={setIsGalleryOpen} /> : null}
    </Wrapper>
  );
};

export default MessagePanel;
