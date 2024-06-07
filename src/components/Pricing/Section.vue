<script setup>
import { ref } from "vue";
import { accord } from "../../data";

const activeIndex = ref(null);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <section class="md:container md:px-10 sm:px-6">
    <div class="flex items-start md:justify-between md:flex-nowrap sm:flex-wrap  sm:justify-center my-10">
      <!-- Part 1 -->
      <div class="flex flex-col sm:items-center md:items-start gap-3">
        <h2 class="w-full md:text-start sm:text-center font-semibold text-deepBlue text-5xl">
          Frequently asked questions
        </h2>
        <p class="text-[#2405F2] text-lg font-normal">
          Contact us For More Info
        </p>
      </div>
      <!-- Part 2 -->
      <div class="md:w-[60%]  ">
        <div v-for="(item, index) in accord" :key="index" class="border-b">
          <button
            @click="toggle(index)"
            class=" flex justify-between sm:gap-2 items-end md:py-4 sm:py-1 focus:outline-none"
          >
            <span class="block"
              ><b class="text-[#2405F2] sm:text-xs md:text-base md:p-3 sm:p-1 w-full">0{{ index + 1 }}</b> {{ item.title }}</span
            >
            <span class="block" :class="{ 'transform rotate-180': activeIndex === index }">
              +
            </span>
          </button>
          <div v-if="activeIndex === index" class="p-4 text-gray-700">
            <p>{{ item.pg }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
