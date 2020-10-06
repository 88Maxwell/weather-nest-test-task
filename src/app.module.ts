import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WeatherModule } from "./weather/weather.module";
import { CityModule } from "./city/city.module";
import { Connection } from "typeorm";

@Module({
  imports: [TypeOrmModule.forRoot(), WeatherModule, CityModule],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
