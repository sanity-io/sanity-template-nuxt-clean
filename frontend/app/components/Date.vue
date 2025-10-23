<script setup lang="ts">
defineProps({
  dateString: {
    type: String,
    required: false,
  },
});
const formattedDate: (dateString: string) => string = (dateString: string) => {
  if (!dateString) return "";
  try {
    // Parse the date in UTC to ensure consistent server/client rendering
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  } catch (e) {
    return "";
  }
};
</script>

<template>
  <ClientOnly>
    <time v-if="dateString" :dateTime="dateString">
      {{ formattedDate(dateString) }}
    </time>
  </ClientOnly>
</template>
