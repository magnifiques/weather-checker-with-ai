interface CurrentWeather {
  is_day: number;
  temperature: number;
  time: string;
  weathercode: number;
  winddirection: number;
  windspeed: number;
}

interface Daily {
  apparent_temperature_max: [Float];
  apparent_temperature_min: [Float];
  sunrise: [DateTime];
  sunset: [DateTime];
  temperature_2m_max: [Float];
  temperature_2m_min: [Float];
  time: [Date];
  uv_index_clear_sky_max: [Float];
  uv_index_max: [Float];
  weathercode: [Int];
}

interface DailyUnits {
  apparent_temperature_max: string;
  apparent_temperature_min: string;
  sunrise: string;
  sunset: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  time: string;
  uv_index_clear_sky_max: string;
  uv_index_max: string;
  weathercode: string;
}

interface Hourly {
  apparent_temperature: [Float];
  precipitation: [Float];
  precipitation_probability: [Int];
  rain: [Float];
  relativehumidity_2m: [Int];
  showers: [Float];
  snow_depth: [Int];
  snowfall: [Int];
  temperature_2m: [Float];
  time: [DateTime];
  uv_index: [Float];
  uv_index_clear_sky: [Float];
  windgusts_10m: [Float];
}

interface HourlyUnits {
  apparent_temperature: string;
  precipitation: string;
  precipitation_probability: string;
  rain: string;
  relativehumidity_2m: string;
  showers: string;
  snow_depth: string;
  snowfall: string;
  temperature_2m: string;
  time: string;
  uv_index: string;
  uv_index_clear_sky: string;
  windgusts_10m: string;
}

interface Root {
  current_weather: CurrentWeather;
  daily: Daily;
  daily_units: DailyUnits;
  elevation: Int;
  generationtime_ms: Float;
  hourly: Hourly;
  hourly_units: HourlyUnits;
  latitude: Float;
  longitude: Float;
  timezone: String;
  timezone_abbreviation: String;
  utc_offset_seconds: Int;
}
