<template>
  <div v-if="error">{{ error }}</div>
  <div v-else-if="countries" class="flex justify-between py-24 px-36">
    <div>
      <CountriesList :countries="countries" />
    </div>

    <div>
      <CountriesWidget :countries="countries" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CountriesList from "~/components/CountriesList.vue";
import CountriesWidget from "~/components/CountriesWidget.vue";
import { useCountries } from "~/api/useCountries";

const { data: countries, error } = useCountries();
</script>
