import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("should add new box", function () {
  const { queryByText, getByLabelText } = render(<BoxList />);
  const input = getByLabelText("Color");
  const btn = queryByText("Create Box");
  expect(queryByText("Remove The Box!")).not.toBeInTheDocument();
  fireEvent.change(input, { target: { value: "purple" } });
  fireEvent.click(btn);
  expect(queryByText("Remove The Box!")).toBeInTheDocument();
});
