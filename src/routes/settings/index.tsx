import { useQuery } from "@tanstack/solid-query";
import { createFileRoute } from "@tanstack/solid-router";
import { waste } from "../../util";
import { onCleanup, Show } from "solid-js";

export const Route = createFileRoute("/settings/")({
  component: RouteComponent,
});

function RouteComponent() {
  const q = useQuery(() => ({
    queryKey: ["settings"],
    queryFn: () => waste(),
  }));

  return (
    <div>
      This is settings
      <Show when={q.isSuccess} fallback={<>Loading...</>}>
        {q.data}
      </Show>
    </div>
  );
}
