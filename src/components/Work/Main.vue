<template>
  <div class="bg-[#F4F6FC] py-[100px] mb-3 md:mt-0 sm:mt-[12%]">
    <main class="md:container md:px-10 sm:px-6">
      <div class="flex flex-col justify-center items-center gap-3">
        <p class="text-base font-semibold text-deepBlue text-center">What we created</p>
        <h2 class="text-5xl font-semibold text-deepBlue text-center" >Our Work Portfolio</h2>
        <p class="text-base font-medium text-deepBlue/70 w-[60%] text-center">
          We help teams create great digital products by providing them with
          tools and technology to make the design-to-code process universally
          accessible.
        </p>

        <div class="flex gap-14  p-2">
          <a v-for="(item, i) in url" :key="i" :href="item.url">
            <img class="bg-" :src="item.img" alt="img" />
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { url } from "../../data";
</script>
