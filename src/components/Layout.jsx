// src/components/Layout.jsx
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/register');
  };

  return (
    <div className="layout">
      <header role="banner">
        <h1>Consignment Tracker</h1>
        <nav aria-label="Primary" role="navigation">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/new-consignment">New</Link>
          {user?.role === 'admin' && <Link to="/admin">Admin</Link>}
          <span className="user-pill" aria-live="polite">{user?.username} · {user?.role}</span>
          <button onClick={handleLogout} aria-label="Logout">Logout</button>
        </nav>
      </header>
      <main role="main">{children}</main>
    </div>
  );
};

export default Layout;
