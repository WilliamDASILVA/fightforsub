module.exports = {
  modules: [
    '@nuxtjs/router',
  ],
  head: {
    htmlAttrs: {
      lang: 'fr',
    },
    title: 'Fight For Sub - La compétition des streamers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '100 streamers s\'affrontent durant 3 parties de PUBG pour savoir qui recevra 99 abonnements Twitch de la part des perdants.' },
      { hid: 'keywords', name: 'keywords', content: 'ZeratoR, PUBG, Fortnite, compétition, esport, Twitch, abonnement, Connaissez-vous Twitch Prime?' },
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
