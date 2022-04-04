import Messages from "components/messages/Messages";
import { user1, user2 } from "data/users";
import { MessagesContext } from "providers/MessagesProvider";
import React, { useContext } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 550px;
  height: 850px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserSwitchWrapper = styled.div`
  position: relative;
`;

const StyledLabel = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const StyledInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${StyledLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const App = () => {
  const { setActiveUser } = useContext(MessagesContext);

  const handleSwitchUser = (e) => {
    if (e.target.checked) setActiveUser(user2);
    else {
      setActiveUser(user1);
    }
  };

  return (
    <Wrapper>
      <h2>Chat application</h2>
      <UserSwitchWrapper>
        <p>switch user</p>
        <StyledInput
          onClick={handleSwitchUser}
          type="checkbox"
          id="switch"
          name="switch"
        />
        <StyledLabel htmlFor="switch"></StyledLabel>
      </UserSwitchWrapper>
      <Messages />
    </Wrapper>
  );
};

export default App;
