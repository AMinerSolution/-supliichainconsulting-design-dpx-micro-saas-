"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 20);
    });
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              DPX
            </span>
            <span className="text-indigo-400 text-sm font-medium hidden sm:block">
              Supply Intelligence
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/dashboard"
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors px-3 py-2"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-slate-300 hover:text-white px-4 py-3 text-sm font-medium transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-4 pb-2 flex flex-col gap-2">
              <Link
                href="/dashboard"
                className="block text-center text-slate-300 border border-slate-700 hover:border-slate-500 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/dashboard"
                className="block text-center bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
