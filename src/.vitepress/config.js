import { defineConfig } from 'vitepress-highlight';
import { themeConfig } from './config/theme';
import { markdown } from './config/markdown';
import { getHighlighter } from './config/getHighlighter';
import { metaData } from './config/constants';

export default async () => {
  const highlighter = await getHighlighter();

  return defineConfig({
    lang: metaData.lang,
    title: metaData.title,
    description: metaData.description,
    image: metaData.image,
    themeConfig: themeConfig,
    markdown: markdown(highlighter),
    srcExclude: ['README.md'],
  });
};
