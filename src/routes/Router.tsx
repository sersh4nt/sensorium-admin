import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
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
