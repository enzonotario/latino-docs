import DefaultTheme from 'vitepress/theme';
import 'virtual:windi.css';
import InlinePlayground from './components/global/InlinePlayground.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
      app.component('InlinePlayground', InlinePlayground);
  }
};
