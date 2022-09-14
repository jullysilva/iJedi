import React from "react";
import { render } from "./testUtil";
import App from "../../App";

jest.mock("../mocks/cart.js", () => {
  const { FlatList } = require("react-native");
});

describe("Default Empty", () => {
  const screen = render(<App />);

  it("should render the screen", () => {
    expect(screen.queryByText(/mandaloria/)).not.toBeNull();
  });

  it("should render the list items", () => {
    expect(screen.getByTestId("list-item")).not.toBeNull();
  });
});
