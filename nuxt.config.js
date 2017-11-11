module.exports = {
  modules: [
    '@nuxtjs/router',
  ],
  head: {
    title: 'Fight For Sub - La compétition des streamers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
    ],
  },
  css: [
    '~/node_modules/normalize.css/normalize.css',
    '~/node_modules/vuetify/dist/vuetify.min.css',
  ],
  loading: { color: '#28d244' },
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/vue-lazyload.js',
    '~/plugins/moment.js',
  ],
  build: {
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
