<script setup lang="ts">
import { h } from "vue";
import type { PortableTextMarkComponentProps } from "@portabletext/vue";
import type { BlockContent, Link } from "~/sanity/types";
import ResolvedLink from "~/components/ResolvedLink.vue";

const components = {
  marks: {
    link: (props: PortableTextMarkComponentProps) =>
      props.value
        ? h(ResolvedLink, { link: props.value.link }, () => props.text)
        : h("span", {}, props.text),
    underline: (props: PortableTextMarkComponentProps) =>
      h("u", {}, props.text),
    code: (props: PortableTextMarkComponentProps) => h("code", {}, props.text),
    "strike-through": (props: PortableTextMarkComponentProps) =>
      h("s", {}, props.text),
  },
};

defineProps<{
  portableText: BlockContent;
}>();
</script>

<template>
  <div v-if="portableText">
    <SanityContent :value="portableText" :components="components" />
  </div>
</template>
