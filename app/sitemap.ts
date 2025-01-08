import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [

    {
      url: 'https://astray.site',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },

    {
      url: 'https://astray.site/cities',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },

    {
      url: 'https://astray.site/cities/London',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },

    {
      url: 'https://astray.site/cities/Paris',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },

    {
      url: 'https://astray.site/cities/NewYork',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },

    {
      url: 'https://astray.site/cities/Moscow',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },

    {
      url: 'https://astray.site/cities/Rome',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },

    {
      url: 'https://astray.site/cities/RioDeJaneiro',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },

    {
      url: 'https://astray.site/cities/Amsterdam',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },

    {
      url: 'https://astray.site/cities/Prague',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },

    {
      url: 'https://astray.site/cities/Singapore',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    }
  ]
}