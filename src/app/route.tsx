import {
  createBrowserRouter,
  Navigate,
  replace,
  useLocation,
} from "react-router-dom";
import { LoginPage } from "@/pages/auth/Login";
import AuthLayout from "@/components/UI/layouts/AuthLayout";
import { RegisterPage } from "@/pages/auth/Register";
import AppLayout from "@/components/UI/layouts/AppLayout";
import { HomePage } from "@/pages/Home";
import { DashboardPage } from "@/pages/tenant/Dashboard";
import { NotFoundPage } from "@/pages/NotFound";
import { getMe } from "@/features/auth/api";
import type { ReactNode } from "react";

async function AuthRequired({ children }: { children: ReactNode }) {
  const location = useLocation();
  const me: any = await getMe();
  return me.authenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
export const routes = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", Component: LoginPage },
      { path: "/register", Component: RegisterPage },
    ],
  },
  {
    element: (
      <AuthRequired>
        <AppLayout />
      </AuthRequired>
    ),
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
