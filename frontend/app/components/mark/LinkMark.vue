<script setup lang="ts">
import type { PortableTextMarkComponentProps } from '@nuxtjs/sanity/runtime/types.js';

defineProps<PortableTextMarkComponentProps>();
</script>
<template>
  <ResolvedLink v-if="value?.link" :link="value.link">
    <slot />
  </ResolvedLink>
  <span v-else>
    <slot />
  </span>
</template>