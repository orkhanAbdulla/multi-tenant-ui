import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "@/pages/auth/Login";
import AuthLayout from "@/components/UI/layouts/AuthLayout";
import { RegisterPage } from "@/pages/auth/Register";
import AppLayout from "@/components/UI/layouts/AppLayout";
import { HomePage } from "@/pages/Home";
import { DashboardPage } from "@/pages/tenant/Dashboard";
import { NotFoundPage } from "@/pages/NotFound";

export const routes = createBrowserRouter([
  {
    Component: AuthLayout,
    children: [
      { path: "/login", Component: LoginPage },
      { path: "/register", Component: RegisterPage },
    ],
  },
  {
    Component: AppLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "/dashboard", Component: DashboardPage },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
