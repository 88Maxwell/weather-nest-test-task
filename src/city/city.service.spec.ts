import { Test, TestingModule } from "@nestjs/testing";
import { CityService } from "./city.service";

describe("CityService", () => {
  let cityService: CityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CityService],
    }).compile();

    cityService = module.get<CityService>(CityService);
  });

  it("should be defined", async () => {
    console.log("cityService", cityService);
    expect(await cityService.findAll()).toMatchInlineSnapshot();
  });
});
