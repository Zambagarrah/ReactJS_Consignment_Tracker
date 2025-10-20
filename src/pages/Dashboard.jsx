import { useEffect, useState } from 'react';
import { fetchConsignments } from '../services/api';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [consignments, setConsignments] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchConsignments();
      setConsignments(data);
    };
    loadData();
  }, []);

  return (
    <div className="dashboard">
      <h1>Consignment Dashboard</h1>
      <ul className="consignment-list" aria-label="Consignment List">
        {consignments.map(c => (
          <li key={c.id}>
            <Link to={`/consignment/${c.id}`} className="consignment-link">
              <strong>{c.name}</strong> — {c.status}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/new-consignment" className="button">Add New Consignment</Link>
    </div>
  );
};

export default Dashboard;
