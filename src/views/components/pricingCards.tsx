"use client";
import React from 'react'
import { motion } from 'framer-motion'

interface IPricing {
    title: string;
    price: string;
    features: string[];
}

const PricingCards: React.FC<IPricing> = ({ title, price, features }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-md transition-all"
        >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-3xl font-bold mb-4">{price}</p>
            <ul className="mb-4 space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-400 ">
                        {feature}
                    </li>
                ))}
            </ul>
            <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-600 transition cursor cursor-pointer">
                Get STarted
            </button>

        </motion.div>
    )
}

export default PricingCards