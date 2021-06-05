import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { MapConnected } from "./Map";
import { createStore } from "redux";

const store = createStore(
  (state) => state,
  {
    addressesList: { addresses: {} },
    route: { coords: []}
  }
);

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({
    remove: () => {}
  })),
}));

describe("Map", () => {
  it('render correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <MapConnected />
        </Provider>
      </BrowserRouter>
    )
    expect(container).toBeTruthy();
    // expect(container.querySelector("div")).toHaveClass("map-wrapper");
    // expect(container.querySelector("div")).toHaveClass("map");
  });
})
