// src/components/layout/AppLayout.tsx
import { Outlet } from "react-router-dom";
import { AppHeader } from "@/components/UI/AppHeader";

export default function AppLayout() {
  return (
    <div className="min-h-svh bg-background">
      <AppHeader />
      <main className="mx-auto max-w-7xl p-4 sm:p-6">
        <Outlet />
      </main>
    </div>
  );
}
