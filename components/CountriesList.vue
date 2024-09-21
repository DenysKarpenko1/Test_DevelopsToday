<template>
  <div>
    <div class="mb-4 flex flex-col gap-4">
      <FloatLabel>
        <InputText id="search" v-model="value" />
        <label for="search">Search</label>
      </FloatLabel>
    </div>

    <div class="flex flex-col gap-5">
      <CountryCard
        v-for="country in filteredCountries"
        :key="country.countryCode"
        :country="country"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import type { Country } from "../types";
import CountryCard from "./CountryCard.vue";

const props = defineProps<{
  countries: Country[];
}>();

const value = ref("");

const filteredCountries = computed(() => {
  return props.countries?.filter((country) =>
    country.name.toLowerCase().includes(value.value.toLowerCase()),
  );
});
</script>
