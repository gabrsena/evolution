import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elevationoutdoorliving.com'
  const routes = ['', '/pool', '/pavers', '/outdoor-living', '/landscaping', '/service-areas']
  
  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }))
}
