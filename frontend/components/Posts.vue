<script setup lang="ts">
import type { Post } from "../sanity/types";
defineProps({
  heading: {
    type: String,
    default: null,
  },
  subHeading: {
    type: String,
    default: null,
  },
  posts: {
    type: Array<Post>,
    default: null,
  },
});
</script>

<template>
  <div>
    <h2
      v-if="heading"
      class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
    >
      {{ heading }}
    </h2>
    <p v-if="subHeading" class="mt-2 text-lg leading-8 text-gray-600">
      {{ subHeading }}
    </p>
    <div
      class="mt-6 pt-6 space-y-12 border-t border-gray-200"
      v-for="post in posts"
      :key="post._id"
    >
      <Post :post="post" />
    </div>
  </div>
</template>
