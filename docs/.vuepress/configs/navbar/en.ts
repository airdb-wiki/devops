import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'CI',
    children: [
      {
        text: 'git',
        children: [
          { text: 'CLI', link: '/reference/cli.html', },
        ],
      },
      {
        text: 'gitlab',
        children: [
          { text: 'CLI', link: '/reference/cli.html', },
        ],
      },
      {
        text: 'github',
        children: [
          { text: 'CaddyServer', link: '/reference/cli.html', },
        ],
      },
    ],
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
