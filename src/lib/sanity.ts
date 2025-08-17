import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion: '2025-08-17',
    dataset: 'production',
    projectId: 'd5h3heiq',
    useCdn: false,
});