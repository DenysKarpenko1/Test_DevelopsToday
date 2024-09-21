<template>
  <h1 class="text-3xl mb-5">{{ countryName }}</h1>
  <div class="flex flex-col gap-5 mb-12">
    <HolidayCard
      v-for="holiday in holidayDetails"
      :key="holiday.countryCode"
      :holiday="holiday"
    />
  </div>
</template>

<script setup lang="ts">
import type { HolidayDetails } from "~/types";

defineProps<{
  countryName: string;
  holidayDetails: HolidayDetails[];
}>();
</script>
