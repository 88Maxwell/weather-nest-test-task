import * as fs from "fs";
import { countries } from "countries-list";
import axios from "axios";
import { getWetherUrl } from "./constants";
import { dumpCity, dumpWeather } from "./seedDb.dumps";
import { City } from "./seedDb.types";
import { Connection, EntityManager } from "typeorm";
// import { createWeather } from "./createWeather";
// import { createCity } from "./createCity";

const fetchWeather = async (city: City) => {
  try {
    const url = getWetherUrl(city.name, 1);
    const { data = {} } = (await axios.get(url)) || {};

    return { ...data, cityId: city.id };
  } catch (error) {
    console.error(error.message);
    throw new Error(error);
  }
};

const seedDb = async (): Promise<void> => {
  const cities = Object.keys(countries)
    .map((key) => ({ capital: countries[key].capital }))
    .slice(50, 51);

  const dumpedCities = cities.map(dumpCity);

  const weathers = await Promise.all(dumpedCities.map(fetchWeather));
  const dumpedWeathers = weathers.map(dumpWeather);
  const manager = new EntityManager(c,qr);
  const res = await manager.query(`SHOW TABLES`);
  console.log("res :>> ", res);
  // await Promise.all(dumpedWeathers.map(createWeather));
  // await Promise.all(dumpedCities.map(createCity));
};

seedDb();
// console.log('proccess.env :>> ', process.env)
