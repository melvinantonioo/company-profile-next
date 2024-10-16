import Link from 'next/link';
import React from 'react'

export default function Services() {
    const services = [
        {
            title: 'Web Development',
            description: 'We offer professional web development services to create high-quality, responsive, and dynamic websites.',
            link: '/product',
        },
        {
            title: 'Digital Marketing',
            description: 'Our digital marketing solutions are tailored to increase your online visibility and drive business growth.',
            link: '/product',
        },
        {
            title: 'SEO Optimization',
            description: 'Optimize your website for better search engine rankings and increased traffic with our expert SEO services.',
            link: '/product',
        },
        {
            title: 'UI/UX Design',
            description: 'Delivering intuitive and user-centered designs for seamless user experiences across your digital platforms.',
            link: '/product',
        },
        {
            title: 'Mobile App Development',
            description: 'Our team builds high-performance mobile applications for both iOS and Android platforms.',
            link: '/product',
        },
    ];
    return (
        <section className='bg-gray-900 py-12'>

            <div className='container mx-auto px-4 text-center'>

                <h2 className='text-3xl md:text-4xl font-bold text-gray-200 mb-8'>
                    Our Products and Services
                </h2>

                {/* Service Cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ring ring-gray-400"'
                        >

                            <h3 className="text-xl font-semibold text-gray-300 mb-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 mb-6">
                                {service.description}
                            </p>

                            <Link
                                href={service.link}
                                className='className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"'
                            >
                                Learn More
                            </Link>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}
