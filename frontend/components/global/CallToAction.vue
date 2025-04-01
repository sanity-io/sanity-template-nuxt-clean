<script setup lang="ts">
import type { CallToAction } from "~/sanity/types";

defineProps({
  block: {
    type: Object as PropType<CallToAction>,
    required: true,
  },
});
</script>

<template>
  <div class="container my-12">
    <div class="bg-gray-50 border border-gray-100 rounded-2xl max-w-3xl">
      <div class="px-12 py-12 flex flex-col gap-6">
        <div class="max-w-xl flex flex-col gap-3">
          <h2
            v-if="block.heading"
            class="text-3xl font-bold tracking-tight text-black sm:text-4xl"
          >
            {{ block.heading }}
          </h2>
          <p v-if="block.text" class="text-lg leading-8 text-gray-600">
            {{ block.text }}
          </p>
        </div>

        <div
          v-if="block.link"
          class="flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0"
        >
          <ResolvedLink
            :link="block.link"
            class="rounded-full flex gap-2 mr-6 items-center bg-black hover:bg-red-500 focus:bg-nuxt py-3 px-6 text-white transition-colors duration-200"
          >
            {{ block.buttonText }}
          </ResolvedLink>
        </div>
      </div>
    </div>
  </div>
</template>
