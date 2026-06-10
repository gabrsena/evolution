import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://rdsoutdoorliving.com', lastModified: new Date() },
    { url: 'https://rdsoutdoorliving.com/pools', lastModified: new Date() },
    { url: 'https://rdsoutdoorliving.com/pavers', lastModified: new Date() },
    { url: 'https://rdsoutdoorliving.com/artificial-turf', lastModified: new Date() },
    { url: 'https://rdsoutdoorliving.com/summer-kitchens', lastModified: new Date() },
    { url: 'https://rdsoutdoorliving.com/vinyl-fence', lastModified: new Date() },
    { url: 'https://rdsoutdoorliving.com/screen-enclosures', lastModified: new Date() },
    { url: 'https://rdsoutdoorliving.com/contact', lastModified: new Date() },
  ]
}
