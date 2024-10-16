import Footer from '@/views/components/footer'
import PricingCards from '@/views/components/pricingCards'
import Testimonial from '@/views/components/testimonial'
import React from 'react'

export default function Products() {
    return (
        <div className='bg-gray-900 text-white min-h-screen p-6'>

            {/* Intro Section */}
            <section className='mb-6'>
                <h1 className="text-4xl font-bold mb-4">Our Products and Services</h1>
                <p className="text-lg max-w-4xl">
                    At Antonio Agency, we provide a comprehensive range of marketing
                    solutions tailored to meet your needs. From branding and digital
                    strategy to web development and mobile app design, our services help
                    you connect with your audience more effectively.
                </p>
                <img
                    src="meeting.jpg"
                    alt="Our Services"
                    height={80}
                    className="w-full h-80 object-cover mt-6"
                />
            </section>

            {/* Section Pricing */}
            <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-8">Our Pricing Plans</h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <PricingCards
                        title="Standard Package"
                        price="$29"
                        features={[
                            "Individual configuration",
                            "No setup or hidden fees",
                            "Team size: 1 developer",
                            "6 months of support",
                        ]}
                    />
                    <PricingCards
                        title="Premium Package"
                        price="$50"
                        features={[
                            "Individual configuration",
                            "No setup or hidden fees",
                            "Team size: 2 developers",
                            "12 months of support",
                        ]}
                    />
                    <PricingCards
                        title="Deluxe Package"
                        price="$100"
                        features={[
                            "Individual configuration",
                            "No setup or hidden fees",
                            "Team size: 5 developers",
                            "24 months of support",
                        ]}
                    />
                </div>

            </section>

            {/* Testimonial */}
            <Testimonial />
            <Footer />

        </div>
    )
}
