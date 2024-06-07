<script setup>
import { filter, portfolio } from "../../data";
import PortfolioTemplate from "./PortfolioTemplate.vue";
</script>

<template>
  <div class="md:container md:px-10 sm:px-6">
    <div class="flex justify-center gap-6 mt-14 py-10">
      <button
        class="font-normal md:text-lg sm:text-xs text-deepBlue/70 focus:text-deepBlue"
        v-for="(item, i) in filter"
        :key="i"
      >
        {{ item }}
      </button>
    </div>
    <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-8 pb-16">
      <div v-for="(item, i) in portfolio" :key="i">
        <PortfolioTemplate :data="item" />
      </div>
    </div>
  </div>
</template>
