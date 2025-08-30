import { Outlet, createRootRoute } from "@tanstack/solid-router";
import { onCleanup } from "solid-js";
import Navbar from "../comps/navbar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return  <div class="flex gap-4">
        <Navbar />
        <Outlet />
      </div>
}
