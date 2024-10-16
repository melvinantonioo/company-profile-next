//connection to contentful CMS

import { createClient } from "contentful"

const ContentfulClient = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
})

export default ContentfulClient