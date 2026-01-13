"use client";

import Link from "next/link";
import Image from "next/image";
import HomeNavbar from "./HomeNavbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fdfcf7] text-gray-800">
      <HomeNavbar />

      {/* Hero / Banner */}
      <section className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Text */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Smart <span className="text-blue-500">School</span>
            <br /> Management System
          </h2>

          <p className="text-gray-600 text-lg max-w-xl">
            A modern platform to manage students, teachers, attendance, and
            performance — all in one powerful dashboard.
          </p>

          <div className="flex gap-4">
            <Link
              href="/student"
              className="px-7 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>

            <Link
              href="#features"
              className="px-7 py-3 rounded-xl border font-medium hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px]">
          <Image
            src="/banner.jpeg"
            alt="Dashboard Preview"
            fill
            className="object-cover rounded-3xl shadow-2xl"
            priority
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Powerful Features
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Student Management",
              "Teacher Dashboard",
              "Attendance Tracking",
              "Performance Charts",
              "Secure Role Access",
              "Mobile Friendly",
            ].map((item) => (
              <div
                key={item}
                className="p-7 rounded-3xl border bg-white shadow-sm hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-105"
              >
                <h4 className="font-semibold text-lg mb-3">{item}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  A simple and efficient way to manage {item.toLowerCase()} with
                  complete control and insights.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold">
          Ready to build your smart school?
        </h3>

        <p className="mt-4 text-blue-100 text-lg">
          Start managing your institution smarter today.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 px-9 py-3 rounded-xl bg-white text-blue-600 font-semibold shadow-lg hover:scale-105 transition"
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
