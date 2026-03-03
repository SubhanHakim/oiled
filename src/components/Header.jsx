import React from "react";
import { Twitter, Send } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="w-full py-4 sm:py-5 border-b border-black/5 bg-[#fafafa]/80 backdrop-blur-xl fixed top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Oiled Logo"
            className="h-10 sm:h-16 object-contain"
          />
        </div>

        <nav className="flex gap-4 sm:gap-6 items-center">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-black transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
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
