import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchConsignmentById } from '../services/api';
import '../styles/ConsignmentDetail.css';

const ConsignmentDetail = () => {
  const { id } = useParams();
  const [consignment, setConsignment] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchConsignmentById(id)
      .then(data => setConsignment(data))
      .catch(() => setError('Failed to load consignment'));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!consignment) return <p>Loading...</p>;

  return (
    <div className="detail">
      <h1>{consignment.name}</h1>
      <p><strong>Status:</strong> {consignment.status}</p>
      <p><strong>Details:</strong> {consignment.details}</p>
    </div>
  );
};

export default ConsignmentDetail;
