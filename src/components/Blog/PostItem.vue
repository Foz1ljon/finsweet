<script setup>
import { defineProps } from "vue";
const props = defineProps({
  data: Object,
});

const { data } = props;
</script>
<template>
  <div class="flex flex-col gap-3 p-4">
    <img :src="data.img" alt="" />
    <p class="text-base font-medium text-deepBlue/70">{{ data.date }}</p>
    <h6 class="font-normal text-2xl text-deepBlue">{{ data.title }}</h6>
    <p class="text-base font-medium text-deepBlue/70">{{ data.pg }}</p>
    <button
      class="text-base font-medium text-dblue text-start hover:text-[#FCD980]"
    >
      Read More <b class="text-4xl">&rarr;</b>
    </button>
  </div>
</template>
