import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Form from ".";
import "@testing-library/jest-dom/extend-expect";

describe("Form unit testing", () => {
  const mockSubmit = jest.fn();

  beforeEach(() => {
    render(<Form onSubmit={mockSubmit} />);
  });

  test("render form works correctly", () => {
    const title = screen.getByText("Weather Temperature");
    expect(title).toBeDefined();

    const subTitle = screen.getByText("City");
    expect(subTitle).toBeDefined();

    const input = screen.getByPlaceholderText("Search your city");
    expect(input).toBeDefined();

    const button = screen.getByText("Submit");
    expect(button).toBeDefined();
  });

  test("Form submit with correct data", async () => {
    const input = screen.getByPlaceholderText("Search your city");

    fireEvent.change(input, { target: { value: "London" } });
    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(1);
    });

    expect(mockSubmit).toHaveBeenCalledWith({ city: "London" });
  });

  test("Form submit with incorrect data", async () => {
    const input = screen.getByPlaceholderText("Search your city");

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(0);
    });
  });
});
