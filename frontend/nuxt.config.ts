// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["~/assets/css/main.css"],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxtjs/sanity", "@nuxt/fonts"],
  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    apiVersion: process.env.NUXT_SANITY_API_VERSION || "2025-04-01",
    token: process.env.NUXT_SANITY_API_READ_TOKEN, // Only required when using a private dataset
    visualEditing: {
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL,
      zIndex: 51,
    },
  },
  runtimeConfig: {
    public: {
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["shallowequal", "lodash/startCase.js"],
    },
  },
});
