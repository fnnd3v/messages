import React, { useRef, useState } from "react";

import { user1 } from "data/users";

export const MessagesContext = React.createContext({});

const MessagesProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(user1);
  const [messages, setMessages] = useState([]);

  return (
    <MessagesContext.Provider
      value={{
        activeUser,
        setActiveUser,
        messages,
        setMessages,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesProvider;
