import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import FetchWeather, { WeatherResultProps, Temperature } from "@/libs/weatherAPI";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { useRouter } from "next/router";

interface WeatherCityProps {
  weather: WeatherResultProps;
}
export const getServerSideProps: GetServerSideProps<WeatherCityProps> = async (context) => {
  const cityParams = context.params!["city"];
  const temperatureQuery = context.query!["temperature"];

  let temperature = Temperature.celcius;
  if (temperatureQuery) {
    if (temperatureQuery === "celcius") {
      temperature = Temperature.celcius;
    } else if (temperatureQuery === "farenheit") {
      temperature = Temperature.farenheit;
    } else if (temperatureQuery === "kelvin") {
      temperature = Temperature.kelvin;
    }
  }
  try {
    const weather = await FetchWeather(cityParams as string, temperature);
    return {
      props: {
        weather,
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw Error("failed to fetch all data");
  }
};
type WeatherCityComponent = InferGetServerSidePropsType<typeof getServerSideProps>;
const WeatherCity: NextPage<WeatherCityComponent> = ({ weather }) => {
  const router = useRouter();

  return (
    <div>
      {/* {JSON.stringify(weather, null, 2)} */}
      <div>
        <div className="temperature-converter">
          <h1 className="title">Select Temperature</h1>
          <div className="buttons">
            <button className="active">Celcius</button>
            <button className="active">Farenheit</button>
            <button className="active">Kelvin</button>
          </div>
        </div>

        <div className="weather-image">
          <span>{weather?.weather?.[0]?.icon && <img width={200} src={`https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`} />}</span>
        </div>

        <span className="weather-temp">{weather?.main?.temp}&#176;C</span>
        <span className="weather-location">{weather?.name}</span>
        <div className="data-container">
          <div className="element">
            <span className="icon">
              <WiHumidity size={"4em"} />
            </span>
            <div className="data">
              <span className="humidity-percent">{weather?.main?.humidity}</span>
              <span className="text">Humidity</span>
            </div>
          </div>
          <div className="element">
            <span className="icon">
              <WiStrongWind size={"4em"} />
            </span>
            <div className="data">
              <span className="wind-rate">{weather?.wind?.speed} km/h</span>
              <span className="text">Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherCity;
