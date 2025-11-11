// src/pages/ConsignmentForm.jsx
import { useState } from 'react';
import Layout from '../components/Layout';
import { createConsignment } from '../services/api';
import '../styles/ConsignmentForm.css';

const ConsignmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    status: 'In Transit',
    details: '',
    origin: '',
    destination: '',
    reference: '',
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.status.trim()) newErrors.status = 'Status is required';
    if (!formData.origin.trim()) newErrors.origin = 'Origin is required';
    if (!formData.destination.trim()) newErrors.destination = 'Destination is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    try {
      await createConsignment(formData);
      setSuccess('Consignment created successfully!');
      setFormData({
        name: '',
        status: 'In Transit',
        details: '',
        origin: '',
        destination: '',
        reference: '',
      });
      setErrors({});
    } catch {
      setSuccess('Failed to create consignment');
    }
  };

  return (
    <Layout>
      <form className="form" onSubmit={handleSubmit} aria-label="Consignment Form">
        <h2>New Consignment</h2>

        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={formData.name} onChange={handleChange} required />
        {errors.name && <span className="error">{errors.name}</span>}

        <label htmlFor="reference">Reference</label>
        <input id="reference" name="reference" value={formData.reference} onChange={handleChange} />

        <label htmlFor="status">Status</label>
        <select id="status" name="status" value={formData.status} onChange={handleChange} required>
          <option>In Transit</option>
          <option>Delivered</option>
          <option>Awaiting Pickup</option>
        </select>
        {errors.status && <span className="error">{errors.status}</span>}

        <label htmlFor="origin">Origin</label>
        <input id="origin" name="origin" value={formData.origin} onChange={handleChange} required />
        {errors.origin && <span className="error">{errors.origin}</span>}

        <label htmlFor="destination">Destination</label>
        <input id="destination" name="destination" value={formData.destination} onChange={handleChange} required />
        {errors.destination && <span className="error">{errors.destination}</span>}

        <label htmlFor="details">Details</label>
        <textarea id="details" name="details" value={formData.details} onChange={handleChange} />

        <button type="submit">Submit</button>
        {success && <p className="success" role="status">{success}</p>}
      </form>
    </Layout>
  );
};

export default ConsignmentForm;
