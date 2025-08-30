import { useQuery } from "@tanstack/solid-query";
import { createFileRoute } from "@tanstack/solid-router";
import { waste } from "../../util";
import { onCleanup } from "solid-js";

export const Route = createFileRoute("/a/")({
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
