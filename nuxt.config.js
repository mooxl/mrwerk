export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "M&R Werk",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Mehr als Schrott"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/scss/global.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/style-resources",
    [
      "nuxt-leaflet",
      {
        /* module options */
      }
    ],
    ["vue-scrollto/nuxt", { duration: 600, easing: "ease-in" }]
  ],
  /*
   ** Loading SCSS globally
   */
  styleResources: {
    scss: ["~/assets/scss/variables.scss", "~/assets/scss/fonts.scss"]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
