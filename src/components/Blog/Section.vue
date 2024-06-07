<template>
  <div class="flex flex-col">
    <h2 class="font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-deepBlue text-center my-7">
      Our Blog
    </h2>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mb-11">
      <PostItem v-for="(d, i) in posts" :key="i" :data="d" />
    </div>
  </div>
</template>

<script setup>
import { posts } from "../../data";
import PostItem from "./PostItem.vue";
</script>
