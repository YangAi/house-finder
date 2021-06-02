const colors = require('./tailwind.config').theme.colors

export default {
  server: {
    host: '0.0.0.0',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - super-house-finder',
    title: 'super-house-finder',
    htmlAttrs: {
      lang: 'zh',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/index.scss'],

  router: {
    middleware: ['meta'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/plugins', '~/plugins/axios', '~/plugins/api'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/tailwindcss',
    // https://github.com/fumeapp/nuxt-storm
    'nuxt-storm',
    'nuxt-vite',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    'vue-toastification/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.VUE_APP_API_URL,
  },

  /*
   ** Server Middleware
   */
  serverMiddleware: {
    '/api': '~/server',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.primary,
          accent: colors.accent,
          secondary: colors.secondary,
          background: colors.background,
          info: colors.info,
          warning: colors.warning,
          error: colors.error,
          success: colors.success,
        },
      },
    },
  },
  eslint: {
    cache: false,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
