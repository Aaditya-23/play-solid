import { createFileRoute } from "@tanstack/solid-router";
import { waste } from "../../util";
import { useQuery } from "@tanstack/solid-query";
import { onCleanup, Show } from "solid-js";

export const Route = createFileRoute("/inbox/")({
  component: RouteComponent,
});

function RouteComponent() {
  const q = useQuery(() => ({ queryKey: ["inbox"], queryFn: () => waste() }));

  return (
    <div>
      This is inbox
      <Show when={q.isSuccess} fallback={<>Loading...</>}>
        {q.data}
      </Show>
    </div>
  );
}
