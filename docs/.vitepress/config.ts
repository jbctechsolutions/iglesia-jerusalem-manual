import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'IJC Production Manual',
  description: 'Technical documentation for Iglesia Jerusalem Charlotte AV production system',

  base: '/iglesia-jerusalem/manual/',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quick Start', link: '/getting-started/quick-start' },
      { text: 'System Status', link: '/reference/system-status' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Quick Start', link: '/getting-started/quick-start' },
          { text: 'First Service', link: '/getting-started/first-service' }
        ]
      },
      {
        text: 'Operations',
        collapsed: false,
        items: [
          { text: 'Equipment Guide', link: '/operations/equipment-guide' },
          { text: 'Streaming', link: '/operations/streaming' },
          { text: 'Recording', link: '/operations/recording' }
        ]
      },
      {
        text: 'Troubleshooting',
        collapsed: false,
        items: [
          { text: 'Common Issues', link: '/troubleshooting/common-issues' },
          { text: 'Emergency Procedures', link: '/troubleshooting/emergency-procedures' }
        ]
      },
      {
        text: 'Reference',
        collapsed: false,
        items: [
          { text: 'System Status', link: '/reference/system-status' },
          { text: 'Shortcuts', link: '/reference/shortcuts' },
          { text: 'Network Info', link: '/reference/network-info' }
        ]
      }
    ],

    footer: {
      message: 'Iglesia Jerusalem Charlotte',
      copyright: 'Production Team Documentation'
    },

    search: {
      provider: 'local'
    }
  },

  outDir: '../dist',

  // Ignore localhost links (they only work when running locally)
  // Also ignore internal links with base path (will be fixed in future PR)
  ignoreDeadLinks: [
    /^http:\/\/localhost/,
    /^http:\/\/10\.100\.0\./,
    /^http:\/\/companion\.ijc\.local/,
    /^http:\/\/control\.ijc\.local/,
    /\/iglesia-jerusalem\/manual\//
  ]
})
