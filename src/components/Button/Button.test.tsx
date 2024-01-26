import { render, fireEvent, waitFor } from "@testing-library/react";
import Button from ".";

describe("Button unit testing", () => {
  const mocking = {
    onSubmit: jest.fn(),
  };
  test("Render button correctly", () => {
    const document = render(<Button label={"Test Button"} />);
    const element = document.getByText("Test Button");
    expect(element).toMatchSnapshot();
  });

  test("Button shows the correct class name", () => {
    const document = render(<Button label={"Test Button"} className="Title" />);
    const element = document.getByText("Test Button");
    expect(element).toHaveClass("Title");
  });

  test("Button click works correctly", async () => {
    const document = render(<Button label={"Test Button"} onclick={mocking.onSubmit} />);
    const element = document.getByText("Test Button");
    fireEvent.click(element);

    await waitFor(() => {
      expect(mocking.onSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
