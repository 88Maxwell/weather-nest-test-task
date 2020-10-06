import { v5 as uuidv5 } from "uuid";
import { ServerWeather, ServerCity, City, Weather } from "./seedDb.types";

export const dumpWeather = (weather: ServerWeather & { cityId: string }): Weather => {
  return {
    temp: weather.main.temp,
    feelsLike: weather.main.feels_like,
    pressure: weather.main.pressure,
    cityId: weather.cityId,
    id: uuidv5(),
  };
};

export const dumpCity = (city: ServerCity & { requestCount?: number }): City => {
  return {
    id: uuidv5(),
    name: city.capital,
    requestCount: city?.requestCount || 0,
  };
};
