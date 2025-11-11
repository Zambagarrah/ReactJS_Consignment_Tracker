// src/pages/ConsignmentDetail.jsx
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { fetchConsignmentById } from '../services/api';
import '../styles/ConsignmentDetail.css';
import { ToastContext } from '../context/ToastContext';

const ConsignmentDetail = () => {
  const { id } = useParams();
  const [consignment, setConsignment] = useState(null);
  const [error, setError] = useState(null);

  const { addToast } = useContext(ToastContext);

  useEffect(() => {
    fetchConsignmentById(id)
      .then((data) => setConsignment(data))
      .catch(() => addToast('Failed to load consignment!', 'error'));
  }, [addToast, id]);

  return (
    <Layout>
      {!consignment && !error ? (
        <p>Loading...</p>
      ) : error ? (
        <p role="alert">{error}</p>
      ) : (
        <div className="detail">
          <h1>{consignment.name}</h1>
          <div className="grid">
            <div>
              <p><strong>Status:</strong> {consignment.status}</p>
              <p><strong>Reference:</strong> {consignment.reference}</p>
              <p><strong>Last update:</strong> {new Date(consignment.lastUpdate).toLocaleString()}</p>
            </div>
            <div>
              <p><strong>Origin:</strong> {consignment.origin}</p>
              <p><strong>Destination:</strong> {consignment.destination}</p>
            </div>
          </div>
          <div className="card">
            <h2>Details</h2>
            <p>{consignment.details}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ConsignmentDetail;
