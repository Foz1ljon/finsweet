<template>
  <div class="bg-[#F4F6FC] md:py-16">
    <div class="md:container ">
      <div class="flex flex-col items-center  my-14">
        <p class="font-semibold text-darlBlue md:text-base sm:text-sm text-center py-4">Features</p>
        <h1 class="font-semibold text-darlBlue lg:text-5xl md:text-3xl w-[50%] text-center" >Design that solves problems, one product at a time</h1>
      </div>

      <div
        class="md:grid sm:flex lg:grid-cols-3 sm:grid-cols-2 md:gap-2 sm:gap-4 justify-center md:flex-wrap sm:flex-wrap"
      >
        <div
          v-for="(item, i) in cards"
          :key="i"
          class="flex flex-col xl:w-[380px] lg:w-[300px] md:w-[320px] sm:w-[290px] px-5 py-7 bg-white gap-5 md:mb-3 sm:mb-1"
        >
          <div><img :src="item.img" alt="img" /></div>
          <h1 class="md:text-2xl sm:text-xl font-normal text-darkBlue">
            {{ item.title }}
          </h1>
          <p
            class="xl:w-[324px] lg:w-[270px] md:w-[300px] sm:w-[265px] sm:text-sm"
          >
            {{ item.about }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { cards } from "../../data";
</script>
