import { Body, Controller, Get } from "@nestjs/common";
import { FindWeatherDto } from "./dto/findWeather.dto";
import { Weather } from "./weather.entity";
import { WeatherService } from "./weather.service";

@Controller("weather")
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  find(@Body() { countryId }: FindWeatherDto): Promise<Weather> {
    return this.weatherService.find(countryId);
  }
}
