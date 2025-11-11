// src/components/AdminRoute.jsx
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AdminRoute = ({ children }) => {
  const { isAuthenticated, user, loading } = useContext(AuthContext);
  if (loading) return <p>Loading authentication...</p>;
  if (!isAuthenticated) return <Navigate to="/" />;
  if (user?.role !== 'admin') return <Navigate to="/dashboard" />;
  return children;
};

export default AdminRoute;
