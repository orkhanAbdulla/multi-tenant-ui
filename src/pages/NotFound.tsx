// src/pages/NotFoundPage.tsx
import { Link } from "react-router-dom";
import { ArrowLeft, Ghost } from "lucide-react";
import { Card, CardContent } from "@/components/shadcn-ui/card";
import { Button } from "@/components/shadcn-ui/button";

export function NotFoundPage() {
  return (
    <div className="relative min-h-svh grid place-items-center bg-background p-6">
      {/* soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent blur-3xl"
      />
      <Card className="w-full max-w-xl border-muted/50">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Ghost className="h-5 w-5" />
            <span className="text-xs uppercase tracking-wider">Error 404</span>
          </div>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight">
            Page not found
          </h1>
          <p className="mt-2 text-muted-foreground">
            The page you’re looking for doesn’t exist or may have been moved.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/projects">Browse projects</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
