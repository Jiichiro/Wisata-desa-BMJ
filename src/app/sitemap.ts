import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain: string | undefined = process.env.NEXT_PUBLIC_APP_DOMAIN
  return [
    {
      url: `${domain}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${domain}/galery`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${domain}/about`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}

export const dynamic = 'force-static';
