"use client"

import { Laptop } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function Navbar() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Laptop className="h-6 w-6 text-gray-100" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-12 sm:gap-6 text-white">
          <Link className="text-md font-medium " href="#">
            Features
          </Link>
          <Link className="text-md font-medium " href="#">
            Pricing
          </Link>
          <Link className="text-md font-medium " href="#">
            About
          </Link>
          <Link className="text-md font-medium " href="#">
            Contact
          </Link>
        </nav>
      </header>
    )
}