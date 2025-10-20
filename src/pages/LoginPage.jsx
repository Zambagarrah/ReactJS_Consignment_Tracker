import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Login Form">
      <h2>Login</h2>
      <label htmlFor="username">Username</label>
      <input id="username" value={credentials.username} onChange={e => setCredentials({ ...credentials, username: e.target.value })} required />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" value={credentials.password} onChange={e => setCredentials({ ...credentials, password: e.target.value })} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
