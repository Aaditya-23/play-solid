import Navbar from "../comps/navbar";

export function Root(props: any) {
  return (
    <div class="flex gap-4">
      <Navbar />
      {props.children}
    </div>
  );
}
