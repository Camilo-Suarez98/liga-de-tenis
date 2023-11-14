'use client';
import Cookies from "js-cookie";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const saveLoggedIn = Cookies.get('isLoggedIn') === 'true'
  const [isLoggedIn, setIsLoggedIn] = useState(saveLoggedIn);

  useEffect(() => {
    Cookies.set('isLoggedIn', isLoggedIn, { expires: 1 })
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