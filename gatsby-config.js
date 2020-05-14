module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wd2010`,
        short_name: `wd2010`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `wd2010的博客`,
    author: `wd2010`,
    description: `记录一些日常学习`,
    social: [
      
      {
        name: `github`,
        url: `https://github.com/wd2010`,
      },
      {
        name: `掘金`,
        url: `https://juejin.im/user/57df3bc70bd1d00057f81266`,
      }
    ],
  },
  pathPrefix: '/blog'
}
