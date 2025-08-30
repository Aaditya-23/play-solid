import { Link } from "@tanstack/solid-router";

export default function Navbar() {
  return (
    <nav class="flex flex-col gap-4 border-r p-4 animate-[appear_3000ms_ease]">
      <Link to="/a">Home</Link>
      <Link to="/a/inbox">Inbox</Link>
      <Link to="/a/settings">Settings</Link>
    </nav>
  );
}
