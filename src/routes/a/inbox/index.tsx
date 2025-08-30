import { createFileRoute } from "@tanstack/solid-router";
import { waste } from "../../../util";
import { useQuery } from "@tanstack/solid-query";
import { onCleanup } from "solid-js";

export const Route = createFileRoute("/a/inbox/")({
  component: RouteComponent,
});

function RouteComponent() {
  const q = useQuery(() => ({ queryKey: ["inbox"], queryFn: () => waste() }));

  return (
    <div>
      This is inbox
      <div>{q.data}</div>
    </div>
  );
}
