import React from "react";
import { render } from "@testing-library/react";
import Card from "../Components/card/Card";


it("renders without crashing", function() {
  render(<Card />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});