import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions, ViteBundlerOptions } from 'vuepress-vite'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',
  bundler: '@vuepress/vite',
  bundlerConfig: {
    // vite bundler options
  },
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
})
