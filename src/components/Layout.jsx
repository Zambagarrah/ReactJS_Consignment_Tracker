import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="layout">
      <header>
        <h1>Consignment Tracker</h1>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/new-consignment">New</Link>
          <Link to="/admin">Admin</Link>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
