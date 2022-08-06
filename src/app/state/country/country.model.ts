import { ID } from "@datorama/akita";

type CountryNameResponse = {
  common: string;
};

export interface Country {
  id: ID;
  name: CountryNameResponse;
  capital: string;
  subregion: string;
  population: number;
}

export function createCountry(params: Partial<Country>) {
  return {

  } as Country;
}
