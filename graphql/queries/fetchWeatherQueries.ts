import { gql } from "@apollo/client";

const fetchWeatherQuery = gql`
  query MyQuery(
    $current_weather: String
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
    $hourly: String = "temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      current_weather {
        is_day
        weathercode
        windspeed
        temperature
        time
        winddirection
      }
      daily {
        weathercode
        uv_index_clear_sky_max
        uv_index_max
        time
        temperature_2m_min
        temperature_2m_max
        sunset
        sunrise
        apparent_temperature_max
        apparent_temperature_min
      }
      daily_units {
        apparent_temperature_max
        sunrise
        apparent_temperature_min
        temperature_2m_max
        sunset
        temperature_2m_min
        uv_index_clear_sky_max
        time
        weathercode
        uv_index_max
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        rain
        precipitation_probability
        precipitation
        relativehumidity_2m
        showers
        snow_depth
        temperature_2m
        snowfall
        time
        windgusts_10m
        uv_index_clear_sky
        uv_index
      }
      hourly_units {
        apparent_temperature
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        windgusts_10m
      }
      latitude
      longitude
      timezone_abbreviation
      utc_offset_seconds
      timezone
    }
  }
`;

export default fetchWeatherQuery;
