// src/components/Layout.jsx
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Logo from '../assets/Logo.webp';

import '../styles/Layout.css';
import Image from '../assets/trucker.png';

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
        <div className="imgwrapper">
          <img src={Logo} alt="CargoTruckLogo"/>
        </div>
        <h1>CargoTrack</h1>
        <nav aria-label="Primary" role="navigation">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/new-consignment">New</Link>
          {user?.role === 'admin' && <Link to="/admin">Admin</Link>}
          <span className="user-pill" aria-live="polite">
            {user?.username} · {user?.role}
          </span>
          <button onClick={handleLogout} aria-label="Logout">Logout</button>
          <img src={Image} alt="trucker" class="Contrucker"/>
        </nav>
      </header>

      <main role="main" className='img_back'>{children}</main>

      <footer role="contentinfo" className="footer">
        <h1>CargoTrack</h1>
        <p className="slogan">Track Smarter · Move Faster</p>
        <div className="social-links">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </div>
        <img src={Image} alt="trucker" class="trucker"/>
      </footer>
    </div>
  );
};

export default Layout;
