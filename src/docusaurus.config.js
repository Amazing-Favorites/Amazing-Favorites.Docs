/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Amazing Favorites",
  tagline: "Amazing Favorites",
  url: "https://af.newbe.pro",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "images/icon/favicon.ico",
  organizationName: "newbe36524", // Usually your GitHub org/user name.
  projectName: "Amazing-Favorites", // Usually your repo name.
  i18n: {
    defaultLocale: "en-US",
    locales: ["zh-Hans"],
    localeConfigs: {
      "en-US": { label: "English" },
      "zh-Hans": { label: "简体中文" },
    },
  },
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: ["appInstalled", "queryString"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/images/icon/apple-touch-icon.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/images/icon/site.webmanifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
        ],
      },
    ],
  ],
  themeConfig: {
    prism: {
      defaultLanguage: "csharp",
      additionalLanguages: ["powershell", "csharp", "sql"],
      // theme: require("prism-react-renderer/themes/github"),
      // darkTheme: require("prism-react-renderer/themes/palenight"),
    },
    // algolia: {
    //   apiKey: "6e0145abb5d335f273b4d8205992745f",
    //   indexName: "newbe",

    //   // Optional: see doc section bellow
    //   contextualSearch: true,

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   //... other Algolia params
    // },
    navbar: {
      title: "Amazing Favorites",
      logo: {
        alt: "Amazing Favorites",
        src: "https://www.newbe.pro/images/logo/main-logo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "用户手册",
          position: "left",
        },
        // { to: "blog", label: "博客", position: "left" },
        // right
        // {
        //   href: "https://jq.qq.com/?_wv=1027&k=vRi0usiG",
        //   label: "QQ 群(610394020)",
        //   position: "right",
        // },
        {
          href: "https://github.com/newbe36524/Amazing-Favorites",
          label: "GitHub",
          position: "right",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
          // dropdownItemsAfter: [
          //   {
          //     to: '/versions',
          //     label: 'All versions',
          //   },
          // ],
        },
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              to: "https://crwd.in/amazing-favorites",
              label: "Help Us Translate",
            },
          ],
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "用户手册",
          items: [
            {
              label: "项目简介",
              to: "docs/",
            },
            // {
            //   label: "快速入门",
            //   to: "docs/01-0-Quick-Start/",
            // },
          ],
        },
        {
          title: "参与讨论",
          items: [
            // {
            //   label: "QQ 群(610394020)",
            //   href: "https://jq.qq.com/?_wv=1027&k=vRi0usiG",
            // },
          ],
        },
        {
          title: "更多资源",
          items: [
            // {
            //   label: "项目博客",
            //   to: "blog",
            // },
            {
              label: "个人博客",
              href: "https://www.newbe.pro",
            },
            {
              label: "GitHub",
              href: "https://github.com/newbe36524/Amazing-Favorites",
            },
          ],
        },
      ],
      copyright: `MIT ${new Date().getFullYear()} newbe36524. Built with Docusaurus.`,
    },
    gtag: {
      trackingID: "UA-100658571-3",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/newbe36524/Amazing-Favorites.Docs/edit/master/src/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/newbe36524/Amazing-Favorites.Docs/edit/master/src/blog/",
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
          blogSidebarCount: 5, //"ALL",
          truncateMarker: /<!-- more -->/,
          feedOptions: {
            type: "all", // required. 'rss' | 'feed' | 'all'
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
