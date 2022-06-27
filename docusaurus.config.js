// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'itdevwu Docs',
  // For i18n, the tagline parameter is not used.
  // To change the tagline, edit the "src/pages/index.js" file.
  tagline: '用🤞写代码，用❤️造 bug。',
  url: 'https://docs.itdevwu.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'BUPT-data-structure',
        path: 'BUPT-data-structure',
        routeBasePath: 'BUPT-data-structure',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'itdevwu docs',
        logo: {
          alt: 'itdevwu-logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'docs',
            position: 'right',
            label: '使用指南',
          },
          {
            href: 'https://github.com/itdevwu',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '文档',
            items: [
              {
                label: 'itdevwu docs',
                to: '/docs',
              },
              {
                label: 'BUPT Data Structure Lab',
                to: '/BUPT-data-structure',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/itdevwu',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/zhenglong-wu/',
              }
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '主页',
                to: 'https://www.itdevwu.com',
              },
              {
                label: '博客',
                to: 'https://blog.itdevwu.com',
              },
            ],
          },
        ],
        copyright: `Copyright © 2021-${new Date().getFullYear()} itdevwu™.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
