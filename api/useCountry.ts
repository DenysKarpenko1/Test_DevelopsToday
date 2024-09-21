import type { CountryInfo } from "../types";

export const useCountry = (countryCode: string) => {
  const {
    public: { baseApiUrl },
  } = useRuntimeConfig();
  return useFetch<CountryInfo>(`${baseApiUrl}/CountryInfo/${countryCode}`);
};
