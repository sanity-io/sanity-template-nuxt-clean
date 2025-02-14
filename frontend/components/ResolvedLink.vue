<script setup lang="ts">
import { linkResolver } from "~/lib/utils";

const props = defineProps({
  link: {
    type: Object,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
});

// console.log("LINKprops:", props);

const resolvedLink = computed(() => {
  return linkResolver(props.link);
});
// console.log("props.link:", props.link);
// console.log("resolvedLink:", resolvedLink.value);
</script>

<template>
  <NuxtLink
    v-if="resolvedLink"
    :to="resolvedLink"
    :target="link?.openInNewTab ? '_blank' : undefined"
    :rel="link?.openInNewTab ? 'noopener noreferrer' : undefined"
    :class="className"
  >
    <slot />
  </NuxtLink>
  <span v-else :class="className">
    <slot />
  </span>
</template>
