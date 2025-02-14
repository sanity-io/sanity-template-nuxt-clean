<script setup lang="ts">
import ResolvedLink from "~/components/ResolvedLink.vue";
import type { BlockContent } from "../sanity/types";

const serializers = {
  marks: {
    // link: ({ children, value: link }) => {
    //   return <ResolvedLink link={link}>{children}</ResolvedLink>;
    // },
    link: ResolvedLink,
    // link: ({ children, value: link }) => {
    //   // Pass props to ResolvedLink
    //   return h(ResolvedLink, { link }, children);
    // },
  },
};

const props = defineProps({
  portableText: {
    type: (Array as PropType<BlockContent>) || [],
    required: true,
  },
});
</script>

<template>
  <div v-if="portableText">
    <SanityContent :blocks="portableText" :serializers="serializers" />
  </div>
</template>
