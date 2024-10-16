"use client"
import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';

import React from 'react'

export default function TeamCards({ name, position, imgSrc }: {
    name: string;
    position: string;
    imgSrc: string;
}) {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)"
            }}
        >
            <Link 
            href="/teams"
            className='bg-gray-900 ring ring-inset ring-gray-600'
            >
                <Image
                    src={imgSrc}
                    alt={name}
                    className="w-full h-56 object-cover mb-4 ring ring-inset ring-gray-600 py-6 px-6 rounded-full"
                    width={50}
                    height={10}
                    quality={100}
                />
                <h3 className="text-xl font-bold text-gray-200">{name}</h3>
                <p className="text-sm text-gray-400">{position}</p>

            </Link>

        </motion.div>
    )
}
