/* @refresh reload */
import "./app.css";

import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { createRouter, RouterProvider } from "@tanstack/solid-router";
import { render } from "solid-js/web";

import { routeTree } from "./routeTree.gen";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 0,
    },
  },
});

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/solid-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

const root = document.getElementById("root");

render(() => <App />, root!);
