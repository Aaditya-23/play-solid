import { Link } from "@tanstack/solid-router";

export default function Navbar() {
  return (
    <nav class="flex flex-col gap-4 border-r p-4 animate-[appear_3000ms_ease]">
      <Link to="/">Home</Link>
      <Link to="/inbox">Inbox</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
}
