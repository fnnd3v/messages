import React, { useContext, useEffect, useRef, useState } from "react";

import { useMessage } from "hooks/use-message";
import { MessagesContext } from "providers/messages-provider";

import { StyledForm } from "./edit-message-panel.styles.js";

const EditMessagePanel = ({ message: { content, id }, setIsEdit }) => {
  const [messageToEdit, setMessageToEdit] = useState(content);
  const { activeUser } = useContext(MessagesContext);
  const { editMessage } = useMessage();
  const inputRef = useRef(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      inputRef.current.focus();
      isInitialMount.current = false;
    } else {
      setIsEdit(false);
    }
  }, [activeUser]);

  const handleInputChange = (e) => {
    setMessageToEdit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (messageToEdit.length === 0) return;

    editMessage(messageToEdit, id);
    setIsEdit(false);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={messageToEdit}
        onChange={handleInputChange}
      />
      <button type="submit" />
    </StyledForm>
  );
};

export default EditMessagePanel;
