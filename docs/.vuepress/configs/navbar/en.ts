import type { NavbarConfig } from '@vuepress/theme-default'

export const en: NavbarConfig = [
  {
    text: 'Guide',
    link: '/en/docs',
  },
  {
    text: 'Projects',
    link: '/en/projects',
    children: [
      {
        text: 'itdevwu\'s docs',
        link: '/en/docs',
      },
      {
        text: 'BUPT-PSP',
        link: '/en/BUPT-PSP',
      },
    ],
  },
]
