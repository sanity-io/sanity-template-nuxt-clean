<script setup lang="ts">
import type { Post } from "../sanity/types";

defineProps({
  post: {
    type: Object as PropType<Post>,
    required: true,
  },
});
</script>

<template>
  <article class="flex max-w-xl flex-col items-start justify-between">
    <div class="text-gray-500 text-sm">
      <Date :dateString="post.date" />
    </div>

    <h3 class="mt-3 text-2xl font-semibold">
      <nuxt-link
        class="hover:text-red-500 underline transition-colors"
        :to="`/posts/${post.slug.current}`"
      >
        {{ post.title }}
      </nuxt-link>
    </h3>
    <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
      {{ post.excerpt }}
    </p>
  </article>
</template>
