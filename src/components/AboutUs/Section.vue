<template>
  <div>
    <div class="md:container md:px-10 sm:px-6">
      <div class="bg-[#F4F5F5] w-full px-3 pt-10 md:mt-20 sm:mt-2">
        <div class="flex md:flex-nowrap sm:flex-wrap items-center justify-center gap-5">
          <div class="md:w-[515px] sm:w-full p-8" v-for="(item, i) in cards2" :key="i">
            <h3 class="font-semibold text-[38px] text-deepBlue">
              {{ item.title }}
            </h3>
            <p class="font-normal text-base text-deepBlue/70">
              {{ item.description }}
            </p>
          </div>
        </div>
      <img src="/img/bg-about.png" alt="bg-aboutus" />

      </div>

    </div>
  </div>
</template>

<script setup>
import { cards2 } from "../../data";
</script>
