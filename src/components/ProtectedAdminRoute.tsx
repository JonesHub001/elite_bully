import { Navigate, useLocation } from 'react-router-dom';
import { isAdminAuthenticated } from '@/lib/adminAuth';

type ProtectedAdminRouteProps = {
  children: JSX.Element;
};

const ProtectedAdminRoute = ({ children }: ProtectedAdminRouteProps) => {
  const location = useLocation();

  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin-login" replace state={{ from: location.pathname }} />;
  }

  return children;
};

export default ProtectedAdminRoute;
