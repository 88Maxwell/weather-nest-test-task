import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WeatherModule } from "./weather/weather.module";
import { CityModule } from "./city/city.module";
import { Weather } from "weather/weather.entity";
import { City } from "city/city.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mariadb",
      host: "localhost",
      port: 3306,
      username: "test",
      password: "test",
      database: "test",
      entities: [Weather, City],
      synchronize: true,
    }),
    WeatherModule,
    CityModule,
  ],
})
export class AppModule {}
