import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - frontend.shymkent-visit',
    title: 'frontend.shymkent-visit',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:"stylesheet", href:"https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
        integrity:"sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p",crossorigin:"anonymous"
      },

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      '~/assets/frontend.scss'
  ],




  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n',
    '@nuxtjs/axios'
  ],
  i18n: {
    locales: ['en', 'ru', 'kz'],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en:require("./static/en.json"),
        ru:require("./static/ru.json"),
        kz:require("./static/kz.json"),
      },
      vuex: { moduleName: 'i18n', syncLocale: true, syncMessages: false, syncRouteParams: true }
    }
  },

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: "http://backend.visit-shymkent/api/",
    credentials: false,
    proxyHeaders: false
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  }
}
