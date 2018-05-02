const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  
 // router: {
 // base: '/tvrims/'
    // base:'/tvr/tvrims/dist'
  // },
 modules: [
  '@nuxtjs/axios',
  ],

  head: {
    // title: 'tvr-iims',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      { src:'https://use.fontawesome.com/releases/v5.0.9/js/all.js'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Rajdhani:400,500' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  // loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins:[
    { src: '~/plugins/carousel3d.js', ssr: false }
    // { src: '~/plugins/bootstrap.js', ssr: false },
    // '~/plugins/axios'
  ],
  css:[
    'swiper/dist/css/swiper.css',
    'assets/css/bootstrap.css',
    '~/assets/css/animate.css'

  ],
  build: {
    /*
    ** Run ESLint on save
    */
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      })
    ],
    vendor:['axios', 'jquery'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
