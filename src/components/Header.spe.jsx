import React from "react";
import { render } from "@testing-library/react";
import { Header } from "./Header";
import { pagesUrls } from "../App";
import { BrowserRouter } from "react-router-dom";

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({
    remove: () => {
    }
  })),
}));

describe("Header", () => {
  it('render correctly', () => {
    const { getByTestId } = render(
        <BrowserRouter>
          <Header pagesUrls={ pagesUrls }/>
        </BrowserRouter>
    )
    // expect(getByTestId('header')).toBeTruthy();
  });
})
