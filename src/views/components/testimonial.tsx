import React from 'react'
import { FaStar } from 'react-icons/fa';

export default function Testimonial() {
    const testimonials = [
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

    //render star icon
    const renderStars = (rating: number) => {
        return Array.from({ length: rating }).map((_, index) => (
            <FaStar key={index} className='text-yellow-500' />
        ))
    }

    return (
        <section className='bg-gray-900 py-12'>
            <div className='container mx-auto px-4 text-center'>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-8">
                    What Our Client Say
                </h2>

                {/* Testimonial Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className=' className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"'
                        >
                            {/* Image */}
                            <div className="w-16 h-16 mx-auto mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className='rounded-full'
                                />
                            </div>

                            {/* Name and Title */}
                            <h3 className="text-xl font-semibold text-gray-700">
                                {testimonial.name}
                            </h3>
                            <p className="text-gray-500 mb-2">
                                {testimonial.title}
                            </p>

                            <p className="text-gray-600 italic mb-4">
                                {testimonial.quote}
                            </p>

                            {/* Rating */}
                            <div className="flex justify-center mb-4">
                                {renderStars(testimonial.rating)}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
