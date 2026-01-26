import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    token: import.meta.env.VITE_SANITY_TOKEN // Only if you want to update content with the client
});

// Debugging helper
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

if (!projectId || !dataset) {
    console.error('Sanity Configuration Missing: VITE_SANITY_PROJECT_ID or VITE_SANITY_DATASET is not set.');
} else {
    console.log(`Sanity Configured: ProjectID=${projectId}, Dataset=${dataset}.`);
    console.log('If content is not loading, check CORS Origins in Sanity Dashboard.');
}

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}
