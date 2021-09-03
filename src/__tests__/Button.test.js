import React from "react";
import { render } from "@testing-library/react";
import Button from "../Components/button/Button";


it("renders without crashing", function() {
  render(<Button />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Button />);
  expect(asFragment()).toMatchSnapshot();
});