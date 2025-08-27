import { createBrowserRouter, Navigate, useLocation } from "react-router-dom";
import { LoginPage } from "@/pages/auth/Login";
import AuthLayout from "@/components/UI/layouts/AuthLayout";
import { RegisterPage } from "@/pages/auth/Register";
import AppLayout from "@/components/UI/layouts/AppLayout";
import { HomePage } from "@/pages/Home";
import { DashboardPage } from "@/pages/tenant/Dashboard";
import { NotFoundPage } from "@/pages/NotFound";
import { getMe } from "@/features/auth/api";
import { useEffect, useState, type ReactNode } from "react";

type AuthResponse = {
  authenticated: boolean;
};

function AuthRequired({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthResponse>({ authenticated: false });
  const location = useLocation();
  useEffect(() => {
    const func = async () => {
      const data = await getMe<AuthResponse>();
      setAuth(data);
    };
    func();
  }, []);
  return auth.authenticated ? (
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
