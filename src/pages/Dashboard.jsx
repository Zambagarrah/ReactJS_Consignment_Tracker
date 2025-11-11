import { useEffect, useState } from 'react';
import { fetchConsignments } from '../services/api';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [consignments, setConsignments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConsignments().then(data => {
      setConsignments(data);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      <div className="dashboard">
        <h1>Consignment Dashboard</h1>
        {loading ? <p>Loading...</p> : (
          <ul className="consignment-list" aria-label="Consignment List">
            {consignments.map(c => (
              <li key={c.id}>
                <Link to={`/consignment/${c.id}`} className="consignment-link">
                  <strong>{c.name}</strong> — {c.status}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Link to="/new-consignment" className="button">Add New Consignment</Link>
      </div>
    </Layout>
  );
};

export default Dashboard;
