import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { LoginWithAuth } from "./Login";
import { createStore } from "redux";


const store = createStore( (state) => state, { auth: { error: "Error" } });

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({
    remove: () => {}
  })),
}));

describe("Login", () => {
  it('render correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <LoginWithAuth />
        </Provider>
      </BrowserRouter>
    )
    expect(container).toBeTruthy();
    expect(container.querySelector("div")).toHaveClass("form-login");
    expect(container.querySelector("form")).toHaveClass("form");
    expect(container.querySelector("div").lastChild).toHaveClass("new-user");
  });
})
