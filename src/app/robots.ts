import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const domain: string = process.env.NEXT_APP_IS_STAGING == 'YES' ?  'localhost:3000' : 'wisatadesa.vercel.app'
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '',
    },
    sitemap:   `https://${domain}/sitemap.xml`,
  }
}