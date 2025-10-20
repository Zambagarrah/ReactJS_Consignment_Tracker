import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ConsignmentDetail from './pages/ConsignmentDetail';
import ConsignmentForm from './pages/ConsignmentForm';
import AdminPanel from './pages/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/consignment/:id" element={<ProtectedRoute><ConsignmentDetail /></ProtectedRoute>} />
        <Route path="/new-consignment" element={<ProtectedRoute><ConsignmentForm /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
