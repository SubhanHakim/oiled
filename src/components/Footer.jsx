import React from "react";
import { Twitter } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#fafafa]/80 pt-16 pb-10 mt-24">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
        <div className="flex items-center gap-2.5 mb-6">
          <div className="flex items-center font-outfit font-extrabold text-[28px] tracking-tight text-[#121212]">
            <img src={logo} alt="Oiled Logo" className="h-20 object-contain" />
          </div>
        </div>

        <p className="text-zinc-500 max-w-md mb-8 leading-relaxed">
          The highly unnecessary yet incredibly satisfying platform for making
          normal pictures look remarkably oily.
        </p>

        <div className="flex gap-4 mb-12">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-zinc-500 hover:border-[#121212] hover:text-[#121212] transition-colors duration-300"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        <div className="w-full h-[1px] bg-black/10 mb-8" />

        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Oiled App. Made with AI and 100%
          synthetic fluid.
        </p>
      </div>
    </footer>
  );
}
