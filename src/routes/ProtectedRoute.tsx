import { LoadingOverlay } from "@mantine/core";
import { Navigate, Outlet } from "react-router";
import { useNavigation } from "react-router-dom";
import { useToken } from "src/redux/hooks";

const ProtectedRoute: React.FC = () => {
  const token = useToken();
  const { state } = useNavigation();

  if (state == "loading") {
    return <LoadingOverlay visible />;
  }

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
