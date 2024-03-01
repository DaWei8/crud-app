import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [unAuthorisedAction, setUnAuthorisedAction] = useState(true);
  const login = () => {
    setIsAuthenticated(true);
  };
  const logout = () => {
    setIsAuthenticated(false);
  };

  const unAuthorisedClick = () => {
    setUnAuthorisedAction(isAuthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        unAuthorisedAction,
        unAuthorisedClick,
        setIsAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthContextProvider, useAuth };
