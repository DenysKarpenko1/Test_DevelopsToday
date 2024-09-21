<template>
  <Card>
    <template #title>
      <NuxtLink :to="`/country/${country.countryCode}`">
        {{ country.name }}
      </NuxtLink></template
    >
    <template #content>
      <div v-if="holiday">
        <p>Next holiday: {{ holiday.name }}</p>
        <p>Date: {{ holiday.date }}</p>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import type { Country, Holiday } from "../types";

defineProps<{
  country: Country;
  holiday?: Holiday;
}>();
</script>
