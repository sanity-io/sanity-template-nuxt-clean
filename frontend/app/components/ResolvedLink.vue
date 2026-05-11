<script setup lang="ts">
import { linkResolver } from "~/lib/utils";

const props = defineProps({
  link: {
    type: Object as PropType<Link>,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
});

const resolvedLink = computed(() => {
  return linkResolver(props.link);
});
</script>

<template>
  <NuxtLink
    v-if="resolvedLink"
    :class="className"
    :to="resolvedLink"
    :target="link?.openInNewTab ? '_blank' : undefined"
    :rel="link?.openInNewTab ? 'noopener noreferrer' : undefined">
    <slot />
  </NuxtLink>
  <span v-else :class="className">
    <slot />
  </span>
</template>
