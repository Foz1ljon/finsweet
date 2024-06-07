<script setup>
import { url2 } from "../data";
</script>

<template>
  <div class="bg-dblue">
    <div class="md:container md:px-10 sm:px-6">
      <div
        class="flex sm:gap-8 md:justify-between sm:justify-center md:flex-nowrap sm:flex-wrap py-16 xl:gap-[200px]"
      >
        <!-- Part 1 >> -->

        <div class="flex flex-col gap-16">
          <div class="flex flex-col gap-3">
            <h1 class="text-white text-2xl poppins-bold">{Finsweet</h1>
            <p class="text-base text-white font-medium leading-7">
              We are always open to discuss your project and improve your online
              presence.
            </p>
          </div>
          <div
            class="flex flex-wrap justify-center bg-orang p-6 gap-5 md:w-[517px]"
          >
            <!-- Email >> -->
            <div class="flex flex-col justify-center">
              <h2 class="text-lg font-medium text-deepBlue">Email at me</h2>
              <p class="text-base">contact@website.com</p>
            </div>
            <!-- Email << -->

            <!-- Call us >> -->

            <div class="flex flex-col">
              <h1 class="text-lg font-medium text-deepBlue">Call us</h1>
              <p class="text-base">0927 6277 28525</p>
            </div>

            <!-- Call us << -->
          </div>
        </div>
        <!-- Part 1 << -->

        <!-- Part 2 >> -->

        <div class="flex flex-col gap-3">
          <h1 class="text-2xl poppins-bold text-white">Lets Talk</h1>
          <p class="text-base text-white font-medium leading-7">
            We are always open to discuss your project, improve your online
            presence and help with your UX/UI design challenges.
          </p>
          <div class="flex flex-wrap gap-3">
            <a v-for="(item, i) in url2" :key="i" :href="item.url">
              <img
                class="p-1 rounded-full hover:bg-blue-800"
                :src="item.img"
                alt="items"
              />
            </a>
          </div>
        </div>
        <!-- Part 2 << -->
      </div>
    </div>
  </div>
</template>
