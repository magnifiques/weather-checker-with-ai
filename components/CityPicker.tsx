"use client";
import { Country, State, City } from "country-state-city";
import { useState } from "react";
import Select, { createFilter } from "react-select";
import { GlobeIcon, SearchIcon } from "@heroicons/react/solid";
import { Button, TextInput } from "@tremor/react";
import { useRouter } from "next/navigation";
import ReactLoading from "react-loading";
import toast, { Toaster } from "react-hot-toast";

type countryOption = {
  value: {
    longitude: string | null | undefined;
    latitude: string | null | undefined;
    isoCode: string;
  };
  label: string;
} | null;

type stateOption = {
  value: {
    name: string;
    longitude: string | null | undefined;
    latitude: string | null | undefined;
    isoCode: string;
    countryCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    name: string;
    longitude: string | null | undefined;
    latitude: string | null | undefined;
    stateCode: string;
    countryCode: string;
  };
  label: string;
} | null;

const countryOptions = Country.getAllCountries().map((country) => {
  return {
    value: {
      longitude: country.longitude,
      latitude: country.latitude,
      isoCode: country.isoCode,
    },
    label: country.name,
  };
});
function CityPicker() {
  const [selectedCountry, setSelectedCountry] = useState<countryOption>(null);

  const [selectedState, setSelectedState] = useState<stateOption>(null);

  const [selectedCity, setSelectedCity] = useState<cityOption>(null);

  const [city, setCity] = useState<string | undefined>("");

  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSelectedCountry = (options: countryOption) => {
    setSelectedCountry(options);
    setSelectedState(null);
    setSelectedCity(null);
  };

  const handleSelectedState = (options: stateOption) => {
    setSelectedState(options);
    setSelectedCity(null);
  };

  const handleSelectedCity = (options: cityOption) => {
    setSelectedCity(options);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/fetchLongAndLat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: city?.trim(),
        }),
      });

      const { responseData } = await response.json();

      if (responseData.length > 0) {
        const [contents] = responseData;

        router.push(
          `/location/${contents.city}/${contents.lat}/${contents.long}`
        );
      } else {
        toast("Invalid Input!", {
          duration: 2000,
          style: {
            background: "red",
            color: "white",
            fontWeight: "bolder",
            fontSize: "20px",
            padding: "20px",
          },
        });
      }
    } catch (error) {
      console.log(error);
      toast("Something went wrong!", {
        duration: 4000,
        style: {
          background: "red",
          color: "white",
          fontWeight: "bolder",
          fontSize: "20px",
          padding: "20px",
        },
      });
    }
    setLoading(false);
    setCity("");
  };

  return (
    <div className="space-y-4">
      <Toaster position="top-center" />
      <div className="space-y-2">
        {/* <div className="flex items-center space-x-2 ">
          <GlobeIcon className="w-5 h-5 text-white" />
          <label className="text-white" htmlFor="country">
            Country
          </label>
        </div>
        <Select
          className="text-black"
          value={selectedCountry}
          onChange={handleSelectedCountry}
          options={countryOptions}
        /> */}

        <div className="flex justify-center items-center gap-7">
          {loading ? (
            <ReactLoading color="white" height={50} width={50} type="bars" />
          ) : (
            <>
              <TextInput
                placeholder="Search your city..."
                value={city}
                onChange={(e) => setCity(e.target?.value)}
              />
              <Button color="green" disabled={!city} onClick={handleSubmit}>
                Check The Weather!
              </Button>
            </>
          )}
        </div>
      </div>

      {/* {selectedCountry && (
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <GlobeIcon className="w-5 h-5 text-white" />
              <label className="text-white" htmlFor="state">
                State
              </label>
            </div>
            <Select
              className="text-black"
              options={State.getStatesOfCountry(
                selectedCountry.value.isoCode
              ).map((state) => {
                return {
                  value: {
                    name: state.name,
                    longitude: state.longitude,
                    latitude: state.latitude,
                    countryCode: state.countryCode,
                    isoCode: state.isoCode,
                  },
                  label: state.name,
                };
              })}
              value={selectedState}
              onChange={handleSelectedState}
            />
          </div>
        </div>
      )} */}

      {/* {selectedCountry && selectedState && (
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <GlobeIcon className="w-5 h-5 text-white" />
              <label className="text-white" htmlFor="city">
                City
              </label>
            </div>
            <Select
              filterOption={createFilter({ ignoreAccents: false })}
              options={City.getCitiesOfState(
                selectedState.value.countryCode,
                selectedState.value.isoCode
              )?.map((state) => {
                return {
                  value: {
                    latitude: state.latitude,
                    longitude: state.longitude,
                    name: state.name,
                    countryCode: state.countryCode,
                    stateCode: state.stateCode,
                  },
                  label: state.name,
                };
              })}
              value={selectedCity}
              onChange={handleSelectedCity}
              className="text-black"
            />
          </div>
        </div>
      )} */}

      {/* {selectedCountry && selectedState && selectedCity && (
        // <Button onClick={handleSubmit}>Check The Weather</Button>
      )} */}
    </div>
  );
}

export default CityPicker;
