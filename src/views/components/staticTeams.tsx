import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image';

const StaticTeams = ({ name, position, imgSrc }: {
    name: string;
    position: string;
    imgSrc: string;
}) => {
    const teams = [
        {
            name: 'John Doe',
            title: 'CEO, Example Corp',
            quote: 'This company exceeded all of our expectations. Their attention to detail and customer support is outstanding.',
            rating: 5,
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        {
            name: 'Jane Smith',
            title: 'Marketing Manager, Another Corp',
            quote: 'Working with this team was an absolute pleasure. Our sales have increased significantly thanks to their services!',
            rating: 4,
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        {
            name: 'Michael Brown',
            title: 'CTO, Startup Inc',
            quote: 'Their expertise in web development and design is top-notch. We couldn’t be happier with the results.',
            rating: 5,
            image: 'https://randomuser.me/api/portraits/men/58.jpg',
        },
    ];

    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)"
            }}
        >

            <Image
                src={imgSrc}
                alt={name}
                className="w-full h-56 object-cover rounded-full mb-4"
                width={60}
                height={60}
                quality={100}
            />
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm text-gray-400">{position}</p>

        </motion.div>
    )
}

export default StaticTeams