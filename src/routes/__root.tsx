import { Outlet, createRootRoute } from "@tanstack/solid-router";
import { onCleanup } from "solid-js";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return <Outlet />;
}
