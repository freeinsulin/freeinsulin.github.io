require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `The Free Insulin Project`,
    description: `Insulin belongs to the people.`,
    author: `@gatsbyjs`,
    siteUrl: `https://freeinsulin.github.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
  ],
}
