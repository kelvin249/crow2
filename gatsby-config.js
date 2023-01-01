require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Crowlin Circus`,
    description: "Playing with Fire",
    siteUrl: `https://crowlincircus.com`,
    image: "FireIcon.svg"
  },
  plugins: [
    {
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
      "spaceId": process.env.CONTENTFUL_SPACE_ID
    }
  },
    "gatsby-plugin-image",
  //   {
  //     resolve: "gatsby-plugin-sitemap",
  //     options: {
  //       query: `
  //       {
  //         site {
  //           siteMetadata {
  //             siteUrl
  //           }
  //         }
  //         allSitePage {
  //           nodes {
  //             path    }
  //         }
  //       }        
  //     `
  //   }
  // },
  // {
  //   resolve: `gatsby-plugin-goatcounter`,
  //   options: {
  //     // Either `code` or `selfHostUrl` is required.
  //     // REQUIRED IF USING HOSTED GOATCOUNTER! https://[my_code].goatcounter.com
  //     code: 'crowlin',

  //     // REQUIRED IF USING SELFHOSTED GOATCOUNTER!
  //     // selfHostUrl: `https://example.com`,

  //     // ALL following settings are OPTIONAL

  //     // Avoids sending pageview hits from custom paths
  //     exclude: [],

  //     // Delays sending pageview hits on route update (in milliseconds)
  //     pageTransitionDelay: 0,

  //     // Defines where to place the tracking script
  //     // boolean `true` in the head and `false` in the body
  //     head: false,

  //     // Set to true to include a gif to count non-JS users
  //     pixel: false,

  //     // Allow requests from local addresses (localhost, 192.168.0.0, etc.)
  //     // for testing the integration locally.
  //     // TIP: set up a `Additional Site` in your GoatCounter settings
  //     // and use its code conditionally when you `allowLocal`, example below
  //     allowLocal: false,

  //     // Override the default localStorage key more below
  //     localStorageKey: 'skipgc',

  //     // Set to boolean true to enable referrer set via URL parameters
  //     // Like example.com?ref=referrer.com or example.com?utm_source=referrer.com
  //     // Accepts a function to override the default referrer extraction
  //     // NOTE: No Babel! The function will be passes as is to your websites <head> section
  //     // So make sure the function works as intended in all browsers you want to support
  //     referrer: false,

  //     // Setting it to boolean true will clean the URL from
  //     // `?ref` & `?utm_` parameters before sending it to GoatCounter
  //     // It uses `window.history.replaceState` to clean the URL in the
  //     // browser address bar as well.
  //     // This is to prevent ref tracking ending up in your users bookmarks.
  //     // All parameters other than `ref` and all `utm_` will stay intact
  //     urlCleanup: false,
  //   },
  // },
  // {
  //   resolve: 'gatsby-plugin-manifest',
  //   options: {
  //     "icon": "src/images/FireIcon.svg"
  //   }
  // },
   "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "react-burger-menu",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }
]
};