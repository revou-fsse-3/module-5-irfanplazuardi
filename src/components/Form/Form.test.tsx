import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import FormCity from "@/components/Form";

describe("Form unit test", () => {
  test("renders form", () => {
    const mockOnSubmit = jest.fn();
    render(<FormCity onSubmit={mockOnSubmit} />);

    const labelElement = screen.getByText("City:");
    expect(labelElement).toMatchSnapshot();

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toMatchSnapshot();

    const buttonElement = screen.getByText("Submit");
    expect(buttonElement).toMatchSnapshot();
  });

  test("submit form", async () => {
    const mockOnSubmit = jest.fn();
    render(<FormCity onSubmit={mockOnSubmit} />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "Submit" });
    fireEvent.change(input, { target: { value: "New York" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({ city: "New York" });
    });
  });

  test("submit form with error", async () => {
    const mockOnSubmit = jest.fn();
    render(<FormCity onSubmit={mockOnSubmit} />);

    const button = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockOnSubmit).not.toHaveBeenCalled();

      expect(screen.getByText("Please enter a city")).toMatchSnapshot();
    });
  });
});
