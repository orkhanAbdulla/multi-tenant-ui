// AuthLayout.tsx
import { Outlet, Link } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto w-full max-w-sm sm:max-w-md px-6 h-14 flex items-center justify-center">
          <Link
            to="/"
            className="text-lg sm:text-xl font-semibold tracking-tight"
          >
            Mini Notion
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto w-full max-w-sm sm:max-w-md px-6 pt-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
