const { renderHighlight } = require("@mathssyfy/markdown-it-loader/lib/renderHighlight.js");

module.exports = {
  /*
   ** Headers of the page
   */
  css: [
    '@/assets/styles/theme.styl',
    'prismjs/themes/prism-dark.css'
  ],
  head: {
    title: 'nuxt-starter-template',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  modules: [
     '@mathssyfy/markdown'
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    highlight: renderHighlight,
    
    use: [     
      'markdown-it-emoji',
      "@mathssyfy/markdown-it-highlightlines",
      "@mathssyfy/markdown-it-prewrapper",
      "@mathssyfy/markdown-it-linenumbers"
    ]
  },
  
  plugins: [
    '~/plugins/global-components-loader.js',
    '@/plugins/global.js'
  ],
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
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

