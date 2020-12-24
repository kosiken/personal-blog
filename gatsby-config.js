module.exports = {
  pathPrefix: '/gtkemu8086',
  siteMetadata: {
    description: 'Personal page of Allison Kosisochukwu',
    locale: 'en',

    title: 'Lions dont back down',
    siteTitleShort: `ldbd`,
    siteDescription: `Out of the box Gatsby Theme for creating documentation websites easily and quickly`,
    siteUrl: `https://rocketdocs.netlify.com`,
    siteAuthor: `@rocketseat`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
    baseDir: 'gtkemu8086-docs',
  },
  plugins: [
    { resolve: `gatsby-plugin-material-ui` },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
  ],
};
