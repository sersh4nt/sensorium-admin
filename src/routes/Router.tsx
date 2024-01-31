import { RouteObject, createBrowserRouter } from "react-router-dom";

import Layout from "src/layouts";
import { NotFound } from "src/pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

export type Route = RouteObject & {
  label: string;
};

export const ROUTES: Route[] = [
  {
    path: "/",
    lazy: () => import("../pages/Dashboard"),
    label: "dashboard",
  },
  {
    path: "/devices",
    lazy: () => import("../pages/Devices"),
    label: "devices",
  },
  {
    path: "/indicators",
    element: <div>indicators</div>,
    label: "indicators",
  },
];

export const router = createBrowserRouter([
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
    lazy: () => import("../pages/Login"),
  },
  {
    path: "/signup",
    lazy: () => import("../pages/Signup"),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
