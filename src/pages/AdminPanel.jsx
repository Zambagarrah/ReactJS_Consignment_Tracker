// src/pages/AdminPanel.jsx
import Layout from '../components/Layout';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  return (
    <Layout>
      <div className="admin-panel">
        <h1>Admin Panel</h1>

        <section>
          <h2>User management</h2>
          <p className="muted">Add/remove users, assign roles (coming soon).</p>
          <div className="table">
            <div className="table-row table-header">
              <div>Username</div>
              <div>Role</div>
              <div>Actions</div>
            </div>
            <div className="table-row">
              <div>admin</div>
              <div>admin</div>
              <div><button disabled>Manage</button></div>
            </div>
          </div>
        </section>

        <section>
          <h2>System logs</h2>
          <p className="muted">Audit trails (coming soon).</p>
        </section>

        <section>
          <h2>Settings</h2>
          <p className="muted">Configure preferences (coming soon).</p>
        </section>
      </div>
    </Layout>
  );
};

export default AdminPanel;
