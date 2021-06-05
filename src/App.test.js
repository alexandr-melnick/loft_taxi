import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { WithAuthApp } from "./App";

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({
    remove: () => {}
  })),
}));

describe("WithAuthApp", () => {
  it('render correctly isLoggedIn false', () => {
    const store = createStore((state) => state, { auth: { isLoggedIn: false } });
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <WithAuthApp />
        </Provider>
      </BrowserRouter>
    )
    expect(container).toBeTruthy();
    expect(container.querySelector("section")).not.toHaveClass('section');
    expect(container.querySelector("section").firstChild).not.toHaveClass('section__map');
    expect(container.querySelector("section")).toHaveClass("login-section");
  });
  it('render correctly isLoggedIn true', () => {
    const store = createStore((state) => state, { auth: { isLoggedIn: true } });
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <WithAuthApp />
        </Provider>
      </BrowserRouter>
    )
    expect(container).toBeTruthy();
    expect(container.querySelector("section")).toHaveClass('section');
    expect(container.querySelector("section").firstChild).toHaveClass('section__map');
    expect(container.querySelector("section")).not.toHaveClass("login-section");
  });

  // it('componentDidMount work correctly', () => {
  //   const token = "testToken"
  //   const store = createStore((state) => state, { auth: { isLoggedIn: true } });
  //   const localStorage = { getItem: () => token };
  //   const logIn = jest.fn()
  //   const setUserCard = () => { };
  //   const setToken = () => { };
  //   const { container } = render(
  //     <BrowserRouter>
  //       <Provider store={store}>
  //         <WithAuthApp logIn={logIn} />
  //       </Provider>
  //     </BrowserRouter>
  //   )
  //   expect(container).toBeTruthy();
  //   expect(logIn).toHaveBeenCalled();
    // expect(container.querySelector("section")).toHaveClass('section');
  // });
})
