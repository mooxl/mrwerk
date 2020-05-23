export default {
  mode: "universal",
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
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        innerHTML:
          "var _paq = window._paq || [];_paq.push(['trackPageView']);_paq.push(['enableLinkTracking']);(function() {var u='//matomo.becurly.de/';_paq.push(['setTrackerUrl', u+'matomo.php']);_paq.push(['setSiteId', '2']);var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);})();",
        type: "text/javascript",
        charset: "utf-8"
      }
    ]
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
    ["vue-scrollto/nuxt", { duration: 600, easing: "ease-in" }],
    "@nuxtjs/sitemap"
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
