<script setup>
import { card } from "../../data";
</script>

<template>
  <main class="md:container md:px-10 sm:px-6">
    <div class="flex flex-col items-center gap-4 md:my-10 pt-16 sm:mt-[14%]">
      <h2 class="font-semibold text-5xl text-deepBlue">Our Pricing Plans</h2>
      <p class="font-medium text-base text-deepBlue/70 md:w-[562px]">
        When you’re ready to go beyond prototyping in Figma, Webflow is ready to
        help you bring your designs to life — without coding them.
      </p>
    </div>
    <div
      class="md:grid lg:grid-cols-3 md:grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-5"
    >
      <div v-for="(item, i) in card" :key="i">
        <div
          class="flex flex-col gap-6 bg-[#F4F6FC] rounded-md py-14 my-4 px-10 group hover:bg-[#1C1E53]"
        >
          <!-- Part 1 >>>  -->
          <div class="flex items-center gap-3">
            <h3
              class="font-semibold text-[38px] text-deepBlue group-hover:text-white"
            >
              {{ item.price[0] }}
            </h3>
            <p
              class="text-[#2405F2] text-base font-normal group-hover:text-yellow-400"
            >
              {{ item.price[1] }}
            </p>
          </div>

          <!-- Part 2 >>>  -->

          <div class="flex flex-col gap-2">
            <h6
              class="text-2xl font-normal text-deepBlue group-hover:text-white"
            >
              {{ item.title }}
            </h6>
            <p
              class="w-[281px] text-base font-normal text-deepBlue/70 group-hover:text-white/70"
            >
              {{ item.pg }}
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <div v-for="(itm, i) in item.type" :key="i">
              <div class="flex gap-3">
                <img src="/icons/pointer.svg" alt="pointer" />
                <p
                  class="text-base font-normal text-deepBlue group-hover:text-white"
                >
                  {{ itm }}
                </p>
              </div>
            </div>
          </div>

          <!-- Button >>>  -->
          <div class="flex justify-center mt-14">
            <button
              class="bg-deepBlue px-9 py-2.5 text-lg text-[#F4F6FC] rounded-3xl group-hover:bg-[#FCD980] group-hover:text-deepBlue"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
