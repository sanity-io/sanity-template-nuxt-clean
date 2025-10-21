<script setup lang="ts">
import { ref } from "vue";

const show = ref(true);

const route = useRoute();
const { enabled: previewEnabled, inFrame } = useSanityVisualEditingState();
</script>

<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div
    v-if="previewEnabled && !inFrame"
    aria-live="assertive"
    class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-end sm:p-6"
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="show"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5"
        >
          <div class="p-4">
            <div class="flex items-center">
              <div class="flex w-0 flex-1 justify-between">
                <p class="w-0 flex-1 text-sm font-medium text-gray-900">
                  Preview Mode Enabled
                </p>
                <a
                  :href="`/preview/disable?redirect=${route.fullPath}`"
                  class="ml-3 shrink-0 rounded-md bg-white text-sm font-medium text-red-400 hover:text-gray-900 hover:underline focus:outline-none focus:underline"
                >
                  Disable
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
