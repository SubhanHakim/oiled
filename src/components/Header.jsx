import React from "react";
import { Droplet } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full py-6 border-b border-white/10 bg-[#050505]/50 backdrop-blur-md fixed top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="bg-gradient-to-br from-[#ffd700] to-[#ff8c00] p-2 rounded-xl shadow-[0_0_40px_rgba(255,170,0,0.2)]">
            <Droplet className="text-black" size={24} />
          </div>
          <h1 className="text-2xl m-0 tracking-wide font-outfit font-extrabold">
            <span className="text-white">OIL</span>
            <span className="text-gradient">ED</span>
          </h1>
        </div>

        <nav className="flex gap-6 items-center">
          <a
            href="#generator"
            className="text-zinc-400 no-underline text-[0.95rem] hover:text-white transition-colors duration-200"
          >
            Generator
          </a>
          <a
            href="#"
            className="text-zinc-400 no-underline text-[0.95rem] hover:text-white transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#generator"
            className="btn-primary py-2 px-5 rounded-full text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5 inline-flex items-center"
          >
            Try Now
          </a>
        </nav>
      </div>
    </header>
  );
}
