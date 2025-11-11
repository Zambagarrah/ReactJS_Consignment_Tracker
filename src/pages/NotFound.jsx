// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => (
  <div className="notfound">
    <h1>Page not found</h1>
    <p>The page you’re looking for doesn’t exist or you don’t have access.</p>
    <Link className="button" to="/dashboard">Go to Dashboard</Link>
  </div>
);

export default NotFound;
