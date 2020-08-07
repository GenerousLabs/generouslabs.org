require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: `Generous Labs - Ethical software studio`,
    description: `Generous Labs makes ethical software that we believe enables transformational change.`,
    siteUrl: process.env.SITE_URL || `https://generouslabs.org/`,
    logo: `logo.png`,
    copyright: `© YYYY Flex. All rights reserved.`,
    headerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
    ],
    footerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
    ],
  },
  plugins: [`gatsby-theme-flex`],
};
