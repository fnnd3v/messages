import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { useMessage } from "hooks/useMessage";

import CheckedIcon from "assets/icons/checked.png";

const StyledForm = styled.form`
  width: auto;
  display: flex;
  min-width: 100%;

  input {
    border-radius: ${({ theme }) => theme.border.radius};
    padding: 0 8px;
    min-width: 100px;
    border: none;
    margin-right: 8px;
  }

  button {
    background-image: url(${CheckedIcon});
    width: 20px;
    height: 20px;
    background-size: contain;
    border-radius: 50%;
    border: none;
    cursor: pointer;
  }
`;

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
