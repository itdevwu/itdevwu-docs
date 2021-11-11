import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/images/icons/favicon-16x16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'application-name', content: 'itdevwu\'s Docs' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'itdevwu\'s Docs' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/images/icons/safari-pinned-tab.svg',
        color: '#142d41',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#142d41' }],
    ['meta', { name: 'theme-color', content: '#142d41' }],
  ],

  // site-level locales config
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'itdevwu\'s Docs',
      description: '用 🤞 写代码，用❤️造 bug',
    },
    '/en/': {
      lang: 'en-US',
      title: 'itdevwu\'s Docs',
      description: 'Write code with 🤞, write bug with ❤️.',
    },
  },

  bundler: '@vuepress/webpack',

  themeConfig: {
    logo: '/images/itdevwu.svg',

    repo: '',

    docsDir: 'docs',

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/en/': {
        // navbar
        navbar: navbar.en,

        // sidebar
        sidebar: sidebar.en,

        // page meta
        editLinkText: 'Edit this page on GitHub',
      },

      /**
       * Chinese locale config
       */
      '/': {
        // navbar
        navbar: navbar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
    },
  },

  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^@vuepress/,
          path.resolve(__dirname, '../../packages/@vuepress')
        ),
    },
  },

  plugins: [
    [
      '@vuepress/plugin-docsearch', false,
      // {
      //   apiKey: '3a539aab83105f01761a137c61004d85',
      //   indexName: 'vuepress',
      //   searchParameters: {
      //     facetFilters: ['tags:v2'],
      //   },
      //   locales: {
      //     '/zh/': {
      //       placeholder: '搜索文档',
      //     },
      //   },
      // },
    ],
    [
      '@vuepress/plugin-google-analytics', false,
    ],
    // [
    //   '@vuepress/plugin-register-components',
    //   {
    //     componentsDir: path.resolve(__dirname, './components'),
    //   },
    // ],
    [
      '@vuepress/plugin-shiki', true,
    ],
  ],
})
