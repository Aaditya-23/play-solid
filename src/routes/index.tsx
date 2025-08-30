import { useQuery } from "@tanstack/solid-query";
import { createFileRoute } from "@tanstack/solid-router";
import { onCleanup, Show } from "solid-js";
import { waste } from "../util";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const q = useQuery(() => ({ queryKey: ["a"], queryFn: () => waste() }));

  return (
    <div>
      This is home
      <Show when={q.isSuccess} fallback={<>Loading...</>}>
        {q.data}
      </Show>{" "}
    </div>
  );
}
