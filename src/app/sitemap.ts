import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain: string = process.env.NEXT_APP_IS_STAGING == 'YES' ?  'localhost:3000' : 'wisatadesa.vercel.app'
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
