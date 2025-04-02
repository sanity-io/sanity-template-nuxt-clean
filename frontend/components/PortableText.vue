<script setup lang="ts">
import ResolvedLink from "~/components/ResolvedLink.vue";

const serializers = {
  marks: {
    link: ResolvedLink,
    underline: "u",
    code: "code",
    "strike-through": "s",
  },
};

defineProps<{
  portableText: any[];
}>();
</script>

<template>
  <div v-if="portableText">
    <SanityContent :blocks="portableText" :serializers="serializers" />
  </div>
</template>
