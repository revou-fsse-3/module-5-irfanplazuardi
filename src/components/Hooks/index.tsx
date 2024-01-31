import { useState } from "react";
import { Temperature } from "@/libs/weatherAPI";

const TemperatureConverter = ({ initialTemperature: initialTemperature = Temperature.celcius, onTemperatureChange }: { initialTemperature?: Temperature; onTemperatureChange: (newTemperature: Temperature) => void }) => {
  const [temperatureType, setTemperatureType] = useState(initialTemperature);

  const handleTemperatureChange = (newTemperatureType: Temperature) => {
    setTemperatureType(newTemperatureType);
    onTemperatureChange(newTemperatureType);
  };

  return (
    <div className="temperature-converter">
      <div className="buttons">
        <button className={temperatureType === Temperature.celcius ? "active" : ""} onClick={() => handleTemperatureChange(Temperature.celcius)}>
          Celcius
        </button>
        <button className={temperatureType === Temperature.farenheit ? "active" : ""} onClick={() => handleTemperatureChange(Temperature.farenheit)}>
          Farenheit
        </button>
        <button className={temperatureType === Temperature.kelvin ? "active" : ""} onClick={() => handleTemperatureChange(Temperature.kelvin)}>
          Kelvin
        </button>
      </div>
    </div>
  );
};

export default TemperatureConverter;
