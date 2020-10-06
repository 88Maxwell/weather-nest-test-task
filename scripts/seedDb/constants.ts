const key = "40ca2fe1df5f01f719362ada89d22166";
const host = "https://api.openweathermap.org";
const prefix = "data/2.5";

export const getWetherUrl = (q: string, cnt: number) => `${host}/${prefix}/weather?q=${q}&cnt=${cnt}&appid=${key}`;
