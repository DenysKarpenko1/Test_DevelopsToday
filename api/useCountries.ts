import type { Country } from "../types";

export const useCountries = () => {
  const {
    public: { baseApiUrl },
  } = useRuntimeConfig();
  return useFetch<Country[]>(`${baseApiUrl}/AvailableCountries`);
};
