module.exports = {
  siteMetadata: {
    title: 'Written App',
    tagline: 'Tell your story.',
    titleDescription: 'New web application for screenwriters',
    description: 'Written App helps writers create and collaborate to make writting screenplays, novels, and blogs; creative, effective, and proffessional. Tell your story.',
    image: 'ImacSocial.af60ef54.png',
    gverification: 'sU_agIsWKce7XYoxt4f9yRmlr6XZSw4GqCZu6LQlMCo',
    keywords: ['screenplay, screenplay software, free screenplay software, screen play software, best screenplay software, screenwriter software, free screenwriter software, script writer software, best screenwritting software']
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-121226116-2",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://inaurastudios.us18.list-manage.com/subscribe/post?u=c96c18d057c48b5a5c698e040&amp;id=7b1d3d1a01', // why not a server var here?
      },
    },
  ],
  polyfill: true,
}