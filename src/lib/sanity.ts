import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
    apiVersion: '2023-11-01',
    dataset: 'production',
    projectId: 'd5h3heiq',
    useCdn: false,
});

// function to convert image object to image url
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}
