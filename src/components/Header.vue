<script setup>
import { ref } from "vue";
import menu from "../data/";

const isShow = ref(false);

const show = () => {
  isShow.value = !isShow.value;
};
</script>

<template>
  <main class="bg-dblue fixed top-0 w-full z-50">
    <div
      v-if="isShow"
      @click="show"
      class="md:hidden sm:block fixed w-full h-screen bg-black/70 z-10"
    ></div>
    <div class="md:container md:px-10 sm:px-6 sm:relative">
      <div
        class="sm:flex md:static sm:items-center sm:justify-between md:items-center sm:py-2 md:py-4"
      >
        <h1 class="text-white poppins-black text-3xl">{Finsweet}</h1>
        <img
          @click="show"
          class="w-[19%] p-3 md:hidden sm:block"
          src="/icons/hamburger.svg"
          alt="hamburger"
        />
        <div
          class="sm:flex sm:flex-col z-20 sm:px-16 sm:gap-6 sm:items-center absolute sm:bg-dblue sm:h-screen md:h-0 sm:rounded-s-2xl sm:p-4 sm:top-[100%] sm:right-0 duration-300 md:p-0 md:bg-[#fff0] md:flex md:flex-row lg:gap-10 md:gap-6 md:items-center md:static"
          :class="
            isShow
              ? 'sm:opacity-100 sm:visible md:visible'
              : 'sm:opacity-0 md:opacity-100 sm:invisible md:visible'
          "
        >
          <router-link
            @click="show"
            class="text-[#BBBBCB] sm:text-3xl sm:mb-2 md:text-base md:mb-0 focus:text-white !sm:border-b "
            v-for="(item, i) in menu"
            :class="{
              'md:border-2 md:py-2 md:px-4 md:border-[#F4F6FC33] md:focus:border-white md:rounded-3xl':
                i === menu.length - 1,
              'border-none': i !== menu.length - 1,
            }"
            :key="i"
            :to="item.url"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>
