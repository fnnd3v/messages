import React, { useContext } from "react";

import { user1, user2 } from "data/users";
import { MessagesContext } from "providers/messages-provider";

import {
  StyledInput,
  StyledLabel,
  UserSwitchWrapper,
  Wrapper,
} from "./App.styles";
import Messages from "components/messages/messages";

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
