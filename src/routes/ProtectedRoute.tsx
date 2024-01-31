import { Navigate, Outlet } from "react-router";
import { useAuth } from "src/providers/AuthProvider";

const ProtectedRoute: React.FC = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
