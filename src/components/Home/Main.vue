<script setup></script>

<template>
  <div class="bg-dblue pt-16">
    <div class="md:container sm:px-8 md:px-0 ">
      <div
        class="flex md:flex-nowrap sm:flex-wrap justify-center items-center  md:gap-[50px] py-[72px]"
      >
        <!-- Part 1 >> -->
        <div class="flex flex-col md:w-[40%] sm:items-center sm:w-[100%] gap-3">
          <h1
            class="font-semibold xl:text-[54px] lg:text-5xl md:text-3xl sm:text-2xl sm:text-center  text-white leading-snug"
          >
            Building stellar websites for early startups
          </h1>
          <p
            class="lg:text-base md:text-sm sm:text-xs font-medium text-white leading-7"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div class="btn flex gap-4 mt-2 md:mb-0 sm:mb-8">
           <router-link to="/work">
            <button
              class="bg-orang rounded-3xl md:py-2.5 sm:py-2 lg:px-5 md:px-4 sm:px-5 lg:text-base md:text-xs sm:text-[9px] font-semibold hover:bg-[#ccc0] hover:text-orang"
            >
              View our work
            </button>
           </router-link>
            <router-link to="/pricing">
              <button
              class="text-white py-2.5 px-5 lg:text-base md:text-xs sm:text-[9px] font-semibold hover:text-orang"
            >
              View Pricing &#8594;
            </button>
            </router-link>
          </div>
        </div>
        <!-- Part 1 << -->

        <!-- Part 2 >> -->
        <div class="flex md:w-[50%] sm:w-[100%]">
          <img src="/img/image.png" alt="img" />
        </div>
        <!-- Part 2 >> -->
      </div>
    </div>
  </div>
</template>
