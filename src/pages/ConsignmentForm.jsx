import { useState } from 'react';
import '../styles/ConsignmentForm.css';

const ConsignmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    status: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData); // Stubbed
    alert('Consignment submitted (stubbed)');
  };

  return (
    <form className="form" onSubmit={handleSubmit} aria-label="Consignment Form">
      <h2>New Consignment</h2>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" value={formData.name} onChange={handleChange} required />

      <label htmlFor="status">Status</label>
      <input id="status" name="status" value={formData.status} onChange={handleChange} required />

      <label htmlFor="details">Details</label>
      <textarea id="details" name="details" value={formData.details} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ConsignmentForm;
