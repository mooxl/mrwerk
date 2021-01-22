export default {
  target: "static",
  /*
   ** Headers of the page
   */
  head: {
    title: "M&R Werk",
    __dangerouslyDisableSanitizers: ["script"],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Schrottplatz, Schrottabholung, Iserlohn, Alteisen, Ankauf Felgen, Verkauf Felgen, Demontage, Metallabholung, Metallankauf, Kupferankauf, Edelstahle Ankauf,  Altmetallhandel, Kompletträder Handel, Ersatzteil Handel, Nachhaltiges Recycling, Metall verkaufen, Schrott abholen lassen"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Das M&R Werk Iserlohn bietet den Komplettservice im Bereich Schrott & Altmetall Handel. Wir holen deinen Schrott ab und recyclen in fachgerecht und nachhaltig. Das beinhaltet auch die Demontage, sowie die Verwiegung von Metallen vor Ort. Alternativ bieten wir für deinen Schrott  mobile Gitterboxen die auf Abruf von uns getauscht werden. Ruf uns unverbindlich an und lass dich beraten! Dein Schrott gehört noch lange nicht zum alten Eisen!"
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
    ["nuxt-leaflet", {}],
    ["vue-scrollto/nuxt", { duration: 600, easing: "ease-in" }],
    [
      "nuxt-matomo",
      {
        matomoUrl: "//matomo.becurly.de/",
        siteId: 2,
        cookies: false
      }
    ],
    "@nuxtjs/sitemap"
  ],
  sitemap: {
    hostname: "https://www.mr-werk-iserlohn.de/"
  },
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
