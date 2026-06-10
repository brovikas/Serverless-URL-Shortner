import { CircleUser } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6">
      <h1 className="text-2xl font-bold text-white">
        vexify
      </h1>

      <a
        href="https://github.com/brovikas"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center gap-2
          px-5 py-2
          rounded-xl
          bg-white/10
          text-white
          hover:bg-white/20
          transition
        "
      >
        <CircleUser size={18} />
        GitHub
      </a>
    </nav>
  );
}