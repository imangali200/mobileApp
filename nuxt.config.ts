// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  components: true,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/ionic", "@nuxtjs/tailwindcss"],
  css: ["@splidejs/vue-splide/css"],
  ionic: {
    css: {
      utilities: true,
    },
  },
  imports: {
    autoImport: true,
  },
});
