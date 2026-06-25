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
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState("login")

  const { data:session } = authClient.useSession()

 const user = session?.user
//  console.log(user)

  const links = <>
  <li><Link href={'/'}>Home</Link></li>
  <li><Link href={'/loyers'}>Lawyers</Link></li>
  <li><Link href={`/dashboard/${user?.role || 'layer'}`}>Deashboard</Link></li>
  </>
  const authBtn =<>
  {user? 
   <button onClick={async()=>{await authClient.signOut(); redirect('/auth/signIn')}} className="btn text-red-500">SingOut</button>
  :<div className="flex gap-2">

       <Link
          onClick={()=>setToggle('login')}
           className={`${toggle ==='login'? ' btn btn-primary ': 'btn'}`}
            href="/auth/signIn"
            
          >
            Login
          </Link>

          <Link
          onClick={()=>setToggle('register')}
            className={`${toggle ==='register'? ' btn btn-primary ': 'btn'}`}
            href="/auth/signUp"
            
          >
            Register
          </Link>
    </div>}
    
  
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
          {links}
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
            {links}
          </ul>

          <div className="mt-6 flex gap-3">
           {authBtn}
          </div>
        </div>
      </div>
    </header>
  );
}