
import ContentfulClient from '@/contentful/contentfulClient';
import { IAsset, TypeHeroContentSkeleton } from '@/contentful/types/blog.types';
import Image from 'next/image'
import React from 'react'

//fetch from Contentful CMS
const getHeroContent = async () => {
    try {
        const data = await ContentfulClient.getEntries<TypeHeroContentSkeleton>({
            content_type: "heroContent"
            //content type based conten
        })

        return data.items;
    } catch (error) {
        console.log(error)
    }
}

export default async function HistoryCompany() {
    const content = await getHeroContent();

    return (
        <div>
            {content &&
                content?.map((content, idx) => (
                    <section
                        key={idx}
                        className="max-w-7xl mx-auto mb-16">
                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-bold">{content.fields?.title}</h2>
                            <p className="text-lg mt-4 max-w-2xl mx-auto">
                                Our company was founded with the goal of delivering exceptional products and services to meet the evolving needs of our clients. Over the years, we have grown and adapted, staying true to our mission while continuously innovating.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src={`https:${(content.fields.image as IAsset).fields.file.url}`}
                                alt="Company History"
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
