"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsmenuOpen] = useState(false)

    //toggle menu
    const toggleMenu = () => {
        setIsmenuOpen(!isMenuOpen)
    }
    return (
        <header className='bg-zinc-800 text-white px-4 py-2 h-17 sticky top-0 z-50'>

            <div className='container mx-auto flex justify-between items-center'>

                {/* Logo  */}
                <div className='text-2xl font-bold'>
                    <Image src='/50px-logo.png' alt='logo' width={50} height={50} />
                </div>

                {/* Desktop Menu */}
                <nav className='hidden md:flex space-x-6'>
                    <Link href="/" className='hover:text-green-500'>Home</Link>
                    <Link href="/product" className='hover:text-green-500'>Services</Link>
                    <Link href="/about-us" className='hover:text-green-500'>About-Us</Link>
                    <Link href="/teams" className='hover:text-green-500'>Teams</Link>

                </nav>

                {/* Contact us Button */}
                <Link href="/#footer"
                    className='hidden md:inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded'
                >
                    Contact Us
                </Link>

                {/* Mobile menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white">
                        {/* Mobile menu icon (hamburger) */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>


                {/* Mobile Menu */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4">
                        <Link href="/" className="block py-2 hover:text-green-500">Home</Link>
                        <Link href="/product" className="block py-2 hover:text-green-500">Product & Services</Link>
                        <Link href="/about-us" className="block py-2 hover:text-green-500">About-Us</Link>
                        <Link href="/teams" className="block py-2 hover:text-green-500">Teams</Link>
                        <Link href="/faqs" className="block py-2 hover:text-green-500">FAQs</Link>
                        <Link
                            href="/contact"
                            className="block mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded text-center"
                        >
                            Contact Us
                        </Link>
                    </nav>
                )}

            </div>

        </header>
    )
}
