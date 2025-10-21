<template>
  <footer class="bg-gray-50 border-gray-100 border-t">
    <div class="container">
      <div class="flex flex-col items-center py-28 lg:flex-row">
        <h3
          class="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-5xl"
        >
          Built with Sanity + Nuxt.
        </h3>
        <div
          class="flex flex-col gap-3 items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4"
        >
          <a
            href="https://github.com/sanity-io/sanity-template-nuxt-clean"
            class="rounded-full flex gap-2 items-center bg-black hover:bg-red-500 focus:bg-nuxt py-3 px-6 text-white transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <a href="https://nuxt.com/docs" class="mx-3 hover:underline">
            Read Nuxt Documentation
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
