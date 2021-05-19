module.exports = {
  title: 'Amplication Docs',
  tagline: 'Welcome to the Amplication documentation',
  url: 'https://amplication.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'amplication/amplication', // Usually your GitHub org/user name.
  projectName: 'amplication', // Usually your repo name.
  themeConfig: {
    
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      // Hides the switch in the navbar
      disableSwitch: true,
    },
    navbar: {
      hideOnScroll: false,
      title: '',
      logo: {
        alt: 'Amplication',
        src: 'img/amplication-logo.svg',
        srcDark: 'img/amplication-logo-dark.svg',
        href:"https://amplication.com/"
      },
      items: [
        
        {
          href: 'https://github.com/amplication/amplication',
          label: 'GitHub',
          position: 'right',
          activeSidebarClassName: 'yuval'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/b8MrjU6',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/amplication',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/amplicationcom/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/amplication',
            },
          ],
        },
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} amplication. Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: 'UA-177067786-1',
      
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/amplication/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/amplication/docs/edit/main/blog/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css'),require.resolve('./src/css/dark-theme.css')],
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/getting-started', // string
            from: ['/guides/getting-started'], 
          },
          {
            to: '/docs/getting-started/dev-env', // string
            from: ['/docs/how-to/dev-env'], 
          },
        ],
      },
    ],
  ],
  clientModules: [
    require.resolve('./src/js/global.js'),
  ],
};
