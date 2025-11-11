import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return <p>Loading authentication...</p>;
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
