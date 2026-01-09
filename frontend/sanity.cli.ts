/**
 * Sanity CLI Configuration for Frontend
 * Configures TypeGen for the Nuxt frontend workspace
 */
import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.NUXT_SANITY_PROJECT_ID || ''
const dataset = process.env.NUXT_SANITY_DATASET || 'production'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },

  typegen: {
    path: './app/sanity/queries.{ts,js}',
    schema: '../sanity.schema.json',
    generates: './app/sanity/types.ts',
    overloadClientMethods: true,
  },
})
