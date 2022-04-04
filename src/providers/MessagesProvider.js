import { user1, user2 } from "data/users";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const MessagesContext = React.createContext({});

const MessagesProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(user1);
  const [messages, setMessages] = useState([]);

  return (
    <MessagesContext.Provider
      value={{ activeUser, setActiveUser, messages, setMessages }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesProvider;
