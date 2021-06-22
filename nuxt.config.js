export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap',
      },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/reset.css', '~/assets/scss/style.scss'],
  styleResources: {
    scss: ['~/assets/scss/_color.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/day.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/templates',
    '~/components/atoms',
    '~/components/molecules',
    '~/components/organisms',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyCoNNo9b_saSnsaTKeYJseOWOPp6llV34Y',
          authDomain: 'nuxt-app-6ffca.firebaseapp.com',
          projectId: 'nuxt-app-6ffca',
          storageBucket: 'nuxt-app-6ffca.appspot.com',
          messagingSenderId: '568178615405',
          appId: '1:568178615405:web:e0244d169159ddb95acb64',
        },
        services: {
          auth: true,
          firestore: true,
          storage: true,
          database: true,
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
