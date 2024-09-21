<template>
  <h2 class="text-2xl mb-5">Random Country Widget</h2>
  <div class="flex flex-col gap-5">
    <CountryCard
      v-for="(country, index) in randomCountries"
      :key="country.countryCode"
      :country="country"
      :holiday="holidaysData?.[index]?.[0]"
    />
  </div>
</template>

<script setup lang="ts">
import type { Country } from "../types";
import CountryCard from "./CountryCard.vue";
import { useCountriesHolidays } from "~/api/useCountriesHolidays";

const COUNTRIES_AMOUNT = 3;

const props = defineProps<{
  countries: Country[];
}>();

function getRandomCountries(countries: Country[]): Country[] {
  const shuffledCountries = [...countries].sort(() => 0.5 - Math.random());
  return shuffledCountries.slice(0, COUNTRIES_AMOUNT);
}

const randomCountries = useState("randomCountries", () =>
  getRandomCountries(props.countries),
);

const { data: holidaysData } = await useCountriesHolidays(
  randomCountries.value.map((country) => country.countryCode),
);
</script>
