"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "./../../public/logo.png";

const navItems = [
  { label: "Admin", href: "/admin" },
  { label: "Student", href: "/student" },
  { label: "Teacher", href: "/teacher" },
  { label: "Parent", href: "/parent" },
];

export default function HomeNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={32} height={32} />
          <span className="font-bold text-xl">JUSchool</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="text-gray-700 hover:text-blue-600">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-sm font-medium border px-3 py-1 rounded"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <ul className="px-6 py-4 space-y-4 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-700 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
