<script setup lang="ts">
import { postsQuery, settingsQuery } from "~/sanity/queries";
import type { PostsQueryResult, SettingsQueryResult } from "~/sanity/types";

const { data: posts } = await useSanityQuery<PostsQueryResult>(postsQuery);
const { data: settings } =
  await useSanityQuery<SettingsQueryResult>(settingsQuery);

useSiteMetadata({
  title: "Sanity + Nuxt",
  description:
    "This starter template is a powerful web app built with Nuxt for the frontend and Sanity for seamless content management. It includes a standalone Sanity Studio (CMS) with advanced features like Visual Editing, type-safe schemas and queries using Sanity TypeGen , a structured content page builder, and more. The @nuxtjs/sanity toolkit is integrated into the frontend, ensuring a quick and effortless setup.",
  ogImage: settings?.value?.ogImage || "",
});

usePageAnimation();
</script>

<template>
  <div class="relative">
    <div
      class="bg-gradient-to-r from-red-400 w-[0] h-full absolute left-0 left-div"
    ></div>
    <div
      class="bg-gradient-to-l from-nuxt w-[0] h-full absolute right-0 right-div"
    ></div>
    <div class="bg-gradient-to-b from-white w-full h-40 absolute top-0"></div>
    <div
      class="bg-gradient-to-t from-white w-full h-40 absolute bottom-0"
    ></div>
    <div class="container relative">
      <div
        class="mx-auto max-w-2xl pt-10 xl:pt-20 pb-30 space-y-6 lg:max-w-4xl lg:px-12 flex flex-col items-center"
      >
        <div class="flex flex-col gap-4 items-center">
          <div class="text-md leading-6 prose uppercase">
            A starter template for
          </div>
          <h1
            class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black"
          >
            <NuxtLink
              class="underline decoration-red-400 hover:text-red-400 underline-offset-8 hover:underline-offset-4 transition-all ease-out"
              to="https://sanity.io/"
            >
              Sanity
            </NuxtLink>
            +
            <NuxtLink
              class="underline decoration-nuxt hover:text-nuxt underline-offset-8 hover:underline-offset-4 transition-all ease-out"
              to="https://nuxt.com/"
            >
              Nuxt
            </NuxtLink>
          </h1>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-100 flex flex-col items-center">
      <SideBySideIcons />
      <div
        class="container relative mx-auto max-w-2xl pb-20 pt-10 space-y-6 lg:max-w-4xl lg:px-12 flex flex-col items-center"
      >
        <div
          class="prose sm:prose-lg md:prose-xl xl:prose-2xl text-gray-700 prose-a:text-gray-700 font-light text-center"
        >
          <PortableText :portableText="settings?.description ?? []" />
        </div>
      </div>
    </div>
  </div>

  <div v-if="posts" class="border-t border-gray-100">
    <div class="container">
      <aside class="py-12 sm:py-20">
        <Posts
          heading="Recent Posts"
          :subHeading="`These ${posts.length} blog posts are populated from your Sanity Studio.`"
          :posts="posts"
        />
      </aside>
    </div>
  </div>
</template>
