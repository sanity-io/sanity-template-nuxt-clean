<script setup lang="ts">
import { type Post } from '~/types/Post'

const query = groq`*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc)`
const { data: posts } = await useSanityQuery<Post[]>(query)
</script>

<template>
  <section>
    <Card v-for="post in posts || []" :key="post._id" :post="post" />
    <Welcome v-if="!posts?.length" />
  </section>
</template>
