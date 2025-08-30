import { waste } from "../../util";
import { useQuery } from "@tanstack/solid-query";

export function Inbox() {
  const q = useQuery(() => ({ queryKey: ["inbox"], queryFn: () => waste() }));

  return (
    <div>
      This is inbox
      <div>{q.data}</div>
    </div>
  );
}
