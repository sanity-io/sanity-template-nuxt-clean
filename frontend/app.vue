<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
const { enabled: previewEnabled, inFrame } = useSanityVisualEditingState();
</script>
<!-- TODO: Do I need the code above?  It was a remnant of the old template.  Everything seems to work with it commented out -->
