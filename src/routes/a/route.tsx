import { createFileRoute, Outlet } from "@tanstack/solid-router";
import Navbar from "../../comps/navbar";
import { onCleanup } from "solid-js";

export const Route = createFileRoute("/a")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div class="flex gap-4">
      <Navbar />
      <Outlet />
    </div>
  );
}
