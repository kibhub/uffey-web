import pkg from './package'

export default {
  mode : 'universal',

  /*
   ** Headers of the page
   */
  head : {
    title: pkg.name,
    meta: [
      {
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  buildModules : ['@nuxtjs/vuetify'],
  vuetify : {
    theme: {
      themes: {
        light: {
          primary: '#cccdfc',
          secondary: '#03a9f4',
          accent: '#00bcd4',
          error: '#009688',
          warning: '#f44336',
          info: '#4caf50',
          success: '#e91e63'
        }
      }
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading : {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css : [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins : [],

  /*
   ** Nuxt.js modules
   */
  modules : ['@nuxtjs/pwa'],

  /*
   ** Build configuration
   */
  build : {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config
          .module
          .rules
          .push({enforce: 'pre', test: /\.(js|vue)$/, loader: 'eslint-loader', exclude: /(node_modules)/})
      }
    }
  }
}
