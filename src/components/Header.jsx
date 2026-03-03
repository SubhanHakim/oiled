import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="w-full py-6 absolute top-0 z-50">
      <div className="w-full px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Oiled"
            className="h-6 object-contain grayscale opacity-80 mix-blend-multiply"
          />
        </div>

        <nav className="flex gap-6 items-center text-xs font-body uppercase tracking-[0.2em] text-[#1a1a1a]">
          <a
            href="#generator"
            className="hover:border-b hover:border-black transition-all pb-1"
          >
            Generator
          </a>
          <a
            href="#features"
            className="hover:border-b hover:border-black transition-all pb-1"
          >
            Docs
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-50 transition-all flex items-center"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
