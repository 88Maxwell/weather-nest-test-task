import { Weather } from "./seedDb.types";
import { getConnection } from "typeorm";

export async function createWeather(weather: Weather) {
  await getConnection().createQueryBuilder().insert().into("Weather").values(weather).execute();
}
