import type { HolidayDetails } from "../types";

export function useHolidayDetails(year: Ref<number>, countryCode: string) {
  const {
    public: { baseApiUrl },
  } = useRuntimeConfig();
  const holidayDetailsUrl = computed(
    () => `${baseApiUrl}/PublicHolidays/${year.value}/${countryCode}`,
  );

  return useFetch<HolidayDetails[]>(holidayDetailsUrl);
}
