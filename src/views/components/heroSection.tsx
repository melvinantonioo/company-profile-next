import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
    return (
        <section
            className='relative h-screen bg-cover bg-center flex items-center justify-center shadow-lg'
            style={{ backgroundImage: "url('/building.jpg')" }}
        >

            {/* overlay, untuk tutupin background agar lebih soft */}

            <div className='absolute inset-0 bg-black bg-opacity-60'></div>

            {/* content */}
            <div className='relative z-10 text-center text-white px-4'>

                <h1 className='text-5xl font-bold mb-4'>Welcome To Antonio Agency</h1>

                <p className='text-xl mb-6 max-w-lg mx-auto'> We provide exceptional digital marketing services to boost your brand to new heights. Join us today and grow your business like never before.</p>

                <Link
                    href='/about-us'
                    className='inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded'>
                    Get Started
                </Link>

            </div>

        </section>
    )
}
