import { getClient } from "@/apollo-client";
import CalloutCard from "@/components/CalloutCard";
import CardComponent from "@/components/Card";
import HumidityChart from "@/components/HumidityChart";
import Information from "@/components/Information";
import RainChart from "@/components/RainChart";
import TempChart from "@/components/TempChart";
import fetchWeatherQuery from "@/graphql/queries/fetchWeatherQueries";
import cleanData from "@/helpers/cleanData";
import getBasePath from "@/helpers/getBasePath";

export const revalidate = 1440;

type props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function page({ params: { city, lat, long } }: props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQuery,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "auto",
    },
  });

  const results: Root = data.myQuery;

  const dataToSend = cleanData(results, decodeURI(city));

  const basePath = getBasePath();

  // const response = await fetch(`${basePath}/api/fetchWeatherSummary`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     weatherData: dataToSend,
  //   }),
  // });

  // const GPTData = await response.json();

  // const { content } = GPTData;
  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <Information city={city} results={results} />

      <div className="flex-1 p-5 lg:p-10">
        <div>
          <div className="pb-5">
            <h2 className="text-xl font-bold">Today&apos;s Overview</h2>
            <p className="text-sm text-gray-400">
              Last Updated At:{" "}
              {new Date(results.current_weather.time).toLocaleDateString()} (
              {`${new Date().getHours()}:${new Date().getMinutes()}`})
            </p>
          </div>

          <div className="m-2 mb-10">
            <CalloutCard message="GPT STuff" />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
            <CardComponent
              title="Maximum Temperature"
              metric={`${results.daily.temperature_2m_max[0].toFixed(1)} °C`}
              color="yellow"
            />

            <CardComponent
              title="Minimum Temperature"
              metric={`${results.daily.temperature_2m_min[0].toFixed(1)} °C`}
              color="green"
            />

            <div>
              <CardComponent
                title="UV Index"
                metric={`${results.daily.uv_index_max[0].toFixed(1)}`}
                color="rose"
              />
              {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
                <CalloutCard
                  message="The UV index is high today. Remember to apply SPF Today!"
                  warning
                />
              )}
            </div>

            <div className="flex space-x-4">
              <CardComponent
                title="Wind Speed"
                metric={`${results.current_weather.windspeed.toFixed(1)} m/s`}
                color="cyan"
              />

              <CardComponent
                title="Wind Direction"
                metric={`${results.current_weather.winddirection.toFixed(2)} °`}
                color="violet"
              />
            </div>
          </div>
          <hr className="mt-10" />
        </div>

        <div className="space-y-4">
          <TempChart results={results} />
          <RainChart results={results} />
          <HumidityChart results={results} />
        </div>
      </div>
    </div>
  );
}

export default page;
