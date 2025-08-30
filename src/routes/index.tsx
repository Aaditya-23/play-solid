import { useQuery } from "@tanstack/solid-query";
import { createFileRoute } from "@tanstack/solid-router";
import { onCleanup } from "solid-js";
import { waste } from "../util";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const q = useQuery(() => ({ queryKey: ["a"], queryFn: () => waste() }));

  return (
    <div>
      This is home
      <div>{q.data}</div>
    </div>
  );
}
