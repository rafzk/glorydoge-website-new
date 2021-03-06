module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'GloryDoge',
    titleTemplate: '%s · Blockchain platforms & tools to kickstart ideas',
    description:
      "Building a secure DeFi ecosystem to help bring creative ideas to life and protect early investors' funds.",
    url: 'https://glorydogecoin.com',
    image: '/images/glorydoge.png',
    twitterUsername: '@GloryDogeCoin',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-P3HL9SH',
        includeInDevelopment: false,
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-twitter',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
}
