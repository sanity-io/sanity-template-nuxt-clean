<script setup lang="ts">
import { onMounted } from "vue";
import { postsQuery } from "~/sanity/queries";
import type { PostsQueryResult } from "~/sanity/types";

const { data: posts, refresh } =
  await useSanityQuery<PostsQueryResult>(postsQuery); // TODO do I need refresh?

onMounted(() => {
  const leftDiv = document.querySelector(".left-div");
  const rightDiv = document.querySelector(".right-div");
  if (leftDiv && rightDiv) {
    leftDiv.classList.add("animate-width");
    rightDiv.classList.add("animate-width");
  }
});

const title = "Sanity + Nuxt";
const description =
  "This starter template is a powerful web app built with Nuxt for the frontend and Sanity for seamless content management. It includes a standalone Sanity Studio (CMS) with advanced features like Visual Editing, type-safe schemas and queries using Sanity TypeGen , a structured content page builder, and more. The @nuxtjs/sanity toolkit is integrated into the frontend, ensuring a quick and effortless setup.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription:
    "This starter template is a powerful web app built with Nuxt for the frontend and Sanity for seamless content management. It includes a standalone Sanity Studio (CMS) with advanced features like Visual Editing, type-safe schemas and queries using Sanity TypeGen , a structured content page builder, and more. The @nuxtjs/sanity toolkit is integrated into the frontend, ensuring a quick and effortless setup.",
  // ogImage: "[og:image]",
  // ogUrl: "[og:url]",
  twitterTitle: title,
  twitterDescription: description,
  // twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>

<style>
@keyframes expandWidth {
  0% {
    width: 0vw;
    opacity: 0%;
  }
  50% {
    width: 40vw;
    opacity: 75%;
  }
  100% {
    width: 25vw;
    opacity: 20%;
  }
}
.animate-width {
  animation: expandWidth 1s forwards;
}
</style>

