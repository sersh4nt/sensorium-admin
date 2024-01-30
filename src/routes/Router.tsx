import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Layout from "../layouts";
import { Login, NotFound, Signup, Dashborad, Devices } from "../pages";
import ProtectedRoute from "./ProtectedRoute";

export type Route = RouteObject & {
  label: string;
};

export const ROUTES: Route[] = [
  {
    path: "/",
    element: <Dashborad />,
    label: "dashboard",
  },
  {
    path: "/devices",
    element: <Devices />,
    label: "devices",
  },
  {
    path: "/indicators",
    element: <div>indicators</div>,
    label: "indicators",
  },
];

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: ROUTES,
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
