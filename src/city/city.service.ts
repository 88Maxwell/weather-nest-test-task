import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { City } from "./city.entity";

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly weatherRepository: Repository<City>,
  ) {}

  async findAll(): Promise<City[]> {
    return this.weatherRepository.find();
  }
}
