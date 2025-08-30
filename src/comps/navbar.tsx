import { A } from "@solidjs/router";

export default function Navbar() {
  return (
    <nav class="flex flex-col gap-4 border-r p-4 animate-[appear_3000ms_ease]">
      <A href="/">Home</A>
      <A href="/inbox">Inbox</A>
      <A href="/settings">Settings</A>
    </nav>
  );
}
