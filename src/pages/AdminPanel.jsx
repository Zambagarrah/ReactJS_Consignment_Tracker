import Layout from '../components/Layout';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  return (
    <Layout>
      <div className="admin-panel">
        <h1>Admin Panel</h1>
        <section>
          <h2>User Management</h2>
          <p>Feature coming soon: Add/remove users, assign roles</p>
        </section>
        <section>
          <h2>System Logs</h2>
          <p>Feature coming soon: View activity logs and audit trails</p>
        </section>
        <section>
          <h2>Settings</h2>
          <p>Feature coming soon: Configure system preferences</p>
        </section>
      </div>
    </Layout>
  );
};

export default AdminPanel;
