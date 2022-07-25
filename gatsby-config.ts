import type { GatsbyConfig } from 'gatsby'

const productionPlugins = [
  'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/icon.png',
    },
  },
]
const developmentPlugins = [
  /* {
          resolve: 'gatsby-source-contentful',
          options: {
            accessToken: '',
            spaceId: '',
          },
        }, */
  'gatsby-plugin-image',
  'gatsby-plugin-react-helmet',
  `gatsby-plugin-sass`,
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /icons/, // See below to configure properly
      },
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/',
    },
    __key: 'images',
  },
  {
    resolve: 'gatsby-plugin-webfonts',
    options: {
      formats: ['woff2'],
      fonts: {
        google: [
          {
            family: 'Open Sans',
            variants: [400, 600],
          },
          {
            family: 'Montserrat',
            variants: [600, 700],
          },
          {
            family: 'Baloo 2',
            variants: [400, 500, 600, 700],
          },
        ],
      },
    },
  },
]

const plugins =
  process.env.NODE_ENV !== 'development' ? [...developmentPlugins, ...productionPlugins] : developmentPlugins

const config: GatsbyConfig = {
  siteMetadata: {
    title: `dg-press`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins,
}

export default config
