// src/pages/RegisterPage.jsx
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ToastContext } from '../context/ToastContext';
import Layout from '../components/Layout';
import '../styles/Auth.css';

const RegisterPage = () => {
  const { register } = useContext(AuthContext);
  const { addToast } = useContext(ToastContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      addToast('Registration successful!', 'success');
      navigate('/login');
    } catch (err) {
      addToast(err.message, 'error');
    }
  };

  return (
    <Layout>
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label>Username</label>
        <input name="username" value={form.username} onChange={handleChange} required />
        <label>Password</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </Layout>
  );
};

export default RegisterPage;
