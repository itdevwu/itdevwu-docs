import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '指南',
    link: '/docs',
  },
  {
    text: '项目',
    link: '/projects',
    children: [
      {
        text: 'itdevwu\'s docs',
        link: '/docs',
      },
      {
        text: 'BUPT-PSP',
        link: '/BUPT-PSP',
      },
    ],
  },
  {
    text: 'itdevwu',
    link: 'https://www.itdevwu.com',
  },
]
