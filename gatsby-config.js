module.exports = {
  siteMetadata: {
    title: `Emmanuel Baptist Church`,
    description: `Welcome to the website of Emmanuel Baptist Church, based in Gallup, New Mexico. Emmanual Baptist Church holds services on Sundays and Wednesdays lead by Pastor Mike Kleeberger.`,
    author: `Jeremiah Perez`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emmanuel Baptist Church`,
        short_name: `EmmanuelBaptistChurch`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/book.png`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
