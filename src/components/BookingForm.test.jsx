import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { BookingFormConnected } from "./BookingForm";
import { createStore } from "redux";

const store = createStore( (state) => state, { addressesList: { addresses: [] } });

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({
    remove: () => {}
  })),
}));

describe("BookingForm", () => {
  it('render correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <BookingFormConnected />
        </Provider>
      </BrowserRouter>
    )
    expect(container).toBeTruthy();
    expect(container.querySelector("form")).toHaveClass("booking__form");
    expect(container.querySelector("form").firstChild).toHaveClass("booking__form-wrap");
    expect(container.querySelector("form").lastChild).toHaveClass("rate");
  });
})
