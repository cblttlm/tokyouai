"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <header className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link href="/" className="text-xl font-bold">
          Tokyo AI
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden md:flex space-x-8 text-gray-300">

          <Link href="/">Home</Link>

          <Link href="/chat">AI Chat</Link>

          <Link href="/insurance">Insurance AI</Link>

          <Link href="/invest">AI Investment</Link>

          <Link href="/tools">AI Tools</Link>

        </nav>

        {/* Buttons */}

        <div className="hidden md:flex space-x-4">

          <Link
            href="/login"
            className="px-4 py-2 border border-gray-500 rounded-lg"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-4 py-2 bg-blue-600 rounded-lg"
          >
            Get Started
          </Link>

        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden px-6 pb-6 space-y-4 text-gray-300">

          <Link href="/">Home</Link>

          <Link href="/chat">AI Chat</Link>

          <Link href="/insurance">Insurance AI</Link>

          <Link href="/invest">AI Investment</Link>

          <Link href="/tools">AI Tools</Link>

          <Link href="/login">Login</Link>

        </div>

      )}

    </header>

  )

}
