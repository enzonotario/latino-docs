const isProd = process.env.NODE_ENV === 'production';

const site = isProd ? 'https://lenguajelatino.org/' : 'http://localhost:3000';

export const metaData = {
  lang: 'es-ES',
  title: 'Lenguaje Latino',
  description: 'Lenguaje de programación con sintaxis en Español',
  site,
  image: `${site}/assets/og-image.png`,
};
