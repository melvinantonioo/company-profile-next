import ContentfulClient from '@/contentful/contentfulClient';
import { IAsset, TypeCultureCompanySkeleton } from '@/contentful/types/blog.types';


import Image from 'next/image'
import React from 'react'

const getCultureContent = async () => {
    try {
        const data = await ContentfulClient.getEntries<TypeCultureCompanySkeleton>({
            content_type: "cultureCompany"
            //content type based conten
        })

        return data.items;
    } catch (error) {
        console.log(error)
    }
}

export default async function CultureCompany() {
    const culture = await getCultureContent()
    return (
        <div>
            { culture &&
                culture?.map((culture, idx) => (
                    <section 
                    key={idx}
                    className="max-w-7xl mx-auto mb-16">
                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-bold">{culture.fields?.title}</h2>
                            <p className="text-lg mt-4 max-w-2xl mx-auto">
                                Our company culture is rooted in collaboration, innovation, and a passion for excellence. We believe in fostering a positive and inclusive work environment where every team member feels valued and motivated to contribute to our shared goals.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src={`https:${(culture.fields.image as IAsset).fields.file.url}`}
                                alt="Company Culture"
                                className="w-full max-w-4xl rounded-md shadow-lg"
                                width={1500}  
                                height={1000} 
                                layout="responsive"
                                
                            />
                        </div>
                    </section>
                ))
            }
        </div>
    )
}
