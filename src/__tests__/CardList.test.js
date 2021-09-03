import React from "react";
import { render } from "@testing-library/react";
import CardList from "../Components/card-list/CardList";


it("renders without crashing", function() {
  render(<CardList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<CardList />);
  expect(asFragment()).toMatchSnapshot();
});