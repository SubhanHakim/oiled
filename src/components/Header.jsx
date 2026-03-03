import React from "react";
import dexscreener from "../assets/dexscreener.svg";

export default function Header() {
  return (
    <header className="w-full py-6 absolute top-0 z-50">
      <div className="w-full px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <a
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src="/logo-nav.png"
              alt="Oiled Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>
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
            className="hover:opacity-50 transition-all flex items-center"
          >
            <img src={dexscreener} alt="Dexscreener" className="h-4 w-4" />
          </a>
          <a
            href="https://x.com/i/communities/2028893662080565475/"
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
