import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    apiVersion: '2025-08-20',
    dataset: 'production',
    projectId: 'd5h3heiq',
    useCdn: false,
});

// function to convert image object to image url
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
