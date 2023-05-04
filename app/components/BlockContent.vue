<script>
export default {
  props: {
    blocks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <SanityContent :blocks="blocks" />
</template>
