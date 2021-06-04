import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Header } from "./Header";
import { pagesUrls } from "../App";
import { createStore } from "redux";
import logo from "../img/logo.png";

const store = createStore((state) => state);

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({
    remove: () => {}
  })),
}));

describe("Header", () => {
  it('render correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Header pagesUrls={pagesUrls} />
        </Provider>
      </BrowserRouter>
    )
    expect(container).toBeTruthy();
    expect(container.querySelector("header")).toHaveClass("header");
    expect(container.querySelector("div")).toHaveClass("logo");
    expect(container.querySelector("img")).toHaveAttribute("src", logo);
  });
})
