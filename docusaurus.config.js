// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'PythonGuts',
    tagline: 'Жестко учим продвинутые темы по Python',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://insaze.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/python-guts/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'insaze', // Usually your GitHub org/user name.
    projectName: 'python-guts', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'ru',
        locales: ['ru'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            metadata: [
                {name: 'keywords', content: 'python, python advanced, python pro'}
            ],
            navbar: {
                title: 'PythonGuts',
                items: [
                    {
                        type: 'doc',
                        docId: 'notes/README',
                        position: 'left',
                        label: 'Заметки',
                    },
                    {
                        type: 'doc',
                        docId: 'notes/README',
                        position: 'left',
                        label: 'Задачи',
                    },
                    {
                        href: 'https://github.com/insaze/python-guts',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Ссылки',
                        items: [
                            {
                                label: 'Блог',
                                href: 'https://t.me/insaze',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/insaze/docusaurus',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()}, Insaze<br>Built with Docusaurus`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
