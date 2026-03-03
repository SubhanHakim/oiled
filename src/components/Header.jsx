import React from "react";
import { Twitter, Send } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="w-full py-5 border-b border-black/5 bg-[#fafafa]/80 backdrop-blur-xl fixed top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Oiled Logo" className="h-16 object-contain" />
        </div>

        <nav className="flex gap-6 items-center">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-black transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-black transition-colors"
          >
            <Send size={20} />
          </a>
          <a
            href="#generator"
            className="btn-primary py-2 px-6 rounded-lg text-sm transition-transform duration-300 hidden sm:inline-flex items-center"
          >
            Launch App
          </a>
        </nav>
      </div>
    </header>
  );
}
