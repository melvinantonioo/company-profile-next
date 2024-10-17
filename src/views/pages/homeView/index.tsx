import Footer from '@/views/components/footer'

import HeroSection from '@/views/components/heroSection'
import Overview from '@/views/components/overview'
import Services from '@/views/components/services'

import Testimonial from '@/views/components/testimonial'
import React from 'react'

export default function HomeView() {
    return (
        <div>
            <HeroSection />
            <Overview />
            <Services />
            <Testimonial />
            <Footer />
        </div>
    )
}
