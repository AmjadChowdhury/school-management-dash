"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fdfcf7] text-gray-800">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">JUSchool</h1>

          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <li>
              <Link href="/student">Student</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>

          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero / Banner */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[260px] sm:h-[320px] md:h-[420px]"
        >
          <Image
            src="/banner.jpeg"
            alt="Dashboard Preview"
            fill
            className="object-cover rounded-2xl shadow-lg"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/banner.jpeg"
            alt="Dashboard Preview"
            className="object-cover w-full rounded-2xl shadow-lg"
            fill
          />
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Key Features
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Student Management",
              "Teacher Dashboard",
              "Attendance Tracking",
              "Performance Charts",
              "Secure Roles",
              "Mobile Friendly",
            ].map((item) => (
              <div
                key={item}
                className="p-6 rounded-2xl border shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-lg mb-2">{item}</h4>
                <p className="text-sm text-gray-600">
                  Easy and efficient way to manage {item.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-500 text-white text-center">
        <h3 className="text-2xl md:text-4xl font-bold">
          Ready to get started?
        </h3>
        <p className="mt-3 text-indigo-100">
          Build your smart school system today
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-8 py-3 rounded-xl bg-white text-blue-500 font-semibold"
        >
          Create Account
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MySchool. All rights reserved.
      </footer>
    </main>
  );
}
