import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(false);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({
    name: "",
    username: ""
  });

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };
  const logout = () => {
    setIsAuthenticated(false);
    setUser({});
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);