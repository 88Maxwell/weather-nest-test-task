export type City = {
  id: string;
  name: string;
  requestCount: number;
};

export type Weather = {
  temp: number;
  feelsLike: number;
  pressure: number;
  cityId: string;
  id: string;
};

export type ServerWeather = {
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
  };
};

export type ServerCity = {
  capital: string;
  requestCount: number;
};
