// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/scripts", "@nuxt/test-utils", "@nuxtjs/tailwindcss", "shadcn-nuxt"],
  tailwindcss: {
    exposeConfig: true,
    viewer: { endpoint: "/_tailwind", exportViewer: true },
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});
