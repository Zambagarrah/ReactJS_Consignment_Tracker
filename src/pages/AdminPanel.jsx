// src/pages/AdminPanel.jsx
import { useEffect, useState, useContext } from 'react';
import Layout from '../components/Layout';
import {
  fetchUsers,
  createUser,
  updateUser,
  deleteUser,
} from '../services/api';
import { ToastContext } from '../context/ToastContext';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const { addToast } = useContext(ToastContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState({ username: '', password: '', role: 'user' });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
      setLoading(false);
    } catch {
      addToast('Failed to load users', 'error');
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createUser(newUser);
      addToast('User created successfully', 'success');
      setNewUser({ username: '', password: '', role: 'user' });
      loadUsers();
    } catch {
      addToast('Failed to create user', 'error');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      addToast('User deleted', 'success');
      loadUsers();
    } catch {
      addToast('Failed to delete user', 'error');
    }
  };

  const handleRoleChange = async (id, role) => {
    try {
      await updateUser(id, { role });
      addToast('User role updated', 'success');
      loadUsers();
    } catch {
      addToast('Failed to update role', 'error');
    }
  };

  return (
    <Layout>
      <div className="admin-panel">
        <h1>Admin Panel</h1>

        <section>
          <h2>User Management</h2>
          {loading ? (
            <p>Loading users...</p>
          ) : (
            <div className="table">
              <div className="table-row table-header">
                <div>Username</div>
                <div>Role</div>
                <div>Actions</div>
              </div>
              {users.map((u) => (
                <div key={u.id} className="table-row">
                  <div>{u.username}</div>
                  <div>
                    <select
                      value={u.role}
                      onChange={(e) => handleRoleChange(u.id, e.target.value)}
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <div>
                    <button onClick={() => handleDelete(u.id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <form className="form-inline" onSubmit={handleCreate}>
            <input
              type="text"
              placeholder="Username"
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              required
            />
            <select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <button type="submit">Add User</button>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default AdminPanel;
