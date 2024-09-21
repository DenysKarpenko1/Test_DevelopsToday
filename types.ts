export interface Country {
  countryCode: string;
  name: string;
}

export interface Holiday {
  date: string;
  name: string;
}

export interface HolidayDetails {
  countryCode: string;
  date: string;
  name: string;
  types: string[];
}

export interface CountryInfo {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: string;
  }[];
}
