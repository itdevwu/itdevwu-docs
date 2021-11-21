import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '指南',
    link: '/docs',
  },
  {
    text: '项目列表',
    children: [
      {
        text: '项目列表',
        link: '/projects',
      },
      {
        text: 'itdevwu\'s docs',
        link: '/docs',
      },
      {
        text: 'BUPT-PSP',
        link: '/BUPT-PSP',
      },
      {
        text: 'BUPT-data-structure',
        link: '/BUPT-data-structure',
      },
    ],
  },
  {
    text: '社交',
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
        text: '主页',
        link: 'https://www.itdevwu.com',
      },
      {
        text: '博客',
        link: 'https://blog.itdevwu.com',
      },
      {
        text: '简历',
        link: 'https://resume.itdevwu.com',
      },
    ]
  },
]
