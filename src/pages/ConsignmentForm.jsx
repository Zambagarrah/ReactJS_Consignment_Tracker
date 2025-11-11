import { useState } from 'react';
import '../styles/ConsignmentForm.css';

const ConsignmentForm = () => {
  const [formData, setFormData] = useState({ name: '', status: '', details: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.status.trim()) newErrors.status = 'Status is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    console.log('Submitted:', formData);
    alert('Consignment submitted');
    setFormData({ name: '', status: '', details: '' });
    setErrors({});
  };

  return (
    <form className="form" onSubmit={handleSubmit} aria-label="Consignment Form">
      <h2>New Consignment</h2>

      <label htmlFor="name">Name</label>
      <input id="name" name="name" value={formData.name} onChange={handleChange} required />
      {errors.name && <span className="error">{errors.name}</span>}

      <label htmlFor="status">Status</label>
      <input id="status" name="status" value={formData.status} onChange={handleChange} required />
      {errors.status && <span className="error">{errors.status}</span>}

      <label htmlFor="details">Details</label>
      <textarea id="details" name="details" value={formData.details} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ConsignmentForm;
