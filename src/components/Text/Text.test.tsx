import { render, screen } from "@testing-library/react";
import Text from ".";
import "@testing-library/jest-dom/extend-expect";

describe("Text unit testing", () => {
  test("Text content works correctly", () => {
    render(<Text>{"testing text"}</Text>);
    const element = screen.getByText("testing text");
    expect(element).toMatchSnapshot();
  });

  test("Text shows the correct class name", () => {
    render(<Text className="Title">{"testing text"}</Text>);
    const element = screen.getByText("testing text");
    expect(element).toHaveClass("Title");
  });
});
