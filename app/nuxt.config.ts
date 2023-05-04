// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/sanity",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "IBM Plex Mono": [500, 700],
          Inter: [500, 700, 800],
          "PT Serif": [400, 700],
          download: true,
          inject: true,
        },
      },
    ],
  ],
  sanity: {
    projectId: process.env.NUXT_ENV_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_ENV_SANITY_DATASET,
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: "2021-03-25",
  },
  postcss: {
    plugins: {
      autoprefixer: {},
      "postcss-nested": {},
    },
  },
});
