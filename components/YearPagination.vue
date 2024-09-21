<template>
  <div class="flex gap-2">
    <Button
      v-for="year in years"
      :key="year"
      :severity="selectedYear === year ? 'primary' : 'secondary'"
      class="px-3 py-2 border-0 cursor-pointer"
      @click="selectedYear = year"
    >
      {{ year }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";

const MIN_YEAR = 2020;
const MAX_YEAR = 2030;

const selectedYear = defineModel("year", {
  required: true,
  type: Number,
});

const years = ref(
  Array.from({ length: MAX_YEAR - MIN_YEAR + 1 }, (_, i) => MIN_YEAR + i),
);
</script>
