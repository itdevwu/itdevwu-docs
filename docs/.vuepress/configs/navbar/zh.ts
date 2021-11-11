import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '指南',
    link: '/itdevwu-docs',
  },
  {
    text: '项目',
    link: '/projects',
    children: [
      {
        text: 'itdevwu\'s docs',
        link: '/itdevwu-docs',
      },
      {
        text: 'BUPT-PSP',
        link: '/BUPT-PSP',
      },
    ],
  },
]
