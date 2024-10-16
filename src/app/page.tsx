import Image from "next/image";

import contentfulClient from "@/contentful/contentfulClient";
//type yang di export diatas
import { IAsset, TypeHeroContentSkeleton } from "@/contentful/types/blog.types"
import HomeView from "@/views/pages/homeView";
import ContentfulClient from "@/contentful/contentfulClient";

//mengambil data dari CMS
// const getBlogContentful = async () => {
//   try {
//     const data = await contentfulClient.getEntries<TypeHeroContentSkeleton>();
//     // console.log(data.items[0].fields.image);

//     return data;
//   } catch (error) {
//     console.log(error)
//   }
// }

// const getHeroContent = async () => {
//   try {
//     const data = await ContentfulClient.getEntries<TypeHeroContentSkeleton>({
//       content_type: "heroContent"
//       //content type based conten
//     })
//     console.log(data.items);

//     return data.items;

//   } catch (error) {
//     console.log(error)
//   }
// }


export default async function Home() {
  // const blogs = await getBlogContentful();
  // const blogs = await getHeroContent()

  return (
    <div>
      <HomeView />
      {/* {blogs &&
        blogs.items?.map((blog, idx) => (
          <div key={idx}>
            <p className="text-lg">{blog.fields.title}</p>
            <img src={`https:${(blog.fields.image as IAsset).fields.file.url}`} />
        </div>
        ))
      } */}
    </div>
  );
}
