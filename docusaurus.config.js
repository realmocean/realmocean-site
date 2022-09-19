module.exports = {
    title: 'Realm Ocean',
    tagline: 'Superapp Cloud',
    url: 'http://tuvalframework.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'icon/tuval.ico',
    organizationName: 'tuvalframework',
    projectName: 'RealmOcean',
    themeConfig: {
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        navbar: {
            title: 'Realm Ocean',
            logo: {
                alt: 'Tuval Framework Logo',
                src: 'img/tuval-logo.png',
                // srcDark: 'img/logo white.svg'
            },
            hideOnScroll: true,
            items: [{
                    to: '/',
                    position: 'left',
                    label: 'Home',
                },
                {
                    to: '/appstore',
                    position: 'left',
                    label: 'App Store',
                },
                {
                    type: 'docsVersion',
                    position: 'left',
                    label: 'Documentation',
                },
                /* {
                    type: 'docsVersionDropdown',
                    position: 'right',
                }, */
                {
                    to: 'hireanexpert',
                    position: 'right',
                    label: 'Hire an expert',
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },

                {
                    type: 'doc',
                    docId: 'components/inputs/textbox',
                    position: 'left',
                    label: 'Tutorials',
                    activeSidebarClassName: 'navbar__link--active',
                },

                {
                    to: 'blog',
                    label: 'Blog',
                    position: 'left'
                },
                {
                    href: 'https://app.realmocean.com',
                    html: '<b>Log In</b>',
                    position: 'right',
                    className: 'login-button',
                    target: '_self',
                    'aria-label': 'GitHub repository'
                }
                /*   {
                      alt: 'Github repository',
                      href: 'https://github.com/tuvalframework/framework',
                      className: 'header-gitlab-link',
                      position: 'right'
                  }, */
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'Introduction',
                        to: 'docs/',
                    }],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/tuvalframework',
                        },

                    ],
                },
                {
                    title: 'More',
                    items: [{
                        label: 'Github repository',
                        href: 'https://github.com/tuvalframework/framework',
                    }],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Tuvalsoft`,
        },
        /*   algolia: {
              appId: '6Q4OIC1WEX',
              apiKey: 'c2f659f7d38e9b697dfa69f1e1dd1407',
              indexName: 'website',
              contextualSearch: true,
          },*/
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true,
            respectPrefersColorScheme: true,
        },
        /*   prism: {
              additionalLanguages: ['java'],
          }, */
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'tr'],
        localeConfigs: {
            en: {
                label: 'English',
                direction: 'ltr',
            },
            es: {
                label: 'Turkish',
                direction: 'ltr',
            },
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                gtag: {
                    trackingID: 'G-7PQWP6VB17',
                    anonymizeIP: true,
                },
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://gitlab.com/aweframework/awe/edit/master/website/',
                    includeCurrentVersion: true,
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://gitlab.com/aweframework/awe/edit/master/website/',
                    postsPerPage: 3,
                    feedOptions: {
                        type: 'all',
                        language: 'es',
                        copyright: `Copyright © ${new Date().getFullYear()} Almis, Inc.`,
                    },
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};