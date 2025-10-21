<script setup lang="ts">
import type { InfoSection } from "~/sanity/types";

defineProps({
  block: {
    type: Object as PropType<InfoSection>,
    required: true,
  },
});
</script>

<template>
  <div class="container my-12">
    <div class="max-w-3xl">
      <h2
        v-if="block?.heading"
        class="text-2xl md:text-3xl lg:text-4xl font-bold"
      >
        {{ block.heading }}
      </h2>
      <span
        v-if="block?.subheading"
        class="block mt-4 mb-8 text-lg uppercase font-light text-gray-900/70"
      >
        {{ block.subheading }}
      </span>
      <div class="prose prose-a:text-red-500 mt-4" v-if="block.content">
        <PortableText :portableText="block.content" />
      </div>
    </div>
  </div>
</template>
