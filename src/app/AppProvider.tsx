import { RouterProvider } from "react-router";
import { routes } from "./route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

export function AppProvider() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
}
