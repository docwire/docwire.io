// @ts-check

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// Automatically detect the repository name for GitHub Pages deployment (e.g. in forks)
const githubRepository = (process.env.GITHUB_REPOSITORY || '').trim();
const parts = githubRepository ? githubRepository.split('/') : [];
const [organizationName, projectName] = parts.length === 2
  ? parts
  : ['docwire', 'docwire.io']; // Default to main repo

const currentBranch = process.env.CURRENT_BRANCH || 'master';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docwire',
  tagline: 'Award-winning modern data processing in C++20',
  favicon: 'img/FaviconLogo.png',

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  organizationName, // Your GitHub username
  projectName, // Your repo name

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl:
            `https://github.com/${organizationName}/${projectName}/tree/${currentBranch}/`,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Docwire Logo',
          src: 'img/logoDocWire.JPG',
        },
        items: [
          {to: '/about-us', label: 'About Us', position: 'left'},
          {to: '/showcases', label: 'Showcases', position: 'left'},
          {
            href: 'https://docwire.readthedocs.io/',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/docwire/docwire/releases',
            label: 'Download',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/contact-us', label: 'Contact Us', position: 'right'},
          {
            href: 'https://github.com/docwire/docwire',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                to: '/privacy',
              },
              {
                label: 'Terms of Use',
                to: '/terms-of-service',
              },
            ],
          },
        ],
        copyright: `© DocWire SDK<br/>© SILVERCODERS Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;