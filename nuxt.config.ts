import Aura from "@primevue/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@primevue/nuxt-module", "@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
  primevue: {
    autoImport: true,
    usePrimeVue: true,
    options: {
      ripple: true,
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: "dark",
          cssLayer: null,
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      baseApiUrl: "https://date.nager.at/api/v3",
    },
  },
});
