import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: "83x9r4rp",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}
