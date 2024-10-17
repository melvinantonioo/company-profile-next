import ContentfulClient from '@/contentful/contentfulClient';
import { TypeHomeSkeleton } from '@/contentful/types/blog.types';
import Link from 'next/link'
import React from 'react'
import RichText from './richText';

const getHome = async () => {
    try {
        const data = await ContentfulClient.getEntries<TypeHomeSkeleton>({
            content_type: "home"
            //content type based conten
        })

        return data.items;
    } catch (error) {
        console.log(error)
    }
}

export default async function HeroSection() {
    const home = await getHome();
    return (
        <div>
            {home &&
                home?.map((home, idx) => (
                    <section
                        key={idx}
                        className='relative h-screen bg-cover bg-center flex items-center justify-center shadow-lg'
                        style={{ backgroundImage: "url('/building.jpg')" }}
                    >

                        {/* overlay, untuk tutupin background agar lebih soft */}

                        <div className='absolute inset-0 bg-black bg-opacity-60'></div>

                        {/* content */}
                        <div className='relative z-10 text-center text-white px-4'>

                            <h1 className='text-5xl font-bold mb-4'>{home.fields.title}</h1>
                            <div className='text-xl mb-6 max-w-lg mx-auto'>
                                <RichText
                                    document={home.fields.body} />
                            </div>

                            <Link
                                href='/about-us'
                                className='inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded'>
                                Get Started
                            </Link>

                        </div>

                    </section>
                ))
            }
        </div>
    )
}
