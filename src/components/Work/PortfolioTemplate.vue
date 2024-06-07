<script setup>
import { defineProps, ref, computed } from "vue";
const props = defineProps({
  data: Object,
});

const { data } = props;
</script>

<template>
  <div class="flex flex-col gap-2">
    <div :class="data.bg" class="p-6">
      <img :src="data.img" alt="img" />
    </div>
    <div class="flex flex-col items-start">
      <h3 class="font-semibold text-deepBlue text-4xl">
        {{ data.title }} {{ data.id }}
      </h3>
      <p class="text-base font-normal text-justify text-deepBlue/70">
        {{ data.description }}
      </p>
    </div>

    <div class="flex justify-start">
      <button class="text-base font-medium text-deepBlue">
        <span>Read case study</span> <span class="text-4xl">&rarr;</span>
      </button>
    </div>
  </div>
</template>
