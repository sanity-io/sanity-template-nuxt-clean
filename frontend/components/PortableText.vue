<script setup lang="ts">
import ResolvedLink from "~/components/ResolvedLink.vue";
import type { BlockContent } from "../sanity/types";

const serializers = {
  marks: {
    link: ResolvedLink,
  },
};

defineProps<{
  portableText: BlockContent;
}>();
</script>

<template>
  <div v-if="portableText">
    <SanityContent :blocks="portableText" :serializers="serializers" />
  </div>
</template>
