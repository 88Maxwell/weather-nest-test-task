import { Test, TestingModule } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CityController } from "./city.controller";
import { City } from "./city.entity";
import { CityService } from "./city.service";

describe("CityController", () => {
  let cityController: CityController;
  let cityService: CityService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([City])],
      controllers: [CityController],
      providers: [CityService],
    }).compile();

    cityController = module.get<CityController>(CityController);
    cityService = module.get<CityService>(CityService);
  });

  it("should be defined", () => {
    expect(cityController).toBeDefined();
  });
});
