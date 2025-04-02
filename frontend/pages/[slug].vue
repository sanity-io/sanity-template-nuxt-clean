<script setup lang="ts">
import { pageQuery } from "~/sanity/queries";
import type { PageQueryResult } from "~/sanity/types";

const { data: page } = await useSanityQuery<PageQueryResult>(pageQuery, {
  slug: useRoute().params.slug,
});

// This is needed to correctly set the studioUrl
const runtimeConfig = useRuntimeConfig();

useSiteMetadata({
  title: page?.value?.seoTitle || page?.value?.heading,
  description: page?.value?.seoDescription || page?.value?.subheading,
});
</script>

<template>
  <div class="my-12 lg:my-24" v-if="page">
    <div class="container">
      <div class="pb-6 border-b border-gray-100">
        <div class="max-w-3xl">
          <h2
            v-if="page.heading"
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl"
          >
            {{ page.heading }}
          </h2>
          <p
            class="mt-4 text-base lg:text-lg leading-relaxed text-gray-600 uppercase font-light"
          >
            {{ page.subheading }}
          </p>
        </div>
      </div>
    </div>
    <div>
      <div v-if="page.pageBuilder && page.pageBuilder.length > 0">
        <PageBuilder :blocks="page.pageBuilder" />
      </div>
      <div v-else>
        <h2 class="text-2xl font-semibold text-gray-900">
          This page has no Page Builder content!
        </h2>
        <p class="mt-2 text-base text-gray-500">
          Open the page in Sanity Studio to add content.
        </p>
        <div v-if="runtimeConfig.public.studioUrl" class="mt-10 flex">
          <NuxtLink
            class="rounded-full flex gap-2 mr-6 items-center bg-black hover:bg-red-500 focus:bg-nuxt py-3 px-6 text-white transition-colors duration-200"
            :to="`${runtimeConfig.public.studioUrl}/structure/intent/edit/template=page;type=page;path=pageBuilder;id=${page._id}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            Add content to this page
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
