import CultureCompany from '@/views/components/cultureCompany'
import Footer from '@/views/components/footer'
import HistoryCompany from '@/views/components/historyCompany'
import TeamCards from '@/views/components/teamCards'


// import React from 'react'

const AboutUsView = () => {
    return (
        <div className="bg-black text-white py-12 px-4">
            {/* History Company Section */}
            <HistoryCompany />

            {/* Teams Section */}
            <section className="max-w-7xl mx-auto mb-16">

                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold">Meet Our Team</h2>
                    <p className="text-lg mt-4 max-w-2xl mx-auto">
                        Our dedicated team of professionals works hard to bring our vision to life and ensure the success of our clients.
                    </p>
                </div>

                {/* Teams */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-black ring ring-inset ring-gray-600 rounded-lg shadow-lg">
                    <TeamCards
                        name="John Brook"
                        position="CEO"
                        imgSrc="https://randomuser.me/api/portraits/men/32.jpg"
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
            </section>

            {/* Culture Section */}
            <CultureCompany />
            <Footer />
        </div>
    )
}

export default AboutUsView