<script setup lang="ts">
import { format } from "date-fns";

defineProps({
  dateString: {
    type: String,
    required: false,
  },
});
const formattedDate: (dateString: string) => string = (dateString: string) => {
  return dateString ? format(new Date(dateString), "LLLL d, yyyy") : "";
};
</script>

<template>
  <time v-if="dateString" :dateTime="dateString">
    {{ formattedDate(dateString) }}
  </time>
</template>
