import fs from "fs";
import { countries } from "countries-list";
import axios from "axios";
import { getWetherUrl } from "./constants";
import { dumpCity, dumpWeather } from "./seedDb.dumps";
import { City } from "./seedDb.types";

const fetchWeather = async (city: City) => {
  try {
    const { data } = await axios.get(getWetherUrl(city.name, 1));

    return { ...data, cityId: city.id };
  } catch (error) {
    throw new Error(error);
  }
};

const seedDb = async (): Promise<void> => {
  const cities = Object.keys(countries)
    .map((key) => countries[key].capital)
    .slice(50, 60);

  const dumpedCities = cities.map(dumpCity);
  const weathers = await Promise.all(dumpedCities.map(fetchWeather));
  const dumpedWeathers = weathers.map((el) => el.data).map(dumpWeather);

  fs.writeFileSync("scripts/cities.json", JSON.stringify(dumpedCities));
  fs.writeFileSync("scripts/weather.json", JSON.stringify(dumpedWeathers));
};

seedDb();
