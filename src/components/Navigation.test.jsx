import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { NavigationWithAuth } from "./Navigation";
import { createStore } from "redux";

const store = createStore((state) => state);

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({
    remove: () => {}
  })),
}));

describe("Navigation", () => {
  it('render correctly', () => {
    const pages = { map: "map", profile: "profile", exit: "exit" }
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <NavigationWithAuth pages={pages}/>
        </Provider>
      </BrowserRouter>
    )
    expect(container).toBeTruthy();
    expect(container.querySelector("nav")).toHaveClass("nav");
    expect(container.querySelector("nav").firstChild).toHaveClass("nav__list");
  });
})