<template>
  <div class="relative">
    <div
      class="bg-gradient-to-r from-red-400 w-[0] h-full absolute left-0 left-div"
    ></div>
    <div
      class="bg-gradient-to-l from-nuxt w-[0] h-full absolute right-0 right-div"
    ></div>
    <div class="bg-gradient-to-b from-white w-full h-40 absolute top-0"></div>
    <div
      class="bg-gradient-to-t from-white w-full h-40 absolute bottom-0"
    ></div>
    <div class="container relative">
      <div
        class="mx-auto max-w-2xl pt-20 pb-30 space-y-6 lg:max-w-4xl lg:px-12 flex flex-col items-center"
      >
        <div class="flex flex-col gap-4 items-center">
          <div class="text-md leading-6 prose uppercase">
            A starter template for
          </div>
          <h1
            class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black"
          >
            <NuxtLink
              class="underline decoration-red-400 hover:text-red-400 underline-offset-8 hover:underline-offset-4 transition-all ease-out"
              to="https://sanity.io/"
            >
              Sanity
            </NuxtLink>
            +
            <NuxtLink
              class="underline decoration-nuxt hover:text-nuxt underline-offset-8 hover:underline-offset-4 transition-all ease-out"
              to="https://nuxt.com/"
            >
              Nuxt
            </NuxtLink>
          </h1>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-100 flex flex-col items-center">
      <div class="relative flex gap-[0] -mt-14">
        <div
          class="z-10 aspect-square w-28 h-28 flex justify-center items-center rounded-full border border-gray-100 p-3 bg-white transform translate-x-2 group"
        >
          <svg
            class="w-14 h-14 duration-300 transition"
            viewBox="0 0 67 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2243_321)">
              <path
                d="M8.42295 11.1629C8.42295 22.1614 15.3362 28.7055 29.1767 32.1563L43.8429 35.4971C56.9417 38.453 64.9185 45.7945 64.9185 57.7554C65.0204 62.9662 63.2961 68.053 60.0345 72.1634C60.0345 60.23 53.751 53.7822 38.595 49.9052L24.1947 46.6881C12.6633 44.1035 3.76279 38.068 3.76279 25.076C3.70214 20.0589 5.34154 15.1644 8.42295 11.1629Z"
                fill="#EF4434"
              />
              <path
                d="M51.0221 54.827C57.2776 58.759 60.0206 64.2582 60.0206 72.1497C54.8426 78.6663 45.7462 82.3233 35.0545 82.3233C17.0576 82.3233 4.46259 73.6207 1.6637 58.4978H18.9468C21.172 65.4406 27.0636 68.6576 34.9285 68.6576C44.5287 68.6576 50.9102 63.6258 51.0361 54.7995"
                fill="#F68B82"
              />
              <path
                d="M17.4074 27.4682C14.5509 25.8004 12.2074 23.404 10.6255 20.5332C9.04369 17.6624 8.28258 14.4244 8.423 11.1629C13.419 4.70127 22.1096 0.755554 32.7034 0.755554C51.0361 0.755554 61.6439 10.2693 64.2608 23.66H47.6354C45.8022 18.3807 41.212 14.27 32.8433 14.27C23.9009 14.27 17.7993 19.3843 17.4494 27.4682"
                fill="#F68B82"
              />
            </g>
            <defs>
              <clipPath id="clip0_2243_321">
                <rect
                  width="65.9911"
                  height="82.4889"
                  fill="white"
                  transform="translate(0.288879 0.755554)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          class="aspect-square w-28 h-28 flex justify-center items-center rounded-full border border-gray-100 p-3 bg-white transform -translate-x-2 group"
        >
          <svg
            class="w-16 h-16 duration-300 transition"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M281.44 397.667H438.32C443.326 397.667 448.118 395.908 452.453 393.427C456.789 390.946 461.258 387.831 463.76 383.533C466.262 379.236 468.002 374.36 468 369.399C467.998 364.437 466.266 359.563 463.76 355.268L357.76 172.947C355.258 168.65 352.201 165.534 347.867 163.053C343.532 160.573 337.325 158.813 332.32 158.813C327.315 158.813 322.521 160.573 318.187 163.053C313.852 165.534 310.795 168.65 308.293 172.947L281.44 219.587L227.733 129.13C225.229 124.834 222.176 120.307 217.84 117.827C213.504 115.346 208.713 115 203.707 115C198.701 115 193.909 115.346 189.573 117.827C185.238 120.307 180.771 124.834 178.267 129.13L46.8267 355.268C44.3208 359.563 44.0022 364.437 44 369.399C43.9978 374.36 44.3246 379.235 46.8267 383.533C49.3288 387.83 53.7979 390.946 58.1333 393.427C62.4688 395.908 67.2603 397.667 72.2667 397.667H171.2C210.401 397.667 238.934 380.082 258.827 346.787L306.88 263.4L332.32 219.587L410.053 352.44H306.88L281.44 397.667ZM169.787 352.44H100.533L203.707 174.36L256 263.4L221.361 323.784C208.151 345.387 193.089 352.44 169.787 352.44Z"
              fill="#00DC82"
            />
          </svg>
        </div>
      </div>
      <div
        class="container relative mx-auto max-w-2xl pb-20 pt-10 space-y-6 lg:max-w-4xl lg:px-12 flex flex-col items-center"
      >
        <div
          class="prose sm:prose-lg md:prose-xl lg:prose-2xl text-gray-700 prose-a:text-gray-700 font-light text-center"
        >
          This starter template is a powerful web app built with Nuxt for the
          frontend and Sanity for seamless content management. It includes a
          standalone Sanity Studio (CMS) with advanced features like
          <NuxtLink
            target="_blank"
            rel="noopener noreferrer"
            to="https://www.sanity.io/docs/introduction-to-visual-editing"
            >Visual Editing</NuxtLink
          >, type-safe schemas and queries using
          <NuxtLink
            to="https://www.sanity.io/docs/sanity-typegen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sanity TypeGen
          </NuxtLink>
          , a structured content page builder, and more. The
          <NuxtLink
            target="_blank"
            rel="noopener noreferrer"
            to="https://sanity.nuxtjs.org/"
          >
            @nuxtjs/sanity toolkit
          </NuxtLink>
          is integrated into the frontend, ensuring a quick and effortless
          setup.
        </div>
        <div class="flex items-center flex-col gap-4">
          <GetStartedCode />
          <NuxtLink
            to="https://www.sanity.io/docs"
            class="inline-flex text-red-400 text-xs md:text-sm underline hover:text-gray-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sanity Documentation
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-4 h-4 ml-1 inline"
              fill="currentColor"
            >
              <path
                d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z"
              ></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <div v-if="posts" class="border-t border-gray-100">
    <div class="container">
      <aside class="py-12 sm:py-20">
        <Posts
          heading="Recent Posts"
          :subHeading="`These ${posts.length} blog posts are populated from your Sanity Studio.`"
          :posts="posts"
        />
      </aside>
    </div>
  </div>
</template>
