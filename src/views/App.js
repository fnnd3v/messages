import React, { useContext } from "react";

import { user1, user2 } from "data/users";
import { MessagesContext } from "providers/messages-provider";
import Messages from "components/messages/Messages";

import {
  StyledInput,
  StyledLabel,
  UserSwitchWrapper,
  Wrapper,
} from "./App.styles";

const App = () => {
  const { setActiveUser } = useContext(MessagesContext);

  const handleSwitchUser = (e) => {
    const currentUser = e.target.checked ? user2 : user1;
    setActiveUser(currentUser);
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
