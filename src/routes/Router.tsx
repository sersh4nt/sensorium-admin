import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};
