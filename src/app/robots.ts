import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const domain: string = process.env.NEXT_PUBLIC_IS_STAGING == 'YES' ?  'http://localhost:3000' : 'https://wisatadesa.vercel.app'
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '',
    },
    sitemap:   `${domain}/sitemap.xml`,
  }
}