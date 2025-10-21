<script setup lang="ts">
import type { Person } from "~/sanity/types";

type SimplifiedPerson = Omit<Person, "picture"> & {
  picture: string | null;
};

defineProps({
  person: {
    type: Object as PropType<SimplifiedPerson>,
    required: true,
  },
  date: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="flex items-center">
    <div v-if="person.picture" class="mr-4 h-9 w-9">
      <SanityImage
        :asset-id="person.picture"
        auto="format"
        class="h-full rounded-full object-cover"
        :alt="`${person.firstName} ${person.lastName}`"
      />
    </div>
    <div v-else class="mr-1">By</div>
    <div class="flex flex-col">
      <div v-if="person.firstName && person.lastName" class="font-bold">
        {{ person.firstName }} {{ person.lastName }}
      </div>
      <div v-if="date" class="text-gray-500 text-sm">
        <Date :dateString="date" />
      </div>
    </div>
  </div>
</template>
