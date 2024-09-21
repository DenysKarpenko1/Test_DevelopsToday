import type { Holiday } from "~/types";

export const useCountriesHolidays = async (countriesIds: string[]) => {
  return useAsyncData("holidays", async () => {
    const {
      public: { baseApiUrl },
    } = useRuntimeConfig();
    const promises = countriesIds.map((countryId) =>
      $fetch<Holiday[]>(`${baseApiUrl}/NextPublicHolidays/${countryId}`),
    );
    return await Promise.all(promises);
  });
};
