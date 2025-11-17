// src/context/AuthContext.jsx
import { createContext, useState } from 'react';
import Data from '../services/Data';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
  const [user, setUser] = useState(() => {
    const u = localStorage.getItem('user');
    return u ? JSON.parse(u) : null;
  });

  const login = async ({ username, password }) => {
    const foundUser = Data.users.find(
      (u) => u.username === username && u.password === password
    );
    if (!foundUser) throw new Error('Invalid credentials');
    const token = 'mock-token';
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(foundUser));
    setAuthToken(token);
    setUser(foundUser);
  };

  const register = async ({ username, password, role = 'user' }) => {
    const exists = Data.users.find((u) => u.username === username);
    if (exists) throw new Error('User already exists');
    const newUser = { id: Date.now(), username, password, role };
    Data.users.push(newUser);
    localStorage.setItem('authToken', 'mock-token');
    localStorage.setItem('user', JSON.stringify(newUser));
    setAuthToken('mock-token');
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setAuthToken(null);
    setUser(null);
  };

  const isAuthenticated = !!authToken;

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
