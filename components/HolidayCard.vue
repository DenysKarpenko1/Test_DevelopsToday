<template>
  <Card>
    <template #title>
      {{ holiday.name }}
    </template>
    <template #content>
      <div v-if="holiday">
        <p>Date: {{ holiday.date }}</p>
        <p>Type: {{ holiday.types.join(" ,") }}</p>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import type { HolidayDetails } from "../types";

defineProps<{
  holiday: HolidayDetails;
}>();
</script>
