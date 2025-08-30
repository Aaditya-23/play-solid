import { useQuery } from "@tanstack/solid-query";
import { createFileRoute } from "@tanstack/solid-router";
import { waste } from "../../util";
import { onCleanup } from "solid-js";

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
      <div>{q.data}</div>
    </div>
  );
}
