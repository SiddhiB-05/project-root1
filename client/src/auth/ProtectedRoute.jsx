import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { auth } from './firebase'; // Import auth directly

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="loading-spinner">Loading...</div>; 
  }

  if (!user && !auth.currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;