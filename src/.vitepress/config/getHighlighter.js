import grammar from '../../../latino.tmLanguage.json';
import { getHighlighter as getShikiHighlighter } from 'shiki';

export const getHighlighter = async () => {
  const latinoLanguage = {
    id: 'latino',
    scopeName: 'source.latino',
    grammar: grammar,
  };

  const highlighter = await getShikiHighlighter({
    themes: ['material-palenight'],
  });

  await highlighter.loadLanguage(latinoLanguage);

  return highlighter;
};
