import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'cicd',
    link: '/cicd/',
  },
  {
    text: 'CD',
    children: [
      {
        text: '4 Layer',
        children: [
          '/reference/plugin/pwa.md',
          '/reference/plugin/pwa-popup.md',
        ],
      },
      {
        text: '7 Layer',
        children: [
          '/reference/plugin/prismjs.md',
          '/reference/plugin/shiki.md',
        ],
      },
    ],
  },
  {
    text: 'Monitoring',
    children: [
      {
        text: 'Prometheus',
        children: [
          '/contributing.md',
        ],
      },
    ],
  },
]
