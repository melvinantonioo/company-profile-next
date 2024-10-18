import TeamCards from '@/views/components/teamCards'
import React from 'react'
import Footer from '@/views/components/footer'

export default function TeamsView() {
    return (
        <div className="bg-zinc-900 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white py-12">
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
                <TeamCards
                    name="Kenny Gray"
                    position="Back-end Engineer"
                    imgSrc="https://randomuser.me/api/portraits/men/37.jpg"
                />
                <TeamCards
                    name="Bruce Miller"
                    position="Front-end Engineer"
                    imgSrc="https://randomuser.me/api/portraits/men/38.jpg"
                />
                <TeamCards
                    name="Grace"
                    position="UI/UX Designer"
                    imgSrc="https://randomuser.me/api/portraits/women/46.jpg"
                />
            </div>
            <Footer />
        </div>

    )
}
