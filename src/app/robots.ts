import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const domain: string | undefined = process.env.NEXT_PUBLIC_IS_STAGING == 'YES' ?  'http://localhost:3000' : process.env.NEXT_PUBLIC_APP_DOMAIN
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/about', '/galery'],
      disallow: '',
    },
    sitemap:   `${domain}/sitemap.xml`,
  }
}

export const dynamic = 'force-static'