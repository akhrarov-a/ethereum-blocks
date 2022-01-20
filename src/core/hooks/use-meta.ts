import { useEffect } from 'react';

/**
 * Tags variations
 */
const variations = {
  title: ['og:title', 'twitter:title', 'twitter:image'],
  description: [
    'description',
    'og:description',
    'twitter:description',
    'og:image'
  ],
  keywords: ['keywords'],
  alt: ['imageAlt', 'og:image:alt', 'twitter:image:alt'],
  locale: ['og:locale'],
  url: ['og:url'],
  type: ['og:type', 'twitter:card'],
  author: ['twitter:creator']
};

/**
 * Variation Key Type
 */
type VariationKeyType = keyof typeof variations;

/**
 * Tags
 */
const useMeta = (
  params: Partial<{
    [P in VariationKeyType]: string;
  }>,
  deps?: any[]
) => {
  useEffect(() => {
    const cache: Partial<{
      [P in VariationKeyType]: {
        name: string;
        tag: HTMLElement;
        generated: HTMLElement[];
      }[];
    }> = {};

    const title = document.title;

    if (params.title) document.title = params.title;

    Object.entries(params).map(([key, content]) => {
      const names = variations[key as VariationKeyType];
      const tags = names.map((name) => {
        const tag = document.head.querySelector(`meta[name="${name}"]`);

        if (tag) document.head.removeChild(tag);

        const generated = [];
        const create = () => {
          const custom = document.createElement('meta');

          custom.setAttribute('name', name);
          custom.setAttribute('content', content);

          document.head.appendChild(custom);

          return custom;
        };

        generated.push(create());

        return {
          tag,
          name,
          generated
        };
      });

      cache[key as VariationKeyType] = tags as any;
    });

    return () => {
      if (params.title) document.title = title;

      Object.entries(cache).map(([_, value]) => {
        value?.map((item) => {
          item?.generated
            ?.filter((node) => document.head.contains(node))
            ?.map((item) => document.head.removeChild(item));

          if (item.tag) {
            document.head.appendChild(item.tag);
          }
        });
      });
    };
  }, deps);
};

export { useMeta };
