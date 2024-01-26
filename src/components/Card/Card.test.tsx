import { render } from "@testing-library/react";
import Card from ".";
import "@testing-library/jest-dom/extend-expect";

describe("Card", () => {
  const document = render(<Card>{"Test Card"}</Card>);
  it("renders without crashing", () => {
    expect(document).toBeDefined();
  });

  it("card shows the correct class name", () => {
    render(<Card className="Title">{"Test Card"}</Card>);
    const element = document.getByText("Test Card");
    expect(element).toHaveClass("Title");
  });
});
