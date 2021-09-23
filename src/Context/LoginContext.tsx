import React, { createContext, FC, useState } from "react";

type LoginDataStatus = {
  isAuthorizied: boolean;
  login: () => void;
};

const contextDefault: LoginDataStatus = {
  isAuthorizied: false,
  login: () => {},
};

export const LoginContext = createContext<LoginDataStatus>(contextDefault);

const LoginContextProvider: FC = ({ children }) => {
  const [isAuthorizied, setIsAuthorizied] = useState<boolean>(false);
  const login = () => {
    setIsAuthorizied(true);
  };
  return (
    <LoginContext.Provider value={{ isAuthorizied, login }}>
      {children}
    </LoginContext.Provider>
  );
};
export default LoginContextProvider;
