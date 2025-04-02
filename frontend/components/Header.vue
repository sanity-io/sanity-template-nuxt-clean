<script setup lang="ts">
import { settingsQuery } from "~/sanity/queries";
import type { SettingsQueryResult } from "~/sanity/types";

const { data: settings } =
  await useSanityQuery<SettingsQueryResult>(settingsQuery);
</script>

<template>
  <header
    class="fixed z-50 h-24 inset-0 bg-white/80 flex items-center backdrop-blur-lg"
  >
    <div class="container py-6 sm:px-6">
      <div class="flex items-center justify-between gap-5">
        <NuxtLink class="flex items-center gap-2" to="/">
          <span class="text-2xl pl-2 font-semibold">
            {{ settings?.title }}
          </span>
        </NuxtLink>

        <nav>
          <ul
            role="list"
            class="flex items-center gap-4 md:gap-6 leading-5 text-sm md:text-base tracking-tight font-normal"
          >
            <li>
              <NuxtLink to="/about" class="hover:underline">About</NuxtLink>
            </li>

            <li
              class="sm:before:w-[1px] sm:before:bg-gray-100 before:block flex sm:gap-4 md:gap-6"
            >
              <NuxtLink
                class="rounded-full flex gap-4 items-center bg-black hover:bg-red-400 focus:bg-nuxt py-2 px-4 justify-center sm:py-3 sm:px-6 text-white transition-colors duration-200"
                to="https://www.sanity.io/get-started?template=nuxt-sanity-clean&ref=templates-nuxt-sanity-clean"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="whitespace-nowrap">Use Template</span>
                <svg
                  fill="currentColor"
                  class="h-4 sm:h-6"
                  viewBox="0 0 67 84"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.42349 11.1626C8.42349 22.1611 15.3368 28.7052 29.1773 32.156L43.8434 35.4968C56.9423 38.4527 64.9191 45.7942 64.9191 57.7551C65.0209 62.9659 63.2966 68.0527 60.035 72.1631C60.035 60.2297 53.7515 53.7819 38.5955 49.9049L24.1952 46.6878C12.6638 44.1032 3.76334 38.0677 3.76334 25.0757C3.70269 20.0586 5.34209 15.1641 8.42349 11.1626"
                    fill="white"
                  />
                  <path
                    d="M51.0225 54.8268C57.278 58.7588 60.0209 64.258 60.0209 72.1495C54.843 78.6661 45.7466 82.3231 35.0548 82.3231C17.058 82.3231 4.46295 73.6205 1.66406 58.4976H18.9472C21.1723 65.4404 27.064 68.6574 34.9289 68.6574C44.5291 68.6574 50.9105 63.6256 51.0365 54.7993"
                    fill="rgba(255, 255, 255, 0.5)"
                  />
                  <path
                    d="M17.4071 27.468C14.5506 25.8003 12.2071 23.4038 10.6252 20.533C9.04338 17.6622 8.28227 14.4242 8.42269 11.1627C13.4187 4.70109 22.1093 0.755371 32.7031 0.755371C51.0358 0.755371 61.6436 10.2691 64.2605 23.6598H47.6351C45.8019 18.3805 41.2117 14.2698 32.843 14.2698C23.9006 14.2698 17.799 19.3841 17.4491 27.468"
                    fill="rgba(255, 255, 255, 0.5)"
                  />
                </svg>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
