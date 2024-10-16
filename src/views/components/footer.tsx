"use client"
import Image from 'next/image'
import React from 'react'

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className='bg-black text-white py-12 px-4'>

            {/* Upper Footer */}
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>

                {/* Company Logo & CTA Section */}
                <div className='flex flex-col space-y-6 items-center md:items-start'>
                    <div className='text-2xl font-bold'>
                        <Image src='/50px-logo.png' alt='logo' width={50} height={50} />
                    </div>
                    <h3 className='text-lg font-semibold'>
                        Work With Us
                    </h3>
                    <div className='flex space-x-2'>
                        <input
                            type='text'
                            placeholder='Your Name'
                            className="px-4 py-2 bg-white text-black rounded-md w-40"
                        />
                        <input
                            type='email'
                            placeholder='Your Email'
                            className="px-4 py-2 bg-white text-black rounded-md w-40"
                        />
                        <button className='px-6 py-2 bg-purple-500 hover:bg-purple-700  text-white font-semibold rounded-md transition'>
                            Let's Talk
                        </button>
                    </div>

                </div>

            </div>

            {/* About Us & Services Link */}
            <div className='flex flex-col items-center md:items-start space-y-4'>
                <h3 className="text-lg font-semibold">About Us</h3>
                <p className="max-w-sm text-center md:text-left">
                    We are dedicated to providing exceptional services to help your business grow.
                </p>
                <h3 className="text-lg font-semibold">Our Services</h3>
                <ul className='space-y-2'>
                    <li className="hover:underline cursor-pointer">Product Development</li>
                    <li className="hover:underline cursor-pointer">Marketing Solution</li>
                    <li className="hover:underline cursor-pointer">Consultancy Services</li>
                </ul>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center md:items-start space-y-4">
                <h3 className="text-lg font-semibold">Follow Us</h3>
                <div className="flex space-x-4">
                    <FaFacebookF className="hover:text-purple-500 transition cursor-pointer" size={24} />
                    <FaTwitter className="hover:text-purple-500 transition cursor-pointer" size={24} />
                    <FaInstagram className="hover:text-purple-500 transition cursor-pointer" size={24} />
                </div>
            </div>

            {/* Lower Footer */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center">
                <p>&copy; 2024 Antonio Agency. All rights reserved.</p>
            </div>

        </footer>
    )
}
