// src/components/layout/AppHeader.tsx
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  LayoutDashboard,
  Settings as SettingsIcon,
  LogOut,
} from "lucide-react";

import { Button } from "@/components/shadcn-ui/button";
import { Input } from "@/components/shadcn-ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn-ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn-ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/shadcn-ui/sheet";

function NavLinkButton({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }: { isActive: boolean }) =>
        `text-sm transition ${
          isActive
            ? "font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4 sm:px-6">
        {/* Mobile: menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72">
            <div className="flex items-center gap-2">
              <Link to="/" className="text-lg font-semibold">
                MultiTenant
              </Link>
            </div>
            <nav className="mt-6 grid gap-2">
              <NavLinkButton to="/">Dashboard</NavLinkButton>
              <NavLinkButton to="/projects">Projects</NavLinkButton>
              <NavLinkButton to="/tenants">Tenants</NavLinkButton>
              <NavLinkButton to="/settings">Settings</NavLinkButton>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link to="/" className="text-base font-semibold">
          MultiTenant
        </Link>

        {/* Desktop nav */}
        <nav className="ml-4 hidden items-center gap-5 md:flex">
          <NavLinkButton to="/">Dashboard</NavLinkButton>
          <NavLinkButton to="/projects">Projects</NavLinkButton>
          <NavLinkButton to="/tenants">Tenants</NavLinkButton>
          <NavLinkButton to="/settings">Settings</NavLinkButton>
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search (optional) */}
        <div className="hidden md:block">
          <div className="relative">
            <Input placeholder="Search…" className="w-64" />
          </div>
        </div>

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2">
              <Avatar className="size-6">
                <AvatarImage alt="@user" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <span className="hidden text-sm md:inline">javid</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/" className="flex items-center gap-2">
                <LayoutDashboard className="size-4" />
                Dashboard
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/settings" className="flex items-center gap-2">
                <SettingsIcon className="size-4" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <LogOut className="size-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
