<template>
  <div class="p-16">
    <CountryDetails
      v-if="countryData && holidayDetails"
      :country-name="countryData.commonName"
      :holiday-details="holidayDetails"
    />

    <div class="flex justify-center">
      <YearPagination v-model:year="year" />
    </div>
  </div>
</template>

<script setup lang="ts">
import YearPagination from "~/components/YearPagination.vue";
import CountryDetails from "~/components/CountryDetails.vue";
import { useHolidayDetails } from "~/api/useHolidayDetails";
import { useCountry } from "~/api/useCountry";

const route = useRoute();
const countryCode = String(route.params.countryCode);
const year = ref(new Date().getFullYear());

const { data: holidayDetails } = await useHolidayDetails(year, countryCode);

const { data: countryData } = await useCountry(countryCode);
</script>
