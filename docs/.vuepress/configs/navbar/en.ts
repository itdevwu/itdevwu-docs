import type { NavbarConfig } from '@vuepress/theme-default'

export const en: NavbarConfig = [
  {
    text: 'Guide',
    link: '/itdevwu-docs/',
  },
  {
    text: 'Projects',
    link: '/en/projects',
    children: [
      {
        text: 'itdevwu\'s docs',
        link: '/en/itdevwu-docs',
      },
      {
        text: 'BUPT-PSP',
        link: '/en/BUPT-PSP',
      },
    ],
  },
]
