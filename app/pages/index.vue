<script setup>
const query = groq`*[ _type == "post" && defined(slug.current) ]|order(_createdAt desc)`;
const { data: posts } = await useSanityQuery(query);
</script>
<template>
  <section>
    <Card v-if="posts" v-for="post in posts" :key="post._id" :post="post" />
    <Welcome />
  </section>
</template>
