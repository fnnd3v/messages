import React, { useEffect, useRef, useState } from "react";

import { useMessage } from "hooks/useMessage";

import { StyledForm } from "./EditMessagePanel.styles";

const EditMessagePanel = ({ message: { content, id }, setIsEdit }) => {
  const [messageToEdit, setMessageToEdit] = useState(content);
  const { editMessage } = useMessage();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
