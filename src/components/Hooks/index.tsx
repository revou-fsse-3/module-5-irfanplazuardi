import { useState } from "react";

type TemperatureType = "celsius" | "fahrenheit" | "kelvin";

const useTemperatureConverter = (initialTemp: number, initialType: TemperatureType) => {
  const [temp, setTemp] = useState(initialTemp);
  const [type, setType] = useState(initialType);

  const convertToCelsius = () => {
    if (type === "fahrenheit") {
      return (temp - 32) * (5 / 9);
    } else if (type === "kelvin") {
      return temp - 273.15;
    } else {
      return temp;
    }
  };

  const convertToFahrenheit = () => {
    if (type === "celsius") {
      return temp * (9 / 5) + 32;
    } else if (type === "kelvin") {
      return (temp - 273.15) * (9 / 5) + 32;
    } else {
      return temp;
    }
  };

  const convertToKelvin = () => {
    if (type === "celsius") {
      return temp + 273.15;
    } else if (type === "fahrenheit") {
      return (temp - 32) * (5 / 9) + 273.15;
    } else {
      return temp;
    }
  };

  return { temp, type, setTemp, setType, convertToCelsius, convertToFahrenheit, convertToKelvin };
};

export default useTemperatureConverter;
