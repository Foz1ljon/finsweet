<script setup></script>

<template>
  <section class="md:container md:py-10 sm:py-3">
    <!-- Top >>  -->
    <div class="flex justify-between items-center md:py-11 sm:py-2">
      <h1
        class="font-semibold lg:text-5xl md:text-4xl sm:text-base text-deepBlue"
      >
        View our projects
      </h1>
      <button
        class="text-deepBlue flex items-center md:py-2.5 sm-py-1 md:px-5 sm:px-2 lg:text-base md:text-sm sm:text-[6px] font-semibold border-2 border-white rounded-3xl hover:border-orang"
      >
        View More &#8594;
      </button>
    </div>
    <!-- Top <<  -->

    <!-- Bottom >>  -->
    <div
      class="md:w-full md:ml-0 md:flex items-center gap-3"
    >
      <!-- Part-1 -->
      <div class="relative overflow-hidden group">
        <img class="md:w-[100%] sm:w-[100%]" src="/img/bg-big.png" alt="big" />
        <div
          class="absolute top-0 duration-300 group-hover:left-0 -left-full w-[47%] h-[100%] px-2 bg-bgGr flex justify-end"
        >
          <div class="flex flex-col items-start justify-end pl-10 py-12 gap-2">
            <h2 class="text-2xl font-semibold text-white">
              Workhub office Webflow Webflow Design
            </h2>
            <p class="texl-base font-normal text-white">
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam
            </p>

            <button class="text-[#FCD980] text-base font-medium">
              View project <b>&rarr;</b>
            </button>
          </div>
        </div>
      </div>

      <!-- part 2 -->
      <div class="flex flex-col gap-3">
        <div class="relative overflow-hidden group">
          <img class="md:w-[100%] sm:w-[100%]" src="/img/bg-mini-1.png" alt="big" />
          <div
            class="absolute top-0 w-full h-full duration-300 group-hover:left-0 -left-full bg-bgGr flex justify-center items-center"
          >
            <div class="flex flex-col pl-10 py-4 gap-2">
              <h2 class="text-2xl text-center font-semibold text-white">
                Unisaas Website 
Design
              </h2>

              <button class="text-[#FCD980] text-base font-medium">
                View project <b>&rarr;</b>
              </button>
            </div>
          </div>
        </div>
        <div class="relative overflow-hidden group">
          <img class="md:w-[100%] sm:w-[100%]" src="/img/bg-mini-2.png" alt="big" />
          <div
            class="absolute top-0 w-full h-full duration-300 group-hover:left-0 -left-full bg-bgGr flex justify-center items-center"
          >
            <div class="flex flex-col pl-10 py-4 gap-2">
              <h2 class="text-2xl text-center font-semibold text-white">
                Unisaas Website Design
              </h2>

              <button class="text-[#FCD980] text-base font-medium">
                View project <b>&rarr;</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom >>  -->
  </section>
</template>
