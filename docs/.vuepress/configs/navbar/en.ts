import type { NavbarConfig } from '@vuepress/theme-default'

export const en: NavbarConfig = [
  {
    text: 'Guide',
    link: '/en/docs',
  },
  {
    text: 'Projects',
    children: [
      {
        text: 'Project List',
        link: '/en/projects',
      },
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
  {
    text: 'Social',
    children: [
      {
        text: 'GitHub',
        link: 'https://github.com/itdevwu',
      },
      {
        text: 'LinkedIn',
        link: 'https://www.linkedin.com/in/zhenglong-wu/',
      },
    ],
  },
  {
    text: 'itdevwu',
    children: [
      {
        text: 'Homepage',
        link: 'https://www.itdevwu.com',
      },
      {
        text: 'Blog',
        link: 'https://blog.itdevwu.com',
      },
      {
        text: 'Resume',
        link: 'https://resume.itdevwu.com',
      },
    ]
  },
]
