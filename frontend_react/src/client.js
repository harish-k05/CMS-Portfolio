import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
  withCredentials: false, // Explicitly disable cookie sending
  ignoreBrowserTokenWarning: true // If using browser-based tokens
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
