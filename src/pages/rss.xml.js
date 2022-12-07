import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Precrimenes Informaticos | Blog',
  description: 'Aberraciones desarrolladas aquí y allá',
  site: 'https://precrimenes-informaticos.netlify.app',
  items: import.meta.glob('./**/*.md'),
  customData: `<language>es-es</language>`,
});