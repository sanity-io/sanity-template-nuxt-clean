<script lang="ts" setup>
import type {
  CallToAction as OriginalCallToAction,
  InfoSection as OriginalInfoSection,
} from "~/sanity/types";

type CallToAction = OriginalCallToAction & {
  _key: string;
};

type InfoSection = OriginalInfoSection & {
  _key: string;
};

const props = defineProps({
  blocks: {
    type: Array as () => Array<CallToAction | InfoSection>,
    required: false,
  },
});
</script>

<template>
  <component
    v-for="(block, index) in blocks"
    :key="block._key"
    :is="resolveComponent(block._type) || 'div'"
    :block="block"
  >
    <div v-if="!resolveComponent(block._type)">
      Component doesn't exist for this block type
    </div>
  </component>
</template>
