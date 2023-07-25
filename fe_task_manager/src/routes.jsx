import { lazy } from "react";
import MainLayout from "./components/layouts/MainLayout";
import { PATH } from "./configs/path";

const Home = lazy(() => import("./pages"));
const Login = lazy(() => import("./pages/login"));

export const routers = [
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.LOGIN,
        element: <Login />,
      },
    ],
  },
];
