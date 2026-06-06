import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://elevationoutdoorliving.com', lastModified: new Date() },
    { url: 'https://elevationoutdoorliving.com/pools', lastModified: new Date() },
    { url: 'https://elevationoutdoorliving.com/pavers', lastModified: new Date() },
    { url: 'https://elevationoutdoorliving.com/artificial-turf', lastModified: new Date() },
    { url: 'https://elevationoutdoorliving.com/summer-kitchens', lastModified: new Date() },
    { url: 'https://elevationoutdoorliving.com/vinyl-fence', lastModified: new Date() },
    { url: 'https://elevationoutdoorliving.com/screen-enclosures', lastModified: new Date() },
    { url: 'https://elevationoutdoorliving.com/contact', lastModified: new Date() },
  ]
}
