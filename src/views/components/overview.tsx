import React from 'react'
import TeamCards from './teamCards'

export default function Overview() {
    return (
        <section className='bg-gray-900 py-12'>
            <div className='container mx-auto px-4 text-center'>

                {/* Company History */}
                <div className='mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-200 mb-4'>Our Company History</h2>
                    <p className='text-gray-400 max-w-lg md:max-w-2xl mx-auto'>
                        Established in 2000, we have been pioneers in delivering innovative solutions that inspire growth. Our journey started with a small group of talented individuals who shared a common vision of excellence and collaboration.
                    </p>
                </div>

                {/* Company Culture */}
                <div className='mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-200 mb-4'>Our Culture</h2>
                    <p className='text-gray-400 max-w-lg md:max-w-2xl mx-auto'>
                        We foster an inclusive, dynamic, and collaborative work environment that nurtures creativity and innovation. Our culture is built on trust, integrity, and a relentless pursuit of excellence, which helps us achieve the extraordinary.
                    </p>
                </div>

                {/* Meet Our Teams */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-8">Meet Our Teams</h2>

                {/* Teams */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-900 rounded-lg ring ring-inset ring-gray-600">
                    <TeamCards
                        name="John Brook"
                        position="CEO"
                        imgSrc="https://randomuser.me/api/portraits/men/36.jpg"
                    />
                    <TeamCards
                        name="Joey Smith"
                        position="CTO"
                        imgSrc="https://randomuser.me/api/portraits/men/33.jpg"
                    />
                    <TeamCards
                        name="Anna Mary"
                        position="Lead Designer"
                        imgSrc="https://randomuser.me/api/portraits/women/45.jpg"
                    />
                </div>

            </div>
        </section>

    )
}
