import { render, fireEvent } from "@testing-library/react";
import TemperatureConverter from "@/components/Hooks";
import { Temperature } from "@/libs/weatherAPI";

describe("TemperatureConverter", () => {
  test("should render correctly", () => {
    const { getByText } = render(<TemperatureConverter onTemperatureChange={() => {}} />);
    expect(getByText("Celcius")).toBeDefined();
    expect(getByText("Farenheit")).toBeDefined();
    expect(getByText("Kelvin")).toBeDefined();
  });
  test("should change temperature type when a button is clicked", () => {
    const mockOnTemperatureChange = jest.fn();
    const { getByText } = render(<TemperatureConverter onTemperatureChange={mockOnTemperatureChange} />);

    fireEvent.click(getByText("Celcius"));
    expect(mockOnTemperatureChange).toHaveBeenCalledWith(Temperature.celcius);

    fireEvent.click(getByText("Farenheit"));
    expect(mockOnTemperatureChange).toHaveBeenCalledWith(Temperature.farenheit);

    fireEvent.click(getByText("Kelvin"));
    expect(mockOnTemperatureChange).toHaveBeenCalledWith(Temperature.kelvin);
  });
});
