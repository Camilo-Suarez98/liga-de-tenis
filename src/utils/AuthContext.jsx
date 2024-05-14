'use client';
import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const saveLoggedIn = Cookies.get('role') === 'true';
  const [isLoggedIn, setIsLoggedIn] = useState(saveLoggedIn);

  useEffect(() => {
    Cookies.set('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
