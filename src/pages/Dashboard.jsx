// src/pages/Dashboard.jsx
import { useEffect, useMemo, useState } from 'react';
import { fetchConsignments } from '../services/api';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [consignments, setConsignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all');

  useEffect(() => {
    fetchConsignments().then((data) => {
      setConsignments(data);
      setLoading(false);
    });
  }, []);

  const filtered = useMemo(() => {
    return consignments
      .filter((c) =>
        status === 'all' ? true : c.status.toLowerCase() === status.toLowerCase()
      )
      .filter((c) => {
        const q = query.trim().toLowerCase();
        if (!q) return true;
        return (
          c.name.toLowerCase().includes(q) ||
          (c.reference || '').toLowerCase().includes(q)
        );
      });
  }, [consignments, query, status]);

  return (
    <Layout>
      <div className="dashboard">
        <h1 className='header_dash'>Dashboard</h1>

        <div className="controls" role="search">
          <label htmlFor="search" className="visually-hidden">Search Orders</label>
          <input
            id="search"
            type="search"
            placeholder="Search by name or reference…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            aria-label="Filter by status"
          >
            <option value="all">All</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
            <option value="Awaiting Pickup">Awaiting Pickup</option>
          </select>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : filtered.length === 0 ? (
          <p role="status">No Orders match your filters.</p>
        ) : (
          <ul className="consignment-list" aria-label="Consignment List">
            {filtered.map((c) => (
              <li key={c.id} className="consignment-item">
                <Link to={`/consignment/${c.id}`} className="consignment-link">
                  <strong>{c.name}</strong>
                  <span className="muted">Ref: {c.reference || '—'}</span>
                  <span className={`badge ${c.status.replace(/\s+/g, '-').toLowerCase()}`}>
                    {c.status}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <Link to="/new-consignment" className="button">Add New Order</Link>
      </div>
    </Layout>
  );
};

export default Dashboard;
