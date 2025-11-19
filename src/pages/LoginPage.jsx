// src/pages/LoginPage.jsx
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ToastContext } from '../context/ToastContext';
import Layout from '../components/Layout';
import '../styles/Auth.css';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const { addToast } = useContext(ToastContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      addToast('Login successful!', 'success');
      navigate('/dashboard');
    } catch (err) {
      addToast(err.message, 'error');
    }
  };

  return (
    <Layout>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>Username</label>
        <input name="username" value={form.username} onChange={handleChange} required />
        <label>Password</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </Layout>
  );
};

export default LoginPage;
