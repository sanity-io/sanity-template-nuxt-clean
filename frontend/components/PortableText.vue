<script setup lang="ts">
import ResolvedLink from "~/components/ResolvedLink.vue";
import type {
  PortableTextBlock,
  ArbitraryTypedObject,
  PortableTextSpan,
  PortableTextMarkDefinition,
} from "@portabletext/types";

const serializers = {
  marks: {
    link: ResolvedLink,
    underline: "u",
    code: "code",
    "strike-through": "s",
  },
};

defineProps<{
  portableText: PortableTextBlock<
    PortableTextMarkDefinition,
    ArbitraryTypedObject | PortableTextSpan,
    string,
    string
  >[];
}>();
</script>

<template>
  <div v-if="portableText">
    <SanityContent :blocks="portableText" :serializers="serializers" />
  </div>
</template>
