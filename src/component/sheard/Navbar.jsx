"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Bars,
  Xmark,
  Magnifier,
} from "@gravity-ui/icons";

import {
  Input,
  Button,
} from "@heroui/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState("login")

  const links = [
    { name: "Home", href: "/" },
    { name: "Find Lawyers", href: "/lawyers" },
    { name: "Practice Areas", href: "/practice-areas" },
    
  ];
  const authBtn =<>
    <Link
           className={`${toggle ==='login'? ' btn btn-primary ': 'btn'}`}
            href="/auth/signIn"
            
          >
            Login
          </Link>

          <Link
            className={`${toggle ==='register'? ' btn btn-primary ': 'btn'}`}
            href="/auth/signUp"
            
          >
            Register
          </Link>
  
  </>

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">

        {/* Left Side */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
              L
            </div>

            <span className="text-xl font-bold text-slate-900">
              LawHire
            </span>
          </Link>

          {/* Search */}
          <div className=" max-w-72">
            <Input
              placeholder="Search lawyers..."
              startContent={<Magnifier />}
            />
          </div>
        </div>

        {/* Center Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-3">
        {authBtn}
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Xmark /> : <Bars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
      >
        <div className="border-t bg-white p-4">

         

          <ul className="mt-5 space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-700"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex gap-3">
           {authBtn}
          </div>
        </div>
      </div>
    </header>
  );
}