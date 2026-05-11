// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/sanity", "@nuxt/fonts"],
  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    apiVersion: process.env.NUXT_SANITY_API_VERSION || "2025-10-20",
    token: process.env.NUXT_SANITY_API_READ_TOKEN, // Only required when using a private dataset
    typegen: {
      enabled: true,
      schemaTypesPath: "../studio/src/schemaTypes",
    },
    visualEditing: {
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL,
      stega: true,
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
      include: [
        "lodash/startCase.js",
        "@nuxtjs/sanity > @sanity/visual-editing > @sanity/insert-menu",
        "@nuxtjs/sanity > @sanity/visual-editing > @sanity/mutate > lodash/groupBy.js",
        "@nuxtjs/sanity > @sanity/visual-editing > @sanity/ui > styled-components",
        "@nuxtjs/sanity > @sanity/visual-editing > @sanity/visual-editing > react-is",
        "@nuxtjs/sanity > @sanity/visual-editing > react",
        "@nuxtjs/sanity > @sanity/visual-editing > react/jsx-runtime",
        "@nuxtjs/sanity > @sanity/visual-editing > react-dom",
        "@nuxtjs/sanity > @sanity/visual-editing > react-dom/client",
        "@nuxtjs/sanity > @sanity/visual-editing > react-compiler-runtime",
        "@sanity/client",
        "@nuxtjs/sanity > @sanity/client > @sanity/visual-editing",
        "groq",
      ],
    },
  },
});
