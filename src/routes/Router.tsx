import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "../pages/Signup";

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
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};
