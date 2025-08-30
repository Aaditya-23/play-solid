import { useQuery } from "@tanstack/solid-query";
import { waste } from "../util";

export function Home(props: any) {
  const q = useQuery(() => ({ queryKey: ["a"], queryFn: () => waste() }));

  return (
    <div>
      This is home
      <div>{q.data}</div>
    </div>
  );
}
