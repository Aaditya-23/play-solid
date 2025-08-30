import { createFileRoute } from "@tanstack/solid-router";
import { onCleanup } from "solid-js";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/"!</div>;
}
