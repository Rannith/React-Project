import React from "react";

const userInfo = React.createContext();

const UserProvider = userInfo.Provider;
const UserConsumer = userInfo.Consumer;

export { UserProvider , UserConsumer }