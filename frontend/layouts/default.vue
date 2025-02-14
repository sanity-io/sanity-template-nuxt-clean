<template>
  <div class="bg-white text-black font-sans">
    <section class="min-h-screen pt-24">
      <!-- The <Toaster> component is responsible for rendering toast notifications used in /app/client-utils.ts and /app/components/DraftModeToast.tsx -->
      <!-- <Toaster /> -->
      <!-- <DraftModeToast /> TODO: Implement DraftModeToast -->
      <!-- The <SanityLive> component is responsible for making all sanityFetch calls in your application live, so should always be rendered. -->
      <!-- <SanityLive @error="handleError" /> -->
      <!-- <a
          v-if="previewEnabled && !inFrame"
          :href="`/preview/disable?redirect=${route.fullPath}`"
          class="preview-toggle"
          >
          <span>Preview Enabled</span>
          <span>Disable Preview</span>
        </a> -->
      <Header />
      <main class=""><slot /></main>
      <Footer />
    </section>
  </div>
  <Toast />
</template>
