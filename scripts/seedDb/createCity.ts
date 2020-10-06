import { City } from "./seedDb.types";
import { getConnection } from "typeorm";

export async function createCity(city: City) {
  await getConnection().createQueryBuilder().insert().into("Weather").values(city).execute();
}
