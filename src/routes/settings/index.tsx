import { useQuery } from "@tanstack/solid-query";
import { waste } from "../../util";

export function Settings() {
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
